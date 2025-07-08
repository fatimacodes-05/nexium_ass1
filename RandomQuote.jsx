/*import React, { useState } from 'react';//6.9k (gzipped: 2.7k)
import './RandomQuote.css';
import twitter_icon from '../Asset/twitter.png';
import reload_icon from '../Asset/reload.png';

const RandomQuote=()=>{
        let quotes=[];
        async function loadQuotes(){
            const response=await fetch("https://type.fit/api/quotes");
            quotes=await response.json();
        }
        const [quote,setQuote]=useState({
             text:"Difficulties increase the nearer we get to the goal.",
             author:"Johann Wolfgang von Goethe",

         } );
         const random=()=>{
            const select=quotes[Math.floor(Math.random()*quotes.length)]
            setQuote(select);
        }
        loadQuotes();
    return(
        <div className="Container">
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quote.author}</div>
                    <div className="icons">
                        <img src={reload_icon} onClick={() => random()} alt=""/>
                        <img src={twitter_icon} alt=""/>
                    </div>
                </div>


            </div>
        </div>
    );
};
export default RandomQuote */

import React, { useState } from 'react';
import './RandomQuote.css';
import reload_icon from '../Asset/reload.png';

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Difficulties increase the nearer we get to the goal.", author: "Johann Wolfgang von Goethe" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "The strongest among you is the one who controls his anger.", author: "Prophet Muhammad (PBUH)" },
  { text: "The best among you are those who have the best manners and character.", author: "Prophet Muhammad (PBUH)" },
  { text: "Do not waste water, even if you perform your ablution on the banks of an abundantly-flowing river.", author: "Prophet Muhammad (PBUH)" },
  { text: "Seek knowledge from the cradle to the grave.", author: "Prophet Muhammad (PBUH)" },
  { text: "Death with dignity is better than life with humiliation.", author: "Imam Hussain (A.S.)" },
  { text: "The most generous of people is the one who gives to those who do not expect from him.", author: "Imam Hussain (A.S.)" },
  { text: "Do not be a slave to others when Allah has created you free.", author: "Imam Ali (A.S.)" },
  { text: "Silence is the best reply to a fool.", author: "Imam Ali (A.S.)" },
  { text: "When you let go of what you are, you become what you might be.", author: "Lao Tzu" },
  { text: "He who opens a school door, closes a prison.", author: "Victor Hugo" }
];


const RandomQuote = () => {
  const [quote, setQuote] = useState(quotes[0]); // initial quote

  const random = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };

  return (
    <div className="Container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">~ {quote.author}</div>
          <div className="icons">
            <img src={reload_icon} onClick={random} alt="Reload" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;






