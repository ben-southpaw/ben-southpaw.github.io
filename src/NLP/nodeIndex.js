

/*Here we will call any external api from which we want to get data from to analyse in our node backend.
Axios is an ideal library for http requests. We have a async ES6 function in which means we can allow for the response
time of the external api. We add our api link, parse the response body and cater for errors.*/
const axios = require('axios');
const language = require('@google-cloud/language');//Accessing the google apis

const getQuotes = async () => {
    try {
        return await axios.get('https://api.kanye.rest')
    } catch (error) {
        console.error(error)
    }
};



const analyseQuote = async () => {
    const returnedQuote = await getQuotes();
    const text = returnedQuote.data.quote;
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };
        const client = new language.LanguageServiceClient();
        client.analyzeSentiment({document: document})
            .then(results => {
                const sentiment = results[0].documentSentiment;
                //console.log(`Text: ${text}`);
                //console.log(`Sentiment score: ${sentiment.score}`);
                //console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
                mag = (`Sentiment magnitude: ${sentiment.magnitude}`)
                console.log(typeof mag);
            })
            .catch(err => {
                console.error('ERROR:', err);
            }); /*In this function we call getQuotes and get either the response or an error. From pass the response as
            a formatted JSON object to the analyse sentiment library and return the results of each quote or catch an error*/


};


 export {analyseQuote};

//module.exports.analyseQuote = analyseQuote;