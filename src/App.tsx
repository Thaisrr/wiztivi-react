import './App.css';
import Presentation from "./pages/Presentation.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./layout/Navigation.tsx";
import Reactivite from "./pages/Reactivite.tsx";
import {lazy} from "react";
import Router from "./pages/Router.tsx";
import Index from "./pages/Hooks/Index.tsx";
import Classes from "./pages/Hooks/Classes..tsx";
import Effect from "./pages/Hooks/Effect.tsx";
import Memo from "./pages/Hooks/Memo.tsx";
import Reducer from "./pages/Hooks/reducer.tsx";
import Contexte from "./pages/Hooks/Contexte.tsx";
import Custom from "./pages/Hooks/Custom.tsx";
import Formulaire from "./pages/Formulaire.tsx";
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
                        <Route path='/router/:id' element={<Router title='React Router' />} />
                        <Route path='/hooks' element={<Index />} >
                            <Route path='' element={<Classes />} />
                            <Route path='effect' element={<Effect />} />
                            <Route path='memo' element={<Memo />} />
                            <Route path='reducer' element={<Reducer />} />
                            <Route path='contexte' element={<Contexte />} />
                            <Route path='custom' element={<Custom />} />
                        </Route>
                        <Route path='form' element={<Formulaire />} />
                        <Route path='*' element={<h1>😭 404 êtes-vous perdu ? </h1>} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App;