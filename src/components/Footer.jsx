import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
	return (
		<div className="py-4 flex items-center flex-col">
			<div className="mt-3 pl-3  flex justify-center">
				<a
					href="https://github.com/technophile-04"
					className="text-xl hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 inline-block p-1 mr-3"
				>
					<FaGithub />
				</a>
				<a
					href="https://github.com/technophile-04"
					className="text-xl hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-blue-500 mr-3"
				>
					<FaLinkedin className="rounded-lg" />
				</a>
				<a
					href="https://github.com/technophile-04"
					className="text-xl hover:bg-pink-500 rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-pink-500 mr-3"
				>
					<AiFillInstagram />
				</a>
			</div>

			<p className="mt-3">
				{' '}
				Made with 💜 by{' '}
				<a
					href="https://github.com/technophile-04"
					className="no-underline text-blue-500 hover:underline"
				>
					Shiv Bhonde
				</a>{' '}
			</p>
		</div>
	);
};

export default Footer;
