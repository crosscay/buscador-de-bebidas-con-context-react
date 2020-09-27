import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import CategpriasProvider from  './context/CategoriasContext';

function App() {
  return (
   <CategpriasProvider>
     <Header />
     <div className="container mt-5">
       <div className="row">
        <Formulario />
       </div>
     </div>
   </CategpriasProvider>
  );
}

export default App;
