import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBTN,
    Welcome,
} from "../components";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, back }}>
            <Text>Home</Text>
        </SafeAreaView>
    );
};

export default Home;
