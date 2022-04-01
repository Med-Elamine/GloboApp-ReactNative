import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, FlatList, TouchableWithoutFeedback, ActivityIndicator } from "react-native";

export default function HomePage({navigation}){
    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setNewsData] = useState([]);

    useEffect(()=>{
        fetch("GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=325e35298f0244029c6c42db5bd50290")
        .then((resp) => resp.json()
        .then((json) => setNewsData(json.articles))
        .catch((err) => console.error(err))
        .finally(() => finishLoading(false)));
    },[]);

    const storyItem = ({item}) => {
        return(
            <TouchableWithoutFeedback
            onPress={() => navigation.navigate('NewsDetail', {url: item.url})}>
                <View style={styles.listings}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                    style={styles.thumbnail}
                    source={{uri: item.urlToImage}}
                    />
                    <Text style={styles.blurb}>{item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return(
        <View style={styles.container}>
           {dataLoading?<ActivityIndicator/>:(
              <FlatList data={newsData} 
              renderItem={storyItem} 
              keyExtractor={(item) => item.url}
              />
           )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    thumbnail: {
        height: 150,
        width: '98%',
        borderRadius: 30
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    }
});