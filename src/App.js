import React, { useState } from "react";

const App = () => {
  const [foo, setFoo] = useState('bar');
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

export default App;
