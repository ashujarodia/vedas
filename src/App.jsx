import './App.css';
import AboutPuja from './components/AboutPuja';
import Banner from './components/Banner';
import InstallButton from './components/InstallButton';
import Navbar from './components/Navbar';
import Package from './components/Package';
import PujaDetails from './components/PujaDetails';
import Testimonials from './components/Testimonials';

function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<AboutPuja />
			<Package />
			<PujaDetails />
			<Testimonials />
			<InstallButton />
		</>
	);
}

export default App;
