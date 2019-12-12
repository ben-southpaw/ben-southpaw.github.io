/**
 * Created by southpaw on 11/12/19.
 */
//import gapi from 'gapi'
//import googleapis from 'googleapis'
//import Quotes from '../Components/Quotes'
/*
const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    '330961009537-s2s6rfko38lte5ppid4gcmmdco39t7tp.apps.googleusercontent.com',
    'ZTzPNb0g7knvFeiaG9x_xF3l'
);

// set auth as a global default
google.options({
    auth: oauth2Client
});*/


async function analyseSentiment(text = 'Hello, WOlrd') {
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');

    // Instantiates a client
    const client = new language.LanguageServiceClient();

    // The text to analyze

    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    // Detects the sentiment of the text
    const [result] = await client.analyseSentiment({document: document});
    const sentiment = result.documentSentiment;

    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
    return sentiment;
}

export default analyseSentiment;

