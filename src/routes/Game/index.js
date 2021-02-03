const GamePage = () => {
	console.log('GamePage');
	const handleClick = ({ onChangePage }) => {
		console.log(onChangePage);
		onChangePage && onChangePage('app');
	};
	return (
		<>
			<div>This is Game Page!!</div>;<button onClick={handleClick}>To HOMEPAGE</button>;
		</>
	);
};

export default GamePage;
