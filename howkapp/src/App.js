import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Animes from "./pages/Animes";
import Filmes from "./pages/Filmes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaginaInicial from "./pages/PaginaInicial";
import ParaFamilia from "./pages/ParaFamillia";
import Series from "./pages/Series";
import Cadastro from "./pages/Cadastro";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/paginainicial" component={PaginaInicial} />
          <Route path="/filmes" component={Filmes} />
          <Route path="/series" component={Series} />
          <Route path="/animes" component={Animes} />   
          <Route path="/parafamilia" component={ParaFamilia} />   
          <Route path="/login" component={Login} />   
          <Route path="/cadastro" component={Cadastro} />   
        </BrowserRouter>
    </div>
  );
}

export default App;
