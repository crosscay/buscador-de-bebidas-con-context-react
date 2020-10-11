import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import CategpriasProvider from  './context/CategoriasContext';
import RecetasProvider  from './context/RecetasContext';
import ModalProvider  from './context/ModalContext';

function App() {
  return (
   <CategpriasProvider>
     <RecetasProvider>
       <ModalProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
          <ListaRecetas />
        </div>
       </ModalProvider>
     </RecetasProvider>
   </CategpriasProvider>
  );
}

export default App;
