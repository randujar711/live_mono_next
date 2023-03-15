import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import socketio from "socket.io-client";
import boardstyle from "../styles/Board.module.css"

function Board() {
  
  const board = [
    [2,2],[2,1],[2,1],[2,1],[2,1],[2,1],[2,1],[2,1],[2,1],[2,1],[2,2],
    [1,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,2],
    [1,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,2],
    [1,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,2],
    [1,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,2],
    [1,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,2],
    [1,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,2],
    [1,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,2],
    [1,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,2],
    [1,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,2],
    [2,2],[2,1],[2,1],[2,1],[2,1],[2,1],[2,1],[2,1],[2,1],[2,1],[2,2]
  ]

  console.log( board[1][0])

  return (
      // Carousel is just a sideways infinite scroll thingy
      <div className={boardstyle.parentboard}>
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
                  ((tile[0] == 1) ? "4vw" : "6vw")),
                width: (
                  ((tile[1] == 1) ? "4vw" : "6vw")),
                border: ((tile[0] == 1 && tile[1] == 1) ? ("1px solid transparent") : ("1px solid black"))
              }}
              id={tile[2]}
            >            
            </div>
          )
        })
      }
    </div>
    </div>
  )
}
export default Board