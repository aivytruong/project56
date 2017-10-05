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
            <h1>Welcome to your Wishlist!</h1>
            <div>Here are your products you have put in your wishlist. </div>
            <br/>
            <h2>Marvel Super Heroes </h2>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button><img src="https://cdn.kinsights.com/content/images/CaraJS-201632201932396827.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3>€50,-</h3>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>


           <br/>
            <br/>
            <br/>
            <h2>Friends</h2>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button><img src="https://i.pinimg.com/736x/78/21/d9/7821d9d292e951df0fb622293b21f262--lego-friends-sets-juice-bars.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3>€70,-</h3>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>

            <br/>
            <br/>
            <br/>
            <h2>Harry Potter</h2>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button><img src="http://www.geeksraisinggeeks.com/wp-content/uploads/2013/10/Hogwarts-2-1024x660.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3>€60,- </h3>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            <br/>
            <br/>
            
        </div>;
    }

   
    }
