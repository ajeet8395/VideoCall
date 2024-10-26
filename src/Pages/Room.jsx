import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Room = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 1006407300;
        const serverSecret = "96ebface9073d6633e6fed93dddd5a33";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Enter Your Name");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

return (
    <>
        <div className="room">
            <div ref={myMeeting}></div>
        </div>
    </>
)
}


export default Room;