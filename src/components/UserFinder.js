import { Fragment, Component } from "react";
import UsersContext from "../store/users-context";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
class UserFinder extends Component {
  // kết nối context ( 1 class chỉ connect được 1 context)
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = { filteredUsers: [], searchTerm: "" };
  }

  componentDidMount() {
    //Send http request
    this.setState({ filteredUsers: this.context.users });
  }

  //method giống như useEffect
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm)
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
          <ErrorBoundary>
            <Users users={this.state.filteredUsers} />
          </ErrorBoundary>
        </div>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
