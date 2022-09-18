import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      {/* Outlet tell react vị trí render của Nested Route 🔴*/}
      <Outlet />
    </section>
  );
};

export default Welcome;
