import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class addToCart extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            
            <h1>Your item has been added to your cart!</h1>
            <br/>
            <h2>What would you like to do now?</h2>
            <NavLink to={ '/Sale' }  activeClassName='active'><button>Continue shopping</button></NavLink> 
            <NavLink to={ '/login' }  activeClassName='active'><button>Complete order</button></NavLink> 
        
    </div>
    

   
    }
}