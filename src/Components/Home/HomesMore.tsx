import Link from 'next/link';
import React from 'react';
import { FaRightToBracket, FaUnlock } from 'react-icons/fa6';

const HomesMore = () => {
    return (
        <div>
            <div className='p-4'>
                <div className='bg-black rounded-lg p-6 mt-6 my-5 flex justify-between items-center'>
                    <div className='flex justify-between items-center gap-12'>
                        <h1 className='text-white'>Recipient Gets</h1>
                        <p className='text-white text-sm font-bold'>14,02433.25</p>
                        <FaUnlock className='text-white font-bold' />
                        <Link href={"/"}> <FaRightToBracket className='text-[#009286] text-xl ' /></Link>
                    </div>

                </div>
            </div>

            <div>
                <p className='text-center text-white font-bold'>Delivery Time: By August 23th</p>
                <div className='flex justify-around mt-3'>

                    <button className='bg-[#009286] px-5 py-2 rounded-lg text-white'>Compare Price</button>
                    <button className='bg-[#90006F] px-5 py-2 rounded-lg text-white'>Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default HomesMore;