import "./Header.css";
import { getCurrentMonth, getToday } from "../../utils/dateUtils";

function Header() {
  return (
    <header className="header">

      <div>

        <p className="subtitle">
          TRACKER FINANCIERO
        </p>

        <h1>
          {getCurrentMonth()}
        </h1>

        <p className="today">
          Hoy: {getToday()}
        </p>

      </div>

    </header>
  );
}

export default Header;