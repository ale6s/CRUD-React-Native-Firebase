import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import {
    Card, Title, Paragraph,
    Searchbar
} from "react-native-paper";

function HomeScreen() {
    //Search bar
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <ScrollView>
            <Searchbar
                style={styles.searchBar}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Card style={styles.card}>
                <Card.Content>
                    <Title>Inbox</Title>
                    <Paragraph>Card content</Paragraph>
                    <Text>somethings goes here</Text>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        margin: 10,
    },
    card: {
        margin: 10,
        borderRadius: 10,
        elevation: 3,
    },
});

export default HomeScreen;
