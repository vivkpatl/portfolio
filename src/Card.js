import React from 'react';

class Card extends React.Component {

    render() {
        return(
            <div className="Card">
                <h3>
                    {this.props.title}
                </h3>
                <h4>
                    {this.props.children}
                </h4>
            </div>
        );
    }

}

export default Card;