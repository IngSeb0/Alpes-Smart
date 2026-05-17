interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

export function SecondaryButton({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button"
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-4 rounded-xl bg-secondary text-secondary-foreground
        border border-border hover:bg-accent
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      {children}
    </button>
  );
}
