import piclost from "./pic/lost.png";
import picfound from "./pic/found.png";
export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
}

function NavBar() {
  return (
    <header>
      <ul>
        <li className="lostFound">
          <b>Lost And Found</b>
        </li>
        <li>
          <a href="#" className="navMenu">
            Home
          </a>
        </li>

        <li>
          <a href="#" className="navMenu">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className="navMenu">
            About Us
          </a>
        </li>
        <li className="SignIn" style={{ float: "right" }}>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </header>
  );
}

function Main() {
  return (
    <div className="Main">
      <LostCard />
      <FoundCard />
    </div>
  );
}

function LostCard() {
  return (
    <div className="card">
      <div className="cardChild">
        <img src={piclost} alt="Lost" className="imgLost" />
        <p className="paraContent">
          <b style={{ fontSize: "4rem" }}>Lost Card</b>
          <p>If you have lost something</p>
        </p>
      </div>
    </div>
  );
}

function FoundCard() {
  return (
    <div className="card">
      <div className="cardChild">
        <img src={picfound} alt="Found" className="imgFound" />
        <p className="paraContent">
          <b style={{ fontSize: "4rem" }}>Found Card</b>
          <p>If you have found something</p>
        </p>
      </div>
    </div>
  );
}
