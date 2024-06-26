import logoImg from "../../assets/defi_logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="defi logo" />
      <h1>OptionLite</h1>
      <p>
        Explore essential DeFi options trading concepts and tools with
        OptionLite, your gateway to decentralized finance innovation.
      </p>
    </header>
  );
}
