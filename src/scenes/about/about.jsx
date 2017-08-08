import React from 'react'

const About = () => (
  <div>
    <h1>About this site</h1>
    <p>This is an experimental site for trying out React, React development techniques and various React-centric libraries. It is mainly a technical experiment, so the design is rough and sloppy. Key functionality is in place. </p>
		<p>Think of it as two experimental projects in one. The top nav (in the blue bar) is one, the secondary nav is another.</p>

    <h3>1. Feedbackr</h3>
    <p><i>The nav in the blue header bar: <b>READ | ADD | LOGIN</b></i></p>
    <p>The idea of this app is to let users give feedback (positive or negative) on topics of general interest. The data is being read from/written to a Firebase (NoSQL) backend. Some things you can do here are:</p>
    <ul>
    	<li>Sort by category and topic</li>
    	<li>Read previous notes</li>
    	<li>Add a note</li>
    	<li>Add a topic</li>
    	<li>Add a user</li>
    	<li>Choose which user to be as you create items (under LOGIN)</li>
    </ul>


    <h3>2. Scratchpads</h3>
		<p><i>The nav <u>under</u> the blue header bar: <b>About | Bootstrap | MaterialUI | Firebase </b></i></p>
		<p>Several experiments</p>
    <ul>
    	<li>About — The page you're reading right now</li>
    	<li>Bootstrap — Scratchpad for trying out react-bootstrap components</li>
    	<li>MaterialUI — Scratchpad for trying out materialUi components</li>
    	<li>Firebase — Basic app that reads from/writes to the cloud (Firebase). You an add and save items.</li>
    </ul>

    <h3>Technologies and Techniques Used</h3>
    <h4>Technologies</h4>
    <ul>
    	<li><b>react</b> — The latest version</li>
    	<li><b>react-redux</b> — The standard lib for managing state in a react app</li>
    	<li><b>redux-thunk</b> — Enables state management to work with async calls, such as network data operations</li>
    	<li><b>react-bootstrap</b> — React-specific version of the UI framework</li>
    	<li><b>materialUi</b> — React-specific version of the UI framework</li>
    	<li><b>firebase</b> — Remote NoSQL database</li>
    	<li><b>babel</b> — Transpiles ES6 and JSX into browswer-supported versions of JS</li>
    	<li><b>es6</b> — The latest JS syntax</li>
    	<li><b>jsx</b> — The HS/HTML hybrid recommended for React development</li>
    	<li><b>node</b> — For dependency management</li>
    	<li><b>webpack</b> — For automation of live testing, unit testing and builds</li>
    </ul>
    <h4>Techniques</h4>
    <ul>
    	<li><b>Thinking in React</b> — Following the key principles and best practices of React development: State is the source of truth, no direct manipulations of the DOM, no central controller, state managed via Redux, no global state, components update when state changes and only then, pure functions only</li>
    	<li><b>Structure</b> — Have evolved a file structure that combines the best ideas (IMO) in the ongoing debate of how to oganize React apps.This structure groups code by "domain rather than type." That is, all the code for a component (or cluster of components) is within one folder, not spread across half a dozen separate folders according to type (all actions in one place, all reducers in one place, all views in one place, etc.). This makes it easy to navigate code during development, makes it easy to delete functionality from a project, and easy to lift functionality from one project to another</li>
    	<li><b>Decomposition</b> — For the most part, functionality is strategically broken down into smaller components with limited responsibilities, then composed within parent components</li>
    	<li><b>Container/Presentation Approach</b> — Using logic-only components to contain and serve view components</li>
    </ul>


  </div>
)

export default About
