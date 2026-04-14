import { ArrowLeft, Zap, Droplets, Paintbrush, Hammer, Bug, Truck, Sparkles, Wrench, Wind, Tv, ShieldCheck, Flower } from "lucide-react";

interface ServicesScreenProps {
  onBack: () => void;
  onSelect: (service: string) => void;
}

const services = [
  { id: "electrician", label: "Electrician", icon: Zap, color: "bg-yellow-500/10 text-yellow-400", desc: "Wiring & fixtures" },
  { id: "plumber", label: "Plumber", icon: Droplets, color: "bg-blue-400/10 text-blue-400", desc: "Pipes & drainage" },
  { id: "painter", label: "Painter", icon: Paintbrush, color: "bg-pink-400/10 text-pink-400", desc: "Interior & exterior" },
  { id: "carpenter", label: "Carpenter", icon: Hammer, color: "bg-orange-400/10 text-orange-400", desc: "Furniture & fittings" },
  { id: "pest", label: "Pest Control", icon: Bug, color: "bg-green-400/10 text-green-400", desc: "Home & office" },
  { id: "moving", label: "Packers", icon: Truck, color: "bg-purple-400/10 text-purple-400", desc: "Move & relocate" },
  { id: "cleaning", label: "Cleaning", icon: Sparkles, color: "bg-cyan-400/10 text-cyan-400", desc: "Deep & regular" },
  { id: "appliance", label: "Appliance", icon: Wrench, color: "bg-red-400/10 text-red-400", desc: "Repair & service" },
  { id: "ac", label: "AC Service", icon: Wind, color: "bg-teal-400/10 text-teal-400", desc: "Install & maintain" },
  { id: "tv", label: "TV & Audio", icon: Tv, color: "bg-indigo-400/10 text-indigo-400", desc: "Setup & repair" },
  { id: "security", label: "Security", icon: ShieldCheck, color: "bg-emerald-400/10 text-emerald-400", desc: "CCTV & alarms" },
  { id: "garden", label: "Gardening", icon: Flower, color: "bg-lime-400/10 text-lime-400", desc: "Lawn & plants" },
];

const ServicesScreen = ({ onBack, onSelect }: ServicesScreenProps) => {
  return (
    <div className="min-h-full flex flex-col gradient-bg">
      <div className="px-5 pt-6 pb-4 flex items-center gap-3 animate-fade-in">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground hover:text-accent transition-colors active:scale-95"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold text-foreground">All Services</h1>
      </div>

      <div className="flex-1 px-5 pb-8">
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, i) => (
            <button
              key={service.id}
              onClick={() => onSelect(service.id)}
              className="glass-card rounded-2xl p-5 text-left hover:border-accent/30 transition-all active:scale-[0.97] animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${service.color}`}>
                <service.icon size={22} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{service.label}</h3>
              <p className="text-[10px] text-muted-foreground mt-0.5">{service.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;
