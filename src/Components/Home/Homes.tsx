import { FiCodesandbox } from "react-icons/fi";
import React from 'react';
import banner from '.././../../public/images/banner-women.png'
import banner2 from '.././../../public/images/shape-1.png'
import Image from 'next/image';
import { MdMotionPhotosPause } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import HomesMore from "./HomesMore";
import  '../Homes.css'

const Homes = () => {
    return (
        <div className='container mx-auto '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-40'>
                <div className='mt-20'>
                    <h1 className="text-[#90006F] pb-5">Simple. Quick. Secure.</h1>
                    <h1 className="text-4xl font-bold pb-6 text-white">Transfer Money <br />Across World In Real <br /> Time</h1>
                    <p className="text-white pb-6">An international account to send money to over 60 <br /> countries around the world, up to 7x cheaper the bank.</p>
                    <button className='border-b-2  text-white border-[#90006f]'>Learn More </button>
                    <div className='mt-6'>
                        <button className='bg-[#009286] px-8 py-3 rounded-xl text-white'>Send Now</button>
                    </div>
{/* animation icon               */}
                    <div className="slow-spin">
                        <Image className="animate-spin" src={banner2} alt="" />
                  </div>


                </div>

                <div>
                    <Image className='w-[400px] ' alt='' src={banner} />

                </div>

                <div className='h-[85vh] w-[450px] rounded-lg bg-[#2A3F65]'>
                    <h1 className='bg-[#009286] py-5 rounded-t-lg text-white text-center'>User will get Rs 40 Taka on new registration</h1>
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
                    <div className='mt-4 ml-3'>
                        <div className="flex justify-around">
                            <FiCodesandbox className="text-white  bg-black text-xl rounded-full" />
                            <h1 className="text-white">22.07 GBP</h1>
                            <select name="" id="" className="bg-black text-white">
                                <option value="">Low cost Transfer</option>
                                <option value="">Easy Transfer</option>
                                <option value="">Advanced Transfer</option>
                            </select>
                            <h1 className="text-white">Fee</h1>
                        </div>
                    </div>

                    {/* 
                       section 2  */}

                    <div className="flex justify-around  pt-5">
                        <MdMotionPhotosPause className="text-white   bg-black text-xl rounded-full" />
                        <h1 className="text-white">22.07 GBP</h1>
                        <p className="text-white font-bold">Ammount Will Convert</p>

                    </div>
                    {/* 
                       section 3  */}
                    <div className="flex justify-around  pt-5">
                        <TiCancel className="text-white   bg-black text-xl rounded-full" />
                        <h1 className="text-[#009286] ">1.0539874</h1>
                        <p className="text-white font-bold ">Guaranted Rate (4 hrs)</p>

                    </div>

                    <HomesMore />


                </div>

            </div>
        </div>
    );
};

export default Homes;