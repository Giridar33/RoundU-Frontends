import { User, Wrench, ArrowRight } from "lucide-react";

interface RoleSelectionScreenProps {
  onSelect: (role: string) => void;
}

const RoleSelectionScreen = ({ onSelect }: RoleSelectionScreenProps) => {
  return (
    <div className="min-h-full flex flex-col px-6 py-10 gradient-bg">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4 animate-fade-in">
        <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
          <span className="text-accent-foreground font-extrabold text-lg">R</span>
        </div>
        <span className="text-2xl font-extrabold text-foreground tracking-tight">Roundu</span>
      </div>

      <div className="mt-8 mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h1 className="text-3xl font-extrabold text-foreground leading-tight">
          How would you like<br />to get started?
        </h1>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          Choose your role to personalize your experience
        </p>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {/* Customer Card */}
        <button
          onClick={() => onSelect("customer")}
          className="group glass-card rounded-2xl p-6 text-left transition-all duration-300 hover:border-accent/40 active:scale-[0.98] animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <div className="flex items-start justify-between">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
              <User className="text-accent" size={28} />
            </div>
            <ArrowRight className="text-muted-foreground group-hover:text-accent transition-colors" size={20} />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-1">I need a service</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Find & book trusted professionals near you in minutes
          </p>
        </button>

        {/* Provider Card */}
        <button
          onClick={() => onSelect("provider")}
          className="group glass-card rounded-2xl p-6 text-left transition-all duration-300 hover:border-accent/40 active:scale-[0.98] animate-fade-in-up"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          <div className="flex items-start justify-between">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
              <Wrench className="text-accent" size={28} />
            </div>
            <ArrowRight className="text-muted-foreground group-hover:text-accent transition-colors" size={20} />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-1">I provide services</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Grow your business by connecting with local customers
          </p>
        </button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        By continuing, you agree to our Terms & Privacy Policy
      </p>
    </div>
  );
};

export default RoleSelectionScreen;
