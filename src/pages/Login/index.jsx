import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import AlertMessage from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import { FormSignin } from "./form";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions"

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      const response = await postData(`/cms/auth/signin`, form);

      dispatch(userLogin(response.data.data.token, response.data.data.role))
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
