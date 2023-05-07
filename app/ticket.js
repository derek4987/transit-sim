import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { useRouter } from "expo-router";

const ticket = () => {
    const router = useRouter();

    const goBack = () => {
        return (
            router.back()
        )
    }

    return (
        <SafeAreaView>
            <Button onPress={goBack} title="Back"/>
            <Text>Ticket</Text>
        </SafeAreaView>
    )
}

export default ticket;