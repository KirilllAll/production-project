import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/config/lib';
import './styles/index.scss';

const App = () => {
	const { theme } = useTheme();

	return (
		<>
			<div className={classNames('app', {}, [theme])}>
				<Navbar />

				<AppRouter />
			</div>
		</>
	);
};

export default App;
