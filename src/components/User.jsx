import React from "react";
import { useState } from "react";

// conditionaly render a div or a piece of UI for the when the user is not logged in

const User = () => {
  const [user, setUser] = useState(false);

  return (
    <>
      {!user ? (
        <div>
          <h1>you are not logged in</h1>

          <button onClick={() => setUser(true)} className="mybtn">
            log in user{" "}
          </button>
        </div>
      ) : (
        <div>
          <h1>welcome user</h1>
          <button onClick={() => setUser(false)} className="mybtn">
            log out
          </button>
        </div>
      )}
    </>
  );
};

export default User;
