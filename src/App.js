import React, {useState} from 'react';
import './App.scss';
import colorsArray from './colorsArray';

//don't ever do npm audit force-- it ruins the app//

function App() {
const [quote, setQuote] = useState("Life is what you put out!")
const [author, setAuthor] = useState("Sebastian")
const [accentColor, setAccentColor] = useState('#D81E5B')


const [randomNumber, setRandomNumber] = useState(0)




const getRandomQuote = () => {
  let randomInteger = Math.floor(quotesArray.length*Math.random())
  setRandomNumber(randomInteger)
  setAccentColor(colorsArray[randomInteger])
  setQuote(quotesArray[randomInteger].quote)
  setAuthor(quotesArray[randomInteger].author)

}

const quotesArray = [{quote:"Life is what you put out", author: "Sebastian"}, {quote:"Hard work everyday", author: "Marco"}
, {quote:"Sports plus School equals Success", author: "Dad" }, {quote: "Do not be stupid, Think about your Future", author: "Momma"}]

  return (
    <div className="App">
      <header className="App-header" style={
        {backgroundColor:accentColor}
      }>
        <div id="quote-box"  style={{color:accentColor}}>
        
        
        <p id="text">
          "{quote}"
        </p>
        <p id="author">
          - {author}
        </p>
        <div className='buttons'>
        <button id="new-quote"onClick = {() => getRandomQuote()}>Generate a Random Quote</button>
        <a id="tweet-quote" style={{
          backgroundColor: accentColor
        }} href={encodeURI('http://www.twitter.com/intent/tweet?text=${quote} -${author}')}>Tweet Quote</a>
      </div>
      </div>
      </header>
    </div>
  );
}

export default App;
