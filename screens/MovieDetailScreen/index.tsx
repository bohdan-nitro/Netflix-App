import React, {useState} from "react";
import styles from "./style"
import {Image, Pressable, FlatList} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {Text, View} from "../../components/Themed";
import {Picker} from '@react-native-picker/picker';

import movie from "../../assets/data/movie";
import EpisodeItem from "../../components/EpisodeItem";
import VideoPlayer from "../../components/VideoPlayer";
const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailScreen = () => {
    const [currentSeason, setCurrentSeason] = useState(firstSeason);
    const [currentEpisode, setCurrentEpisode] = useState(firstEpisode);
    const seasonNames = movie.seasons.items.map(season => season.name);

    const HeaderComponent = () => {
        return (
            <View style={{padding: 12}}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={styles.infoWrapper}>
                    <Text style={styles.match}>98% match</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                    <View style={styles.ageContainer}>
                        <Text style={styles.age}>12+</Text>
                    </View>
                    <Text style={styles.seasons}>{movie.numberOfSeasons} Seasons</Text>
                    <MaterialIcons name="hd" size={24} color="white"/>
                </View>
                {/*Play button*/}
                <Pressable style={styles.playButton} onPress={() => {console.warn("PLAY")}}>
                    <Text style={styles.playButtonText}>
                        <Entypo name="controller-play" size={16} color="black" />
                        Play
                    </Text>
                </Pressable>
                {/*    Download button*/}
                <Pressable style={styles.downloadButton} onPress={() => {console.warn("DOWNLOAD")}}>
                    <Text style={styles.downloadButtonText}>
                        <AntDesign name="download" size={16} color="white" />
                        {" "}
                        Download
                    </Text>
                </Pressable>
                <Text style={{marginVertical: 10, fontSize: 13}}>{movie.plot}</Text>
                <Text style={styles.year}>Cast: {movie.cast}</Text>
                <Text style={styles.year}>Creator: {movie.creator}</Text>
                {/*    Row with Button Icons*/}
                <View style={{flexDirection: "row", marginTop: 10}}>
                    <View style={{alignItems: "center", marginHorizontal: 20}}>
                        <AntDesign name="plus" size={24} color="white" />
                        <Text style={{color: "darkgrey", marginTop: 5, fontSize: 13}}>My List</Text>
                    </View>
                    <View style={{alignItems: "center", marginHorizontal: 20}}>
                        <Feather name="thumbs-up" size={24} color="white" />
                        <Text style={{color: "darkgrey", marginTop: 5, fontSize: 13}}>Rate</Text>
                    </View>
                    <View style={{alignItems: "center", marginHorizontal: 20}}>
                        <FontAwesome name="share" size={24} color="white" />
                        <Text style={{color: "darkgrey", marginTop: 5, fontSize: 13}}>Share</Text>
                    </View>
                </View>

                <Picker
                    selectedValue={currentSeason.name}
                    onValueChange={(itemValue, itemIndex) =>{
                        setCurrentSeason(movie.seasons.items[itemIndex])
                    }}
                    style={{color: "white", width: 130}}
                    dropdownIconColor={"white"}
                >
                    {seasonNames.map(seasonName => (
                        <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                    ))}
                </Picker>
            </View>
        )
    }

    return (
        <View>
            <VideoPlayer episode={currentEpisode}/>

            <FlatList
                ListHeaderComponent={HeaderComponent}
                data={currentSeason.episodes.items}
                style={{marginBottom: 250}}
                renderItem={({item}) => <EpisodeItem episode={item}/>}/>
        </View>
    )

}

export default MovieDetailScreen;