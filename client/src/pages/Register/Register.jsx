import React from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        "john@gmail.com",
        "john@123"
      );
      const token = await userCred.user.getIdToken();
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.log("User Not Created!");
    }
  };

  return <button onClick={handleRegister}>Register</button>;
};

export default Register;
