import { Switch } from '@hoon-ds/components';
import { useState } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Switch checked={isChecked} disabled onChangeChecked={(v) => setIsChecked(v)} />
    </>
  );
}

export default App;
