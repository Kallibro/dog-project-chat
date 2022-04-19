import React from "react";
import { ListGroup } from "react-bootstrap";

function ChatSidebar() {
  const rooms = ["first room", "second room", "third room"];

  return (
    <>
      <h2>Available chat rooms</h2>
      {/* ROOMS */}
      <ListGroup>
        {rooms.map((room, indx) => {
        return  <ListGroup.Item key={indx}>{room}</ListGroup.Item>;
        })}
      </ListGroup>
      {/* MEMBERS */}
      <h2>Members</h2>
    </>
  );
}

export default ChatSidebar;
