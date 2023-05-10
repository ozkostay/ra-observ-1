import './App.css';
import SkillsForm from './components/SkillsForm';
import SkillsList from './components/SkillsList';
// import PhotoList from './components/PhotoList';

function App() {
  return (
    <div className="App">
      <SkillsForm />
      <br></br>
      <SkillsList />
    </div>
  );
}

export default App;
