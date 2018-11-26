import React, { Component } from 'react'
import './Welcome.css'

class Welcome extends Component{

    state={}

    playButton = () => {
        this.props.history.push(`/login`)
    }

    componentDidUpdate(prevProps, prevState){
    }    

    render(){
        return(
            <div className="Welcome-page-cover">
                <div className="Welcome-page-title">
                    <h2>Welcome to the game</h2>
                </div>
                <div className="Welcome-page-body">
                    <p>This is the body</p>
                </div>
                <div className="Welcome-page-button">
                    <button onClick={this.playButton.bind(this)}>
                        Play
                    </button>
                </div>
            </div>
        )
    }


    testing(){
        return(
            <div>
                <h2>test</h2>
            </div>
        )
    }
}

export default Welcome