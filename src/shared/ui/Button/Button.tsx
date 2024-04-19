import { ButtonHTMLAttributes, FC, FunctionComponent } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
    BORDER = 'border'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
	const { className, children, theme, ...otherProps } = props;

	return (
		<button className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</button>
	);
};

Button.THEME = ThemeButton;
