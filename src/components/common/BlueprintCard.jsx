const BlueprintCard = ({ children, className = "" }) => {
  return (
    <div className={`blueprint-card relative ${className}`}>
      {/* Drafting table coordinate crosshairs */}
      <span className="absolute top-1.5 left-2 font-mono text-[9px] text-slate-700 pointer-events-none select-none select-none" aria-hidden="true">+</span>
      <span className="absolute top-1.5 right-2 font-mono text-[9px] text-slate-700 pointer-events-none select-none select-none" aria-hidden="true">+</span>
      <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-slate-700 pointer-events-none select-none select-none" aria-hidden="true">+</span>
      <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-slate-700 pointer-events-none select-none select-none" aria-hidden="true">+</span>
      
      <div className="h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default BlueprintCard;
