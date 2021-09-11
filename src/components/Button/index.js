import { Button } from "react-bootstrap";

function ButtonComponent({ data, setData, text, setText }) {
  const handleClick = () => {
    if (text === "") {
      alert("Please fill in the note");
    } else if (data.includes(text)) {
      alert("You have already added such a note!");
    } else {
      setData([...data, text]);
      setText("");
    }
  };
  return <Button onClick={handleClick}>Create</Button>;
}

export default ButtonComponent;
