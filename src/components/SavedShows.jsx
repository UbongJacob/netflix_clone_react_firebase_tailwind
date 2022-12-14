import { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';

import { db, documentName } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import requests from '../Request';

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, documentName, `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft += 500;
  };

  const movieRef = doc(db, documentName, `${user?.email}`);

  const deleteShow = async (passedId) => {
    try {
      console.log(passedId);
      const result = movies.filter((item) => item.id !== passedId);
      const response = await updateDoc(movieRef, {
        savedShows: result,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className='bg-white left-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        />
        <div className='w-full h-full overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative'>
          {movies?.map((item, id) => (
            <div
              key={id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
            >
              <img
                className='w-full h-auto block'
                src={`${requests.imgBaseUrl}/w500/${item?.img}`}
                alt={item?.title}
              />

              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center  m-5 md:m-0'>
                  {item?.title}
                </p>

                <p
                  onClick={() => deleteShow(item.id)}
                  className='absolute bg-gray-100 rounded-full p-1 text-gray-800 top-4 right-4'
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className='bg-white  right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        />
      </div>
    </div>
  );
};

export default SavedShows;
