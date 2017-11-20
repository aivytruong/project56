import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'

type LoadProducts = { load: Models.Lego }

export class ProductLoad extends React.Component<LoadProducts, {}> {
    constructor(props: LoadProducts) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <NavLink to={`/DetailProduct/${this.props.load.item_Number}`}>
            <div> <img src={this.props.load.image_URL} width={300} height={200}/>
            <br></br>
            <button> {this.props.load.name} </button>
            </div>
            </NavLink>
        </div>;
    }
}

