import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
import { AlertTriangle, CheckCircle, Info } from "lucide-react-native";
import React, { createContext, useContext, useState } from "react";
import { View } from "react-native";

type ToastType = "success" | "error" | "info";

const icons = {
  success: CheckCircle,
  error: AlertTriangle,
  info: Info,
};

type ToastContextType = {
  show: (message: string, type?: ToastType, title?: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: ToastType;
    title: string;
  }>({
    visible: false,
    message: "",
    type: "info",
    title: "",
  });

  const show = (message: string, type: ToastType = "info", title: string = "") => {
    setToast({ visible: true, message, type, title });

    setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }));
    }, 2500);
  };

  return (
    <ToastContext.Provider value={{ show }}>
      {children}

      {toast.visible && (
        <View className={`"text-lg absolute top-12 left-4 right-4 z-50" ${toast.type === "error" ? "bg-red-100 border-danger" : toast.type === "success" ? "bg-green-100 border-success" : "bg-yellow-100 border-info" } `}>
          <Alert
            icon={icons[toast.type]}
            iconClassName={`${toast.type === "error" ? "text-danger" : toast.type === "success" ? "text-success" : "text-foreground"}`}
            variant={toast.type === "error" ? "destructive" : "default"}
            className={`${toast.type === "error" ? "border-danger" : toast.type === "success" ? "border-success" : "border-info"}`}
          >
            <AlertTitle className={`${toast.type === "error" ? "text-danger" : toast.type === "success" ? "text-success" : "text-foreground" } "text-2xl"`}>
              {toast.title}
            </AlertTitle>

            <AlertDescription className={`${toast.type === "error" ? "text-danger" : toast.type === "success" ? "text-success" : "text-foreground"}`}>
              {toast.message}
            </AlertDescription>
          </Alert>
        </View>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
};
