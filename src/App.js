import About from './components/About';
import Card from './components/Card';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		Aos.init({
			once: true,
		});
	}, []);

	return (
		<div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
			<div data-aos="fade-down" data-aos-duration="800">
				<Card />
			</div>
			<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
				<About />
			</div>
			<Skills />
			<ContactUs />
			<Footer />
		</div>
	);
}

export default App;
