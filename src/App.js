export default function App() {
  return (
    <div className="app">
      <NavBar />;
      <Main />
    </div>
  );
}

function NavBar() {
  return (
    <div className="navBar">
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
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
      <p>LostCard</p>
    </div>
  );
}

function FoundCard() {
  return (
    <div className="card">
      <p>FoundCard</p>
    </div>
  );
}
