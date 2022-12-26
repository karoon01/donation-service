import './App.css';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RestorePassword from './pages/RestorePassword';
import Home from './pages/Home';
import CollectionsPage from './pages/CollectionsPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import { Route, Routes } from 'react-router-dom';
import OrganizerCollection from './pages/OrganizerCollection';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/restore" element={<RestorePassword />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/settings/*" element={<Profile />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collection" element={<Collection />} />
            <Route
                path="/collection/organizer/*"
                element={<OrganizerCollection />}
            />
        </Routes>
    );
}

export default App;
