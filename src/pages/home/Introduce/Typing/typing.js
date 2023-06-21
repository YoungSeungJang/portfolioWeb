// import { useEffect } from 'react';
// import { useState } from 'react';

// const Typing = () => {
// 	const [text, setText] = useState('');
// 	const [count, setCount] = useState(0);
// 	const completionWord = '안녕하세요 프론트엔드 개발자 장영승 입니다';

// 	useEffect(() => {
// 		const typingInterval = setInterval(() => {
// 			setText(prevTitleValue => {
// 				let result = prevTitleValue
// 					? prevTitleValue + completionWord[count]
// 					: completionWord[0];
// 				setCount(count + 1);

// 				if (count >= completionWord.length) {
// 					setCount(0);
// 					setText('');
// 				}

// 				return result;
// 			});
// 		}, 200);

// 		return () => {
// 			clearInterval(typingInterval);
// 		};
// 	});
// 	return <h1 style={{ color: 'white' }}>{text}</h1>;
// };

// export default Typing;
