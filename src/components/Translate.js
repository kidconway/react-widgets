import React, { Fragment, useState } from "react";
import Dropdown from "./Dropdown";

const KEY = process.env.REACT_APP_API_KEY;
console.log(process.env.REACT_APP_API_KEY);

const options = [
  {
    dlabel: "Afrikaans",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <Fragment>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Enter Text</label>
          <div className="ui input container left icon">
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Translate"
              id="text"
            />
            <i className="google icon"></i>
          </div>
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        options={options}
        selected="language"
        onSelectedChange={setLanguage}
      />
    </Fragment>
  );
};

export default Translate;
