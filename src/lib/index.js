import React, { Component } from "react";
import { Provider } from 'react-redux';
import store from './store'

import Quotes from './QuotesComponent'

class ForexComponent extends Component {
  
  render() {
    const { symbols, interval } = this.props;
    return(
      <Provider store={store}>
        <Quotes symbols={symbols} interval={interval}/>
      </Provider>
    )
  }
}

export default ForexComponent;
