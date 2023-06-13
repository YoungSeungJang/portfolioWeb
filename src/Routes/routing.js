import { createBrowserRouter } from 'react-router-dom';

import PrivateRoute from './private';

import LandingPage from '../Pages/Landing/index';
import MarketPricePage from '../Pages/MarketPrice';
import MyPage from '../Pages/MyPage';
import MyItemPage from '../Pages/MyPage/MyItem/myItem';
import SearchListPage from '../Pages/SearchList';
import ItemDetailPage from 'Pages/ItemDetail';
import RegisterPage from 'Pages/Register';
import MyInterestPage from 'Pages/MyPage/MyInterest/myInterest';
import AccountBookPage from 'Pages/MyPage/MyAccountBook';
import MainPage from 'Pages/Main';
import ReviewPage from 'Pages/Review';
import YourProfile from 'Pages/YourProfile';
import WholeListPage from 'Pages/SearchList/components/wholeList';
import MyPasswordEdit from 'Pages/MyPage/MyUserEdit/MyPasswordEdit/myPasswordEdit';
import MyUserEdit from 'Pages/MyPage/MyUserEdit/myUserEdit';
import MyReview from 'Pages/MyPage/MyReview/MyReview';
import ChattingPage from 'Pages/Chat';
import ReviewDetail from 'Pages/Review/reviewDetail';
import ReviewEditPage from 'Pages/Review/reviewEdit';
import LayOut from '../Components/Layout';
import ErrorPage from 'Error';
import ScrollToTop from 'Components/ScrollToTop/ScrollToTop';
import LoginPage from 'Pages/Landing/Form/Login/LoginPage';
import SignUpPage from 'Pages/Landing/Form/SignUp/SignUpPage';

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
