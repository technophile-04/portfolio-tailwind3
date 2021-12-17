import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ContactUs = () => {
	return (
		<div className="max-w-4xl mx-auto flex flex-col items-center justify-center my-20">
			<p className="text-center text-2xl md:text-4xl font-semibold text-black">
				Intersed in working together ?
			</p>
			<a
				className="bg-black text-white p-3 rounded-xl mt-7 inline-block"
				href="mailto:shivbhonde04@gmail.com"
			>
				Get in touch &nbsp;
				<AiOutlineArrowRight className="inline animate-pulse" />
			</a>
		</div>
	);
};

export default ContactUs;
