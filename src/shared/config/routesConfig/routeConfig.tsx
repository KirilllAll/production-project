import { Route, RouteProps } from 'react-router-dom';
import { AboutPageAsync as AboutPage } from 'pages/AboutPages';
import { MainPageAsync as MainPage } from 'pages/MainPages';
import { Suspense } from 'react';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
};

export const routesConfig: Array<RouteProps> = [
	{
		path: RoutePaths.main,
		element: <MainPage />,
	},
	{
		path: RoutePaths.about,
		element: <AboutPage />,
	},
];

export const getRoutes = (config: RouteProps[]) =>
	config.map(({ path, element }) => (
		<Route
			key={path}
			path={path}
			element={
				<Suspense fallback={<div>Загрузка...</div>}>
					<div className='page-wrapper'>{element}</div>
				</Suspense>
			}
		/>
	));
