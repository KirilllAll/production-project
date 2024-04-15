import { Suspense } from 'react';
import { Routes } from 'react-router-dom';
import { getRoutes, routesConfig } from 'shared/config/lib';

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<Routes>{getRoutes(routesConfig)}</Routes>
		</Suspense>
	);
};
