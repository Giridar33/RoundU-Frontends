import { useState } from "react";
import { ArrowLeft, Search, Star, MapPin, Clock, Filter, BadgeCheck } from "lucide-react";

interface ProviderListScreenProps {
  onBack: () => void;
}

const providers = [
  { name: "Rajesh Kumar", rating: 4.9, reviews: 238, service: "Electrician", price: "₹299", distance: "1.2 km", time: "30 min", avatar: "RK", top: true, tags: ["Verified", "Fast"] },
  { name: "Suresh Menon", rating: 4.7, reviews: 156, service: "Electrician", price: "₹249", distance: "2.5 km", time: "45 min", avatar: "SM", top: false, tags: ["Experienced"] },
  { name: "Deepak Jain", rating: 4.8, reviews: 312, service: "Electrician", price: "₹349", distance: "0.8 km", time: "20 min", avatar: "DJ", top: true, tags: ["Verified", "Top Rated"] },
  { name: "Vikram Singh", rating: 4.6, reviews: 89, service: "Electrician", price: "₹199", distance: "3.1 km", time: "50 min", avatar: "VS", top: false, tags: ["Budget"] },
  { name: "Arun Patel", rating: 4.9, reviews: 421, service: "Electrician", price: "₹399", distance: "1.8 km", time: "35 min", avatar: "AP", top: true, tags: ["Verified", "Premium"] },
];

const tabs = ["All Experts", "Top Rated", "Nearest", "Budget", "Fastest"];

const ProviderListScreen = ({ onBack }: ProviderListScreenProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-full flex flex-col bg-background">
      {/* Header */}
      <div className="px-5 pt-6 pb-2 animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-input border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors active:scale-95"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-bold text-foreground">Electricians</h1>
          <span className="text-xs text-muted-foreground ml-auto">{providers.length} available</span>
        </div>

        {/* Search */}
        <div className="relative mb-4 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              placeholder="Search providers..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
          <button className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center active:scale-95 transition-transform flex-shrink-0">
            <Filter size={16} className="text-primary-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
                i === activeTab
                  ? "bg-primary text-primary-foreground"
                  : "bg-input border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Provider List */}
      <div className="flex-1 px-5 pb-8 space-y-3">
        {providers.map((provider, i) => (
          <div
            key={provider.name}
            className={`bg-card border rounded-2xl p-4 transition-all active:scale-[0.98] animate-fade-in-up shadow-card ${
              provider.top ? "border-primary/30" : "border-border"
            }`}
            style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  {provider.avatar}
                </div>
                {provider.top && (
                  <BadgeCheck size={18} className="absolute -top-1 -right-1 text-accent fill-card" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-sm">{provider.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-0.5">
                    <Star size={12} className="text-accent fill-accent" />
                    <span className="text-xs font-bold text-foreground">{provider.rating}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">({provider.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <MapPin size={10} /> {provider.distance}
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Clock size={10} /> {provider.time}
                  </span>
                </div>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  {provider.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-base font-bold text-primary">{provider.price}</span>
                <p className="text-[10px] text-muted-foreground">per hr</p>
                <button className="mt-2 px-4 py-1.5 rounded-xl bg-primary text-primary-foreground text-[11px] font-bold active:scale-95 transition-transform hover:bg-secondary">
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderListScreen;
