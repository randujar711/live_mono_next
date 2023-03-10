// import Link from 'next/link'
import {useState} from 'react'
import Link from 'next/link'


function HomeScreen() {
    const [room, setRoom] = useState("")
    const [username, setUsername] = useState("")

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

            <Link href={`/test2`}>
                <input type='submit' name='submit' value='Join Room' />
            </Link>
            </form>
    )
}
export default HomeScreen;