import axios from 'axios';
import React, {Component} from 'react';


export class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteText: ''
        }
    } /*Here we set our state which will be updated next when the component loads or mounts*/

    componentDidMount() {
        axios.get('https://api.kanye.rest')
            .then(response => {
                this.setState({ quoteText: response.data["quote"] });
            })
            .catch(error => {
                console.log(error);
            });
    }        /*Here we call our 3rd party api for quotes, their formatting needs to be understood, can use postman to understand and
    manage. The returned quote then becomes the current state. We also use a callback to load any errors in the console. */

render() {
    const { quoteText } = this.state;
    return (
        <div>
            <p>"{quoteText}"</p>
            <button onClick={this.getClicked}
                    type='button'>More Wisdom</button>
        </div>
    );
}   /*Here we actually show the result in jsx form as a variable and finally export it as a component to the parent
where it can be displayed*/
}





export default Quotes;

