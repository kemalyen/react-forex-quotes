import * as constants from '../../src/lib/constants';
import * as actions from '../../src/lib/actions';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from 'fetch-mock'
  
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Fetch Quote Pair', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should fetch quotes for pairs', () => {

    const data = [{"symbol":"EURUSD","bid":1.17936,"ask":1.17936,"price":1.17936,"timestamp":1526565096},{"symbol":"GBPJPY","bid":149.359,"ask":149.364,"price":149.3615,"timestamp":1526565096},{"symbol":"AUDUSD","bid":0.75031,"ask":0.75031,"price":0.75031,"timestamp":1526565096}];
    const symbols = "EURUSD,GBPJPY,AUDUSD"
 
    fetchMock
      .getOnce(`mock_url`, { body: data, headers: { 'content-type': 'application/json' } })

    const expectedActions = [
      { type: constants.FETCH_QUOTES_REQUEST },
      { type: constants.GET_QUOTES, body: data }
    ]
    const store = mockStore({ quotes: [] })

    return store.dispatch(actions.getQuotes(symbols))
    .then(() => {

      expect.extend({
        toContainRequest(received, argument) {
          const type = received[0].type;
          const pass = (type === constants.FETCH_QUOTES_REQUEST) ? true :  false

          if (pass) {
            return {
              pass: true,
              message: () => `expected FETCH_QUOTES_REQUEST `,
            }
          } else {
            return {
              pass: false,
              message: () => `expected but received ${type}`,
            }
          }
        }
      })

      expect.extend({
        toContainQuotes(received, argument) {
          const type = received[1].type;
          const pass = (type === constants.GET_QUOTES) ? true :  false

          if (pass) {
            return {
              pass: true,
              message: () => `expected GET_QUOTES `,
            }
          } else {
            return {
              pass: false,
              message: () => `expected but received ${type}`,
            }
          }
        }
      })      
      expect(store.getActions()).toContainRequest()
      expect(store.getActions()).toContainQuotes()
    })
  })
})