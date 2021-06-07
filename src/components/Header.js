import logo from '../logo.svg';

function Header() {
  return (
    <header className="page-header">
      <div className="container">
        <div className="header-content flex ">

          <img src={logo} alt="logo" className="header-logo" />

          <div className="header-right flex justify-between">

            <ul className="header-nav flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Product</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>

            </ul>

            <ul className="header-social flex">
              <li><a href=""><i className="fa fa-facebook"></i></a></li>
              <li><a href=""><i className="fa fa-google"></i></a></li>
              <li><a href=""><i className="fa fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
