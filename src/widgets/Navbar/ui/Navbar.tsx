import { classNames } from 'shared/config/lib';
import cls from './Navbar.module.scss';
import { FC } from 'react';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
console.log(cls.navbar);

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY}  to={'/about'}>О сайте </AppLink>
			</div>
		</div>
	);
};
