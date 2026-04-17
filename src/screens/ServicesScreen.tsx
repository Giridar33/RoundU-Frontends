import { ArrowLeft, Zap, Droplets, Sparkles, Car, Wrench, PawPrint, Paintbrush, Hammer, Bug, Truck, Wind, ShieldCheck } from "lucide-react";

interface ServicesScreenProps {
  onBack: () => void;
  onSelect: (service: string) => void;
}

const services = [
  { id: "electrician", label: "Electrician", icon: Zap, desc: "Wiring & fixtures" },
  { id: "plumber", label: "Plumber", icon: Droplets, desc: "Pipes & drainage" },
  { id: "cleaning", label: "Cleaning", icon: Sparkles, desc: "Deep & regular" },
  { id: "carwash", label: "Car Wash", icon: Car, desc: "At your doorstep" },
  { id: "mechanic", label: "Mechanic", icon: Wrench, desc: "Vehicle service" },
  { id: "pet", label: "Pet Care", icon: PawPrint, desc: "Grooming & vet" },
  { id: "painter", label: "Painter", icon: Paintbrush, desc: "Interior & exterior" },
  { id: "carpenter", label: "Carpenter", icon: Hammer, desc: "Furniture & fittings" },
  { id: "pest", label: "Pest Control", icon: Bug, desc: "Home & office" },
  { id: "moving", label: "Packers", icon: Truck, desc: "Move & relocate" },
  { id: "ac", label: "AC Service", icon: Wind, desc: "Install & maintain" },
  { id: "security", label: "Security", icon: ShieldCheck, desc: "CCTV & alarms" },
];

const ServicesScreen = ({ onBack, onSelect }: ServicesScreenProps) => {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <div className="px-5 pt-6 pb-4 flex items-center gap-3 animate-fade-in">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-input border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors active:scale-95"
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
              className="bg-card border border-border rounded-2xl p-5 text-left hover:border-primary/40 transition-all active:scale-[0.97] animate-fade-in-up shadow-card"
              style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-3">
                <service.icon size={22} className="text-primary-foreground" />
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
