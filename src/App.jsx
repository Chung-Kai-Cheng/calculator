import Display from "./components/Display";
import ButtonArea from "./components/Button/ButtonArea";
import "./styles/app.scss";

export default function App() {
  return (
    <div className="main-container">
      <Display />
      <ButtonArea />
    </div>
  );
}
