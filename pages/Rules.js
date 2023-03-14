import { useState } from "react";


export default function RulesButton () {
const [showPopup, setShowPopup] = useState(false)

const handleButtonClick = () => {
    setShowPopup(true)
    //when set to true shows text such as title, rules, etc...
}


const handleClosePopup = () => {
    setShowPopup(false)
}

return (
    <>
    <button onClick={handleButtonClick}>?</button>
    {showPopup && (
        // <div className="popup">
          <div className="popup-content">
            <h2>Monopoly Rules</h2>
            <h3>Monopoly is a board game for 2-6 players. The objective is to be the wealthiest player. Players roll dice and take turns going around the board and collect rent from other players who land on their properties. There are 28 properties for sale and hotels are available as soon as you own the property. The winner is declared when all but one are bankrupt declaring him as the winner. </h3>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        // </div>
      )}
    </>
  );
};

