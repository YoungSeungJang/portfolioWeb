import { createBrowserRouter } from 'react-router-dom';

import ChattingPage from 'Pages/Chat';
import LayOut from '../Components/Layout';

const router = createBrowserRouter([
	{
		element: <LayOut />,
		children: [
			{
				path: 'chat',
				element: <ChattingPage />,
			},
		],
	},
]);

export default router;
