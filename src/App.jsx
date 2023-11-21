import "./App.css";
import BoxColor from "./components/BoxColor";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import Random from "./components/Random";
import CreditCard from "./components/CreditCard";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        firstName="Dolores"
        lastName="Konnichiwah"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <hr />
      <Greetings lang="de">Peter</Greetings>
      <br />
      <Greetings lang="es">Antonio</Greetings>
      <hr />
      <Random min={1} max={6} />
      <br />
      <Random min={10} max={100} />
      <hr />
      <BoxColor r={46} g={124} b={0} />
      <hr />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <LikeButton />
      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
    </div>
  );
}

export default App;
