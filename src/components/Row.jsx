import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Movie from './Movie';

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => setMovies(response.data.results));
  }, [fetchUrl]);

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowId);
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    let slider = document.getElementById('slider' + rowId);
    slider.scrollLeft += 500;
  };

  return (
    <section>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className='bg-white left-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        />
        <div
          id={'slider' + rowId}
          className='w-full h-full overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative'
        >
          {movies.map((movie, id) => (
            <Movie key={id} item={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className='bg-white  right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        />
      </div>
    </section>
  );
};

export default Row;
