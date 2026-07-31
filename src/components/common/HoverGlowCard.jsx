import TiltCard from "../motion/TiltCard";

const HoverGlowCard = ({ children, className = "", tilt = true }) => {
  const content = (
    <div className={`glow-card h-full w-full ${className}`}>
      <div className="glow-card-content h-full w-full">
        {children}
      </div>
    </div>
  );

  if (tilt) {
    return (
      <TiltCard maxTilt={8} scale={1.015} glare={true} className="h-full w-full">
        {content}
      </TiltCard>
    );
  }

  return content;
};

export default HoverGlowCard;
