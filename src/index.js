import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro';

// Desafio master blaster da descrição - cOlocar um joguinho na pagina 404
const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  //Tag 'BrowserRouter' que faz com que eu controle quais páginas eu quero carregar no modo SPA.
  //Ela vem exatamente da LIB react-router-dom que acabamos de instalar
  <BrowserRouter>
    <Switch> 
      <Route path="/" component={Home} exact /> {/*O route é onde eu coloco o componente. e é importante o 'exact' para que esse '/' não seja considerado de qualquer forma e abra qualquer página com barra. Tem que ser exatamente como ta na 'path' */}
      <Route path="/cadastro/video" component={CadastroVideo} exact/> 
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/> 
      <Route component={Pagina404} /> {/* Se não tiver nenhum 'Path', você está dizendo para o router que se não achar nenhuma rota, essa será executada. Serve para o nosso erro 404*/}
    </Switch>
  </BrowserRouter>,
  
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  document.getElementById('root')
);
