import React from "react";
import "../components/Blog.css";

const Blog = () => {
  return (
    <div className="my-container ">
      <div className="text-center my-5 test">
        <h1 className="bold-text">When should you use context API?</h1>
        <p className="thin-text">
          Context is primarily used when some data needs to be accessible by
          many components at different nesting levels. Apply it sparingly
          because it makes component reuse more difficult.It is very helpful for
          props drilling.When i need to manage global state that is shared by
          multiple components in different parts of my application, Context API
          can be a useful solution. It eliminates the need to pass down props
          through multiple levels of components, making it more efficient and
          less error-prone.When i have multiple components that need to
          communicate with each other, such as sharing data or triggering
          actions, Context API can help simplify the communication process.
        </p>
      </div>
      <div className="text-center my-5 test">
        <h1 className="bold-text">What is a custom hook?</h1>
        <p className="thin-text">
          A custom hook is like a special function in React that you can make
          yourself. It helps you do complicated things or manage important
          information in your components. It's like a reusable piece of code
          that you can put in different parts of your app. Custom hooks are made
          using regular React hooks, like useState or useEffect, but you write
          them yourself instead of using ones that come with React. Custom hooks
          are cool because they let you reuse code and make your components
          easier to understand. They're just regular JavaScript functions that
          you can use together to do more advanced stuff in your app.
        </p>
      </div>
    </div>
  );
};

export default Blog;
