// Souhip
// direct oo drawer after 2 sec

import {
    useRouter
} from "expo-router";
import {
    useEffect
} from "react";
import {
    StatusBar,
    Text,
    View
} from "react-native";


export default function Splash() {

    const router = useRouter();

    useEffect(() => {
        const time = setTimeout(() => {
            // @ts-ignore
            return router.replace("/(auth)/Login");
        }, 2000);
    }, []);


    return (
        <View className="flex-1 justify-center items-center bg-primary">
            <StatusBar hidden={true} />

            <Text className="text-white text-3xl font-bold">
                TODO
                App
            </Text>
        </View>
    );
}