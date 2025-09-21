// Souhip
// direct oo drawer after 2 sec

import {
    StatusBar,
    Text,
    View
} from "react-native";
import {
    useEffect
} from "react";
import {
    useRouter
} from "expo-router";


export default function Splash() {

    const router = useRouter();

      useEffect(() => {
        const time = setTimeout(() => {
            // @ts-ignore
            return router.replace("/(tabs)");
        }, 2000);
    }, []);


    return (
            <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000000",

                    }}
            >
                <StatusBar hidden={true}/>

                <Text style={{
                    color: "orange",
                    fontSize: 30,
                    fontWeight: "bold"
                }}>
                    TODO
                    App
                </Text>


            </View>
    );
}