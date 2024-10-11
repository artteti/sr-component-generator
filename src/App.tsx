import { useEffect, useState } from "react";
import "./App.css";
import { Button, Text, Header } from "./components";

function App() {
  const [component, setComponent] = useState("selectComponent");
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setComponent(e.target.value);
  };

  const [buttonVisible, setButtonVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  const [inputText, setInputText] = useState("Text");

  useEffect(() => {
    component === "button" ? setButtonVisible(true) : setButtonVisible(false);
    component === "text" ? setTextVisible(true) : setTextVisible(false);
    component === "header" ? setHeaderVisible(true) : setHeaderVisible(false);
  }, [component]);

  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputTextValue = e.target.value;
    setInputText(inputTextValue);
  };

  return (
    <>
      <h1 className="text-2xl text-indigo-900 mb-4">Component generator</h1>
      <div className="my-6">
        <select value={component} onChange={handleOnChange}>
          <option value="selectComponent">Select the component</option>
          <option value="button">Button</option>
          <option value="text">Text</option>
          <option value="header">Header</option>
        </select>
      </div>
      <div>
        {buttonVisible && <Button label="Button" />}
        {textVisible && (
          <div>
            <label>
              Input your text:
              <input
                className="border rounded-md px-2 mx-2 my-4"
                name="Input"
                type="text"
                value={inputText}
                onChange={handleInputTextChange}
              />
            </label>
            <Text>{inputText}</Text>
          </div>
        )}
        {headerVisible && <Header>Title</Header>}
      </div>
    </>
  );
}

export default App;
