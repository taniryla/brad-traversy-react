import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
    }

  render() {
    return (
      <div>
          <form onSubmit={this.onSubmit} action="form">
            <input type="text" name="text" placeholder="Search Users..." value={this.state.text} />
            <input type="submit" value="Search" className="btn btn-dark btn-block" onChange={this.onChange} />
          </form>
      </div>
    )
  }
}

export default Search