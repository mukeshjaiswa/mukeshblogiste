
import { collection, onSnapshot ,getDoc,doc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import Footer from './Footer';
import Header from './Header';
// import images from './logo512.png'

export default function View({ data }) {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const contactRef = collection(db, 'blogs');
    onSnapshot(contactRef, (snapshot) => {
      const contactlist = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlog(contactlist);
      console.log(contactlist);

    },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    )
  }, [])
  const [blogview, setBlogView] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      
      try {
        const blogRef = doc(db, 'blogs', id);
        const snapshot = await getDoc(blogRef);
        if (snapshot.exists()) {
          setBlogView(snapshot.data());
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } 
    };

    fetchBlog();
  }, [id]);

  
  console.log(blogview)
  return (
    <>
    <Header/>
   
    <div className='flex'>
      <div className=' flex flex-col justify-center max-w-[900px] ml-20 mt-10 mb-10 text-black p-4'>
      <img src={blogview.coverUrl} className="w-[80%] m-auto h-44 rounded-sm object-cover" alt="Blog Cover" />
      <br/>
        <h1 className='text-3xl font-bold '>Title: {blogview.title}</h1>
        <p>Body: {blogview.body}</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolores cum, quidem quo, in ab temporibus voluptate eius tempora, aut doloremque? Odit ducimus autem, quis saepe earum est sint fugiat. Asperiores quisquam explicabo eos maiores ipsa. Sapiente natus aut eius repudiandae illo, voluptatem, porro enim reiciendis, quasi deserunt earum sint!</p>
        <p>{data}</p>
      </div>
      <div className='border border-solid bg-red max-w-[300px] h-[100vh] flex flex-col  text-center mt-10 ml-10'>
        <h1 className='text-3xl font-semibold'>Latest Post</h1>
        <hr className="w-full border-t-2 mt-3 border-gray-200 gap-20" />
        <div>
          {blog.map((d) => (
            <Link to={'/view/'+d.id} className=''>
            <div key={d.id} className='flex ax-w-[200px] hover:bg-red-400  bg-white h-10  shadow-md  hover:bg-ring cursor-pointer mr-3 ml-3 mt-5'>
              <img src={d.coverUrl} alt='' className="h-15 w-24 object-cover" />
              <h1 className="mt-0 ml-4 text-2xl">{d.title}</h1>
              
            </div>
            </Link>
          ))}
          <br/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
