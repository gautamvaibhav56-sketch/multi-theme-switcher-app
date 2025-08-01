import { createContext, useState, ReactNode, useEffect } from "react";
import ThemeOne from "../pages/ThemeOne";
import ThemeTwo from "../pages/ThemeTwo";
import ThemeThree from "../pages/ThemeThree";

/**
 * Interface defining a single theme configuration.
 * Each theme includes an id, display name, and the component to render.
 */
export interface ThemeConfigItem {
  id: number;
  name: string;
  component: React.ComponentType;
}

/**
 * Interface defining the shape of the ThemeContext.
 */
interface ThemeContextType {
  theme: number;
  setTheme: (index: number) => void;
  themeConfig: ThemeConfigItem[];
}

// Create the ThemeContext with default values (will be overridden by the provider)
export const ThemeContext = createContext<ThemeContextType>({
  theme: 0,
  setTheme: () => {},
  themeConfig: [],
});

/**
 * ThemeProvider component that manages theme state and persistence.
 * Wrap this around your app to provide theme context to all components.
 */
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Load theme from localStorage or default to 0
  const [theme, setTheme] = useState<number>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== null ? Number(savedTheme) : 0;
  });

  // Theme configuration array with available themes
  const themeConfig: ThemeConfigItem[] = [
    { id: 0, name: "Theme 1", component: ThemeOne },
    { id: 1, name: "Theme 2", component: ThemeTwo },
    { id: 2, name: "Theme 3", component: ThemeThree },
  ];

  // Persist theme selection in localStorage on change
  useEffect(() => {
    console.log("setting theme to localStorage:", theme);
    localStorage.setItem("theme", theme.toString());
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
