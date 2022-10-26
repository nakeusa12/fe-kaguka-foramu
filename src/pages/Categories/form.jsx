import React from "react";
import { Form } from "react-bootstrap";
import { KagukaButton } from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function CategoriesForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Masukan nama kategori"}
        label={"Nama kategori"}
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />
      <KagukaButton variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Ubah" : "Simpan"}
      </KagukaButton>
    </Form>
  );
}
