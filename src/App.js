import React, { useState, useEffect } from 'react';
import './App.css';

import styled from 'styled-components';

function App() {

  useEffect(() => {
    fetch("http://localhost:8080/api/photos").then((response) => response.json()).then((photos) => console.log(photos))
  }, [])
  const [images, setImages] = useState("hello world");

  return (
    <StyledApp>
      <h1>image gallery</h1>
    </StyledApp>
  );
}

const StyledApp = styled.div`
background: blue;
font-size: 18px;
padding: 30px;
text-align: center;
`


export default App;
