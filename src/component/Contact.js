import React from 'react'
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase'; 
import Header from './Header';
import Footer from './Footer';

export default function Contact() {
  const [name, setName] = useState('');
 
  const [email, setEmail] = useState('');
  const[address,setAddress]=useState('');
  const [contact, setContact] = useState('');




  const submit = async (e) => {
    e.preventDefault();

    try {



      const blogList = collection(db, 'contact');
      await addDoc(blogList, {
        name: name,

        email: email,
        address: address,
        contact: contact

      });
setName('');
setEmail('');
setAddress('');
setContact('');
alert("Sucessfully add your contact")



    } catch (error) {
      console.error("Error adding document: ", error);
    
    }
  };
  return (
    <>
    <Header/>
 
    <div className=' flex justify-center items-center h-[83.5vh]'>

      <div className='flex justify-center  mb-30 '>


        <div className='max-w-[50%]   h-90 flex flex-col justify-center px-20 gap-5  '>
          <h1 className='text-3xl font-semibold '>Contact  me </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur maiores accusamus, laboriosam veritatis aliquam reprehenderit dolores error accusantium, aperiam atque tempore dolore eaque numquam perspiciatis expedita. Recusandae id quas nostrum.</p>
        </div>

        <div className='md:max-w-[40%] w-full h-[50%] flex flex-col justify-start text-left  rounded-md   px-20 mb-30 bg-gray-50 shadow-lg'>
           <br/>
            <form onSubmit={submit}>
          
              <div className='flex flex-col'>
                <label className='text-2xl'>First name*</label>
                <input type='text' className='border border-solid focus:outline-none text-black bg-gray-100 rounded-sm px-2 py-1'  onChange={(e) => setName(e.target.value)} />
              </div>
            
         
          <div className='flex flex-col w-full mt-5'>
            <label className='text-2xl'>Email</label>
            <input type='email' required className='border focus:outline-none border-solid w-full text-black bg-gray-100 rounded-md px-2 py-1'  onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='flex flex-col w-full mt-5'>
            <label className='text-2xl'>Address</label>
            <input type='text' required className='border focus:outline-none border-solid w-full text-black bg-gray-100 rounded-md px-2 py-1'  onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className='flex flex-col w-full mt-5'>
            <label className='text-2xl'>Contact</label>
            <input type='number' required className='border focus:outline-none border-solid w-full text-black bg-gray-100 rounded-md px-2 py-1'  onChange={(e) => setContact(e.target.value)} />
          </div>
          <br />
          <div className=''>
            <button type='submit' className='bg-indigo-400 text-2xl px-5 py-1 text-white rounded-md hover:bg-indigo-700'>Submit</button>
          </div>
          <br />
      </form>
        </div>
      <br />
    </div>
   </div >
   <Footer/>
   </>
  )
}
