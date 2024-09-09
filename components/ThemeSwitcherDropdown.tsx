import { useState, useEffect } from "react";

export default function ThemeSwitcherDropdown() {
  const [theme, setTheme] = useState<"light" | "dark" | "default">("default");

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = window.localStorage.getItem("theme");
    if (initialTheme) {
      setTheme(initialTheme as "light" | "dark" | "default");
      root.classList.add(initialTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.add("light");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown mb-72">
      <label tabIndex={0} className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
      >
        <li>
          <button
            className="btn btn-sm btn-block btn-ghost justify-start"
            onClick={() => setTheme("default")}
          >
            Default
          </button>
        </li>
        <li>
          <button
            className="btn btn-sm btn-block btn-ghost justify-start"
            onClick={() => setTheme("light")}
          >
            Light
          </button>
        </li>
        <li>
          <button
            className="btn btn-sm btn-block btn-ghost justify-start"
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
        </li>
      </ul>
    </div>
  );
}
