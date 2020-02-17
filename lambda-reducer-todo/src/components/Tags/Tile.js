import React from 'react';

class Tile extends React.Component {
    render() {
      const tile = this.props.tile;
      const id = this.props.id;
      return (
        <span className="tile">
          <span>{tile.text}</span>
          <i className="tile__icon fa fa-times" onClick={ () => this.props.removeTile(id) }></i>
        </span>
      )
    }
  }

  export default Tile;