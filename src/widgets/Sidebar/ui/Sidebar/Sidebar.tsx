import { FC, useState } from 'react';
import { classNames } from 'shared/config/lib';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const handleToggle = () => setCollapsed((prev) => !prev);

	return (
		<div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={handleToggle}>TOGGLE</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				// языковой мод
			</div>
		</div>
	);
};
