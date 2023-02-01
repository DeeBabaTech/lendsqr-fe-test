import React from 'react'
import drop from './assets/drop-down.png'
import org from './assets/org.png'
import home from './assets/home.png'
import user from './assets/user.png'
import user1 from './assets/user_1.png'
import user2 from './assets/user_2.png'
import user3 from './assets/user_3.png'
import user5 from './assets/user_5.png'
import user6 from './assets/user_6.png'
import user7 from './assets/user_7.png'
import user8 from './assets/user_8.png'
import biz1 from './assets/biz-1.png'
import biz2 from './assets/biz-2.png'
import biz3 from './assets/biz-3.png'
import biz4 from './assets/biz-4.png'
import biz5 from './assets/biz-5.png'
import biz6 from './assets/biz-6.png'
import biz7 from './assets/biz-7.png'

function SideNav() {
  return (
    <div className='w-3/12 bg-white md:block hidden'>
        <div className='mt-2'>
            <ul>
                <div className='flex items-center pl-7'>
                  <img src={org} alt='' />
                  <li className='p-2 ml-2'>Switch Organization</li>
                  <img src={drop} alt='' className='rounded-full'/> 
                </div>
                <div className='flex items-center pl-7 my-4'>
                  <img src={home} alt='' />
                  <li className='p-2 pl-2'>Dashboard</li>
                </div>
                <h2 className='text-xs mb-2 pl-7'>CUSTOMERS</h2>
                <div className='flex relative items-center pl-7 bg-green-100 before:content-[" "] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-green-600'>
                  <img src={user} alt='' />
                  <li className='p-2 pl-2'>Users</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={user1} alt='' />
                  <li className='p-2 ml-2'>Guarantors</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={user2} alt='' />
                  <li className='p-2 ml-2'>Loans</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={user3} alt='' />
                  <li className='p-2 ml-2'>Decision Models</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={user5} alt='' />
                  <li className='p-2 ml-2'>Savings</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={user6} alt='' />
                  <li className='p-2 ml-2'>Loan Requests</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={user7} alt='' />
                  <li className='p-2 ml-2'>Whitelist</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={user8} alt='' />
                  <li className='p-2 ml-2'>Karma</li>
                </div>
                <h2 className='text-xs mt-5 mb-2 pl-7'>BUSINESSES</h2>
                <div className='flex items-center pl-7'>
                  <img src={org} alt='' />
                  <li className='p-2 ml-2'>Organization</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={user6} alt='' />
                  <li className='p-2 ml-2'>Loan Products</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={biz1} alt='' />
                  <li className='p-2 ml-2'>Savings Products</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={biz2} alt='' />
                  <li className='p-2 ml-2'>Fees and Charges</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={biz3} alt='' />
                  <li className='p-2 ml-2'>Transactions</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={biz4} alt='' />
                  <li className='p-2 ml-2'>Services</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={biz5} alt='' />
                  <li className='p-2 ml-2'>Service Account</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={biz6} alt='' />
                  <li className='p-2 ml-2'>Settlements</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={biz7} alt='' />
                  <li className='p-2 ml-2'>Reports</li>
                </div>
                <h2 className='text-xs my-3 pl-7'>SETTINGS</h2>
                <div className='flex items-center pl-7'>
                  <img src={user} alt='' />
                  <li className='p-2 ml-2'>Preferences</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={user1} alt='' />
                  <li className='p-2 ml-2'>Fees and Pricing</li>
                </div>
                <div className='flex items-center pl-7'>
                  <img src={user1} alt='' />
                  <li className='p-2 ml-2'>Audit Logs</li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default SideNav