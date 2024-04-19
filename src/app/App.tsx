import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib';
import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
	const { theme } = useTheme();

	return (
		<>
			<div className={classNames('app', {}, [theme])}>
				<Suspense fallback=''>
					<Navbar />
					<div className='content-page'>
						<Sidebar />
						<AppRouter />
					</div>
				</Suspense>
			</div>
		</>
	);
};

export default App;
