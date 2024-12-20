import './App.css';
import Presentation from "./pages/Presentation.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./layout/Navigation.tsx";
import Reactivite from "./pages/Reactivite.tsx";
import {lazy, useEffect} from "react";
import Router from "./pages/Router.tsx";
import Index from "./pages/Hooks/Index.tsx";
import Classes from "./pages/Hooks/Classes..tsx";
import Effect from "./pages/Hooks/Effect.tsx";
import Memo from "./pages/Hooks/Memo.tsx";
import Reducer from "./pages/Hooks/reducer.tsx";
import Contexte from "./pages/Hooks/Contexte.tsx";
import Custom from "./pages/Hooks/Custom.tsx";
import Formulaire from "./pages/Formulaire.tsx";
import Store from "./pages/Store.tsx";
import AlertContainer from "./layout/AlertContainer.tsx";
import Login from "./pages/Login.tsx";
import {useAppDispatch, useAppSelector} from "./utils/hooks/useStore.ts";
import {getToken} from "./utils/services/Auth.service.ts";
import {setUser} from "./store/UserSlice.ts";
import AuthGuard from "./utils/guards/auth.guard.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Tanstack from "./pages/Tanstack.tsx";
const Parent = lazy(() => import('./pages/Parent.tsx')); // Lazy Loading

const App = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user)

    useEffect(() => {
        const token = getToken();
        dispatch(setUser(token ? {token} : null))
    }, [dispatch]);

    const queryClient = new QueryClient({

    });

    return (
        <div className='App'>
            <QueryClientProvider client={queryClient}>
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
                            <Route path='store' element={<Store />} />
                            <Route path='login' element={user ? <Presentation /> : <Login />} />
                            <Route path='protected' element={<AuthGuard><h1>Route protégée</h1></AuthGuard>} />
                            <Route path='query' element={<Tanstack />} />
                            <Route path='*' element={<h1>😭 404 êtes-vous perdu ? </h1>}/>
                        </Routes>
                    </main>

                    <AlertContainer />
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    )
}

export default App;