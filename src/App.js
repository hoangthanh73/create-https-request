import './App.css';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';

function App() {
  const url = 'https://learning-request-api-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'

  return (
    <>
      <section>
        <AddMovie url={url} />
      </section>
      <section>
        <MoviesList url={url} />
      </section >
    </>

  );
}

export default App;
