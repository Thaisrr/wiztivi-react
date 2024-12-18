import './App.css';
import Presentation from "./pages/Presentation.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./layout/Navigation.tsx";
import Reactivite from "./pages/Reactivite.tsx";
import {lazy} from "react";
const Parent = lazy(() => import('./pages/Parent.tsx')); // Lazy Loading

const App = () => {


    return (
        <div className='App'>
            <BrowserRouter>
                <Navigation />
                <main>
                    <Routes>
                        <Route path='/' element={<Presentation />} />
                        <Route path='/reactivite' element={<Reactivite />} />
                        <Route path='/parent' element={<Parent />} />
                        <Route path='*' element={<h1>😭 404 êtes-vous perdu ? </h1>} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App;