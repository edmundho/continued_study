import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';



const Root = () => {

  const contentArray = [
    tabOne,
    tabTwo,
    tabThree
  ];

  return (
    <div>
      <Clock />
      <Weather />
      <Tabs content={contentArray} />
      <Autocomplete names={names} />
    </div>
  );
};

export default Root;

const tabOne = {
  title: "ONE",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, maiores!"
};

const tabTwo = {
  title: "TWO",
  content: "Facilis dolorem consectetur dolore dicta? Porro culpa optio eligendi provident suscipit quam consectetur non."
};

const tabThree = {
  title: "THREE",
  content: "Facilis sunt amet velit eveniet repudiandae."
};

const names = [
  "Spike",
  "Jet",
  "Edward",
  "Faye",
  "Vicious",
  "Julia",
  "Ein",
  "Mugen",
  "Jin",
  "Fuu"
];