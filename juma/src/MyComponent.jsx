import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setisEmployed] = useState(false);

  const updateName = () => {
    setName("Simon");
  };

  const incrementAge = () => {
    setAge(age + 2);
  };

  const updateEmployed = () => {
    setisEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Set Age</button>

      <p>is Employed:{isEmployed ? "Yes" : "No"}</p>
      <button onClick={() => setisEmployed(!isEmployed)}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
