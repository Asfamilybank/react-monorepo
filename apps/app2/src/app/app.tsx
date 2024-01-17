import { MyButton } from '@react-monorepo/components';

import NxWelcome from './nx-welcome';

export function App() {
  console.log(2);
  return (
    <div>
      <MyButton />
      <NxWelcome title="app2" />
    </div>
  );
}

export default App;
