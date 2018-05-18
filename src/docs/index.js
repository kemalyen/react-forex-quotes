import React from "react";
import { render } from "react-dom";
import ForexQuotes from "../../lib";
import constants from "../../lib/constants"
import "./styles.css";

function Demo() {
  return (
    <div>
      <ForexQuotes 
        symbols="EURUSD,GBPJPY,AUDUSD" 
        interval="10000"
        api_key='${constants.API_URL}'
        />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
