import './App.css';
import PageDisplay from './Components/PageDisplay/PageDisplay'
import StringsProvider from './StringsProvider/StringsProvider';


function App() {

  return (

    <StringsProvider>

      <PageDisplay />

    </StringsProvider>

  );
}

export default App;
