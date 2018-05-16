import React, { Component } from "react"
import { connect } from 'react-redux'
import {getQuotes} from './actions'
import './quote.css'

class QuotesComponent extends Component {

  componentDidMount(){
    setInterval(
      () => {
        this.props.getQuotes(this.props.symbols, this.props.api_key)
      },
      this.props.interval
    )
  }

  listQuotes() {
    return(
      this.props.quotes.map((quote, index) => {
        let before = this.props.before.find((item )=> item.symbol == quote.symbol )
        let bid_color, ask_color = {color: 'antiquewhite'}
        let price_color = {color: 'antiquewhite'}

        if (before){
          if (before.bid < quote.bid){
            bid_color = { color: 'red'}
          }
          if(before.bid > quote.bid){
            bid_color = { color: 'green'}
          }

          if (before.ask < quote.ask){
            ask_color = { color: 'red'}
          }
          if(before.ask > quote.ask){
            ask_color = { color: 'green'}
          }

          if (before.price < quote.price){
            price_color = { color: 'red'}
          }

          if(before.price > quote.price){
            price_color = { color: 'green'}
          }          
        }

        return (
            <tr key={index}>
              <td className="title">{quote.symbol}</td>
              <td className="change" style={bid_color}>{quote.bid}</td>
              <td className="change" style={ask_color}>{quote.ask}</td>
              <td style={price_color}>{quote.price}</td>                        
            </tr>
          );
      })
    )
  }

  render() {
    const { symbols, interval, api_key } = this.props; 
    if(!this.props.quotes){
        return (<div>Loading ...</div>)
    }
    if(this.props.error){
      return (<div>An error occured</div>)
    }
   return (
      <div className="quote">
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Bid</th>
                <th>Ask</th>
                <th>Price</th> 
              </tr>
            </thead>
            <tbody>
            {this.listQuotes()}
            </tbody>            
          </table>
    </div>
    );
  }
}
 
export default connect(
  (state) => ({quotes: state.quotes.quotes, before: state.quotes.before, error: state.quotes.error}),
  {getQuotes}
)(QuotesComponent)