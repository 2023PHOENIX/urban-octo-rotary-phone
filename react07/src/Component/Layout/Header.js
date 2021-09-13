import { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../Assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="mealimage" />
      </div>
    </Fragment>
  );
}

export default Header;
