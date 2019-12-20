import React, { Component } from "react";
import "./App.css";
import ClassicEditor from "./ckeditor";
import { render } from "@testing-library/react";

class App extends Component {
  componentDidMount() {
    ClassicEditor.create(document.querySelector("#editor"))
      .then(editor => {
        console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div id="editor" className="App">
        <p>Here goes the initial content of the editor.</p>
      </div>
    );
  }
}

export default App;
