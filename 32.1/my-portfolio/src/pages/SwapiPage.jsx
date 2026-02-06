import { Provider } from 'react-redux'
import store from '../SWAPI/src/store/store.js'
import SwapiApp from '../SWAPI/src/App.jsx'

export default function SwapiPage() {
  return (
    <Provider store={store}>
      <SwapiApp />
    </Provider>
  )
}
