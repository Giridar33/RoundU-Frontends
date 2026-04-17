import { useNavigate } from "react-router-dom";
import { Search, MapPin, AlertTriangle, Bell } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/mockData";
import { useApp } from "@/context/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { user, dispatch, notifications } = useApp();
  const featured = services.slice(0, 6);

  const goToProviders = (id: string) => {
    dispatch({ type: "SELECT_SERVICE", id });
    navigate(`/providers/${id}`);
  };

  return (
    <div className="min-h-full flex flex-col bg-background pb-24">
      <div className="px-5 pt-6 pb-4 flex items-center justify-between animate-fade-in">
        <div>
          <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
            <MapPin size={12} className="text-primary" /> {user.address}
          </p>
          <h1 className="text-xl font-extrabold text-foreground mt-0.5">
            Hi {user.name.split(" ")[0]}! 👋
          </h1>
        </div>
        <button
          onClick={() => navigate("/profile")}
          className="w-10 h-10 rounded-xl bg-input border border-border flex items-center justify-center relative active:scale-95 transition-transform"
        >
          <Bell size={20} className="text-foreground" />
          {notifications.length > 0 && (
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent" />
          )}
        </button>
      </div>

      <div className="px-5 mb-5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <button
          onClick={() => navigate("/search")}
          className="w-full text-left relative"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <div className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-input border border-border text-sm text-muted-foreground">
            What service do you need today?
          </div>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 space-y-6">
        {/* Compact emergency card */}
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
            onClick={() => navigate("/emergency")}
            className="px-3.5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold active:scale-95 transition-transform flex-shrink-0"
          >
            Quick Help
          </button>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-foreground">Browse Services</h2>
            <button onClick={() => navigate("/services")} className="text-xs font-semibold text-primary">
              View all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {featured.map((cat) => (
              <ServiceCard
                key={cat.id}
                service={cat}
                variant="compact"
                onClick={() => goToProviders(cat.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
