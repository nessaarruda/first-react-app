import React, { Component } from 'react';
import Ideas from './Ideas';
import Form from './Form';

import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      ideas: [{ id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
      { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
      { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },]
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  } // addIdea is the function, newIdea is the argument, this refers to App component, ideas is an array newIdea is the user input that will be added to ideas array

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ ideas: filteredIdeas}); // instead of deleting is just not selecting the idea
  }

  render(){
    return (
      <main className='App'>
      <h1>IdeaBox</h1>
      <Form addIdea={this.addIdea} />
      <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>
    )
  }
}

export default App;