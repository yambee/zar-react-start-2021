import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header title="Плейсходлер для 3 домашки" descr="Описание" />
			<Layout />
			<Layout />
			<Layout />
			<Footer />
		</>
	);
}

export default App;
