import { useState } from "react";
import { ArrowLeft, Phone, ArrowRight } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
  onBack: () => void;
}

const LoginScreen = ({ onLogin, onBack }: LoginScreenProps) => {
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-full flex flex-col px-6 py-8 gradient-bg">
      <button
        onClick={onBack}
        className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground hover:text-accent transition-colors active:scale-95"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="mt-10 mb-8 animate-fade-in">
        <h1 className="text-3xl font-extrabold text-foreground leading-tight">
          Welcome to<br />
          <span className="text-gradient-accent">Roundu</span>
        </h1>
        <p className="text-muted-foreground mt-3 text-sm">
          Enter your phone number to continue
        </p>
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-muted-foreground">
            <Phone size={18} />
            <span className="text-sm font-semibold text-foreground">+91</span>
            <div className="w-px h-5 bg-border" />
          </div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="Enter your number"
            className="w-full pl-24 pr-4 py-4 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-base"
          />
        </div>
      </div>

      <button
        onClick={onLogin}
        disabled={phone.length < 10}
        className="mt-6 w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed gradient-accent text-accent-foreground shadow-glow animate-fade-in-up flex items-center justify-center gap-2"
        style={{ animationDelay: "0.3s", opacity: 0 }}
      >
        Continue
        <ArrowRight size={18} />
      </button>

      <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex gap-3">
          {["Google", "Apple"].map((provider) => (
            <button
              key={provider}
              className="flex-1 py-3.5 rounded-2xl glass-card text-sm font-semibold text-foreground hover:border-accent/30 transition-all active:scale-[0.98]"
            >
              {provider}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
