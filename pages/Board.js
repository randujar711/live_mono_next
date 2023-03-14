import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import socketio from "socket.io-client";
import boardstyle from "../styles/Board.module.css"

function Board() {

  return (
    <div className={boardstyle.board}>
      
    </div>
  )
}
export default Board