import React from 'react';
import { FaReact } from 'react-icons/fa';
import {
	SiSolidity,
	SiMongodb,
	SiCplusplus,
	SiNodedotjs,
	SiJavascript,
} from 'react-icons/si';

const Skills = () => {
	return (
		<div className="max-w-4xl mx-auto py-12" id="tech">
			<p className="text-2xl text-black text-center sm:text-4xl font-bold">
				Tech I use
			</p>

			<div className="flex flex-wrap items-center justify-center my-4">
				<div
					className="w-40 m-6 flex flex-col justify-center items-center py-12 shadow-2xl rounded-xl"
					data-aos="fade-right"
					data-aos-duration="800"
				>
					<FaReact color="#61DBFB" className="text-5xl" />
					<p className="text-xl mt-6 sm:text-2xl font-bold">React</p>
				</div>
				<div
					className="w-40 m-6  flex flex-col justify-center items-center py-12 shadow-2xl rounded-xl"
					data-aos="fade-down"
					data-aos-duration="800"
				>
					<SiSolidity color="black" className="text-5xl" />
					<p className="text-xl mt-6 sm:text-2xl font-bold">Solidity</p>
				</div>
				<div
					className="w-40 m-6  flex flex-col justify-center items-center py-12 shadow-2xl rounded-xl"
					data-aos="fade-down"
					data-aos-duration="800"
				>
					<SiMongodb color="#569035" className="text-5xl" />
					<p className="text-xl mt-6 sm:text-2xl font-bold">MongoDB</p>
				</div>
				<div
					className="w-40 m-6  flex flex-col justify-center items-center py-12 shadow-2xl rounded-xl"
					data-aos="fade-left"
					data-aos-duration="800"
				>
					<SiNodedotjs color="#3B8238" className="text-5xl" />
					<p className="text-xl mt-6 sm:text-2xl font-bold">NodeJs</p>
				</div>
				<div
					className="w-40 m-6  flex flex-col justify-center items-center py-12 shadow-2xl rounded-xl"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<SiJavascript color="#E8D44D" className="text-5xl" />
					<p className="text-xl mt-6 sm:text-2xl font-bold sm:px-4">
						Javascript
					</p>
				</div>
				<div
					className="w-40 m-6 flex flex-col justify-center items-center py-12 shadow-2xl rounded-xl"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<SiCplusplus color="#007CC7" className="text-5xl" />
					<p className="text-xl mt-6 sm:text-2xl font-bold">C++</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
