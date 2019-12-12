

/*Here we will call any external api from which we want to get data from to analyse in our node backend.
Request is an ideal library for http requests. We have a simple callback function in which
 we add our api link, parse the response body and cater for errors.*/
const axios = require('axios');
const language = require('@google-cloud/language');

const getQuotes = async () => {
    try {
        return await axios.get('https://api.kanye.rest')
    } catch (error) {
        console.error(error)
    }
};

/*const showQuotes = async () => {
    const returnedQuote = await getQuotes();
    if (returnedQuote.data.quote) {
        const arrayOfSingleQuote = returnedQuote.data.quote;
        console.log(arrayOfSingleQuote);
        return arrayOfSingleQuote
    }.then(arrayOfSingleQuote => {

    })
};


const text = showQuotes(getQuotes(), null);


//console.log(text);*/


const analyseQuote = async () => {
    const returnedQuote = await getQuotes();
    const text = returnedQuote.data.quote;
    console.log(text);
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };
        const client = new language.LanguageServiceClient();
        client.analyzeSentiment({document: document})
            .then(results => {
                const sentiment = results[0].documentSentiment;
                console.log(`Text: ${text}`);
                console.log(`Sentiment score: ${sentiment.score}`);
                console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
            })
            .catch(err => {
                console.error('ERROR:', err);
            });



};



//showQuotes();
analyseQuote();