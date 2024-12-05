import React, { useEffect, useState } from 'react'
import Header from '../Core/Header'

const AboutHeader = (props) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await fetch('http://localhost/mailapp/headerBackgroundImage.php');
        const data = await response.json();
        setBackgroundImage(data.backgroundImage);
      } catch (error) {
        console.error('Error fetching background image:', error);
      }
    };

    fetchBackgroundImage();
  }, []);
  
  return (
  <div>
    <section className="-mt-10">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[url('/images/bus-img.jpg')] bg-cover bg-center relative" 
         style={{
          backgroundImage: backgroundImage
            ? `url(data:image/jpeg;base64,${backgroundImage})`
            : '/images/default-background.jpg',
        }}
        >
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <Header />
            <h1 className=" text-center w-full text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light font-Kaisei-Decol absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-[#C8F51E] transition-all duration-300 ease-in-out animate-fadeup ">
                 {props.title}
            </h1>
        </div>
    </section>
</div>

 
  )
}

export default AboutHeader
