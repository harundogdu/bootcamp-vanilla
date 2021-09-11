import { Alert, Button } from "react-bootstrap";

function NoteItems({ data, setData }) {
  const handleClick = (e) => {
    const deletedItem = e.target.value;
    setData(data.filter((item) => item !== deletedItem));
  };
  return (
    <div className="w-50">
      {data &&
        data.sort((a, b) => {
          return b > a;
        }) &&
        data.map((item, index) => (
          <Alert key={index} variant="info" className="mt-3 alert-box">
            <span>{item}</span>
            <Button title="Delete Note" value={item} onClick={handleClick}>
              X
            </Button>
          </Alert>
        ))}
    </div>
  );
}

export default NoteItems;
