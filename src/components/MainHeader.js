//Tạo link để prevent browser default ( refresh page), update URL, không làm mất state
import { NavLink } from "react-router-dom";
// NavLink có activeClassname prop khi đang ở link chỉ thị thì sẽ có css của link đang active
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default MainHeader;
