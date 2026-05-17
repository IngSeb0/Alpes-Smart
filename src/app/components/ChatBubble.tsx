interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export function ChatBubble({ message, isUser, timestamp }: ChatBubbleProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[75%] ${isUser ? 'order-2' : 'order-1'}`}>
        <div
          className={`
            px-4 py-3 rounded-2xl
            ${isUser
              ? 'bg-primary text-primary-foreground rounded-br-sm'
              : 'bg-secondary text-secondary-foreground rounded-bl-sm'
            }
          `}
        >
          <p className="text-sm">{message}</p>
        </div>
        {timestamp && (
          <p className={`text-xs text-muted-foreground mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
}
