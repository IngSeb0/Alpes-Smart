import { Shield, Lock, AlertCircle } from "lucide-react";

interface SecurityNoticeProps {
  type?: "info" | "warning" | "secure";
  title: string;
  message: string;
}

export function SecurityNotice({ type = "info", title, message }: SecurityNoticeProps) {
  const icons = {
    info: AlertCircle,
    warning: AlertCircle,
    secure: Lock,
  };

  const colors = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    secure: "bg-success/10 border-success/20 text-success-foreground",
  };

  const Icon = icons[type];

  return (
    <div className={`p-4 rounded-xl border ${colors[type]}`}>
      <div className="flex gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="mb-1">{title}</h4>
          <p className="text-sm opacity-90">{message}</p>
        </div>
      </div>
    </div>
  );
}
