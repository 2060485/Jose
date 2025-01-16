import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const playSound = (name) => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/Assets/${name}.mp3`);
    audio.play();
  };

  const buttons = [
    { label: 'Anaïs', sound: 'Anais' },
    { label: 'Laurier', sound: 'Laurier' },
    { label: 'Sébastien', sound: 'Sebastien' },
    { label: 'Annie Lalonde', sound: 'AnnieLa' },
    { label: 'Annie Lehoux', sound: 'AnnieLe' },
    { label: 'Julien', sound: 'Julien' },
    { label: 'Ève-Marie', sound: 'Eve' },
    { label: 'Danny', sound: 'Danny' },
    { label: 'Anick', sound: 'Anick' },
    { label: 'Stéphane Normand', sound: 'StefN' },
    { label: 'Mathis', sound: 'Mathis' },
    { label: 'Stéphane Simard', sound: 'StefS' },
    { label: 'Timothé', sound: 'Timo' },
    { label: 'Alexanne', sound: 'Alex' },
  ];

  return (
    <div className="App container text-center">
      <header className="App-header my-5 p-5">
        <h1 className="display-4">
          Les tabarnaks à Josée
        </h1>
        <br/>
        <p>
          Parce que tu es une personne exceptionnelle, 
          nous avons voulu te rappeler à quel point tu comptes pour nous tous. 
          Chaque jour, ta présence fait une différence, et ton énergie, 
          ta gentillesse et ton sourire illuminent nos vies. 
          Chacun de nous y a mis un peu de son cœur pour te montrer à quel point tu es précieuse à nos yeux.
        </p>
        <div className="row justify-content-center mt-4">
          {buttons.map((button, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
              <button
                className="btn btn-primary btn-lg w-100"
                onClick={() => playSound(button.sound)}
              >
                {button.label}
              </button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;