import { useState } from "react";
import ShoutInput from "./components/ShoutInput";
import ShoutOutput from "./components/ShoutOutput";
import { Container, Heading } from "@chakra-ui/react";

function App() {
  const [ shout, setShout ] = useState("");
    
  const changeHandler = e => {
      setShout( e.target.value );
  }

  return (
    <Container align='center'>
      <Heading mt='20px'>Shout @ Me</Heading>
      <ShoutInput shout={ shout } changeHandler={ changeHandler } />
      <ShoutOutput shout={ shout } />
    </Container>
  );
}

export default App;
