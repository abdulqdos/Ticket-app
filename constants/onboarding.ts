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
        title: "طلب الأدوية عبر الإنترنت",
        description: "تصفح واطلب الأدوية الموصوفة لك ببضع نقرات فقط.",
        icon: "medkit-outline",
        color: "#4CAF50",
    },
    {
        id: 2,
        title: "توصيل سريع",
        description: "احصل على أدويتك موصلة إلى عتبة دارك في غضون ساعات.",
        icon: "bicycle-outline",
        color: "#2196F3",
    },
    {
        id: 3,
        title: "رفع الوصفة الطبية",
        description: "قم بتحميل وصفاتك الطبية بسهولة للمعالجة السريعة.",
        icon: "document-attach-outline",
        color: "#9C27B0",
    },
    {
        id: 4,
        title: "تتبع الطلب",
        description: "تتبع طلبك في الوقت الفعلي من الصيدلية إلى التوصيل.",
        icon: "map-outline",
        color: "#FF9800",
    },
];