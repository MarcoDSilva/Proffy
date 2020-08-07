import React from "react";
import "./teacherItem.css";
import whatsappIco from "../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
			{/* data here comes from reqres api*/}
      <header>
        <img
          src="https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
          alt="Charles Morris"
        />
        <div>
          <strong>Charles Morris</strong>
          <span>Mathematics</span>
        </div>
      </header>

      <p>
        Focused on software development, this mathematic teacher loves to use
        code examples in his lessons.
        <br />
        <br />
        You can learn 2 for 1 with this teacher, highly recommended!
      </p>

      <footer>
        <p>
          Hourly Price
          <strong>65€</strong>
        </p>

        <button type="button">
          <img src={whatsappIco} alt="whatsapp" />
          Contact me
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
