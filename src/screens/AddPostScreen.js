import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Card, TextInput, Button, Title } from "react-native-paper";
import firebase from "../../database/firebase.js";
import { PostNavigator } from "../NavigatorStack.js";

function AddPostScreen() {
    const [state, setState] = useState({
        name: "",
        location: "",
        salary: 0,
        startDate: "",
        createdOn: "",
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    };

    const addGig = async () => {
        const yourDate = new Date()
        if (
            (state.name === "" && state.location === "" && state.salary === "",
                state.startDate === "")
        ) {
            alert("please fill this form out");
        } else {
            try {
                await firebase.db.collection("gigs").add({
                    name: state.name,
                    location: state.location,
                    salary: state.salary,
                    startDate: state.startDate,
                    createdOn: yourDate.toISOString().split('T')[0],
                });
                alert("Gig Sucesfully Added");
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <View>
            <Card style={styles.card}>
                <Card.Content>
                    <TextInput
                        style={styles.TextInput}
                        label="Tittle"
                        onChangeText={(value) => handleChangeText("name", value)}
                    />
                    <TextInput
                        style={styles.TextInput}
                        label="Location"
                        onChangeText={(value) => handleChangeText("location", value)}
                    />
                    <TextInput
                        style={styles.TextInput}
                        label="Salary"
                        onChangeText={(value) => handleChangeText("salary", value)}
                    />
                    <TextInput
                        style={styles.TextInput}
                        label="Start Date"
                        onChangeText={(value) => handleChangeText("startDate", value)}
                    />
                    <Button
                        style={styles.ButtonStyle}
                        icon="plus"
                        mode="contained"
                        onPress={() => addGig()}
                    >
                        Add New Gig
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 10,
        elevation: 3,
    },
    TextInput: {
        marginTop: 10,
    },
    ButtonStyle: {
        marginTop: 10,
        marginBottom: 10,
    },
});

export default AddPostScreen;
