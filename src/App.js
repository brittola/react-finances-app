import './App.css';
import Header from './components/Header';
import Infos from './components/Infos';
import Inputs from './components/Inputs';
import Outputs from './components/Outputs';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import financesReducer from './reducers/financesReducer';
import ioReducer from './reducers/ioReducer';

const store = createStore(combineReducers({
  finances: financesReducer,
  io: ioReducer
}));

store.subscribe(() => {
  localStorage.setItem('transactions', JSON.stringify(store.getState().finances));
  localStorage.setItem('io', JSON.stringify(store.getState().io));
});

function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <Infos />
        <Inputs />
        <Outputs />
      </Provider>
    </div>
  );
}

export default App;