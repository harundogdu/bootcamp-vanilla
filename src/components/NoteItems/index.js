import { Alert, Button, ButtonGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function NoteItems({
  data,
  setData,
  setText,
  setActiveButton,
  setActiveIndex,
}) {
  const handleClick = (e) => {
    const deletedItem = e.target.value;
    setData(data.filter((item) => item !== deletedItem));
  };
  const handleEdit = (e) => {
    setText(e.target.value);
    setActiveButton(true);
    setActiveIndex(e.target.id);
  };
  return (
    <div className="w-50">
      {data &&
        data
          .map((item, index) => (
            <Alert key={index} variant="info" className="mt-3 alert-box">
              <span style={{ fontWeight: "600" }}>{item}</span>
              <ButtonGroup>
                <NavLink to={`/posts/${index}`}>
                  <Button
                    variant="info"
                    className="mx-1"
                    title="Show Note"
                    value={item}
                    id={index}
                  >
                    Show
                  </Button>
                </NavLink>
                <Button
                  variant="danger"
                  className="mx-1"
                  title="Delete Note"
                  value={item}
                  id={index}
                  onClick={handleClick}
                >
                  Delete
                </Button>
                <Button
                  variant="warning"
                  className="mx-1"
                  title="Edit Note"
                  value={item}
                  id={index}
                  onClick={handleEdit}
                >
                  Edit
                </Button>
              </ButtonGroup>
            </Alert>
          ))
          .reverse()}
    </div>
  );
}

export default NoteItems;
