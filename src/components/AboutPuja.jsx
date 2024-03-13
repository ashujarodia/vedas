import icon from '../assets/pray.png';
import lamp from '../assets/lamp.png';
import hands from '../assets/hands.png';

const AboutPuja = () => {
	const aboutPujaArr = [
		{
			id: 1,
			content: 'The festive season of India is earmarked by the worshipping and celebration of Goddess Durga. It generally occurs in the month of September-October.',
		},
		{
			id: 2,
			content: 'The entire nation becomes more colourful and celebrates the fact of good’s win over evil. Goddess Durga is considered to be the physical form of ‘Shakti’ or ‘Universal Energy’.',
		},
		{
			id: 3,
			content: 'Online puja, also known as e-puja or virtual puja, is a modern approach to performing traditional Hindu rituals through digital platforms. It allows individuals to participate in religious ceremonies and seek blessings from the comfort of their homes, regardless of geographical location.',
		},
		{
			id: 4,
			content: 'Online puja services offer convenience and accessibility, especially for those who may not have access to local temples or priests. However, its important to choose a reputable service provider to ensure the authenticity and sanctity of the rituals.',
		},
	];

	return (
		<div className='mt-10 w-full md:px-6 px-2'>
			<div className='w-full flex flex-col items-center justify-center'>
				<h1 className='md:text-4xl text-2xl font-bold text-purple-500 font-inika text-center'>22121 Kundiye Shri Ramyagya Evam Shri Ram Katha</h1>
				<div className='flex mt-5 items-center gap-2'>
					<img
						src={icon}
						alt='icon'
						className='md:w-8 md:h-8 h-6 w-6'
					/>
					<h2 className='md:text-2xl text-lg font-bold'>Ayodhyda Dham special</h2>
					<img
						src={icon}
						alt='icon'
						className='md:w-8 md:h-8 h-6 w-6'
					/>
				</div>
			</div>
			<div className='my-6 flex justify-center items-center'>
				<span className='w-full h-0.5 bg-gray-600'></span>
				<span className='md:text-lg whitespace-nowrap md:px-4 px-1'>10,000 puja’s conducted</span>
				<span className='w-full h-0.5 bg-gray-600'></span>
			</div>
			<div className='mt-6 flex md:flex-row flex-col-reverse gap-3 w-full'>
				<div className='md:w-2/3 md:px-8 px-2 md:mt-0 mt-8'>
					<h1 className='flex gap-2 items-center text-gray-800 font-bold text-xl'>
						<span className='h-6 w-0.5  bg-[#FFE362]'></span>About Puja
					</h1>
					<ul className='my-3'>
						{aboutPujaArr.map((i) => (
							<li
								className='flex gap-2 mt-4'
								key={i.id}
							>
								<img
									src={lamp}
									alt='lamp'
									className='w-5 h-5'
								/>
								<p className='md:text-base text-sm'>{i.content}</p>
							</li>
						))}
					</ul>
				</div>
				<div className='bg-[#EEE8F1] rounded-md px-4 py-2 md:w-1/3 overflow-hidden shadow-md'>
					<div>
						<h1 className='text-[#501873] text-xl font-bold mt-2'>Book Now</h1>
						<div className='flex flex-col mt-4'>
							<label className='text-[#00000099]'>Birth Details</label>
							<div className='flex gap-2 w-full mt-1'>
								<input
									type='number'
									placeholder='DD'
									className='border border-black rounded-md w-1/3 px-1 placeholder:text-gray-500 placeholder:font-semibold'
								/>
								<input
									type='number'
									placeholder='MM'
									className='border border-black rounded-md w-1/3 px-1 placeholder:text-gray-500 placeholder:font-semibold'
								/>
								<input
									type='number'
									placeholder='YYYY'
									className='border border-black rounded-md w-1/3 px-1 placeholder:text-gray-500 placeholder:font-semibold'
								/>
							</div>
						</div>
						<div className='flex flex-col mt-3'>
							<label className='text-[#00000099]'>Venue</label>
							<input
								type='text'
								placeholder='Enter Your Venue'
								className='mt-1 border-b bg-transparent border-b-[#00000080] focus:outline-none'
							/>
						</div>
						<div className='mt-6 flex justify-between items-end'>
							<img
								src={hands}
								alt='hands'
								className='md:w-24 md:h-28 w-16 h-16'
							/>
							<img
								src={hands}
								alt='hands'
								className='md:w-36 md:h-36 h-28 w-28'
							/>
							<img
								src={hands}
								alt='hands'
								className='md:w-24 md:h-28 w-16 h-16'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPuja;
