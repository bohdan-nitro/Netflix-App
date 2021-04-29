import React, {useRef, useState, useEffect} from "react";

import {Text, View} from "../Themed";
import {Video} from "expo-av";
import {Episode} from "../../types";
import styles from "./style";
import {Playback} from "expo-av/build/AV";

interface VideoPlayerProps {
    episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const {episode} = props;
    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({})

    useEffect(() => {
        if(!video) {
            return;
        }
        (async () => {
            //Убираем загрузку видео
            await video.current.unloadAsync()
            //Добавляем загрузку
            await video.current.loadAsync(
                {uri: episode.video},
                {},
                false
            );
        })();
    }, [episode]);



    return (
        <View>
            <Video ref={video}
                   style={styles.video}
                   source={{
                       uri: episode.video
                   }}
                   posterSource={{
                       uri: episode.poster
                   }}
                   posterStyle={{
                       width: "100%",
                       aspectRatio: 16/9,
                       resizeMode: "cover"
                   }}
                   usePoster={true}
                   useNativeControls
                   resizeMode={"contain"}
                   onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    )
}

export default VideoPlayer