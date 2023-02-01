import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Dash from './Dash';
import Details from './Details';
import userr from './assets/userr.png'

export const userContext = createContext()

function App() {
  const [info, setInfo] = useState(null)
  const [userName, setUserName] = useState('Dee')
  const [accNumber, setAccNumber] = useState('LSQFf587g90')
  const [accBalance, setAccBalance] = useState('20,000')
  const [phoneNumber, setPhoneNumber] = useState('08060618329')
  const [email, setEmail] = useState('dee1dayo@yahoo.com')
  const [bvn, setBvn] = useState('0975567897')
  const [gender, setGender] = useState('Male')
  const [level, setLevel] = useState('OND')
  const [empStatus, setEmpStatus] = useState('Employed')
  const [sector, setSector] = useState('Banking')
  const [duration, setDuration] = useState('10 years')
  const [officeEmail, setOfficeEmail] = useState('deebaba@lendsqr.com')
  const [income, setIncome] = useState('N50,000 - N70,000')
  const [repay, setRepay] = useState('N10,000')
  const [facebook, setFacebook] = useState('Deebaba')
  const [instagram, setInstagram] = useState('@deebaba')
  const [twitter, setTwitter] = useState('@deebaba')
  const [guaName, setGuaName] = useState('Debby Ogana')
  const [guaPhone, setGuaPhone] = useState('08060618329')
  const [guaAddress, setGuaAddress] = useState('Lekki Phase 1, Lagos.')
  const [avatar, setAvatar] = useState(userr)

  
  const handleUser = (index) => {
    const {profile, accountNumber, accountBalance, email, education, socials, guarantor} = info[index]
    setUserName(`${profile.firstName} ${profile.lastName}`)
    setAccNumber(accountNumber)
    setAccBalance(`${profile.currency}${accountBalance}`)
    setPhoneNumber(profile.phoneNumber)
    setEmail(email)
    setBvn(profile.bvn)
    setGender(profile.gender)
    setLevel(education.level)
    setEmpStatus(education.employmentStatus)
    setSector(education.sector)
    setDuration(education.duration)
    setOfficeEmail(education.officeEmail)
    setIncome(`${profile.currency}${education.monthlyIncome[0]} - ${profile.currency}${education.monthlyIncome[1]}`)
    setRepay(education.loanRepayment)
    setTwitter(socials.twitter)
    setFacebook(socials.facebook)
    setInstagram(socials.instagram)
    setGuaName(`${guarantor.firstName} ${guarantor.lastName}`)
    setGuaPhone(guarantor.phoneNumber)
    setGuaAddress(guarantor.address)
    setAvatar(profile.avatar)
    
  }

  const showDetails = (e) => {
    let index = e.currentTarget.getAttribute('data-id')
    handleUser(index)
  }
  
  const options ='https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
  useEffect(()=>{
    axios.get(options).then((response)=>{
      console.log(response.data);
      setInfo(response.data)
    })
  }, [])

  if (!info) return null;

  return (
      <userContext.Provider value={[userName, accNumber,accBalance, phoneNumber, email, bvn, gender, level, empStatus, sector, duration, officeEmail, income, repay, twitter, facebook, instagram, guaName, guaPhone, guaAddress, avatar, handleUser, showDetails]}>
        <Router>
            <Routes>
              <Route path='/' element={<Login />} />
                <Route path='/dash' element={<Dash />} />
                <Route path='/details' element={<Details />} />
            </Routes>
        </Router>
      </userContext.Provider>
  )
}

export default App