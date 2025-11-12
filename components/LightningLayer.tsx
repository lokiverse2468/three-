type LightningLayerProps = {
  className?: string;
};

export function LightningLayer({ className }: LightningLayerProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <span className="lightning-flash lightning-flash--primary" />
      <span className="lightning-flash lightning-flash--accent" />
      <span className="lightning-flash lightning-flash--wide" />
    </div>
  );
}


