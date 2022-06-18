import BottomHeader from "./components/BottomHeader";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <img
        src={require("./images/profile.jpg")}
        alt="profile"
        className="profile-image"
      />
      <Main />
      <BottomHeader />
    </div>
  );
}

export default App;
