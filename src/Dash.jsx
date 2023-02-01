import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Lenders from './Lenders'
import icon from './assets/icon.png'
import icon1 from './assets/icon-1.png'
import icon2 from './assets/icon-2.png'
import icon3 from './assets/icon-3.png'
import filter from './assets/filter.png'
import prev from './assets/prev.png'
import next from './assets/next.png'
import Header from './Header'
import SideNav from './SideNav'

function Dash() {
  const [search, setSearch] = useState(false)
  const [info, setInfo] = useState(null)
  const [fig, setFig] = useState(10)

  const handleSearch = () => {
    setSearch(!search)
  }

  const options ='https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
  useEffect(()=>{
    axios.get(options).then((response)=>{
      console.log(response.data);
      setInfo(response.data)
    })
  }, [])

  if (!info) return null;


  const lendersInfo = info.map((data, index)=>{
    if (index < fig ) {
    return (
        <Lenders 
        index={index}
        key={data.id}
        username={`${data.profile.firstName} ${data.profile.lastName}`}
        email={data.email}
        phone={data.profile.phoneNumber}
        joined={data.createdAt}
        />
      )
      }
  })

  return (
    
    <div className='bg-[#fbfbfb] h-[100vh] relative'>
      <Header />
      <div className='flex'>
        <SideNav />
        <div className='md:w-9/12 w-full md:p-10 p-5 bg-[#fbfbfb]'>
          <h1 className='text-xl font-semibold md:mb-8 mb-5'>Users</h1>
          <div className='flex flex-wrap justify-between'>
            <div className='bg-white p-3 md:w-[23%] w-[49%] mb-2 md:mb-0 shadow-sm shadow-slate-200'>
              <img src={icon} alt='' />
              <p className='mt-3 text-sm'>USERS</p>
              <p className='text-2xl font-bold mt-2'>2,453</p>
            </div>
            <div className='bg-white p-3 md:w-[23%] w-[49%] mb-2 md:mb-0 shadow-sm shadow-slate-200'>
              <img src={icon1} alt='' />
              <p className='mt-3 text-sm'>ACTIVE USERS</p>
              <p className='text-2xl font-bold mt-2'>2,453</p>
            </div>
            <div className='bg-white p-3 md:w-[23%] w-[49%] shadow-sm shadow-slate-200'>
              <img src={icon2} alt='' />
              <p className='mt-3 text-sm'>USERS WITH LOANS</p>
              <p className='text-2xl font-bold mt-2'>2,453</p>
            </div>
            <div className='bg-white p-3 md:w-[23%] w-[49%] shadow-sm shadow-slate-200'>
              <img src={icon3} alt='' />
              <p className='mt-3 text-sm'>USERS WITH SAVINGS</p>
              <p className='text-2xl font-bold mt-2'>2,453</p>
            </div>
          </div>

          <div className='bg-white mt-10 px-5 pb-5 w-full overflow-auto z-10'>
            <table className='p-10 w-full text-xs relative'>
              <thead>
                <tr className='text-left h-12'>
                  <th className='w-[10%]'>
                    <div className='flex items-center w-32 md:w-fit'>
                      <p className='w-fit mr-2'>ORGANIZATION</p>
                      <span onClick={handleSearch}><img src={filter} alt='' /> </span> 
                    </div>
                    {/* The search code is incorporated here */}
                    <div className={search ? 'block z-10 text-slate-500 outline outline-slate-300 text-sm absolute dot-icon bg-white shadow-2xl left-0 p-5 w-60 rounded-lg' : 'hidden' }>
                      <div className='mb-3 '>
                        <p className='mb-2' >Organization</p>
                        <select className='border border-slate-300 p-2 w-full rounded'>
                          <option>Select</option>
                          <option>Lendsqr</option>
                        </select>
                      </div>
                      <div className='mb-3'>
                        <p className='mb-2' >Username</p>
                        <input type='text' alt='' placeholder='User' className='outline outline-slate-300 rounded p-2 w-full'/>
                      </div>
                      <div className='mb-3'>
                        <p className='mb-2' >Email</p>
                        <input type='email' alt='' placeholder='Email' className='outline outline-slate-300 rounded p-2 w-full'/>
                      </div>
                      <div className='mb-3'>
                        <p className='mb-2' >Date</p>
                        <input type='date' alt='' placeholder='Date' className='outline outline-slate-300 rounded p-2 w-full'/>
                      </div>
                      <div className='mb-5'>
                        <p className='mb-2' >Status</p>
                        <select className='border border-slate-300 p-2 w-full rounded'>
                          <option>Select</option>
                          <option>Active</option>
                          <option>Blacklisted</option>
                          <option>Pending</option>
                        </select>
                      </div>
                      <div className="flex justify-between">
                        <div className="outline outline-slate-400 rounded px-6 py-2 text-slate-500">Reset</div>
                        <div className="bg-green-400 px-6 py-2 rounded text-white">Filter</div>
                      </div>
                    </div>
                    {/* The search pop-up ends here */}
                  </th>
                  <th className='w-[10%]'>
                    <div className='flex items-center w-32 md:w-fit'>
                      <p className='w-fit mr-2'>USERNAME</p>
                      <span onClick={handleSearch}><img src={filter} alt='' /> </span> 
                    </div>
                  </th>
                  <th className='w-[10%]'>
                    <div className='flex items-center'>
                      <p className='w-fit mr-2'>EMAIL</p>
                      <span onClick={handleSearch}><img src={filter} alt=''/> </span> 
                    </div>
                  </th>
                  <th className='md:w-[12%] w-full '>
                    <div className='flex items-center w-32 md:w-fit'>
                      <p className='w-fit mr-2'>PHONE NUMBER</p>
                      <span onClick={handleSearch}><img src={filter} alt=''/> </span> 
                    </div>
                  </th>
                  <th className='w-[10%]'>
                    <div className='flex items-center w-28 md:w-fit'>
                      <p className='w-fit mr-2'>DATE JOINED</p>
                      <span onClick={handleSearch}><img src={filter} alt=''/> </span> 
                    </div>
                  </th>
                  <th className='w-[10%]'>
                    <div className='flex items-center w-28 md:w-fit'>
                      <p className='mr-2'>STATUS</p>
                      <span onClick={handleSearch}><img src={filter} alt='' /> </span> 
                    </div>
                  </th>
                </tr>
              </thead>
              {lendersInfo}
            </table>
          </div>

          <div className='md:flex items-center justify-between my-5 mb-20 md:mb-0'>
            <div className='flex'>
              <p>Showing</p> 
              <select onChange={(e)=>setFig(e.target.value)} className='bg-slate-200 mx-2 fig'>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
              <p>out of 100</p>
            </div>
            <div className='w-3/12 md:flex justify-between hidden'>
              <img src={prev}  alt=''/>
              <p>1</p>
              <p className='text-slate-600'>2</p>
              <p className='text-slate-600'>3</p>
              <p className='text-slate-600'>...</p>
              <p className='text-slate-600'>15</p>
              <p className='text-slate-600'>16</p>
              <img src={next}  alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dash