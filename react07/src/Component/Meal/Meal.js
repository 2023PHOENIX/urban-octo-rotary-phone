import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeal";
import { Fragment } from "react";
function Meal() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
       
    </Fragment>
  );
}


export default Meal;