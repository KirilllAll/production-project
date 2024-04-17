import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/config/lib';
import './styles/index.scss';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<>
			<div className={classNames('app', {}, [theme])}>
				<Navbar />
				<button type='button' onClick={toggleTheme}>
					Переключить тему
				</button>
				<AppRouter />
			</div>
		</>
	);
};

export default App;
