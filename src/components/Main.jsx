import axios from 'axios';
import { useEffect, useState } from 'react';
import requests from '../Request';

const Main = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(requests.trending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-t from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`${requests.imgBaseUrl}${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <div>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
