import { Form } from "react-bootstrap";
import TextArea from "../Textarea";
import ButtonComponent from "../Button";

function FormContainer({ data, setData, text, setText , activeButton , setActiveButton , activeIndex , setActiveIndex }) {
  return (
    <Form className="mt-3 w-50">
      <TextArea text={text} setText={setText} />
      <ButtonComponent
        text={text}
        data={data}
        setData={setData}
        setText={setText}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        activeIndex={activeIndex}
      />
    </Form>
  );
}

export default FormContainer;
