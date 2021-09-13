import React from "react";
import classes from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <section className={classes.summary}>

      <h2>Delicious Food, Delivered To you</h2>
      <p>
        Choose you favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All meals are cooked with high quality ingredients, just-in-time and of
        course by experience chef
      </p>
    </section>
    
  );
}

export default MealsSummary;
