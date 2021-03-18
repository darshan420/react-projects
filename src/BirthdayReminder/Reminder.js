import React from "react";
import { data } from "./data";
import { useState } from "react";
import "./reminder.css";

const Reminder = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <div className="container">
          <h2>{people.length} birthdays today</h2>
          {people.map((person) => {
            const { id, age, image, name } = person;
            return (
              <article className="person" key={id}>
                <img src={image} alt="person" className="person-image" />
                <div>
                  <h4 className="person-name">{name}</h4>
                  <p className="person-age">{age} years</p>
                </div>
              </article>
            );
          })}
          <button className="btn" onClick={() => setPeople([])}>
            Clear All
          </button>
        </div>
      </main>
    </>
  );
};

export default Reminder;
