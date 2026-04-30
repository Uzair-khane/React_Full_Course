import { useState } from "react";

export default function Multiple() {
  const [formDate, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDate);
  };
  const handelFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formDate,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>Multiple input Support </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formDate.name}
          onChange={handelFormData}
          placeholder="Enter your name "
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="email"
          value={formDate.email}
          onChange={handelFormData}
          placeholder="Enter your email "
        />{" "}
        <br /> <br />
        <input
          type="number"
          name="age"
          value={formDate.age}
          onChange={handelFormData}
          placeholder="Enter your age "
        />{" "}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
