// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  console.log(1);
  return (
    <div>
      <NxWelcome title="app1" />
    </div>
  );
}

export default App;
