import images from "./images";

function App() {
  return (
    <>
      <nav>
        <h1>Canyoneering</h1>
      </nav>

      <div className="cards">
        <div className="card">
          <div className="title">
            <h2>Clove Hitch</h2>
            <a href="https://www.animatedknots.com/clove-hitch-knot-rope-end">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img src={images.cloveHitch} alt="clove hitch"></img>
            <p>Used to secure one end of the rope while repelling.</p>
            <img src={images.binerBlock} alt="Carabiner Block"></img>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Water Knot</h2>
            <a href="https://www.animatedknots.com/water-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img src={images.waterKnot} alt="water know"></img>
            <p>
              Used to tie webbing ends together. Usually used on a webbing
              anchor. Make sure tails are at least fist width long.
            </p>
            <img
              src={images.wraptwopulloneanchor}
              alt="Wrap 2 pull 1 anchor"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
