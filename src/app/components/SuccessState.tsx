import { CheckCircle2 } from "lucide-react";

interface SuccessStateProps {
  title: string;
  message: string;
  icon?: React.ReactNode;
}

export function SuccessState({ title, message, icon }: SuccessStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8">
      <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-4">
        {icon || <CheckCircle2 className="w-10 h-10 text-success" />}
      </div>
      <h2 className="text-card-foreground mb-2">{title}</h2>
      <p className="text-muted-foreground max-w-sm">{message}</p>
    </div>
  );
}
