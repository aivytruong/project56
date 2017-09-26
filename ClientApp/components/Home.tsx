import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Hello, world!</h1>
            <h2>Catalina</h2>
        </div>; 
    }
}
 