import { InputForm } from "./InputForm";

interface WelcomeScreenProps {
  handleSubmit: (
    submittedInputValue: string,
    effort: string,
    model: string
  ) => void;
  onCancel: () => void;
  isLoading: boolean;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  handleSubmit,
  onCancel,
  isLoading,
}) => (
  <div className="flex flex-col h-full">
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-3xl mx-auto gap-4 min-h-0">
      <div className="flex-shrink-0">
        <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-3">
          Welcome.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          How can I help you today?
        </p>
      </div>
      <div className="w-full mt-4 flex-shrink-0">
        <InputForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          onCancel={onCancel}
          hasHistory={false}
        />
      </div>
      <p className="text-xs text-muted-foreground flex-shrink-0">
        Powered by Google Gemini and LangChain LangGraph.
      </p>
    </div>
  </div>
);
