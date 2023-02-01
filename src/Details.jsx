import React, {useContext} from 'react'
import star1 from './assets/fill-star.png'
import star2 from './assets/star-fill.png'
import back from './assets/back.png'
import Header from './Header'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'
import { userContext } from './App'



function Details() {
    const  [userName, accNumber, accBalance, phoneNumber, email, bvn, gender, level, empStatus, sector, duration, officeEmail, income, repay, twitter, facebook, instagram, guaName, guaPhone, guaAddress, avatar] = useContext(userContext)
  return (
    <div className='bg-[#fbfbfb] h-[100vh]'>
        <Header />
        <div className='flex'>
            <SideNav />
            <div className='md:w-9/12 w-full md:px-10 px-5 bg-[#fbfbfb]'>
                <Link to='/dash' className='flex'>
                    <div className="flex items-center w-fit md:mb-5 my-2 px-2 py-2 hover:outline hover:outline-slate-500">
                      <img src={back} alt='' />
                      <p className='ml-3'>Back to Users</p>
                    </div>
                </Link>
                <div className='md:flex justify-between mb-8 w-full'>
                    <h1 className='text-xl font-semibold mb-5 md:mb-0'>User Details</h1>
                    <div className='flex justify-between w-full md:w-fit'>
                        <p className='p-2 rounded-lg outline outline-red-600 text-red-600 mr-5'>BLACKLIST USER</p>
                        <p className='p-2 rounded-lg outline outline-green-600 text-green-600'>ACTIVATE USER</p>
                    </div>
                </div>
                <div className='bg-white shadow-md shadow-slate-200'>
                    <div className='flex items-center '>
                        <div className='flex items-center p-3'>
                          <img src={avatar} alt='' className='md:mr-5 mr-3 w-32 rounded-full'/>
                          <div>
                            <p className='font-semibold text-[#213f7d] text-2xl'>{userName}</p>
                            <p className='mt-2 text-sm'>{accNumber}</p>
                          </div>
                        </div>
                        <div className='w-[0.1rem] h-20 bg-slate-300 mx-7 hidden md:block'></div>
                        <div className="my-2 hidden md:block">
                            <p className="text-[#213f7d] mb-3">User's Tier</p>
                            <div className='flex'>
                                <img src={star2} alt='' />
                                <img src={star1} alt='' />
                                <img src={star1} alt='' />
                            </div>
                        </div>
                        <div className='w-[0.1rem] h-20 bg-slate-300 mx-7 hidden md:block'></div>
                        <div className="my-2 hidden md:block">
                            <p className="text-[#213f7d] font-semibold mb-1">{accBalance}</p>
                            <p className="text-[#213f7d]">9912345678/Providus Bank</p>
                        </div>
                    </div>
                    <div className="flex justify-between px-5">
                        <div className="md:py-1 py-2 text-green-400 md:w-1/5 w-full text-center border-b-2 border-green-400">General Details</div>
                        <div className="py-1 hidden md:block">Documents</div>
                        <div className="py-1 hidden md:block">Bank Details</div>
                        <div className="py-1 hidden md:block">Loans</div>
                        <div className="py-1 hidden md:block">Savings</div>
                        <div className="py-1 hidden md:block">App and System</div>
                    </div>
                </div>
                
                <div className='p-5 bg-white my-5 shadow-md shadow-slate-200'>
                    <h1 className='text-[#213f7d]'>Personal Information</h1>
                    <div className='flex flex-wrap my-5'>
                        <div className='md:w-1/5 w-1/2 mb-5'>
                            <h1 className='text-slate-400 text-sm'>FULL NAME</h1>
                            <p className='text-[#213f7d]'>{userName}</p>
                        </div>
                        <div className='md:w-1/5 w-1/2'>
                            <h1 className='text-slate-400 text-sm'>PHONE NUMBER</h1>
                            <p className='text-[#213f7d]'>{phoneNumber.slice(0,13)}</p>
                        </div>
                        <div className='w-fit md:mr-10 mr-3 mb-5'>
                            <h1 className='text-slate-400 text-sm'>EMAIL ADDRESS</h1>
                            <p className='text-[#213f7d]'>{email}</p>
                        </div>
                        <div className='md:w-1/5 w-1/2'>
                            <h1 className='text-slate-400 text-sm'>BVN</h1>
                            <p className='text-[#213f7d]'>{bvn}</p>
                        </div>
                        <div className='md:w-1/5 w-1/2 mb-5 md:mb-0'>
                            <h1 className='text-slate-400 text-sm'>GENDER</h1>
                            <p className='text-[#213f7d]'>{gender}</p>
                        </div>
                        <div className='md:w-1/5 w-1/2 mb-5 md:mb-0'>
                            <h1 className='text-slate-400 text-sm'>MARITAL STATUS</h1>
                            <p className='text-[#213f7d]'>Single</p>
                        </div>
                        <div className='md:w-1/5 w-1/2'>
                            <h1 className='text-slate-400 text-sm'>CHILDREN</h1>
                            <p className='text-[#213f7d]'>None</p>
                        </div>
                        <div className='md:w-1/5 w-1/2'>
                            <h1 className='text-slate-400 text-sm'>TYPE OF RESIDENCE</h1>
                            <p className='text-[#213f7d]'>Parent’s Apartment</p>
                        </div>
                    </div>
                    <div className="w-full h-[0.1rem] bg-slate-300 mb-5"></div>
                    <h1 className='text-[#213f7d]'>Education and Employment</h1>
                    <div className='flex flex-wrap my-5'>
                        <div className='md:w-1/4 w-1/2 mb-5'>
                            <h1 className='text-slate-400 text-sm'>LEVEL OF EDUCATION</h1>
                            <p className='text-[#213f7d]'>{level}</p>
                        </div>
                        <div className='md:w-1/4 w-1/2'>
                            <h1 className='text-slate-400 text-sm'>EMPLOYMENT STATUS</h1>
                            <p className='text-[#213f7d]'>{empStatus}</p>
                        </div>
                        <div className='md:w-1/4 w-1/2 mb-5'>
                            <h1 className='text-slate-400 text-sm'>SECTOR OF EMPLOYMENT</h1>
                            <p className='text-[#213f7d]'>{sector}</p>
                        </div>
                        <div className='md:w-1/4 w-1/2'>
                            <h1 className='text-slate-400 text-sm'>DURATION OF EMPLOYMENT</h1>
                            <p className='text-[#213f7d]'>{duration}</p>
                        </div>
                        <div className='w-fit md:mr-7 mb-5 md:mb-0'>
                            <h1 className='text-slate-400 text-sm'>OFFICE EMAIL</h1>
                            <p className='text-[#213f7d]'>{officeEmail}</p>
                        </div>
                        <div className='md:w-[30%] w-fit mr-5 md:mr-0 mb-5 md:mb-0'>
                            <h1 className='text-slate-400 text-sm'>MONTHLY INCOME</h1>
                            <p className='text-[#213f7d]'>{income}</p>
                        </div>
                        <div className='md:w-1/4 '>
                            <h1 className='text-slate-400 text-sm'>LOAN REPAYMENT</h1>
                            <p className='text-[#213f7d]'>{repay}</p>
                        </div>
                    </div>
                    <div className="w-full h-[0.1rem] bg-slate-300 mb-5"></div>
                    <h1 className='text-[#213f7d]'>SOCIALS</h1>
                    <div className='flex flex-wrap my-5'>
                        <div className='md:w-1/5 w-1/2 mb-5 md:mb-0'>
                            <h1 className='text-slate-400 text-sm'>TWITTER</h1>
                            <p className='text-[#213f7d]'>{twitter}</p>
                        </div>
                        <div className='md:w-1/5 w-1/2'>
                            <h1 className='text-slate-400 text-sm'>FACEBOOK</h1>
                            <p className='text-[#213f7d]'>{facebook}</p>
                        </div>
                        <div className='md:w-1/5 w-1/2'>
                            <h1 className='text-slate-400 text-sm'>INSTAGRAM</h1>
                            <p className='text-[#213f7d]'>{instagram}</p>
                        </div>
                    </div>
                    <div className="w-full h-[0.1rem] bg-slate-300 mb-5"></div>
                    <h1 className='text-[#213f7d]'>Guarantor</h1>
                    <div className='flex flex-wrap my-5'>
                        <div className='md:w-1/5 w-1/2 md:mb-0 mb-5'>
                            <h1 className='text-slate-400 text-sm'>FULL NAME</h1>
                            <p className='text-[#213f7d]'>{guaName}</p>
                        </div>
                        <div className='md:w-1/5 w-1/2'>
                            <h1 className='text-slate-400 text-sm'>PHONE NUMBER</h1>
                            <p className='text-[#213f7d]'>{guaPhone.slice(0,13)}</p>
                        </div>
                        <div className='md:w-1/4 w-fit'>
                            <h1 className='text-slate-400 text-sm'>ADDRESS</h1>
                            <p className='text-[#213f7d]'>{guaAddress}</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Details