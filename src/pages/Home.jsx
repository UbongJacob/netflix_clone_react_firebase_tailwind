import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Request';

const Home = () => {
  return (
    <>
      <Main />
      <Row title='Upcoming' fetchUrl={requests.upcoming} />
      <Row title='Popular' fetchUrl={requests.popular} />
      <Row title='Trending' fetchUrl={requests.trending} />
      <Row title='Top Rated' fetchUrl={requests.topRated} />
      <Row title='Horror' fetchUrl={requests.horror} />
    </>
  );
};

export default Home;
