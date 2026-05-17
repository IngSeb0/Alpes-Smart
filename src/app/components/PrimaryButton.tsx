interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

export function PrimaryButton({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button"
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-4 rounded-xl bg-primary text-primary-foreground
        shadow-md hover:shadow-lg active:shadow-sm
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      {children}
    </button>
  );
}
