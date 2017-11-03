import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class KidsSets extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            <h1>Kids page</h1>
            <div>Welcome to the Kids page! Here you will find the best Kids sets! Your kid will love it! </div>
            <br/>
            <h2>Marvel Super Heroes </h2>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button><img src="https://cdn.kinsights.com/content/images/CaraJS-201632201932396827.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3>€50,-</h3>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>


           <br/>
            <br/>
            <br/>
            <h2>Thomas And Friends</h2>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button><img src="https://ae01.alicdn.com/kf/HTB158dmMFXXXXaUXFXXq6xXFXXXg/47-stks-Elektrische-Thomas-en-FriendsTrains-Nieuwe-Sets-Model-Building-Bricks-Met-Rail-Speelgoed-compitable-met.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3>€70,-</h3>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>

            <br/>
            <br/>
            <br/>
            <h2>City</h2>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button><img src="http://brickdave.com/wp-content/uploads/2016/11/61cCsKgbXL.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3>€60,- </h3>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            <br/>
            <br/>
            
        </div>;
    }

   
    }



