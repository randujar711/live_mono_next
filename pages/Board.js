import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import socketio from "socket.io-client";
import boardstyle from "../styles/Board.module.css"

function Board() {
  
  const board = [
    [2,2, "free"],[2,1, "chance"],[2,1, "B&D"],[2,1, "water"],[2,2, "go-jail"],
    [1,2, "community"],[1,1, null],[1,1, null],[1,1, null],[1,2, "community"],
    [1,2, "penn"],[1,1, null],[1,1, null],[1,1, null],[1,2, "short"],
    [1,2, "electric"],[1,1, null],[1,1, null],[1,1, null],[1,2, "luxury"],
    [2,2, "jail"],[2,1, "chance"],[2,1, "reading"],[2,1, "community"],[2,2, "go"]
  ]

  console.log( board[1][0])

  return (
      // Carousel is just a sideways infinite scroll thingy
    <div className={boardstyle.board}>
      {
        board.map((tile) => {
          return(
            <div 
              className={boardstyle.tile}
              style={{
                background:(
                  ((tile[0] == 1) && tile[1] == 1) ? "transparent" : "#bfdbae"),
                height: (
                  ((tile[0] == 1) ? "20vw" : "30vw")),
                width: (
                  ((tile[1] == 1) ? "20vw" : "30vw")),
                border: ((tile[0] == 1 && tile[1] == 1) ? ("1px solid transparent") : ("1px solid black"))
              }}
            >            
            </div>
          )
        })
      }
    </div>
  )
}
export default Board