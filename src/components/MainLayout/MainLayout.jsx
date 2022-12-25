import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LanguageProvider from '../../context/LanguageContext';
import CartProvider from '../../context/CartContext';
import ModalProvider from '../../context/ModalContext';

import ScrollToTop from '../../utils/ScrollToTop';

function MainLayout() {
    ScrollToTop();
    return (
        <LanguageProvider>
            <CartProvider>
                <ModalProvider>
                    <Header />
                    <Outlet />
                    <Footer />
                </ModalProvider>
            </CartProvider>
        </LanguageProvider>
    );
}

export default MainLayout;
