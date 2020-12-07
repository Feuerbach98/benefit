import React from 'react';
import './Contacts.scss';
import cn from "classnames";

export const Contacts = ({ column }) => {
  return (
    <div
      className={cn("get-in-touch", {
        "get-in-touch--column": column,
        "get-in-touch--top": !column,
      })}
    >
      <div className="get-in-touch__contacts">
        <a
          href="tel:0-800-56-87-96"
          className={cn("get-in-touch__number", {
            "get-in-touch__number--top": !column,
          })}
        >
          0-800-56-87-96
        </a>
        <div
          className={cn("get-in-touch__schedule", {
            "get-in-touch__schedule--top": !column,
          })}
        >
          (пн-пт - 10:00-19:00
          <br />
          сб-вс - 11:00 - 17:00)
        </div>
      </div>
      <a
        className={cn("get-in-touch__link", {
          "get-in-touch__link--column": column,
          "get-in-touch__link--top": !column,
        })}
        href="https://www.google.com/"
      >
        Заказать звонок
      </a>
    </div>
  );
}
