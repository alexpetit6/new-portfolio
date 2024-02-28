import './Landing.css';

export default function Landing() {

  async function grow(initSize, finalSize, timeInMs) {
    //set element height and width to initial size
    
    //subtract final from init to get total growth

    //divide growth by time to get rate of growth per ms

    //make for loop iterate for amount of time in ms to reach final size 
    // with a delay of 1 ms between each iteration
  }

  return (
    <div id="landing">
      <div id='landing-greeting'>
        <h1>Hello,</h1>
        <h3>My Name's Alex</h3>
      </div>
      <div id='landing-nav-btns'>
        <button>My Projects</button>
        <button>About Me</button>
      </div>
      {/* <div id='background'>
        <div id='box'>
          <div className="circles" id='one'></div>
          <div className="circles" id='two'></div>
          <div className="circles" id='three'></div>
          <div className="circles" id='four'></div>
          <div className="circles" id='five'></div>
          <div className="circles" id='six'></div>
          <div className="circles" id='seven'></div>
        </div>
        <div ></div>
        <div ></div>
        <div ></div>
      </div> */}
    </div>
  );
}