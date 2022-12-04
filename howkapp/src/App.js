import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Animes from './pages/Animes';
import Filmes from './pages/Filmes';
import Home from './pages/Home';
import Login from './pages/Login';
import PaginaInicial from './pages/PaginaInicial';
import Series from './pages/Series';
import Cadastro from './pages/Cadastro';
import './App.css'
import Sobre from './pages/Sobre';
import Search from './pages/Search';
import Detalhe from './pages/Detalhe';
import EscolherPlanos from './pages/EscolherPlanos';
import MudarSenha from './pages/MudarSenha';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/home" component={Home} />
                <Route exact path="/" component={PaginaInicial} />
                <Route path="/filmes" component={Filmes} />
                <Route path="/series" component={Series} />
                <Route path="/animes" component={Animes} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/escolherPlanos" component={EscolherPlanos} />
                <Route path="/mudarSenha" component={MudarSenha} />
                <Route path="/search" component={Search} />
                <Route path="/detalhe/:id" component={Detalhe} />
            </BrowserRouter>
        </div>
    );
}

export default App;
