/**
 * Created by southpaw on 9/12/19.
 */
import React from 'react';
import Quotes from '../Components/Quotes'

const QuoteContainer = () => {
    return(
        <article>
            <h1>Article</h1>
            <p>NLP generated predictive tweets here</p>
            <div className="flex-wrapper">

                <main className="app">
                    <section className="quotes">
                        <div className="quote-text"></div>
                        <Quotes />
                    </section>
                </main>

            </div>
        </article>
    )
}

export default QuoteContainer;