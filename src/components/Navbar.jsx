import { useState } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className='md:h-16 h-14 bg-purple-500 text-white relative'>
			<div className='flex items-center h-full md:mx-14 mx-4 justify-between'>
				<h1 className='md:text-3xl text-2xl font-logo cursor-pointer'>Vedas</h1>

				{/* For desktop */}
				<div className='ml-auto gap-8 items-center hidden md:flex'>
					<ul className='flex gap-8 text-lg'>
						<li className='cursor-pointer hover:border-b border-b-white'>Home</li>
						<li className='cursor-pointer hover:border-b border-b-white'>Astrologers</li>
						<li className='cursor-pointer hover:border-b border-b-white'>Horoscope</li>
						<li className='cursor-pointer hover:border-b border-b-white'>Puja</li>
						<li className='cursor-pointer hover:border-b border-b-white'>Kundli</li>
						<li className='cursor-pointer hover:border-b border-b-white'>Love Calculator</li>
						<li className='cursor-pointer hover:border-b border-b-white'>Compatibility</li>
					</ul>
					<div className='border-2 border-white rounded-full p-1 text-sm cursor-pointer'>
						<FaUser />
					</div>
				</div>

				{/* For mobile */}
				<button
					className='text-xl md:hidden'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<FaBars />
				</button>

				<div
					className={`bg-purple-500 fixed min-h-screen top-16 w-44 right-0 transition md:hidden transform duration-300 ${
						menuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					<div className='flex flex-col justify-center items-center gap-8 mt-8'>
						<ul className='flex flex-col items-center gap-8'>
							<li className='cursor-pointer hover:border-b border-b-white'>Home</li>
							<li className='cursor-pointer hover:border-b border-b-white'>Astrologers</li>
							<li className='cursor-pointer hover:border-b border-b-white'>Horoscope</li>
							<li className='cursor-pointer hover:border-b border-b-white'>Puja</li>
							<li className='cursor-pointer hover:border-b border-b-white'>Kundli</li>
							<li className='cursor-pointer hover:border-b border-b-white'>Love Calculator</li>
							<li className='cursor-pointer hover:border-b border-b-white'>Compatibility</li>
						</ul>
						<div className='border-2 border-white rounded-full p-2'>
							<FaUser />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
