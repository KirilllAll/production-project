import { Link } from 'react-router-dom';

import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/config/lib';
import { AppRouter } from 'app/providers/router';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<>
			<div className={classNames('app', {}, [theme])}>
				<Link to={'/'}>Главная</Link>
				<Link to={'/about'}>О сайте </Link>
				<button type='button' onClick={toggleTheme}>
					Переключить тему
				</button>
				<AppRouter />
			</div>
		</>
	);
};

export default App;
