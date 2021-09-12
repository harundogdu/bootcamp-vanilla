import { Button } from "react-bootstrap";
import { useNotes } from "../Contexts/NotesContext";

function ButtonComponent() {
  const {
    data,
    setData,
    text,
    setText,
    setActiveButton,
    activeButton,
    activeIndex,
  } = useNotes();

  const handleClick = (e) => {
    if (text === "") {
      alert("Please fill in the note");
    } else {
      switch (e.target.value) {
        case "edit":
          let datas = [...data];
          let index = activeIndex;
          datas[index] = text;
          setData(datas);
          setActiveButton(false);
          setText("");
          break;
        case "add":
          if (data.includes(text)) {
            alert("You have already added such a note!");
          } else {
            setData([...data, text]);
            setText("");
          }
          break;
        default:
          break;
      }
    }
  };

  if (activeButton) {
    return (
      <Button variant="warning" value="edit" onClick={handleClick}>
        Update
      </Button>
    );
  } else {
    return (
      <Button onClick={handleClick} value="add">
        Create
      </Button>
    );
  }
}

export default ButtonComponent;
