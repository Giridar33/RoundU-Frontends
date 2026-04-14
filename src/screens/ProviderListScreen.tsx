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

const filters = ["All", "Top Rated", "Nearest", "Budget", "Fastest"];

const ProviderListScreen = ({ onBack }: ProviderListScreenProps) => {
  return (
    <div className="min-h-full flex flex-col gradient-bg">
      {/* Header */}
      <div className="px-5 pt-6 pb-2 animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground hover:text-accent transition-colors active:scale-95"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-bold text-foreground">Electricians</h1>
          <span className="text-xs text-muted-foreground ml-auto">{providers.length} available</span>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input
            placeholder="Search providers..."
            className="w-full pl-10 pr-12 py-3 rounded-2xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
            <Filter size={14} className="text-accent" />
          </button>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
                i === 0
                  ? "gradient-accent text-accent-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Provider List */}
      <div className="flex-1 px-5 pb-8 space-y-3">
        {providers.map((provider, i) => (
          <div
            key={provider.name}
            className={`glass-card rounded-2xl p-4 transition-all active:scale-[0.98] animate-fade-in-up ${
              provider.top ? "border-accent/20" : ""
            }`}
            style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm flex-shrink-0">
                  {provider.avatar}
                </div>
                {provider.top && (
                  <BadgeCheck size={16} className="absolute -top-1 -right-1 text-accent fill-accent-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-foreground text-sm">{provider.name}</h3>
                </div>
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
                <div className="flex gap-1.5 mt-2">
                  {provider.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-base font-bold text-accent">{provider.price}</span>
                <p className="text-[10px] text-muted-foreground">per visit</p>
                <button className="mt-2 px-4 py-1.5 rounded-xl gradient-accent text-[11px] font-bold text-accent-foreground active:scale-95 transition-transform">
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
