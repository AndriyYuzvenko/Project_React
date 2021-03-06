import {Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';

import MoviesPage from './Page/MoviesPAge/MoviesPage';
import GenresPage from './Page/GenresPage/GenresPage';
import GenresMoviesPage from './Page/GenresMoviesPage/GenresMoviesPage';
import DetailsMoviesPage from './Page/DetailsMoviesPage/DetailsMoviesPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:id/:original_title'} element={<DetailsMoviesPage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                    <Route path={'genres/movies'} element={<GenresMoviesPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
