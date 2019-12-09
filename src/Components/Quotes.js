import axios from 'axios';
import React, {Component} from 'react';


export class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteText: '',
        }
    }

    componentDidMount() {
        axios.get('https://api.kanye.rest')
            .then(response => {
                this.setState({ quoteText: response.data["quote"] });
                console.log('HI', response)
            })
            .catch(error => {
                console.log(error);
            });
    }

render() {
    const { quoteText } = this.state;
    return (
        <div>
            <p>"{quoteText}"</p>
        </div>
    );
}
}





export default Quotes;

