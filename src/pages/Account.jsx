import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <section>
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/c7db226a-d925-4be1-8eb2-e85345a47f03/NG-en-20220829-popsignuptwoweeks-perspective_alpha_website_small.jpg'
          alt='/'
        />

        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:5xl font-bold'>My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </section>
  );
};

export default Account;
