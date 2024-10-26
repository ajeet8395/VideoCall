import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [roomCode,  setRoomCode] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate(`./room/${roomCode}`);
    }
    return (
        <>
            <div className="homepage">
                <form onSubmit={handleFormSubmit} action="" className="form">
                    <div>
                        <label htmlFor="">Enter Room Code</label>
                        <input onChange={(e) => setRoomCode(e.target.value)} type="text" name="roomcode" required placeholder="Enter Your RoomCode" />
                    </div>
                    <button type="submit">Enter Room</button>
                </form>
            </div>
        </>
    )
}

export default Home;