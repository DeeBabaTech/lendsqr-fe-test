import React, {useState, useContext} from 'react'
import dot from './assets/dot.png'
import view from './assets/view.png'
import black from './assets/black.png'
import act from './assets/act.png'
import { Link } from 'react-router-dom'
import { userContext } from './App'

function Lenders(props) {
  const [click, setClick] = useState(false)
  const [userName, accNumber, accBalance, phoneNumber, email, bvn, gender, level, empStatus, sector, duration, officeEmail, income, repay, twitter, facebook, instagram, guaName, guaPhone, guaAddress, avatar, handleUser, showDetails] = useContext(userContext)

  const handleClick = (e) => {
    document.querySelectorAll('.dot-icon').forEach(item => {
      item.classList.add('hidden')
    })
      e.currentTarget.classList.add('block')
    const tilt = !click
    setClick(tilt)
  }

  return (
    // <Link to='/details'>
    <tbody>
      <tr className='border-b text-left h-12'>
        <td>Lendsqr</td>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>{props.phone.slice(0,13)}</td>
        <td>{props.joined.slice(0,10)}</td>
        <td>
          <div className='flex items-center justify-between relative'>
            <p className='bg-green-100 text-green-500 w-fit p-2 rounded-full'>ACTIVE </p>
            <div onClick={handleClick} className='hover:bg-slate-200 py-2 px-3 rounded-full'>
              <img src={dot} alt='' />
            </div>

            <div className={click ? 'block z-10 text-sm absolute dot-icon bg-white shadow-2xl right-0 p-5 w-40 rounded-lg' : 'hidden' }>
              <Link to='/details'>
                <div className='flex items-center mb-3' onClick={showDetails} data-id={props.index}>
                  <img src={view} alt='' />
                  <p className='ml-2' >View Details</p>
                </div>
              </Link>
              <div className='flex items-center mb-3'>
                <img src={black} alt='' />
                <p className='ml-2'>Blacklist User</p>
              </div>
              <div className='flex items-center'>
                <img src={act} alt='' />
                <p className='ml-2'>Activate User</p>
              </div>
            </div>

          </div>
        </td>
      </tr>
      
    </tbody>
    // </Link>
  )
}

export default Lenders