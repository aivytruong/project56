import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import {ButtonToolbar, Button} from 'react-bootstrap'
type LoadProducts = { load: Models.Lego }

export class ProductLoad extends React.Component<LoadProducts, {}> {
    constructor(props: LoadProducts) {
        super(props);
        this.state = {};
    
    }

    render() {
        return <div className="figuurtjesrow"> 
        <ul>
        <li> <a href="#" > <NavLink to={`/DetailProduct/${this.props.load.item_Number}`}>
            <div className="figuurtjes"> <img src={this.props.load.image_URL} width={300} height={200}/>
            <p><Button className="hoii"bsStyle="danger" bsSize="small"> {this.props.load.name} </Button></p>
           
            
             
            </div>
            </NavLink>
            
            </a >  </li> 
            </ul>
        </div>; 
    }
}

