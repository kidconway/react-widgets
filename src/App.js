import React, { useState, Fragment } from "react";
import { loremIpsum } from "lorem-ipsum";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favorite javascrit library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

const options = [
  {
    label: "The Color Purple",
    value: "purple"
  },
  {
    label: "A Deep Green",
    value: "green"
  },
  {
    label: "A Shade of Blue",
    value: "blue"
  },
  { label: "A Cool Turquoise", value: "Turquoise" }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <Fragment>
      <div className="ui raised very padded text container segment">
        <Translate />
      </div>
      <div className="ui raised very padded text container segment">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <h2
          className="ui placeholder segment header"
          style={{ color: `${selected.value}` }}
        >
          {loremIpsum()}
        </h2>
      </div>
      <div className="ui raised very padded text container segment">
        <Accordion items={items} />
      </div>
      <div className="ui raised very padded text container segment">
        <Search />
      </div>
    </Fragment>
  );
};

export default App;
