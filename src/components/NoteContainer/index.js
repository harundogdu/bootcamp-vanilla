import React, { useState } from "react";
import FormContainer from "../FormContainer";
import NoteItems from "../NoteItems";

function NoteContainer() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [activeButton, setActiveButton] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <FormContainer
        data={data}
        setData={setData}
        text={text}
        setText={setText}
        setActiveButton={setActiveButton}
        activeButton={activeButton}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <NoteItems
        data={data}
        setData={setData}
        setText={setText}
        setActiveButton={setActiveButton}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
}

export default NoteContainer;
