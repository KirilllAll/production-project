import { Link, Route, Routes } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import { AboutPageAsync } from './pages/About.async';
import { MainPageAsync } from './pages/Main.async';
import './styles/index.scss';

import useTheme from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

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
				<Suspense fallback={<div>Загрузка...</div>}>
					<Routes>
						<Route path='/about' element={<AboutPageAsync />} />
						<Route path='/' element={<MainPageAsync />} />
					</Routes>
				</Suspense>
			</div>
		</>
	);
};

export default App;
