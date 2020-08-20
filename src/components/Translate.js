import React, { Fragment, useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "English",
    value: "en"
  },
  {
    label: "Afrikaans",
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
      <div className="ui form" onSubmit={e => e.preventDefault}>
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
      <div className="ui divider"></div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected="language"
        onSelectedChange={setLanguage}
      />

      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </Fragment>
  );
};

export default Translate;
