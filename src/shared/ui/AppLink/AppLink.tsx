import { FC, ReactNode } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const { to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

	return (
		<Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</Link>
	);
};
