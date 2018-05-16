import React, { Component } from "react";
import { Provider } from 'react-redux';
import store from './store'

import Quotes from './QuotesComponent'

class ForexComponent extends Component {
  
  render() {
    const { symbols, interval, api_key } = this.props;
    return(
      <Provider store={store}>
        <Quotes symbols={symbols} interval={interval} api_key={api_key}/>
      </Provider>
    )
  }
}

export default ForexComponent;
