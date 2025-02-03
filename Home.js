import React, { useState, useEffect } from 'react';
import { StatusBar, Button, FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    listStyle: {
        borderWidth: 1,
    },
});

const Home = ({ navigation }) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://31f07fc6f7914dc1bcfb39cc6e36f748.api.mockbin.io/")
            .then(response => {
                return response.json()
            }) // Convert response to JSON
            .then((myjson) => {
                setMyData(myjson); // Directly set fetched data
            })
    }, []);

    const renderItem = ({ item, index,section }) => {
        return (
            <View style={styles.listStyle}>
                <Text>Name: {item.username}</Text>
                <Text>E-mail: {item.email}</Text>
                <Text>Phone number: {item.phone_number}</Text>
            </View>
        );
    }
    return (
        <View>
            <StatusBar />
            <Button
                title='Register'
                onPress={() => navigation.navigate("Add", { datastr: JSON.stringify(myData) })}
            />
            <FlatList
                data={myData}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Home;
