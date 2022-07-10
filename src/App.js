import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="App">
      {users.map(({ id, name, username, email }) => (
        <div>
          <h3>{id}</h3>
          <h3>{name}</h3>
          <h3>{username}</h3>
          <h3>{email}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
