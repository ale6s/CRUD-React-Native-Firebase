import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Card, Title, Paragraph, Searchbar } from "react-native-paper";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../../database/firebase.js";

const HomeScreen = (props) => {
    const [post, setPost] = useState([]);

    //Search bar
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);

    useEffect(() => {
        firebase.db.collection("gigs").onSnapshot((querySnapshot) => {
            const post = [];

            querySnapshot.docs.forEach((doc) => {
                const { name, location, salary, startDate, createdOn } = doc.data();
                post.push({
                    id: doc.id,
                    name,
                    location,
                    salary,
                    startDate,
                    createdOn,
                });
            });
            setPost(post);
        });
    }, []);

    return (
        <View>
            <ScrollView>
                <Searchbar
                    style={styles.searchBar}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                {post.map((post) => {
                    return (
                        <Card style={styles.card}>
                            <ListItem style={styles.ListView}
                                key={post.id}
                                onPress={() => {
                                    props.navigation.navigate("UserDetailScreen", {
                                        postId: post.id,
                                    });
                                }}>
                                <Card.Content>
                                    <View>
                                        <Title>{post.name}</Title>
                                        <Text>{post.location}</Text>
                                        <Text>${post.salary}</Text>
                                        <Text>Start by: {post.startDate}</Text>
                                        <Text>Created on : {post.createdOn}</Text>
                                    </View>
                                </Card.Content>
                            </ListItem>
                        </Card>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        margin: 10,
    },
    card: {
        margin: 5,
        borderRadius: 10,
        elevation: 3,
    },
    ListView: {
        margin: 5,
        borderRadius: 10,
        elevation: 3,
    }
});

export default HomeScreen;
