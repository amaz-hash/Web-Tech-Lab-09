import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");

  const clear = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setAge("");
  };

  const inputStyle = {
    display: "block",
    margin: "10px 0",
    padding: "10px",
    width: "90%",
    boxSizing: "border-box",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "24px" }}>Login Form</h1>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <button
          onClick={clear}
          style={{
            display: "inline-block",
            margin: "10px 10px 10px 0",
            padding: "10px",
            backgroundColor: "#4CAF50",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >Clear
        </button>
        <button
          style={{
            display: "inline-block",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#4CAF50",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >Enter
        </button>
      </div>
      <div>
        <h2 style={{ fontSize: "24px" }}>Preview</h2>
        <input
          type="text"
          value={email}
          readOnly
          style={inputStyle}
          placeholder="Email"
        />
        <input
          type="text"
          value={password}
          readOnly
          style={inputStyle}
          placeholder="Password"
        />
        <input
          type="text"
          value={fullName}
          readOnly
          style={inputStyle}
          placeholder="Full Name"
        />
        <input
          type="text"
          value={age}
          readOnly
          style={inputStyle}
          placeholder="Age"
        />
      </div>
    </div>
  );
}

export default LoginForm;
