import { useState } from "react";

interface DataPreferenceToggleProps {
  label: string;
  description: string;
  defaultEnabled?: boolean;
  onChange?: (enabled: boolean) => void;
}

export function DataPreferenceToggle({
  label,
  description,
  defaultEnabled = false,
  onChange
}: DataPreferenceToggleProps) {
  const [enabled, setEnabled] = useState(defaultEnabled);

  const handleToggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <div className="flex-1">
        <h4 className="text-foreground mb-1">{label}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <button
        onClick={handleToggle}
        className={`
          relative w-12 h-7 rounded-full transition-colors flex-shrink-0
          ${enabled ? 'bg-success' : 'bg-switch-background'}
        `}
      >
        <div
          className={`
            absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform
            ${enabled ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
    </div>
  );
}
