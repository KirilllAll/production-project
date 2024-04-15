import { useContext } from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_KEY_THEME } from './ThemeContext';

interface UseThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme);
	};

	return {
		theme: theme,
		toggleTheme: toggleTheme,
	};
};
