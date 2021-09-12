import React from "react";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NoteDetails({ data }) {
  let { postId } = useParams(); 
  return (
    <div className="note_details">
      <h1>Note Details</h1>
      <p>{data[postId]}</p>
      <NavLink to="/">
        <Button>Back to Home</Button>
      </NavLink>
    </div>
  );
}

export default NoteDetails;
