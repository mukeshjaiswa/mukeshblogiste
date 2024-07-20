
import React, { useState } from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaRegAddressCard } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { addDoc, collection,onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function Regitser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('');
const[users,setUsers]=useState([])
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };


  const submit = async (e) =>  {
    e.preventDefault();
    if (name == '' || email === '' || address == '' || contact == '' || gender == '' || password == '') {
      toast.warning("Please fill all fields")
    }
    else if (password.length <= 6) {
      toast.warning("Password length must be 6 or greater")
    }
    else if (contact.length !== 10) {
      toast.warning("Number should contain 10digits")
    }
    else {
      // Add data to firebase 
      try {
        const contactRef = collection(db, 'register');
        onSnapshot(contactRef, (snapshot) => {
          const userList = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
          }));
          setUsers(userList);
      })
      const user = users.find(
        (user) => user.email === email );
        if(user){
          toast.warning("these email is already used!")
        }
        
       
      
else{
        
        await addDoc(contactRef, {
          name: name,
          email: email,
          address: address,
          password: password,
          contact: contact,
          gender
        });
      
        setName('');
        setEmail('');
        setAddress('');
        setGender('');
        setContact('');
        setPassword('');
        toast.success("sucessfully register")

      } 
    }
    catch (error) {
        console.log(error);
      }


    }
  }
  return (
    <div className='bg-gray-200 h-[100vh] flex flex-col justify-center items-center text-center'>
    <div className='bg-custom-gradient flex max-w-[800px] h-70 gap-10 px-0  rounded-xl py-0'>
      <div className='flex flex-col bg-white justify-center max-w-[70%] h-[90vh] rounded-l-lg '>

        <form onSubmit={submit}>
          <div className='flex flex-col justify-center items-center text-center px-10 gap-3'>

            <h1 className='text-2xl font-bold mt-10'>Hello Friends!</h1>
            <div className='flex bg-gray-50 px-3 py-1 rounded-xl shadow-md mt-2'>
              <IoPersonCircleOutline className='text-indigo-600 py-0 mt-1' size={30} />
              <input type='text' placeholder='Enter your name' value={name} required className='text-2xl px-3 focus:outline-none hover:border-none bg-gray-50' onChange={(e) => setName(e.target.value)} />
            </div>

            <div className='flex bg-gray-50 px-3 py-1 rounded-xl shadow-md '>
              <MdOutlineMail className='text-indigo-600 py-0 ' size={30} />
              <input type='email' placeholder='Enter your email' value={email} required className='text-2xl px-3 focus:outline-none   hover:border-none bg-gray-50' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex bg-gray-50 px-3 py-1 rounded-xl shadow-md '>
              <RiLockPasswordLine className='text-indigo-600 ' size={30} />
              <input type='password' placeholder='Password' value={password} required className='text-2xl px-3 focus:outline-none   hover:border-none bg-gray-50' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='flex bg-gray-50 px-3 py-1 rounded-xl shadow-md '>
              <FaRegAddressCard className='text-indigo-600 mt-1' size={30} />
              <input type='text' placeholder='Address' value={address} required className='text-2xl px-3  focus:outline-none  hover:border-none bg-gray-50' onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="gender-section flex bg-gray-50 px-3 py-1 rounded-xl shadow-md text-xl gap-3    ">
              <label className='text-2xl px-1'>Gender:</label>
              <label>
                <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
                Male
              </label>
              <label>
                <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                Female
              </label>
              <label>
                <input type="radio" value="other" checked={gender === 'other'} onChange={handleGenderChange} />
                Other
              </label>
            </div>
            <div className='flex bg-gray-50 px-3 py-1 rounded-xl shadow-md '>
              <FiPhone className='text-indigo-600 mt-1' size={30} />
              <input type='number' placeholder='number' value={contact} required className='text-2xl px-3 focus:outline-none   hover:border-none bg-gray-50' onChange={(e) => setContact(e.target.value)} />
            </div>
            <br />
            <button className=' bg-indigo-600 rounded-lg text-2xl text-white px-10 py-0 hover:bg-indigo-800 cursor-pointer shadow-sm' onClick={submit}>CREATE ACCOUNT</button>

            <br />

            <div className=''>
              <h3 className='text-gray-400'>Already hava an Account?
                <Link to='/login' className='text-indigo-600 cursor-pointer' type='submit'>Signin</Link>
              </h3>

            </div>
            <br />
          </div>
        </form>

      </div>
      <div className='max-w-[40%] flex flex-col justify-center items-center text-center text-white'>
        <h1 className='text-xl font-bold'>Glad to see you!</h1>
        <h6 className='text-gray-400 px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit culpa quo officiis nisi</h6>     </div>
    </div>
    </div>
  )
}
