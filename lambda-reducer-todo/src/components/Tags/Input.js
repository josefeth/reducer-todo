import React from 'react';

class Input extends React.Component {

    tagEvent(e) {
      const tag = this.text.value;
      const tagGroup = tag.split(" ");
      const tiles = this.props.tiles;
      const hasTiles = Object.keys(tiles).length > 0
  
      if(e.keyCode === 32 || e.keyCode === 13){
        e.preventDefault();
        tagGroup.map(tag => this.props.addTile(tag));
        this.tagForm.reset();
      }
  
      if(e.keyCode === 8 && hasTiles && tag === '' ) {
        e.preventDefault()
        this.props.editLastTile();
        // this trigger the default value eachtime we hit delete
        this.tagForm.reset();
      }
    }
  
    componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value) {
          this.text.selectionStart = this.text.value.length;
          this.text.selectionEnd = this.text.value.length;
      }
    }
  
    render() {
      return (
        <div className="input-wrapper">
          <form ref={(input) => this.tagForm = input}>
            <input ref={(input) => this.text = input}
                   type="text"
                   name="new-item"
                   placeholder="type and press space"
                   autoComplete="off"
                   defaultValue={this.props.value}
                   onKeyDown={(e) => this.tagEvent(e)} />
          </form>
        </div>
      )
    }
  }

  export default Input;