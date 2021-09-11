import { Button } from "react-bootstrap";

function ButtonComponent({ data, setData, text, setText }) {
  const handleClick = () => {
    if (text === "") {
      alert("Please fill in the note");
    }
    setData([...data, text]);
    setText("");
  };
  return <Button onClick={handleClick}>Create</Button>;
}

export default ButtonComponent;
