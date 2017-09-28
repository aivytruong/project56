import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class Sale extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            <h1>Sale</h1>
            <div>Welcome to the sale page! Here you will find the best sales for LEGO </div>
            <br/>
            <h2>Starwars</h2>
            <img src="https://images.brickset.com/sets/large/10188-1.jpg?200807260532" width={600} height={300}/>
            <br/>
            <h3>Price: €50,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button>button</button> </NavLink>


            <br/>
            <h2>Starwars</h2>
            <img src="https://images.brickset.com/sets/large/10188-1.jpg?200807260532" width={600} height={300}/>
            <br/>
            <h3>Price: €50,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button>button</button> </NavLink>
        </div>;
    }

   
    }

