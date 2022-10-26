import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import BreadCrumb from '../../components/BreadCrumb';
import Form from './form';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { config } from '../../config';
import AlertMessage from '../../components/Alert';

function CategoryCreate() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
  });

  const [alert, setAlert] = useState({
    status: false,
    type: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post(`${config.api_host_dev}/cms/categories`, form,  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/categories');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: 'danger',
        message: err.response.data.msg,
      });
    }
  };

  return (
    <Container>
      <BreadCrumb
        textSecound={'Categories'}
        urlSecound={'/categories'}
        textThird='Create'
      />
      {alert.status && <AlertMessage type={alert.type} message={alert.message} />}
      <Form
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default CategoryCreate;