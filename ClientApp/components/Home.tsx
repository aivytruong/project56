import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Welcome to the LEGO webshop!</h1>
            <h2>Here you will find LEGO sets and seperate blocks.</h2>
        </div>; 
        
    }
}
 