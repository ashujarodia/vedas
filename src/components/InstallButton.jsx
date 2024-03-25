import { useEffect, useState } from 'react';
import { LuArrowDownToLine } from 'react-icons/lu';

const InstallButton = () => {
	const [deferredPrompt, setDeferredPrompt] = useState(null);
	const [isAppInstalled, setIsAppInstalled] = useState(false);

	useEffect(() => {
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			setDeferredPrompt(e);
		});
		// Check if the app is already installed
		if (window.matchMedia('(display-mode: standalone)').matches) {
			setIsAppInstalled(true);
		}
	}, []);

	const handleInstallClick = () => {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the install prompt');
				}
				setDeferredPrompt(null);
			});
		}
	};
	return (
		<div>
			{isAppInstalled ? (
				// Render something else when the app is installed
				<div style={{ margin: '5rem' }}>{/* You can render other content here */}</div>
			) : (
				// Render the install button
				<div className='mt-8 md:mt-16 mx-3'>
					<div className='flex flex-col text-center w-full mb-4'>
						<h1 className='sm:text-2xl text-xl font-semibold title-font text-gray-700'>Install the App Now</h1>
					</div>
					<div className='w-full flex justify-center'>
						<button
							onClick={handleInstallClick}
							className='flex items-center gap-2 bg-red-500 px-4 py-1 shadow-sm'
						>
							<span className='text-white'>Install</span>
							<LuArrowDownToLine
								size={22}
								color='white'
							/>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default InstallButton;
