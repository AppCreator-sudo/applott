import './App.css';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  return (
      <TonConnectUIProvider manifestUrl={`https://appcreator-sudo-applott-2f5d.twc1.net/tonconnect-manifest.json`}>
        <header>
          <span>My App with React UI</span>
          <TonConnectButton />
        </header>
      </TonConnectUIProvider>
  );
}

export default App;
