import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const PujaDetails = () => {
	const fqaArray = [
		{
			id: 1,
			question: 'Is this really a LIVE puja performed at temple?',
			answer: 'YES, it is. We have our infrastructure deployed in select temples and we plan to add more in the future. When you buy a ticket, Temple will  be sent your details and Pujari will perform in santum santorium with your Gotranama ( Names & Gotra)',
		},
		{
			id: 2,
			question: 'Can I perform puja in temple of my choice?',
			answer: 'Not Possible. We are partnered with Select Temples (popular enough)with which we have agreement and we only provide Puja Services of those temples. All Pujas offered Starts with your Gotranama, Sankalp(Reason) and ends with Aarti as applicable',
		},
		{
			id: 3,
			question: 'What if I am not able to watch LIVE puja?',
			answer: 'For all Puja Services that are offered, we cut and Upload a recorded version of Puja (Sankalp video for Long Pujas like Abhishek/Kalyan or Full Puja like Archana) to our Youtube Channel after 5 hours of Offering. (Any Power and Internet failure may delay sometimes but rarely)',
		},
		{
			id: 4,
			question: 'Can I offer any Dakshina to priest?',
			answer: 'Yes you can. There is a column in the booking form where you can enter a amount of choice and we will pay the amount to Pujari directly. You can also request for a separate payment link if availing any Puja Package',
		},
		{
			id: 5,
			question: 'How to contact you if I don’t find answer to my question?',
			answer: 'If you have any specific question which ONLY relates to Puja Services we Offer, you can send a WhatsApp message to our Official Number',
		},
	];

	const [isOpenArray, setIsOpenArray] = useState(fqaArray.map(() => false));

	const toggleItem = (index) => {
		setIsOpenArray((prevState) => {
			const newState = [...prevState];
			newState[index] = !newState[index];
			return newState;
		});
	};

	return (
		<div className='mt-16 md:px-6 px-2'>
			<h1 className='text-3xl text-purple-500 text-center font-bold'>Puja Details</h1>
			<h3 className='text-center text-purple-500 font-medium'>Frequently asked questions</h3>
			<div className='md:mx-16 mx-0 mt-8'>
				{fqaArray.map((item, index) => (
					<div
						className='border-b border-b-black pb-4 mb-8 overflow-hidden'
						key={item.id}
					>
						<div className='flex justify-between'>
							<h3 className='md:text-xl text-base font-semibold'>{item.question}</h3>
							<button
								className='text-xl'
								onClick={() => toggleItem(index)}
							>
								{isOpenArray[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
							</button>
						</div>
						{isOpenArray[index] && <p className='mt-3 text-sm md:text-base'>{item.answer}</p>}
					</div>
				))}
			</div>
		</div>
	);
};

export default PujaDetails;
