import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="blog">
        <h2>How does React Work?</h2>
        <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
      </div>
      <div className="blog">
        <h2>What is the difference Between props and state in React?</h2>
        <p>Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private.State cannot be accessed from outside.</p>
      </div>
      <div className="blog">
        <h2>What does useEffect do without fetching data from API?</h2>
        <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components.Without fetching data useEffect used for, tasks like updating the DOM, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
      </div>
    </div>
  );
};

export default Blog;