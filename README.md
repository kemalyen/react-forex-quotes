# React Forex Quotes Table


[![NPM](https://nodei.co/npm/react-forex-quotes.png)](https://nodei.co/npm/react-forex-quotes/)
[![Build Status](https://travis-ci.org/gazatem/react-forex-quotes.svg?branch=master)](https://travis-ci.org/gazatem/react-forex-quotes)



This component show you selected or complete quotes of Forex pairs. In this first release I've used 1forge.com rest api.

However I'll add more resource with socket choice.

Before continue, you must signup with  [https://1forge.com/] and get an API Key.

## Installation
Add React Forex Quotes to your project:

    yarn add react-forex-quotes

To use Forex Quote, import it to your own component.

    import ForexQuotes from 'react-forex-quotes';

## Usage

Before you use ForexQuotes, signup with 1Forge and receive your api key. Current release is supporting 1Forge only.

    <ForexQuotes
	    symbols="EURUSD,GBPJPY,AUDUSD"
	    interval="1000"
	    api_key="YOUR_OWN_API_KEY"
	 />

If you wish to display only selected symbols, enter them seperating with a comma between each symbols. You may choose refresh time by changing interval value. 

## Contributing
Feel free to file an issue or open a pull request