import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Heading />
      <Main />
    </div>
  );
}

let lostItems = [];

function Main() {
  return (
    <div>
      <Form />
    </div>
  );
}

function Heading() {
  return (
    <div className="heading">
      <h2 className="main-head">Found Something?</h2>
      <h3 className="sub-head">Help to get the item to rightful owner!</h3>
    </div>
  );
}

function Form() {
  const [initialBlocks, setBlocks] = useState(0);
  const [formsubmitted, setFormSubmitted] = useState(false);
  function handleSubmit(e) {
    setFormSubmitted(true);
    e.preventDefault();
    alert("Form Submitted");
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData);
    lostItems.push(formJson);
    console.log(lostItems);
  }

  function handleInputChange(e) {
    console.log(e.target.value);
    setBlocks(Number(e.target.value));
    console.log("Now value: " + initialBlocks);
  }

  const renderComponentXTimes = () => {
    const components = [];
    for (let i = 0; i < initialBlocks; i++) {
      components.push(<BlockDetail key={i} />); // Replace YourComponent with the component you want to render
    }
    return components;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-element">
        <label htmlFor="name">Name </label>
        <input id="name" name="name" type="text" />
      </div>
      <div className="form-element">
        <label htmlFor="number">Phone Number</label>
        <input id="number" name="number" type="tel" />
      </div>
      <div className="form-element">
        <label htmlFor="item-name">Item Name</label>
        <input id="item-name" name="item-name" type="text" />
      </div>
      <div className="form-element">
        <label htmlFor="item-description">Item Description</label>
        <textarea id="item-description" name="item-description" type="text" />
      </div>
      <div>
        <label htmlFor="Image">Upload item pic</label>
        <input
          id="image-pic"
          name="image-pic"
          type="file"
          accept="image/*" //
        />
      </div>
      <div className="form-element">
        <label htmlFor="date">Date Found</label>
        <input id="date" name="date" type="date" />
      </div>
      <div>
        <label htmlFor="found-at">Found at</label>
        <select>
          <option>Select where you found it </option>
          <option>Academic block</option>
          <option>At any route</option>
        </select>
      </div>
      <div className="sub">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

function BlockDetail() {
  return (
    <form>
      <div>
        <label htmlFor="block">Academic Block</label>
        <select name="block" id="block">
          <option value="PRP">PRP</option>
          <option value="SJT">SJT</option>
        </select>
      </div>
    </form>
  );
}
