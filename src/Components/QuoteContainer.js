/**
 * Created by southpaw on 9/12/19.
 */
import React from 'react';
import TwitterComponent from '../Components/TwitterComponent'
import Quotes from '../Components/Quotes'


const QuoteContainer = () => {

    return(
        <article>
            <h1 className="board-game">IS KANYE OK TODAY? </h1>
            <p>Sentiment analysis of his tweets</p>
            <div className="flex-wrapper">
                <main className="app">
                    <section className="quotes">
                        <div className="quote-text">
                         <Quotes /> /*Here we display out component within a container to separate concerns */
                        </div>
                    </section>
                    <section className="tweetDisplay">
                        <div className="quote-text"></div>
                        <TwitterComponent />
                    </section>
                </main>

            </div>
        </article> /*This is a container to provide the context for other logic. Ideal for separating concerns.*/
    )
}

export default QuoteContainer;