import React from "react";
import "./teacherItem.css";
import whatsappIco from "../../assets/images/icons/whatsapp.svg";
import Api from "../../services/api";
import { link } from "fs";

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({
  teacher,
}) => {
  const addConnection = () => {
    const res = Api.post("connections", {
      user_id: teacher.id,
    })
      .then((res) => console.log(`sucess ${res}`))
      .catch((err) => console.log(`error ${err}`));
  };

  return (
    <article className="teacher-item">
      {/* data here comes from reqres api*/}
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Hourly Price
          <strong>65€</strong>
        </p>

        <a href={`https://wa.me/${teacher.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={addConnection}>
            <img src={whatsappIco} alt="whatsapp" />
          Contact me
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
