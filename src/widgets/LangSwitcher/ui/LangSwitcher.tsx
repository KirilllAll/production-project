import { FC } from 'react';

import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { EN, RU } from '../const';

interface LangSwitcherProp {
	className?: string;
}

export const LangSwitcher: FC<LangSwitcherProp> = ({ className }) => {
	const { t, i18n } = useTranslation();

	const handleToggle = () => {
		i18n.changeLanguage(i18n.language === RU ? EN : RU);
	};

	return (
		<>
			<Button theme={Button.THEME.CLEAR} className={classNames(cls.lang, {}, [className])} onClick={handleToggle}>
				{t('Язык')}
			</Button>
		</>
	);
};
