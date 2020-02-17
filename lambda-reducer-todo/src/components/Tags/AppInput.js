import React from 'react';
import Tile from './Tile';
import Input from './Input';

class AppInput extends React.Component {
    constructor(props) {
      super(props);
      this.addTile = this.addTile.bind(this);
      this.removeTile = this.removeTile.bind(this);
      this.editLastTile = this.editLastTile.bind(this);
      this.state = {
        tiles: {},
        tileIds: [],
        currentValue: "",
      }
    }
  
    addTile(tile) {
      // pull tiles array out of the state
      // see destructoring
      const { tiles, tileIds } = this.state;
  
      const newTileId = (tileIds.length - 1) + 1;
      tileIds.push(newTileId);
      tiles[newTileId] = { text: tile };
  
      // reset the input value
      const currentValue = "";
  
      // this is the same as saying tiles : tiles
      this.setState({
        tileIds,
        tiles,
        currentValue
      })
    }
  
    removeTile(id) {
      console.log('removeTile::', this.state.tiles[id]);
      const { tiles } = this.state; //const tiles = this.state.tiles;
      delete tiles[id];
      this.setState({tiles});
    }
  
    editLastTile() {
      const { tiles } = this.state;
      const lastTileValue = Object.keys(tiles).slice(-1).pop();
      console.log('the last tile object is:', tiles[lastTileValue].text);
      // store last tile text value before deleting it
      const currentValue = tiles[lastTileValue].text;
      delete tiles[lastTileValue];
      this.setState({
        tiles,
        currentValue
      });
    }
  
    render() {
      return (
        <div className="field-container">
          {
            Object.keys(this.state.tiles)
                  .map(key => <Tile key={key}
                                    id={key}
                                    tile={this.state.tiles[key]}
                                    removeTile={this.removeTile} />)
          }
          <Input addTile={this.addTile}
                 editLastTile={this.editLastTile}
                 tiles={this.state.tiles}
                 value={this.state.currentValue} />
        </div>
      )
    }
  }

  export default AppInput;