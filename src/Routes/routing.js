import LayOut from 'components/layout';
import HomePage from 'pages/home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayOut />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
		],
	},
]);

export default router;
