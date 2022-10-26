import React from "react";
import { Form } from "react-bootstrap";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { KagukaButton } from "../../components/Button";

export const FormSignin = ({ form, handleChange, handleSubmit, isLoading }) => {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Masukan email"}
        label={"Email"}
        name="email"
        value={form.email}
        type="email"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan password"}
        label={"Password"}
        name="password"
        value={form.password}
        type="password"
        onChange={handleChange}
      />
      <KagukaButton variant="primary" action={handleSubmit} loading={isLoading}>
        Submit
      </KagukaButton>
    </Form>
  );
};
