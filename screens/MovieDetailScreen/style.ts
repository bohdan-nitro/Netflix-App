import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 16/8,
        resizeMode: "cover"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    match: {
        color: "rgba(0,170,0,0.87)",
        fontWeight: "bold",
        marginRight: 5,
    },
    year: {
        color: "#979595",
        marginRight: 5
    },
    ageContainer: {
        backgroundColor: "#e6e229",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 3,
        borderRadius: 2,
        marginRight: 5
    },
    age: {
        color: "#000",
        fontWeight: "bold"
    },
    seasons: {
        color: "#979595",
        marginRight: 5

    },
    infoWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    playButton: {
        backgroundColor: "white",
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        marginVertical: 5
    },
    playButtonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold"
    },
    downloadButton: {
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: "#2b2b2b",
        marginVertical: 5
    },

    downloadButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }
})

export default styles