import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY_THEME, Theme, ThemeContext } from '../lib/ThemeContext';


const initialState = (localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(initialState);

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
