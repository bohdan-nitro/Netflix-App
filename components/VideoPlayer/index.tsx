import React, {useRef, useState} from "react";

import {Text, View} from "../Themed";
import {Video} from "expo-av";
import {Episode} from "../../types";
import styles from "./style";

interface VideoPlayerProps {
    episode: Episode;
}
const VideoPlayer = (props: VideoPlayerProps) => {

    const video = useRef(null);
    const [status, setStatus] = useState({})

    const {episode} = props;
    return (
        <View>
            <Video ref={video}
                   style={styles.video}
                   source={{
                       uri: episode.video
                   }}
                   useNativeControls
                   resizeMode={"contain"}
            />
        </View>
    )
}

export default VideoPlayer