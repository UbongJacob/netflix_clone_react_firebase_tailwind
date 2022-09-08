import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Request';

const Home = () => {
  const rowDetails = [
    {
      title: 'Upcoming Movies',
      url: 'upcoming',
    },
    {
      title: 'Popular',
      url: 'popular',
    },
    {
      title: 'Trending',
      url: 'trending',
    },
    {
      title: 'Top Rated',
      url: 'topRated',
    },
    {
      title: 'Horror',
      url: 'horror',
    },
  ];

  return (
    <>
      <Main />
      {rowDetails.map((detail, index) => {
        return (
          <Row
            key={++index}
            rowId={++index}
            title={detail.title}
            fetchUrl={requests[detail.url]}
          />
        );
      })}
    </>
  );
};

export default Home;
