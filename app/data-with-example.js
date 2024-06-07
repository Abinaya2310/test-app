

/**
 * @typedef {Object} Example
 * @property {string} title 
 *  * @property {string} description 
 * @property {string} code
 */

/**
 * @typedef {Object} ExamplesType
 * @property {Example} components
 * @property {Example} jsx 
 * @property {Example} props 
 * @property {Example} state 
 */

/**

 * @type {ExamplesType}
 */
const EXAMPLES = {
  components: {
    title: "Components Example",
    description: "An example demonstrating how to create a React component.",
    code: `
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default MyComponent;
    `
  },
  jsx: {
    title: "JSX Example",
    description: "An example demonstrating JSX syntax.",
    code: `
import React from 'react';

const JSXExample = () => {
  return (
    <div>
      <h1>This is JSX</h1>
    </div>
  );
};

export default JSXExample;
    `
  },
  props: {
    title: "Props Example",
    description: "An example demonstrating how to use props in a React component.",
    code: `
import React from 'react';

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return <Greeting name="John" />;
};

export default App;
    `
  },
  state: {
    title: "State Example",
    description: "An example demonstrating how to use state in a React component.",
    code: `
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
    `
  }
};


export { EXAMPLES };

