import { useState } from "react";

export default function Simple() {
  const [name, setName] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    alert("Your Name is : " +  name );
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
