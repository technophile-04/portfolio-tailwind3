import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import PrfilePic from './images/pic.png';
const Card = () => {
	return (
		<div className="w-full">
			<div className="flex flex-col  items-center max-w-xs mx-auto p-5 bg-white rounded-xl shadow-xl">
				<div>
					<img
						src={PrfilePic}
						alt="myImage"
						className="w-32 drop-shadow-xl shadow-lg rounded-full p-0.5 shadow-orange-500/50"
					/>
				</div>
				<div className="mt-5 text-center">
					<p className="text-xl sm:text-2xl font-semibold">Shiv Bhonde</p>
					<p className="text-xs text-center text-gray-500 inline-block pb-3 pt-2 px-5  sm:text-base font-semibold  border-b-2 border-gray-200">
						React / Blockchain Developer
					</p>
					<div className="mt-3 flex justify-evenly">
						<a
							href="https://github.com/technophile-04"
							className="text-xl hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 inline-block p-1"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/shiv-bhonde-b23a1a205/"
							className="text-xl hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-blue-500"
						>
							<FaLinkedin className="rounded-lg" />
						</a>
						<a
							href="https://www.instagram.com/shiv_bhonde/"
							className="text-xl hover:bg-pink-500 rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-pink-500"
						>
							<AiFillInstagram />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
