import React from 'react';

class Card extends React.Component {


    handleClick = () => {
      if (this.props.link) {
        window.open(this.props.link, '_blank');
      }
    }


    render() {
        return(
            <div className="Card" onClick={this.handleClick}>
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