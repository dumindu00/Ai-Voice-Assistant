import {
    useVoiceAssistant,
    BarVisualizer,
    VoiceAssistantControlBar,
    useTranscription,
    useLocalParticipant
} from "@livekit/components-react"
import { Track } from "livekit-client"
import { useEffect, useState } from "react"
import "./SimpleVoiceAssistant.css"