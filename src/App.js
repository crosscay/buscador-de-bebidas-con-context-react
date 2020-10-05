import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import CategpriasProvider from  './context/CategoriasContext';
import RecetasProvider  from './context/RecetasContext';

function App() {
  return (
   <CategpriasProvider>
     <RecetasProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
        <ListaRecetas />
      </div>
     </RecetasProvider>
   </CategpriasProvider>
  );
}

export default App;
