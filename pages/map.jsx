import { useEffect } from "react"

function Map(){
const [user, setUser] = useState([])
const [map, setMap] = useState([])
        const buyProp = async() => {
            let req = await fetch('http://localhost:9000', {
                method: 'POST', 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body:({
                    price: map.price, 
                    hotel: false,
                    user_id: user
                }) 

            })
        }

    return(
        <div>
            <button onClick={()=> {buyProp}}>buy prop</button>
        </div>
    )
}
export default Map 