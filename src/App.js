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
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/:lang" element={<HomePage />} />
                    <Route
                        path="/:lang/catalogue"
                        element={<CataloguePage />}
                    />
                    <Route
                        path="/:lang/purchase/:id"
                        element={<PurchasePage />}
                    />
                    <Route path="/:lang/about" element={<NotMade />} />
                    <Route path="/:lang/contacts" element={<NotMade />} />
                    <Route path="/:lang/not-made" element={<NotMade />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
