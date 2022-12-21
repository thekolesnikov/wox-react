import React, { useContext, useState } from 'react';

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <ModalContext.Provider
            value={{ modalActive: modalActive, setModalActive: setModalActive }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
