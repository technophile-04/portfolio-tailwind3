import React from 'react';
import ScrollTo from 'react-scroll-into-view';
import { FaChevronDown } from 'react-icons/fa';

const About = () => {
	return (
		<div className="max-w-4xl min-w-full mt-20 p-1">
			<p className="text-2xl font-extrabold text-center md:text-4xl">
				{' '}
				Hey 👋🏼{' '}
			</p>
			<p className="text-center mt-3 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto sm:mt-4">
				I'm a passionate Web and Blockchain developer, I like learning how new
				technologies function and to implement them.Apart from I like to play
				football ⚽️
			</p>

			<ScrollTo selector="#tech">
				<div className="p-20 mt-8">
					<FaChevronDown className="mx-auto text-3xl md:text-4xl animate-bounce text-blue-600 " />
				</div>
			</ScrollTo>
		</div>
	);
};

export default About;
