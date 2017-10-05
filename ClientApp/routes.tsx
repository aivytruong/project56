
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Sets } from './components/Sets';
import { Sale } from './components/Sale';
import { Product } from './components/Product';
import { Login } from './components/Login';
import { Registreren } from './components/registreren';
import { KidsProductPage } from './components/KidsProductPage';
import { Wishlist } from './components/Wishlist';
import { StarwarsSets } from './components/StarwarsSets';
import { KidsSets } from './components/KidsSets';



export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/sale' component={ Sale } />
    <Route path='/sets' component={ Sets } />
    <Route path='/product' component={ Product } />
    <Route path='/login' component={ Login } />
    <Route path='/registreren' component={ Registreren } />
    <Route path='/kidsproductpage' component={KidsProductPage} />
    <Route path='/wishlist' component={Wishlist} />
    <Route path='/StarwarsSets' component={ StarwarsSets } />
    <Route path='/KidsSets' component={ KidsSets } />
</Layout>;
