import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button } from 'shared/ui';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={Button.THEME.CLEAR}
			className={classNames(cls.themeToggle, {}, [className])}
			type='button'
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
