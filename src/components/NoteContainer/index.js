import React, { useState, useEffect } from "react";
import FormContainer from "../FormContainer";

function NoteContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("data yenilendi : ");
    console.log(data)
  }, [data]);
  return <FormContainer data={data} setData={setData} />;
}

export default NoteContainer;
