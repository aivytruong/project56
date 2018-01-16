import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from 'ClientApp/components/Product';
import {Button, Glyphicon} from 'react-bootstrap'


export class adminmode extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return <div>
            <a href={'/Userc'} >
                <Button bsStyle="warning" bsSize="large">Edit, create and update users</Button>
            </a>
            <a href={'/lego'} >
                <Button bsStyle="warning" bsSize="large">Edit, create and update lego products</Button>
            </a>
            </div>

    }
}