import React, { useState, useEffect } from "react";
import FormContainer from "../FormContainer";
import NoteItems from "../NoteItems";

function NoteContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
   /*  console.log("data yenilendi : ");
    console.log(data); */
  }, [data]);
  return (
    <>
      <FormContainer data={data} setData={setData} />
      <NoteItems data={data} setData={setData} />
    </>
  );
}

export default NoteContainer;
