import { ChevronRight } from "lucide-react";

interface FinancialProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  amount?: string;
  badge?: string;
  onClick?: () => void;
}

export function FinancialProductCard({
  icon,
  title,
  description,
  amount,
  badge,
  onClick
}: FinancialProductCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-200 text-left"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-card-foreground truncate">{title}</h3>
              {badge && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-gold/10 text-gold-foreground border border-gold/20">
                  {badge}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
            {amount && (
              <p className="mt-2 text-xl text-card-foreground">{amount}</p>
            )}
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
      </div>
    </button>
  );
}
