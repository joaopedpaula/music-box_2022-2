import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/Index';
import Musicas from './pages/Musicas';

function Router() {
  return (
    <BrowserRouter>                                        
      <Routes>                                             
				<Route path="/" element={<Index />} />             
				<Route path="/musicas" element={<Musicas />} />    
				<Route path="*" element={<h1>404 - Página não encontrada!</h1>} />    
      </Routes>
    </BrowserRouter>
  );
}

export default Router;