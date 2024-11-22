import React from 'react';
import AboutHeader from './AboutHeader';
import AboutFooter from './AboutFooter';



const ConferenceTracks = () => {
  return (
    <div>
    <AboutHeader  title={"EARLIER CONFERENCES"}/>
    <section className="bg-[#0B0A2A]">
    <div className="mt-20 bg-black">
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Kaisei-Decol text-[#C8F51E] p-1 lg:p-0">
            First International Conference on Modern Research in <br />Engineering Science and Technology <br />
            (ICMREST-2018)
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl text-bold font-Helvetica my-10">
            conducted on 7th April, 2018 at V.R.S. College of Engineering and Technology, Arasur - 607 <br />107, Villupuram District.
        </p>
        <hr className="max-w-[46rem] h-1 bg-black border-0 mx-auto"></hr>
        <div className="flex justify-center items-center flex-col">
            <img
                src="/images/ICMREST.jpg"
                alt="image"
                className="w-full sm:w-[50rem] md:w-[60rem] h-auto mb-20"
            />
        </div>
    </div>

    <div className="mt-20">
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Kaisei-Decol text-[#C8F51E] p-1 lg:p-0">
            Second International Conference on Veracity Research in <br />Scientific Computation and Engineering Trends <br />
            (ICVRSCET-2019)
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl text-bold font-Helvetica my-10 p-1 lg:p-0">
            Inaugurated by Dr. Gunasekaran Manogaran, Big Data Scientist, University of California, <br />
            Davis, USA, on 23rd March 2019.
        </p>
        <hr className="max-w-[46rem] h-1 bg-black border-0 mx-auto my-5"></hr>
        <div className="flex justify-center items-center flex-col">
            <img
                src="/images/ICMREST.jpg"
                alt="image"
                className="w-full sm:w-[50rem] md:w-[60rem] h-auto mb-20"
            />
        </div>
    </div>
</section>

      <AboutFooter/>
    </div>
  );
};

export default ConferenceTracks;
