import React, {Component} from 'react';
import './Header.css'

class Header extends Component {

    constructor(){
        super()

        this.state = {
            title:'React App',
            keyword: 'User text here'
        }
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({keyword: event.target.value?event.target.value: 'User value here'})
        this.props.userSearch(event.target.value)//any name to the prop can be given
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick = {() => { console.log("click from logo")}}>
                    {this.state.title}
                </div>
                <center>
                    <input type="text"
                        onChange={this.inputChange.bind(this)} />
                    <p>{this.state.keyword}</p>
                </center>
                <hr/>
            </header> 
        )
    }
}

export default Header;