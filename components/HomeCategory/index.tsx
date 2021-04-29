import * as React from 'react';
import {Image, FlatList, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import styles from "./styles"
import {Text} from "../Themed";
import movie from "../../assets/data/movie";

interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string
        }[]
    }

}

const HomeCategory = (props: HomeCategoryProps) => {

    const {category} = props

    const navigation = useNavigation();

    const onMovieScreen = () => {
        navigation.navigate("MovieDetailsScreen", {id: movie.id})
    }

    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList data={category.movies} renderItem={({item}) => (
                <Pressable onPress={() => onMovieScreen(item)}>
                    <Image style={styles.image} source={{
                        uri: item.poster
                    }}/>
                </Pressable>

            )}
                      horizontal
            />

        </>
    );
}
export default HomeCategory;