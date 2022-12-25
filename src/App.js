import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './components/HomePage/HomePage';
import CataloguePage from './components/CataloguePage/CataloguePage';
import PurchasePage from './components/PurchasePage/PurchasePage';
import NotMade from './components/NotMade/NotMade';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/wox-react" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/wox-react/:lang" element={<HomePage />} />
                    <Route
                        path="/wox-react/:lang/catalogue"
                        element={<CataloguePage />}
                    />
                    <Route
                        path="/wox-react/:lang/purchase/:id"
                        element={<PurchasePage />}
                    />
                    <Route
                        path="/wox-react/:lang/about"
                        element={<NotMade />}
                    />
                    <Route
                        path="/wox-react/:lang/contacts"
                        element={<NotMade />}
                    />
                    <Route
                        path="/wox-react/:lang/not-made"
                        element={<NotMade />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
