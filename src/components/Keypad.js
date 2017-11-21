import React from 'react';

export default class Keypad extends React.Component {
  password = () => {
    console.log("Entering password...");
  }

  render () {
    return (
      <form>
        <input onKeyUp={this.password} type="password" />
      </form>
    )
  }
}
