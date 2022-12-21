import './App.css';
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RestorePassword from "./pages/RestorePassword";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import CollectionsPage from "./pages/CollectionsPage";

function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<SignIn/>}/>
                <Route path='/register' element={<SignUp/>}/>
                <Route path='/restore' element={<RestorePassword/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/settings/*' element={<Profile/>}/>
                <Route path='/collections' element={<CollectionsPage/>}/>
            </Routes>
        </>
    );
}

export default App;