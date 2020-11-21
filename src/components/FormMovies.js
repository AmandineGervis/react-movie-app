import React from 'react';
import axios from 'axios';

class FormMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: 'Ecrivez votre commentaire',
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    const url = ' https://post-a-form.herokuapp.com/api/movies/';
    e.preventDefault();
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Film 
        ${res.id} enregistré!`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  }

  render() {
    return (
      <div className='FormEmployee'>
        <h1>Favorite Movie</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className='form-data'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                name='title'
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className='form-data'>
              <label htmlFor='url'>URL</label>
              <input
                type='text'
                id='firstname'
                name='poster'
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className='form-data'>
              <label htmlFor='message'>Message</label>
              <textarea
                type='text'
                value={this.state.comment}
                onChange={this.onChange}
              />
            </div>
            <hr />
            <div className='form-data'>
              <input type='submit' value='Envoyer' />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovies;
