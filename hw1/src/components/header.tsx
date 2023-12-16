import { Button } from "@/components/ui/button";

type DashboardHeaderProps = {
  heading: string;
  text?: string;
  children?: React.ReactNode;
};

export function Header({ heading, text, children }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-center p-6 border-b border-primary w-full">
      <div className="flex gap-1">
        <h1 className="font-heading text-3xl md:text-4xl justify-center">
          {heading}
        </h1>
        {text && <p className="text-lg text-muted-foreground">{text}</p>}
      </div>
      {children ?? (
        <Button variant="outline" className="ml-auto">
          Button
        </Button>
      )}
    </div>
  );
}
