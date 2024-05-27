// HeroSection.jsx


const HeroSection = () => {
  return (
    <div className="hero-section w-full">
    <div className=' flex'>
    <div className=" m-40 -translate-y-40 space-y-8">
    <h1 className=" text-black text-7xl underline"><strong>Tailor-Made Travel</strong></h1>
      <p className="lead">All of our travel services includes little extras designed to make a<br/> big difference to your trip, from fast-tracking you through airport<br/> check-in and security to our network of local concierges.</p>
    </div>
    <div><img src='https://vignettesinsights.com/assets/images/care2.png' alt='care2' className='bg-contain'/></div>
    </div>
     
    </div>
  );
};

export default HeroSection;
