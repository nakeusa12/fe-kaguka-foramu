import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import AlertMessage from "../../components/Alert";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../config";
import { FormSignin } from "./form";

export const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${config.api_host_dev}/cms/auth/signin`,
        form
      );
      
      // console.log(response.data.data.token);
      localStorage.setItem('token', response.data.data.token)
      setIsLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setIsLoading(false);
      setAlert({
        status: true,
        type: "danger",
        message: error?.response?.data?.msg ?? "Internar Server Error",
      });
    }
  };

  if(token){
    return <Navigate to="/dashboard" replace="true" />
  }

  return (
    <Container md={12}>
      <div className="mx-auto" style={{ width: "50%" }}>
        {alert.status && (
          <AlertMessage type={alert.type} message={alert.message} />
        )}
      </div>
      <Card style={{ width: "50%" }} className="mx-auto mt-5">
        <Card.Body>
          <Card.Title>Form Login</Card.Title>
          <FormSignin
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            alert={alert}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};
