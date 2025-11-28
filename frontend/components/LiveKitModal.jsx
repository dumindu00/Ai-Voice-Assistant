import { useState } from "react";
import {  LiveKitRoom, 
    RoomAudioRenderer}
 from "@livekit/components-react";
import "@livekit/components-styles"

const LiveKitModal = ({setShowSupport}) => {
    const [isSubmittingName, setIsSubmittingName] = useState(true);
    const [name, setName] = useState("");

    const handleNameSubmit = () => {};

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="support-room">
                    {isSubmittingName ? (
                        <form
                            onSubmit={handleNameSubmit}
                            className="name-form"
                        >
                            <h2>Enter your name to connect with support</h2>
                            <input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                required
                            />
                            <button type="submit">Connect</button>
                            <button
                                type="button"
                                className="cancel-button"
                                onClick={() => setShowSupport(false)}
                            >
                                Cancel
                            </button>
                        </form>
                    ): (
                        <LiveKitRoom
                            serverUrl={import.meta.env.VITE_LIVEKIT_URL}
                            token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjQzNTI3NDMsImlkZW50aXR5IjoiZHYiLCJpc3MiOiJBUEl5Q0RpOGdTak1Tc04iLCJuYmYiOjE3NjQzNTE4NDMsInN1YiI6ImR2IiwidmlkZW8iOnsiY2FuUHVibGlzaCI6dHJ1ZSwiY2FuUHVibGlzaERhdGEiOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZSwicm9vbSI6InJvb20xIiwicm9vbUpvaW4iOnRydWV9fQ.-vdW3l5IR0pMN1c8ZBpEJPw0vdxZehIueK9aGDn2CF0"
                            connect={true}
                            video={false}
                            audio={true}
                            onDisconnected={() => {
                                setShowSupport(false)
                                setIsSubmittingName(true)
                            }}
                        >
                            <RoomAudioRenderer    />
                        </LiveKitRoom>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LiveKitModal