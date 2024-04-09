import { createContext } from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    
}

interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_KEY_THEME = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
