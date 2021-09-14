import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    ActivityIndicator,
} from "react-native";
import { Card, Title, Paragraph, Searchbar } from "react-native-paper";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../../database/firebase.js";

const UserDetailScreen = (props) => {
    const [post, setPost] = useState({
        id: "",
        name: "",
        location: "",
        salary: "",
        startDate: "",
    });

    const [loading, setLoading] = useState(true);

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection("gigs").doc(id);
        const doc = await dbRef.get();
        const post = doc.data();
        setPost({ ...post, id: doc.id });
        setLoading(false);
    };

    useEffect(() => {
        getUserById(props.route.params.userId);
    }, []);

    console.log(props.route.params.postId);
    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        );
    }
    return (
        <View>
            <Card style={styles.card}>
                <Card.Content>
                    <ScrollView>
                        <View>
                            <Text>{post.id}</Text>
                            <Text>{post.name}</Text>
                            <Text>{post.location}</Text>
                        </View>
                    </ScrollView>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 6,
        borderRadius: 10,
        elevation: 3,
    },
    ListView: {
        margin: 6,
        borderRadius: 10,
    },
    loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default UserDetailScreen;
