import { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import RoleSelectionScreen from "@/screens/RoleSelectionScreen";
import LoginScreen from "@/screens/LoginScreen";
import LocationScreen from "@/screens/LocationScreen";
import HomeScreen from "@/screens/HomeScreen";
import ServicesScreen from "@/screens/ServicesScreen";
import ProviderListScreen from "@/screens/ProviderListScreen";

type Screen = "role" | "login" | "location" | "home" | "services" | "providers";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("role");

  const renderScreen = () => {
    switch (screen) {
      case "role":
        return <RoleSelectionScreen onSelect={() => setScreen("login")} />;
      case "login":
        return <LoginScreen onLogin={() => setScreen("location")} onBack={() => setScreen("role")} />;
      case "location":
        return <LocationScreen onDetected={() => setScreen("home")} />;
      case "home":
        return (
          <HomeScreen
            onNavigate={(s) => setScreen(s as Screen)}
          />
        );
      case "services":
        return <ServicesScreen onBack={() => setScreen("home")} onSelect={() => setScreen("providers")} />;
      case "providers":
        return <ProviderListScreen onBack={() => setScreen("home")} />;
    }
  };

  return (
    <MobileLayout>
      {renderScreen()}
    </MobileLayout>
  );
};

export default Index;
