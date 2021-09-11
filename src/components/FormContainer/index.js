import { Form } from "react-bootstrap";
import React, { useState } from "react";
import TextArea from "../Textarea";
import ButtonComponent from "../Button";

function FormContainer({ data, setData }) {
  const [text,setText] = useState('')
  return (
    <Form className="w-50">
      <TextArea text={text} setText={setText} />
      <ButtonComponent text={text} data={data} setData={setData} setText={setText} />
    </Form>
  );
}

export default FormContainer;
