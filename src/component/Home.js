import React from 'react'
import { Link } from 'react-router-dom'
import { doc, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Home({details}) {
  const location = useLocation();

    const {email,name,address,contact,gender } = location.state || {};
    const userdata={email,name,address,contact,gender};
 
  const [bloglist, setBlogList] = useState([]);
  useEffect(() => {
    const contactRef = collection(db, 'blogs');

    onSnapshot(
      contactRef,
      (snapshot) => {
        const contactList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlogList(contactList);
       
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }, []);
  const truncateBody = (body, length) => {
    if (body.length <= length) {
      return body;
    }
    return body.slice(0, length) + '...';
  };
  return (
    <>
    <Header   />
   
    <div className='max-w-6xl  m-auto mt-10'>
      <h1 className='text-3xl ml-5 mt-5'>Recent Blogs</h1>
      <hr class="border-t-2 border-solid border-gray-100 my-1  ml-5" />
      <div className='flex flex-wrap mb-10'>
        {bloglist.map((d, index) => (



          <div key={index} className='flex flex-col max-w-[30%] flex-grow  justify-center text-center  bg-slate-200 rounded-md ml-5 mt-10 mb-10 '>
            <img src={d.coverUrl} className="w-[100%] h-44 object-cover " />
            <h1 className='text-3xl font-semibold py-1'>{d.title}</h1>
            <p className='ml-5 mr-5'>{truncateBody(d.body, 150)}</p>
            <div className='flex justify-center mb-5'>
              <Link to={'/view/' + d.id} className="bg-indigo-400 mt-5 cursor-pointer text-white  font-semibold py-2 px-20 rounded-md  block hover:bg-indigo-700 ">Read more</Link>
            </div>
          </div>

        ))}
      </div>
      <div className='w-full bg-black   mb-10 rounded-sm  text-white'>
        <div className='max-w-[80%] px-10 py-3'>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ipsum ab repellendus ullam nobis numquam molestiae quasi amet voluptatibus voluptas neque architecto quo, odit, consequuntur cumque facere minus, maiores eos.</h2>

        </div>
        <div>
      <Link to='/contact'>  <button className='bg-indigo-500 cursor-pointer px-5 py-2 ml-20 rounded-md  mb-5 hover:bg-indigo-600 '>Contct me</button></Link>  
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )

}

