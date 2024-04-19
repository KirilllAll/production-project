import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button } from 'shared/ui';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const { t } = useTranslation();

	const handleToggle = () => setCollapsed((prev) => !prev);

	return (
		<div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button theme={Button.THEME.BORDER} onClick={handleToggle}>
				{t('Переключить')}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
