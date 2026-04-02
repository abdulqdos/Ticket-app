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
        title: "الاكتشاف",
        description: "اكتشف فعاليات مهمة حولك\nدورات، معارض، مؤتمرات… في مكان واحد",
        icon: "medkit-outline",
        color: "white",
        backgroundColor: "#EDFFFC",
        image: require("@/assets/images/screen_1.png")
    },
    {
        id: 2,
        title: "القرب والتخصيص",
        description: "فعاليات تناسب اهتماماتك وموقعك\nنوصل لك الأفضل حسب اختيارك",
        icon: "bicycle-outline",
        color: "green",
        backgroundColor: "#EDFFFC",
        image: require("@/assets/images/screen_2.png"),
    },
    {
        id: 3,
        title: "الحجز السريع",
        description: "احجز بسهولة وفي ثواني\nبدون تعقيد أو خطوات كثيرة",
        icon: "document-attach-outline",
        color: "yellow",
        backgroundColor: "#EDFFFC",
        image: require("@/assets/images/screen_3.png"),
    },
];

