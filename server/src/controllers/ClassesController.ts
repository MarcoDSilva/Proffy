import { Request, Response, response } from "express";
import db from "../database/connection";
import ConvertHourToMinutes from "../utils/convertHourToMinutes";

export default class ClassController {
  async index(req: Request, res: Response) {
    const filter = req.query;

    //turning all query elements as strings
    const subject = filter.subject as string;
    const week_day = filter.week_day as string;
    const time = filter.time as string;

    // verifying if the info is correct and no error was found in the query
    if (!filter.week_day || !filter.subject || !filter.time) {
      return res.status(400).json({
        error: "Missing filters in the search query",
      });
    }

    const timeInMinutes = ConvertHourToMinutes(time);

    // query to return
    const lessons = await db("lessons")
      .whereExists(function () {
        // it needs to be written like this because of the scope of "this"
        // whereRaw is recommended to use when whereExists is called
        //from the selected table, and in the the id field, select if equal to the id from the query
        //we use ?? when we want to bring a variable from outside to use in the query
        this.select("lessons_schedule.*")
          .from("lessons_schedule")
          .whereRaw("`lessons_schedule`.`lesson_id` = `lessons`.`id`")
          .whereRaw("`lessons_schedule`.`week_day` = ??", [Number(week_day)])
          .whereRaw("`lessons_schedule`.`from` <= ??", [Number(timeInMinutes)])
          .whereRaw("`lessons_schedule`.`to` > ??", [Number(timeInMinutes)]);
      })
      .where("lessons.subject", "=", subject)
      .join("users", "lessons.user_id", "=", "users.id") //inner join
      .select(["lessons.*", "users.*"]);

    return res.json(lessons);
  }

  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    const transaction = await db.transaction(); //to make all the db operations at the same time and to reverse in case one fails

    try {
      // we need to wait that the data is inserted in the db, therefore we use await (our promisse)
      const insertedUserId = await transaction("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUserId[0];

      const insertedLessonId = await transaction("lessons").insert({
        subject,
        cost,
        user_id,
      });

      const lesson_id = insertedLessonId[0];

      interface ScheduleItem {
        week_day: number;
        from: string;
        to: string;
      }

      const scheduleOfLessons = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          lesson_id,
          week_day: scheduleItem.week_day,
          from: ConvertHourToMinutes(scheduleItem.from),
          to: ConvertHourToMinutes(scheduleItem.to),
        };
      });

      await transaction("lessons_schedule").insert(scheduleOfLessons);

      transaction.commit(); // we apply all db changes

      return res.status(201).send(); //if it's all good, we return code 201 aka success
    } catch (err) {
      await transaction.rollback(); //since anything failed, we rollback all changes made

      return res.status(401).json({
        error: "Unexpected error while creating a new class",
      });
    }
  }
}
