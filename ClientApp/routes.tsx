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
import { LosseBlokken } from './components/LosseBlokken';
import { StarwarsLosseBlokken } from './components/StarwarsLosseBlokken';
import { databasebutton } from './components/databasebutton';



export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/sale' component={ Sale } />
    <Route path='/sets' component={ Sets } />
    <Route path='/product' component={ Product } />
    <Route path='/login' component={ Login } />
    <Route path='/registreren' component={ Registreren } />
    <Route path='/StarwarsSets' component={ StarwarsSets } />
    <Route path='/KidsSets' component={ KidsSets } />
    <Route path='/LosseBlokken' component={ LosseBlokken } />
    <Route path='/StarwarsLosseBlokken' component={ StarwarsLosseBlokken } />
    <Route path='/databasebutton' component={databasebutton} />

</Layout>;
