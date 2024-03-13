import person from '../assets/person.png';
import person2 from '../assets/person2.png';

const Testimonials = () => {
	return (
		<div className='my-16 md:px-6 px-2'>
			<h1 className='text-3xl text-purple-500 text-center font-bold'>Testimonials</h1>
			<h3 className='text-center text-purple-500 text-3xl'>Customer Reviews</h3>
			<div className='mt-8 md:mx-16 mx-0 grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-2'>
				<div className='rounded-2xl overflow-hidden border-2 border-purple-500 md:mr-0 mr-14'>
					<p className='p-3 md:text-base text-sm'>
						Booking a puja online was a delightful experience from start to finish. The website was easy to navigate, and the booking process was simple
						and straightforward. The puja ceremony was conducted with great reverence, and I could feel the positive energy flowing throughout. I highly
						recommend Vedaz for anyone looking to book a puja online.
					</p>
					<div className='bg-gradient-to-r from-[#501873] to-[#A62563] flex justify-end md:py-3 py-1 text-white'>
						<div className='flex gap-3 items-center mr-7'>
							<img
								src={person2}
								alt='person'
								className='md:w-10 md:h-10 h-8 w-8 rounded-full'
							/>
							<div className='flex flex-col md:text-base text-sm'>
								<span> Isha Sharma</span>
								<span>4.5 * * * *</span>
							</div>
						</div>
					</div>
				</div>
				<div></div>
				<div></div>
				<div className='rounded-2xl overflow-hidden border-2 border-purple-500 md:mr-0 ml-14'>
					<p className='p-3 md:text-base text-sm'>
						I had a wonderful experience booking a puja online with Vedaz. The website was user-friendly, and the customer service team was very helpful
						and responsive to all my queries. The pandits who conducted the puja were knowledgeable and conducted the ceremony with utmost devotion. I
						felt a deep sense of peace and positivity after the puja.
					</p>
					<div className='bg-gradient-to-r from-[#501873] to-[#A62563] flex justify-end md:py-3 py-1 text-white'>
						<div className='flex gap-3 items-center mr-7'>
							<img
								src={person}
								alt='person'
								className='md:w-10 md:h-10 h-8 w-8 rounded-full'
							/>
							<div className='flex flex-col md:text-base text-sm'>
								<span> Divy Aggraval</span>
								<span>4.8 * * * *</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
