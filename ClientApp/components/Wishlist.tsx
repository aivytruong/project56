import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class Wishlist extends React.Component<RouteComponentProps<{}>, {}>  {
    constructor(props, context)
    {
        super(props)
        this.state = {}
    }

    render(){
        return(
        <h1>hi</h1>
        )
    }
}