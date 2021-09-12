import { Form } from "react-bootstrap";
import TextArea from "../Textarea";
import ButtonComponent from "../Button";

function FormContainer() {
  return (
    <Form className="mt-3 w-50">
      <TextArea />
      <ButtonComponent />
    </Form>
  );
}

export default FormContainer;
