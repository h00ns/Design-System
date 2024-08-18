import { Checkbox, Typography } from '@hoon-ds/components';
import { CheckboxWithLabel } from '@hoon-ds/components/src/Checkbox/Checkbox.WithLabel';
import { useState } from 'react';

function App() {
  const [check, setCheck] = useState(false);

  return (
    <>
      <Typography variant="5xlarge-bold">Typography</Typography>
      <CheckboxWithLabel label="checkbox!" />
      <Checkbox.Wrap style={{ marginTop: 48 }}>
        <Checkbox.Title>Title</Checkbox.Title>
        <Checkbox.WithLabel
          label="Checkbox"
          checked={check}
          onChange={(e) => {
            setCheck(e.target.checked);
          }}
        />
        <Checkbox.HelpText>This is a help text</Checkbox.HelpText>
      </Checkbox.Wrap>
    </>
  );
}

export default App;
