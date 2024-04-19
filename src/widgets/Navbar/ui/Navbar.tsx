import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { FC } from 'react';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
					{t('Главная страница')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                {t('О сайте')}
				</AppLink>
			</div>
		</div>
	);
};
