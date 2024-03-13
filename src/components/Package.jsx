import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import { IoShareSocial } from 'react-icons/io5';
const Package = () => {
	const packageArr = [
		{
			id: 1,
			image: image1,
			name: 'Couple puja',
			desc: 'Get the blessings for your Family',
			price: '901',
		},
		{
			id: 2,
			image: image2,
			name: 'Single puja',
			desc: 'Get the blessings for your Family',
			price: '1101',
		},
		{
			id: 3,
			image: image3,
			name: 'Small Family Puja',
			desc: 'Get the blessings for your Family',
			price: '1301',
		},
		{
			id: 4,
			image: image4,
			name: 'Big Family Puja',
			desc: 'Get the blessings for your Family',
			price: '1501',
		},
	];

	return (
		<div className='mt-8 md:px-6 px-2'>
			<h1 className='text-3xl text-purple-500 text-center font-bold'>Packages</h1>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-14 mt-12 md:mx-16 mx-2'>
				{packageArr.map((i) => (
					<div
						key={i.id}
						className='w-full flex flex-col rounded-xl overflow-hidden border-2 border-purple-500 relative'
					>
						<img
							src={i.image}
							alt={i.name}
							className='object-cover h-40'
						/>
						<button className='absolute top-2 right-2 bg-white rounded-full p-2 text-purple-500'>
							<IoShareSocial />{' '}
						</button>
						<div className='md:px-4 px-1 my-2 flex justify-between'>
							<div>
								<h2 className='md:text-xl text-lg font-bold'>{i.name}</h2>
								<p className='md:text-base text-sm'>{i.desc}</p>
							</div>
							<div className='flex items-center md:gap-3 gap-1'>
								<h4 className='md:text-lg text-sm font-medium text-gray-800'>Price : </h4>
								<span className='text-sm md:text-base'> Rs. {i.price}</span>
							</div>
						</div>
						<button className='ml-auto md:mr-6 mr-2 bg-purple-500 text-white px-6 text-center  py-2 rounded-md mb-4 hover:bg-opacity-90'>
							Book Now
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Package;
