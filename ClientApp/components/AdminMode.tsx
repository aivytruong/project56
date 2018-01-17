import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from 'ClientApp/components/Product';


export class adminmode extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return <div>
            <a href={`/Userc`} >
                <button>Edit, create and update users</button>
            </a>
            <a href={`/lego`} >
                <button>Edit, create and update lego products</button>
            </a></div>

    }
}

