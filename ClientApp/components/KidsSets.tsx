import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class KidsSets extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        {

        function x(searchterm){
        for (var index = 0; index < searchterm.length; index++){
            document.getElementsByClassName(searchterm[index])[0].remove();
        }}
        return <div>
<<<<<<< HEAD
            <h1><button onClick={(event)=>x(["id1","id2"])}>City</button></h1>
            <h1><button onClick={(event)=>x(["id2", "id3"])}>Marvel Super Heroes</button></h1>
            <h1><button onClick={(event)=>x(["id3", "id1"])}>Thomas And Friends</button></h1>
            <h1>KidsPage</h1>
=======
            <h1>Kids page</h1>
>>>>>>> 1015e6c695f4181d8b51a93f3ed522b09b2ba773
            <div>Welcome to the Kids page! Here you will find the best Kids sets! Your kid will love it! </div>
            <br/>
            <div className = "id1">
            <h2>Marvel Super Heroes </h2>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button><img src="https://cdn.kinsights.com/content/images/CaraJS-201632201932396827.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3>€50,-</h3>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>


           <br/>
            <br/>
            <br/>
            <div className = "id2">
            <h2>Thomas And Friends</h2>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button><img src="https://ae01.alicdn.com/kf/HTB158dmMFXXXXaUXFXXq6xXFXXXg/47-stks-Elektrische-Thomas-en-FriendsTrains-Nieuwe-Sets-Model-Building-Bricks-Met-Rail-Speelgoed-compitable-met.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3>€70,-</h3>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>

            <br/>
            <br/>
            <br/>
            <div className = "id3">
            <h2>City</h2>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button><img src="http://brickdave.com/wp-content/uploads/2016/11/61cCsKgbXL.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3>€60,- </h3>
            <NavLink to={ '/kidsproductpage' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>
            <br/>
            <br/>
            
        </div>;
    }

   
    }}



