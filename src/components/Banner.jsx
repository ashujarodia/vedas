const Banner = () => {
	const img =
		'https://s3-alpha-sig.figma.com/img/f105/8749/868c029ff7ab5635ac6d9ade71ef3157?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nxu~ATG4HqjOx2PI~utzhMl7l3IM5HGx4nzQE5NwB3YvAHz2bkXo2v8R7TsSmtfBrIM1m9d1HAhVZlMX6w~Ih~f0i4YyiNBH3d59Rf~qDKdCnmvTJZChL7Q-oDbzWvqyrGVACiNZNf5LnJvBaIMb7DMTbrUeO5PvXv~hOcYzU2MZYNeXvmc7v2GphM5nvZI-1pmexqZGgbAFYtgpJIQBVrPSFow5z-SQPY8pJQl8-wChhbvcgAz845HY8EaYJPk6NW9vRkGNkijTmz9RzmhqM~U88IbUYWOy8~tkSJuDfpSQ9bw-3-eesRCYUsGaE5cS1MiL7UWUxiROdv6IotIbyQ__';

	return (
		<div className='w-full h-[80vh] md:h-[100vh]'>
			<img
				src={img}
				alt='banner image'
				className='object-cover w-full h-full'
			/>
		</div>
	);
};

export default Banner;
