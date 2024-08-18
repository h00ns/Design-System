import { Button, Flex } from '@hoon-ds/components';

function App() {
  return (
    <>
      <Flex
        _hover={{
          color: 'red',
        }}>
        123
      </Flex>
      <Button text="123" />
    </>
  );
}

export default App;
