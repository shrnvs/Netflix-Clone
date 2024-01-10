import "./App.css";
import Rows from "./Rows";
import requests from "./requests";
import Banner from "./Banner";
import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Rows title="TRENDING NOW" fetchURL={requests.fetchTrending} />
      <Rows title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Rows title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Rows title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Rows title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
      <Rows title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Rows title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
