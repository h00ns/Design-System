import { Checkbox, Typography } from '@hoon-ds/components';
import { useState } from 'react';

function App() {
  const [check, setCheck] = useState(false);

  return (
    <>
      <Typography variant="5xlarge-bold">Typography</Typography>
      <Checkbox
        checked={check}
        onChange={(e) => {
          setCheck(e.target.checked);
        }}
      />
    </>
  );
}

export default App;
