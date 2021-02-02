import { useState } from 'react';

import HomePage from './routes/Home';
import GamePage from './routes/Game';

const App = () => {
	const [page, setPage] = useState('app');

	switch (page) {
		case 'app':
			return <HomePage />;
		case 'game':
			return <GamePage />;
		default:
			return <HomePage />;
	}
};

export default App;
