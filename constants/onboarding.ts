import { Ionicons } from "@expo/vector-icons";

type IoniconsGlyphMap = keyof typeof Ionicons.glyphMap;

export type OnboardingItemType = {
    id: number;
    title: string;
    description: string;
    icon: IoniconsGlyphMap;
    color: string;
};

export const ONBOARDING: OnboardingItemType[] = [
    {
        id: 1,
        title: "Screen 1",
        description: "Welcome to our app! This is the first screen.",
        icon: "medkit-outline",
        color: "red",
    },
    {
        id: 2,
        title: "Screen 2",
        description: "This is the second screen. You are doing great.",
        icon: "bicycle-outline",
        color: "green",
    },
    {
        id: 3,
        title: "Screen 3",
        description: "This is the third and final onboarding screen.",
        icon: "document-attach-outline",
        color: "yellow",
    },
];