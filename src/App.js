import Hero from "./components/Hero";
import Movies from "./components/Movies";
import requests from "./Requests";

function App() {
  return (
    <>
      <Hero />
      <Movies rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Movies rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Movies rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Movies rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Movies rowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
}

export default App;
