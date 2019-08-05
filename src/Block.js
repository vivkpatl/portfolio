import React, { Component } from 'react';

class Block extends Component {
  
  render() {
    return(
      <div className="Block">
        <div>
          <h1>
            {this.props.title}
          </h1>

          <h2>
            {this.props.description}
          </h2>

          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Block;