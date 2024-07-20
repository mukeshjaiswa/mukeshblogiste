
import React, { useState, useEffect } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const[name,setName]=useState('')
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getUsers = async () => {
            try {
                const userRef = collection(db, 'register');
                onSnapshot(userRef, (snapshot) => {
                    const userList = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setUsers(userList);
                    console.log(userList);
                });
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUsers();
    }, []);

    function submit(e) {
        e.preventDefault();
        if (email == '' || password == '') {
            toast.warning("Plase enter all fileds")
        }
        else {
            const user = users.find(
                (user) => user.email === email && user.password === password);
              
            if (user) {
                // Redirect to home page on successful login
              
                navigate('/home' );
                toast.success('Login successful!');
            }
            else {
                // Display error message
                toast.error('Invalid email or password');
            }

        }

    }
    return (
        <div className='bg-gray-200 h-[100vh] flex flex-col justify-center items-center text-center'>
        <div className='bg-custom-gradient flex m-auto max-w-[800px] h-70 gap-10 px-0  rounded-xl py-0 '>
            <div className='flex flex-col bg-white justify-center max-w-[70%] h-[70vh] rounded-l-lg '>

                <form onSubmit={submit}>
                    <div className='flex flex-col justify-center items-center text-center px-10 gap-3'>
                        <br />
                        <h1 className='text-2xl font-bold'>Hello!</h1>
                        <h3 className='text-gray-400'> Sing into your account</h3>
                        <div className='flex bg-gray-50 px-3 py-1 rounded-xl shadow-md mb-5'>
                            <MdOutlineMail className='text-indigo-600 py-0 mt-1' size={30} />
                            <input type='email' required placeholder='Enter your email' className='text-2xl px-3 focus:outline-none  hover:border-none bg-gray-50' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex bg-gray-50 px-3 py-1 rounded-xl shadow-md '>
                            <RiLockPasswordLine className='text-indigo-600 mt-1' size={30} />
                            <input type='password' placeholder='Password' className='text-2xl px-3 focus:outline-none   hover:border-none bg-gray-50' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='flex justify-end place-self-end  text-indigo-500 '><h1 className='text-indigo-400 cursor-pointer  hover:text-indigo-600'>Forget Password?</h1></div>
                        <button className=' bg-indigo-600 rounded-lg text-2xl text-white px-10 py-0 hover:bg-indigo-800 cursor-pointer' onClick={submit}>Signin</button>

                        <br />

                        <div className=''>
                            <h3 className='text-gray-400'>Don't have an acount?
                                <Link to='/register' className='text-indigo-400 text-xl hover:text-indigo-600 cursor-pointer'>Create</Link>
                            </h3>

                            <br />
                        </div>
                    </div>
                </form>

            </div>
            <div className='max-w-[40%] flex flex-col justify-center items-center text-center text-white'>
                <h1 className='text-xl font-bold'>Welcome Back!</h1>
                <h6 className='text-gray-400 px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit culpa quo officiis nisi</h6>     </div>
        </div>
        </div>
    )
}
