import { Ionicons } from "@expo/vector-icons";

// import Screen1 from "@/assets/images/logo.png";
// import Screen2 from "@/assets/images/screen_2.svg";
// import Screen3 from "@/assets/images/screen_3.svg";

type IoniconsGlyphMap = keyof typeof Ionicons.glyphMap;

export type OnboardingItemType = {
    id: number;
    title: string;
    description: string;
    icon: IoniconsGlyphMap;
    color: string;
    backgroundColor?: string;
    image?: string;
};

export const ONBOARDING: OnboardingItemType[] = [
    {
        id: 1,
        title: "مرحبا بك في تطبيقنا",
        description: "هذا هو أول شاشة في التطبيق",
        icon: "medkit-outline",
        color: "white",
        backgroundColor: "#EDFFFC",
        image: require("@/assets/images/logo.png")
    },
    {
        id: 2,
        title: "Screen 2",
        description: "This is the second screen. You are doing great.",
        icon: "bicycle-outline",
        color: "green",
        backgroundColor: "#EDFFFC",
        image: require("@/assets/images/logo.png"),
    },
    {
        id: 3,
        title: "Screen 3",
        description: "This is the third and final onboarding screen.",
        icon: "document-attach-outline",
        color: "yellow",
        backgroundColor: "#EDFFFC",
        image: require("@/assets/images/logo.png"),
    },
];