import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/actions/users";
import Card from "./Card";

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {users.loading && <p>Loading...</p>}
      {users.length > 0 && users.map((user, index) => <Card user={user} key={index} />)}
      {users.length === 0 && !loading && <p>No users!</p>}
      {error && !loading && <p>{error}</p>}
    </div>
  );
}

export default User;
