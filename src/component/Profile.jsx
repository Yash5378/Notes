import React, { useEffect, useState } from "react";
import { account, ID } from "../appwrite/appwriteConf";
import { useNavigate, Link } from "react-router-dom";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function Profile() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const getData = account.get();

    getData.then(
      function (response) {
        setUserInfo(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const logoutUser = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userInfo ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl"> Hello {userInfo.name}</p>
            </div>

            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md hover:bg-red-600"
                onClick={logoutUser}
              >
                Logout
              </button>
            </div>
          </div>
          <TodoForm />
          <Todo />
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  );
}

export default Profile;
