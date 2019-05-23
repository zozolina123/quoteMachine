import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      quote: null,
      author: null
    }
    this.getNewQuote.bind(this);
  }
    getNewQuote = () => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json().then(response => {
          const quote = response.quotes[Math.floor(Math.random() * response.quotes.length)];
          this.setState({
            quote: quote.quote,
            author: quote.author
          })
        }))
    }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json().then(response => {
      const quote = response.quotes[Math.floor(Math.random() * response.quotes.length)];
      this.setState({
        quote: quote.quote,
        author: quote.author
      })
    }))
  }
  getRandomColor = () => {
    let r,g,b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    const color = "rgb("+r+","+g+","+b+")";
    return color;
  }

  render() {
    const bgcolor = {
      backgroundColor: this.getRandomColor(),
    }
    const color ={
      color: bgcolor.backgroundColor
    }
    const link = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+this.state.quote+"-"+this.state.author;
    return (
      <div id="wrapper" style={bgcolor}>
        <div id="quote-box">
          <blockquote style={color}>
            <h2 id="text">{this.state.quote}</h2>
            <p id="author">{this.state.author}</p>
            <button onClick={this.getNewQuote} id="new-quote">New Quote</button>
            <a target="_blank" rel="noopener noreferrer" href={link} id="tweet-quote"><i className="fa fa-twitter fa-xs"></i></a>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default App;
