import { Form } from "react-bootstrap";
import { useNotes } from "../Contexts/NotesContext";
function TextArea() {
  const { text, setText } = useNotes();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Form.Group className="mb-3">
      <Form.Label>Add a new Note!</Form.Label>
      <Form.Control
        placeholder="Enter ur notes in here..."
        as="textarea"
        rows={7}
        value={text}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default TextArea;
