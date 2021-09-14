import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

function AccountScreen() {
    return (
        <View>
            <Card style={styles.card}>
                <Card.Content>
                    <Title>Account</Title>
                    <Paragraph>Card content</Paragraph>
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
});

export default AccountScreen;
