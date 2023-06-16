import HomePage from 'pages/home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	// {
	// 	path: '/',
	// 	element: <LayOut />,
	// 	children: [
	// 		{
	// 			path: '',
	// 			element: <HomePage />,
	// 		},
	// 	],
	// },
	{
		path: '/',
		element: <HomePage />,
	},
]);

export default router;
