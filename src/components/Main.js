import logo from '../logo.svg';

function Main() {
  return (
    <main className="page-main">
      <div className="container">
        <div className="main-content text-center">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>
            Hello React !
          </h2>
        </div>
      </div>
    </main>
  );
}

export default Main;
