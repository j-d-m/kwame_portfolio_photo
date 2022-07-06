import React from "react";
import { ADMIN_LOGIN } from "../../graphQl/Mutations";
import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { MyContext } from "../context/context";
import { useNavigate } from "react-router-dom";
function AdminForm() {
  const { admin, setAdmin, setIsAdminLogin } = useContext(MyContext);
  const navigate = useNavigate();
  const [loginAdmin, { loading, error }] = useMutation(ADMIN_LOGIN);
  if (loading) {
    console.log(loading);
  }
  if (error) {
    console.log(error);
  }
  const adminLogin = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    loginAdmin({
      variables: {
        email: e.target.email.value,
        password: e.target.password.value,
      },
    }).then((res) => {
      if (res.data) {
        console.log(res.data);
        setAdmin(res.data.loginAdmin.admin);
        localStorage.setItem("admin", res.data.loginAdmin.token);
        setIsAdminLogin(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    });
  };
  return (
    <div className="adminForm-container">
      <form onSubmit={adminLogin}>
        <h1> Admin Login</h1>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="admin@example.com"
          style={{ padding: "10px" }}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="***********"
          style={{ padding: "10px" }}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default AdminForm;
