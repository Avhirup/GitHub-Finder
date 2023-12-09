//***************** REACT ROUTER 6 ******************/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//***************** PAGES ******************/
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';

//**************** COMPONENTS *******************
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Alert from './components/layouts/Alert';

//***************** CONTEXT API ******************/
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

export default function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="flex flex-col justify-center container mx-auto pb-12 px-3">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}
