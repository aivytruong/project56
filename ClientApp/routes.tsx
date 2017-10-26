import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Sets } from './components/Sets';
import { Sale } from './components/Sale';
import { Product } from './components/Product';
import { Login } from './components/Login';
import { Registreren } from './components/registreren';
import { StarwarsSets } from './components/StarwarsSets';
import { KidsSets } from './components/KidsSets';
import { SeparateBricks } from './components/SeparateBricks';
import { StarwarsLosseBlokken } from './components/StarwarsLosseBlokken';
import { databasebutton } from './components/databasebutton';
import { SeparateFigures } from './components/SeparateFigures';
import { SeparateBricksProduct } from './components/SeparateBricksProduct';
import { SeparateObjects } from './components/SeparateObjects';
import { addToCart } from './components/addToCart';


export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/sale' component={ Sale } />
    <Route path='/sets' component={ Sets } />
    <Route path='/product' component={ Product } />
    <Route path='/login' component={ Login } />
    <Route path='/registreren' component={ Registreren } />
    <Route path='/StarwarsSets' component={ StarwarsSets } />
    <Route path='/KidsSets' component={ KidsSets } />
    <Route path='/SeparateBricks' component={ SeparateBricks } />
    <Route path='/StarwarsLosseBlokken' component={ StarwarsLosseBlokken } />
    <Route path='/databasebutton' component={databasebutton} />
    <Route path='/SeparateFigures' component={SeparateFigures} />
    <Route path='/SeparateBricksProduct' component={SeparateBricksProduct} />
    <Route path='/addToCart' component={addToCart} />
    <Route path='/SeparateObjects' component={SeparateObjects} />
</Layout>;
