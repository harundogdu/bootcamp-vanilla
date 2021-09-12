import { createContext, useContext, useState } from "react";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [activeButton, setActiveButton] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const values = {
    data,
    setData,
    text,
    setText,
    activeButton,
    setActiveButton,
    activeIndex,
    setActiveIndex,
  };
  return (
    <NotesContext.Provider value={values}>{children}</NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
