import Card from "./components/Card";
import Chip from "./components/Chip";
import Balloons from "./components/Balloons";
import DropDown from "./components/DropDown";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h4>Contact Chip Component</h4>
      <Chip avatar="images/avatar.jpeg" />

      <h4>Card Component</h4>

      <Card image="images/forest" />

      <h4>Ballons Component</h4>

      <Balloons element="Show Ballon" />

      <h4>Dropdown Component</h4>

      <DropDown
        options={[
          { label: "one", value: 1 },
          { label: "two", value: 2 },
          { label: "three", value: 3 },
        ]}
        label={"label"}
      />
    </div>
  );
}
