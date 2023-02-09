import { createRoot } from 'react-dom';
import Pet from './Pet';


const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="dog" breed="Havanese" />
    <Pet name="Roman" animal="cat" breed="Bombay" />
    <Pet name="Jackie" animal="fish" breed="Betta splendens" />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
