import React, { useState, Fragment } from "react";

import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

import Route from "./components/Route";

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

  return (
    <Fragment>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate options={options} />
      </Route>
    </Fragment>
  );
};

export default App;
