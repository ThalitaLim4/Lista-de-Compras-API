import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import produtos from './pages/produtos';
import inicio from './pages/inicio';
import AdicionarProduto from "./pages/AdicionarProduto";
import DetalhesProduto from "./pages/DetalhesProduto";
import EditarProduto from "./pages/EditarProduto";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={inicio}/>
                <Route path='/produtos' component={produtos}/>
                <Route path='/adicionar' component={AdicionarProduto}/>
                <Route path='/detalhes/:id' component={DetalhesProduto}/>
                <Route path='/editar/:id' component={EditarProduto}/>
            </Switch>     
        </BrowserRouter>
    )

}