//Components
import FirstComponet from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';

//
import './App.css';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponet/>
      <TemplateExpressions />
      <Challenge></Challenge>
    </div>
  );
}

export default App;
