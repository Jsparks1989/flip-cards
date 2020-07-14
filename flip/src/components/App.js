import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { connect } from 'react-redux';
import { flipped, notFlipped } from '../actions/index';

class App extends React.Component {

    flipCard = () => {
        this.props.flipped();
    }

    flipBackCard = () => {
        this.props.notFlipped();
    }

    render() {
        return(
            <ReactCardFlip isFlipped={this.props.isFlipped} flipDirection="horizontal">
                <div>
                    This is the front of the card.
                    <button onClick={this.flipCard}>Click to flip</button>
                </div>
        
                <div>
                    This is the back of the card.
                    <button onClick={this.flipBackCard}>Click to flip</button>
                </div>
            </ReactCardFlip>           
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isFlipped: state.isFlipped,
        setIsFlipped: state.setIsFlipped
    };
}

export default connect(mapStateToProps, { flipped, notFlipped })(App);