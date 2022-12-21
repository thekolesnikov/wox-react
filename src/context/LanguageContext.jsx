import React, { useContext, useState } from 'react';

const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('EN');
    return (
        <LanguageContext.Provider
            value={{ language: language, setLanguage: setLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
