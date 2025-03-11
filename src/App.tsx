import images from "./images";

function App() {
  return (
    <>
      <nav>
        <h1>Canyoneering</h1>
      </nav>

      <h3>Minimal Starter Information</h3>
      <div className="cards">
        <div className="card">
          <div className="title">
            <h2>Figure 8</h2>
            <a href="https://www.animatedknots.com/figure-8-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img src={images.figure8} alt="figure 8"></img>
          </div>
        </div>

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
              anchor. Make sure tails are at least fist width long and minimize
              webbing twists.
            </p>
            <img
              src={images.wraptwopulloneanchor}
              alt="Wrap 2 pull 1 anchor"
            ></img>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Anchor On Two Bolts</h2>
            <a href="https://www.canyoneeringusa.com/techtips/579">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img
              src={images.twoBoltAnchorWithWebbing}
              alt="two bolt anchor with webbing"
            ></img>
            <p>
              Webbing attached to two bolts is redundant and distributes the
              rappel weight onto two bolts.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Double Overhand Stopper</h2>
            <a href="https://www.animatedknots.com/double-overhand-stopper-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img
              src={images.doubleOverhand}
              alt="Double Overhand Stopper"
            ></img>
            <p>
              This stopper knot can be used at the end of a rappel rope, a
              stopper for a bowline, in a double fisherman's, etc.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Double Fisherman's Bend</h2>
            <a href="https://www.animatedknots.com/double-fishermans-bend-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img
              src={images.doubleFishermans}
              alt="Double Fisherman's Bend"
            ></img>
            <p>
              Ties two rope ends together. Often use to make slings/loops for
              rope grabs, autoblocks, ascending, personal anchor systems, etc.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Prusik</h2>
            <a href="https://www.animatedknots.com/prusik-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img src={images.prusik} alt="Prusik"></img>
            <p>
              A rope grab that is often used as a rappel autoblock or for
              ascending. Works best when the prusik is 3mm smaller than the rope
              being grabbed.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Purcell Prusik Loop</h2>
            <a href="https://www.animatedknots.com/purcell-prusik-loop-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img src={images.purcellPrusik} alt="Purcell Prusik Loop"></img>
            <p>An adjustable tether often used as a personal anchor system.</p>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Bowline Knot</h2>
            <a href="https://www.animatedknots.com/bowline-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img src={images.bowline} alt="Bowline Knot"></img>
            <p>
              Often used to tie a fixed rope to a tree. A safety knot such as a
              double overhand is used with the bowline because it can shake
              loose without it.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Double Sheep Bend</h2>
            <a href="https://www.animatedknots.com/sheet-bend-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img src={images.doubleSheetBend} alt="Double Sheet Bend"></img>
            <p>
              Used to tie two ropes with different width together. Can close
              both ends with double overhands.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Alpine Butterfly Loop</h2>
            <a href="https://www.animatedknots.com/alpine-butterfly-loop-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img src={images.alpineButterfly} alt="Alpine Butterfly Loop"></img>
            <p>
              Used to isolate a damaged part of the rope, so that you can
              continue using it until it you have the opportunity to replace it.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Munter Mule Overhand</h2>
            <a href="https://www.animatedknots.com/munter-mule-combination-hitch-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img
              src={images.munterMuleOverhand}
              alt="Munter Mule Overhand"
            ></img>
            <p>
              Often used instead of a clove hitch on a carabiner in order to
              provide a contingency to lower a person who is stuck on rappel.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <h2>Emergency Harness</h2>
            <a href="https://www.animatedknots.com/hasty-harness-knot">
              Tying Instructions
            </a>
          </div>
          <div className="content">
            <img src={images.emergencyHarness} alt="Emergency Harness"></img>
            <p>
              If you forget or have issues with your primary harness an
              emergency harness can be constructed. A{" "}
              <a href="https://www.instructables.com/How-to-Tie-a-Swiss-Seat/">
                Swiss Seat
              </a>{" "}
              is another harness setup and pictures follow.
            </p>
            <div className="sideBySideImg">
              <img
                src={images.swissSeatFront}
                alt="Swiss Seat Front"
                width="200"
              />
              <img
                src={images.swissSeatBack}
                alt="Swiss Seat Back"
                width="200"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
