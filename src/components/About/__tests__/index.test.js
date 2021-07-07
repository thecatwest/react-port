// import react
import React from 'react';
// retrieve fns from reaact testing lib
// render function will "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM
// cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';
// import the extend-expect library from the jest-dom package
import '@testing-library/jest-dom/extend-expect';
// import the component About to test
import About from '..';

// call the cleanup function using the afterEach global function from Jest
afterEach(cleanup);

// use the describe function to declare the component we're testing
describe('About component', () => {
    // First Test will be baseline to verify component is rendering
    it('renders', () => {
      render(<About />);
    });
  
    // Second Test, also known as a "test case", we'll compare snapshot versions of the DOM node structure. A snapshot is a serialized version of the DOM node structure, enabled by Jest
    it('matches snapshot DOM node structure', () => {
      // render About
      const { asFragment } = render(<About />);
      // test and compare whether the expected and actual outcomes match. Use the expect function with a matcher to assert something about a value. In the following statement, use the toMatchSnapshot matcher to assert that snapshots will match
      expect(asFragment()).toMatchSnapshot();
  });
})