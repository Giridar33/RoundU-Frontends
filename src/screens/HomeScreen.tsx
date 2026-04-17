import { useState } from "react";
import {
  Search, MapPin, AlertTriangle, Zap, Droplets, Sparkles,
  Car, Wrench, PawPrint, Bell
} from "lucide-react";
import BottomNav from "@/components/BottomNav";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

const categories = [
  { id: "electrician", label: "Electrician", icon: Zap, desc: "Wiring & repairs" },
  { id: "plumber", label: "Plumber", icon: Droplets, desc: "Pipes & drainage" },
  { id: "cleaning", label: "Cleaning", icon: Sparkles, desc: "Home & office" },
  { id: "carwash", label: "Car Wash", icon: Car, desc: "At your doorstep" },
  { id: "mechanic", label: "Mechanic", icon: Wrench, desc: "Vehicle service" },
  { id: "pet", label: "Pet Care", icon: PawPrint, desc: "Grooming & vet" },
];

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="min-h-full flex flex-col bg-background pb-24">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex items-center justify-between animate-fade-in">
        <div>
          <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
            <MapPin size={12} className="text-primary" /> Bangalore, KA
          </p>
          <h1 className="text-xl font-extrabold text-foreground mt-0.5">Good morning! 👋</h1>
        </div>
        <button className="w-10 h-10 rounded-xl bg-input border border-border flex items-center justify-center relative active:scale-95 transition-transform">
          <Bell size={20} className="text-foreground" />
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent" />
        </button>
      </div>

      {/* Search */}
      <div className="px-5 mb-5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            placeholder="What service do you need today?"
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 space-y-6">
        {/* Compact Emergency Card */}
        <div
          className="w-full bg-accent rounded-2xl px-4 py-3 flex items-center gap-3 animate-fade-in-up"
          style={{ animationDelay: "0.15s", opacity: 0 }}
        >
          <div className="w-10 h-10 rounded-xl bg-accent-foreground/10 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="text-accent-foreground" size={20} />
          </div>
          <div className="text-left flex-1 min-w-0">
            <h3 className="font-bold text-accent-foreground text-sm leading-tight">Emergency Support</h3>
            <p className="text-[11px] text-accent-foreground/75 mt-0.5">Get help in under 15 mins</p>
          </div>
          <button
            onClick={() => onNavigate("providers")}
            className="px-3.5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold active:scale-95 transition-transform flex-shrink-0"
          >
            Quick Help
          </button>
        </div>

        {/* Categories */}
        <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-foreground">Browse Services</h2>
            <button onClick={() => onNavigate("services")} className="text-xs font-semibold text-primary">
              View all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onNavigate("providers")}
                className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all active:scale-[0.97] text-left shadow-card"
              >
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <cat.icon size={20} className="text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground truncate">{cat.label}</p>
                  <p className="text-[10px] text-muted-foreground truncate">{cat.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active={activeNav} onNavigate={setActiveNav} />
    </div>
  );
};

export default HomeScreen;
