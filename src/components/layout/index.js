import { Outlet } from 'react-router-dom';
import BasicHeader from './header';
import BasicFooter from './footer';

const LayOut = () => {
	return (
		<>
			<BasicHeader />
			<Outlet />
			<BasicFooter />
		</>
	);
};

export default LayOut;
