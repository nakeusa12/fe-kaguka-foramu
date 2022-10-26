import React from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate, Navigate } from "react-router-dom";
import { KagukaButton } from "../../components/Button";
import ComponentBreadCrumb from "../../components/BreadCrumb";
import { useEffect } from "react";
import axios from "axios";
import { config } from "../../config";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

export const Categories = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCategoriesAPI = async () => {
    try {
      const response = await axios.get(
        `${config.api_host_dev}/cms/categories`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(false);
      setData(response.data.data);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoriesAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!token) {
    return <Navigate to="/login" replace="true" />;
  }

  return (
    <>
      <Container className="py-5">
        <KagukaButton action={() => navigate("/categories/create")}>
          Tambah
        </KagukaButton>
        <ComponentBreadCrumb textSecound={"Categories"} />

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={data.length + 1} style={{ textAlign: "center" }}>
                  <div className="flex items-center justify-center">
                    <Spinner animation="border" variant="primary" />
                  </div>
                </td>
              </tr>
            ) : (
              data.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>Otto</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
