// import Link from 'next/link'
import {useState} from 'react'
import Link from 'next/link'
import Router from 'next/router'


function HomeScreen() {
    const [room, setRoom] = useState("")
    const [username, setUsername] = useState("")

    const button = (e) => {
        e.preventDefault()
        setRoom('ryan') 
        Router.push({
            pathname:'/CallScreen',
            query: {
                room, 
                username
            },
        })
    }
    
    return (
            <form method="post" action="">
                <label for="username">Username</label>
            <input
                value={username}
                title="username"
                onInput={(e) => setUsername(e.target.value)}
            />
                <label for="room">Room</label>
            <input
                value={room}
                title="room"
                onInput={(e) => setRoom(e.target.value)}
            />
            <a onClick={button}>
                <input type='submit' name='submit' value='Join Room' />
            </a>
            </form>
    )
}
export default HomeScreen;