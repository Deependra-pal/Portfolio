import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Reveal from "../components/motion/Reveal";

const NotFound = () => {
  return (
    <div className="bg-[#080c16] text-slate-100 min-h-screen flex items-center justify-center relative overflow-hidden bg-grid-saas">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/5 blur-[100px]" />
      </div>

      <Container className="relative py-20 text-center max-w-md">
        <Reveal y={15}>
          <span className="text-8xl font-black tracking-widest text-slate-800 bg-gradient-to-b from-brand-cyan/20 to-transparent bg-clip-text text-transparent font-display select-none">
            404
          </span>
          <h1 className="mt-6 text-2xl font-extrabold text-white font-display">
            Page Not Found
          </h1>
          <p className="mt-4 text-xs text-slate-400 leading-relaxed font-mono">
            // ERR_ROUTE_NOT_RESOLVED
          </p>
          <p className="mt-2 text-xs text-slate-500 leading-relaxed">
            The page path you are attempting to request does not exist or has been migrated.
          </p>
          <div className="mt-8">
            <Button as={Link} to="/" className="btn-saas-primary text-xs px-8 py-3 rounded-full text-white font-bold shadow-lg">
              Back to Home
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
};

export default NotFound;
