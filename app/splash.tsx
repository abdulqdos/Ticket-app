// Souhip
// direct oo drawer after 2 sec

import {
    useRouter
} from "expo-router";
import {
    useEffect
} from "react";
import {
    Image,
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

            <View>
                <Image
                    source={require("@/assets/images/logo.png")}
                    className="w-96 h-96"
                />
            </View>

        </View>
    );
}