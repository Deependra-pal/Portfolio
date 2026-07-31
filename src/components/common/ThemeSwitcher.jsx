import { useEffect, useState } from "react";

const themes = [
  { id: "flowpilot", name: "FlowPilot Violet", color: "#6366f1" },
  { id: "obsidian", name: "Obsidian Zinc", color: "#ffffff" },
  { id: "emerald", name: "Cyber Emerald", color: "#10b981" },
  { id: "ice", name: "Nordic Ice", color: "#38bdf8" },
];

const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState("flowpilot");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-selection") || "flowpilot";
    setActiveTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const changeTheme = (themeId) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("theme-selection", themeId);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen ? (
        <div className="mb-2 flex flex-col gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950/95 p-2 shadow-2xl backdrop-blur-md">
          <p className="px-2 pb-1 text-[9px] font-bold uppercase tracking-wider text-zinc-500 font-display">
            Select Style Theme
          </p>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => changeTheme(t.id)}
              className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[10px] font-semibold transition-colors w-36 text-left ${
                activeTheme === t.id
                  ? "bg-zinc-900 text-white border border-zinc-800"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white border border-transparent"
              }`}
            >
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ backgroundColor: t.color }}
              />
              {t.name}
            </button>
          ))}
        </div>
      ) : null}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/90 px-4 py-2.5 shadow-xl backdrop-blur-md hover:border-zinc-700 transition"
      >
        <span
          className="h-2 w-2 rounded-full animate-pulse"
          style={{
            backgroundColor: themes.find((t) => t.id === activeTheme)?.color || "#6366f1",
          }}
        />
        <span className="font-display text-[10px] font-bold uppercase tracking-wider text-white">
          Style Theme
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
