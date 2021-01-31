import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import bg1 from './assets/bg1.jpg';

function App() {
	return (
		<>
			<Header title="Плейсходлер для 3 домашки" descr="Описание" />
			<Layout id="1" title="" descr="" urlBg={bg1} colorBg="" />
			<Layout id="2" title="" descr="" urlBg="" colorBg="yellow" />
			<Layout id="3" title="" descr="" urlBg={bg1} colorBg="" />
			<Footer />
		</>
	);
}

export default App;
