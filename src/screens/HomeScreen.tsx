import { useState } from "react";
import {
  Search, MapPin, AlertTriangle, Zap, Droplets, Paintbrush,
  Hammer, Bug, Truck, Sparkles, Wrench, ChevronRight, Star, Bell
} from "lucide-react";
import BottomNav from "@/components/BottomNav";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

const categories = [
  { id: "electrician", label: "Electrician", icon: Zap, color: "bg-yellow-500/10 text-yellow-400" },
  { id: "plumber", label: "Plumber", icon: Droplets, color: "bg-blue-400/10 text-blue-400" },
  { id: "painter", label: "Painter", icon: Paintbrush, color: "bg-pink-400/10 text-pink-400" },
  { id: "carpenter", label: "Carpenter", icon: Hammer, color: "bg-orange-400/10 text-orange-400" },
  { id: "pest", label: "Pest Control", icon: Bug, color: "bg-green-400/10 text-green-400" },
  { id: "moving", label: "Moving", icon: Truck, color: "bg-purple-400/10 text-purple-400" },
  { id: "cleaning", label: "Cleaning", icon: Sparkles, color: "bg-cyan-400/10 text-cyan-400" },
  { id: "repair", label: "Appliance", icon: Wrench, color: "bg-red-400/10 text-red-400" },
];

const topProviders = [
  { name: "Rajesh K.", rating: 4.9, reviews: 238, service: "Electrician", price: "₹299", avatar: "RK" },
  { name: "Priya S.", rating: 4.8, reviews: 182, service: "Cleaning", price: "₹499", avatar: "PS" },
  { name: "Amit D.", rating: 4.9, reviews: 315, service: "Plumber", price: "₹349", avatar: "AD" },
];

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="min-h-full flex flex-col gradient-bg pb-24">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex items-center justify-between animate-fade-in">
        <div>
          <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
            <MapPin size={12} className="text-accent" /> Bangalore, KA
          </p>
          <h1 className="text-xl font-extrabold text-foreground mt-0.5">Good morning! 👋</h1>
        </div>
        <button className="w-10 h-10 rounded-xl glass-card flex items-center justify-center relative active:scale-95 transition-transform">
          <Bell size={20} className="text-foreground" />
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent" />
        </button>
      </div>

      {/* Search */}
      <div className="px-5 mb-5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            placeholder="Search for services..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 space-y-6">
        {/* Emergency Card */}
        <button
          onClick={() => onNavigate("providers")}
          className="w-full gradient-accent rounded-2xl p-5 flex items-center gap-4 shadow-glow active:scale-[0.98] transition-transform animate-fade-in-up"
          style={{ animationDelay: "0.15s", opacity: 0 }}
        >
          <div className="w-12 h-12 rounded-xl bg-accent-foreground/15 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="text-accent-foreground" size={24} />
          </div>
          <div className="text-left flex-1">
            <h3 className="font-bold text-accent-foreground text-base">Emergency Support</h3>
            <p className="text-xs text-accent-foreground/70 mt-0.5">Get urgent help within 30 minutes</p>
          </div>
          <ChevronRight className="text-accent-foreground/60" size={20} />
        </button>

        {/* Categories */}
        <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-foreground">Services</h2>
            <button onClick={() => onNavigate("services")} className="text-xs font-semibold text-accent">
              View all
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onNavigate("providers")}
                className="flex flex-col items-center gap-2 py-3 rounded-2xl glass-card hover:border-accent/30 transition-all active:scale-95"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.color}`}>
                  <cat.icon size={20} />
                </div>
                <span className="text-[10px] font-semibold text-muted-foreground">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Top Providers */}
        <div className="animate-fade-in" style={{ animationDelay: "0.35s" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-foreground">Top Rated</h2>
            <button onClick={() => onNavigate("providers")} className="text-xs font-semibold text-accent">
              See all
            </button>
          </div>
          <div className="space-y-3">
            {topProviders.map((provider) => (
              <button
                key={provider.name}
                onClick={() => onNavigate("providers")}
                className="w-full glass-card rounded-2xl p-4 flex items-center gap-3 hover:border-accent/30 transition-all active:scale-[0.98]"
              >
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm flex-shrink-0">
                  {provider.avatar}
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-foreground text-sm">{provider.name}</h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                      {provider.service}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={12} className="text-accent fill-accent" />
                    <span className="text-xs font-semibold text-foreground">{provider.rating}</span>
                    <span className="text-xs text-muted-foreground">({provider.reviews})</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-accent">{provider.price}</span>
                  <p className="text-[10px] text-muted-foreground">onwards</p>
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
