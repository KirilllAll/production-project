import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes } from 'react-router-dom';
import { getRoutes, routesConfig } from 'shared/lib';

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<Routes>{getRoutes(routesConfig)}</Routes>
		</Suspense>
	);
};
