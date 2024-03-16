
import React from 'react';
import banner from '.././../../public/images/banner-women.png'
import Image from 'next/image';
const Homes = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                <div className=''>
                    <h1 className="text-[#90006F] pb-5">Simple. Quick. Secure.</h1>
                    <h1 className="text-3xl font-bold pb-6 text-white">Transfer Money <br />Across World In Real <br /> Time</h1>
                    <p className="text-white pb-6">An international account to send money to over 60 <br /> countries around the world, up to 7x cheaper the bank.</p>
                    <button className='border-b-2  text-white border-[#90006f]'>Learn More </button>
                    <div className='mt-6'>
                        <button className='bg-[#009286] px-8 py-3 rounded-xl text-white'>Send Now</button>
                    </div>


                </div>

                <div>
                    <Image className='w-[300px]' alt='' src={banner} />
                </div>

                <div className='h-[80vh] w-[450px] rounded-lg bg-[#2A3F65]'>
                    <h1 className='bg-[#009286] py-5 rounded-t-lg text-white text-center'>User will get Rs 40 bonus on new registration</h1>

                    <div className="p-4 ">
                        <div className='bg-black rounded-lg p-6 mt-6 my-5 flex justify-between items-center'>
                           <div>
                                <h1 className='text-white'>Your Send</h1>
                                <p className='text-white text-sm font-bold'>$ 00</p>

                           </div>
                          <div>
                                <h1 className='text-white'> You Recieved</h1>
                                <p className='text-white text-sm font-bold '>$ 00</p>
                          </div>
                        </div>

                    </div>
                    <div className='mt-4'>
                        <h1 className='bg-black text-center text-xl font-bold  w-5 h-5 px-5 text-white  rounded-full'>-</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homes;