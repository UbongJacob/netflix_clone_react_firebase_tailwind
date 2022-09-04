import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import requests from '../Request';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => setMovies(response.data.results));
  }, [fetchUrl]);

  return (
    <section>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'}>
          {movies.map((movie, id) => (
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
              <h1>hell</h1>
              <img
                className='w-full h-auto block'
                src={`${requests.imgBaseUrl}/w500/${movie?.backdrop_path}`}
                alt={movie.title}
              />

              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                  {movie?.title}
                </p>

                <p>
                  {like ? (
                    <FaHeart className='absolute top-5 left-4 text-gray-300' />
                  ) : (
                    <FaRegHeart className='absolute top-5 left-4 text-gray-300' />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Row;
