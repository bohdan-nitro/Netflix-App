import React from "react";
import {Text, View} from "../Themed";
import styles from "./style";
import {Image} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {Episode} from "../../types";

interface EpisodeItemProps {
    episode: Episode
}

const EpisodeItem = (props: EpisodeItemProps) => {

    const {episode} = props;

    return (
        <View style={{margin: 10}}>
            <View style={styles.row}>
            <Image style={styles.image} source={{
                uri: episode.poster
            }}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                </View>
                <AntDesign style={styles.download} name="download" size={16} color="white" />
            </View>
            <Text style={styles.plot}>{episode.plot}</Text>
        </View>
    )
}

export default EpisodeItem