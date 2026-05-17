import { Check } from "lucide-react";
import { useState } from "react";

interface ConsentCheckboxProps {
  label: string;
  sublabel?: string;
  required?: boolean;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
}

export function ConsentCheckbox({
  label,
  sublabel,
  required = false,
  onChange,
  checked: controlledChecked
}: ConsentCheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const checked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleChange = () => {
    const newValue = !checked;
    if (controlledChecked === undefined) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <button
      type="button"
      onClick={handleChange}
      className="flex items-start gap-3 text-left w-full group"
    >
      <div
        className={`
          w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all
          ${checked
            ? 'bg-primary border-primary'
            : 'bg-background border-border group-hover:border-primary/50'
          }
        `}
      >
        {checked && <Check className="w-3.5 h-3.5 text-primary-foreground" />}
      </div>
      <div className="flex-1">
        <span className="text-sm text-foreground">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </span>
        {sublabel && (
          <p className="text-xs text-muted-foreground mt-1">{sublabel}</p>
        )}
      </div>
    </button>
  );
}
