import React, { Component } from 'react';
import './Form.css';
// constructor is used to initialize the instance
class Form extends Component {
  constructor() {
    super(); // this is what calls the constructor of its parent class. In this case, "Component"
    this.state = { 
      title: '',
      description: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }); // conditional rendering for the card so we dont show empty cards or nothing at all
  } 

  submitIdea = event => {
    event.preventDefault(); // prevents the page from refreshing when the form submits
    const newIdea = {
      id: Date.now(),
      ...this.state // spreading in the title and description
    }
    this.props.addIdea(newIdea); // using the addIdea function from App that we passed as a prop to Form
    this.clearInputs(); // invoking the method I wrong below rest the inputs
  }

    clearInputs = () => {
      this.setState({ title: '', description: ''});
    }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitIdea(event)}>SUBMIT</button> {/*adding the event listener to the button*/}
      </form>
    )
  }
}

export default Form;