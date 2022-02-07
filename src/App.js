import {MemoryRouter, Route, Routes} from 'react-router-dom';
import Header from "./Components/Header/Header";
import './App.css';
import MoviesPage from "./Page/MoviesPAge/MoviesPage";
import GenresPage from "./Page/GenresPage/GenresPage";
import GenresMoviesPage from "./Page/GenresMoviesPage/GenresMoviesPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                    <Route path={'genres/movies'} element={<GenresMoviesPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
