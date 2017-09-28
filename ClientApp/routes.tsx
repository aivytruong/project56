
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Sets } from './components/Sets';
import { Sale } from './components/Sale';
import { Product } from './components/Product';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/sale' component={ Sale } />
    <Route path='/sets' component={ Sets } />
    <Route path='/product' component={ Product } />
</Layout>;
