import Nav from "../Nav/Nav";
import css from "./AppBar.module.css";
import appLogo from "../../assets/app-logo.png";

export default function AppBar() {
  return (
    <header className={css.container}>
      <img src={appLogo} alt="Logo" width="80" />
      <Nav />
    </header>
  );
}
