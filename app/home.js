import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { Link, useRouter } from "expo-router";

const home = () => {
    const router = useRouter();

    const goBack = () => {
        return (
            router.back()
        )
    }

    return (
        <SafeAreaView>
            <Text>Home</Text>
            <Button onPress={goBack} title="Back"/>
            <Link href="/ticket">Create Ticket</Link>
        </SafeAreaView>
    )
}

export default home;