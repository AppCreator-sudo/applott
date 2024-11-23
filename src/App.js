import './App.css';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  return (
      <TonConnectUIProvider manifestUrl={`${window.location.origin}/tonconnect-manifest.json`}>
        <header>
          <span>My App with React UI</span>
          <TonConnectButton />
        </header>
      </TonConnectUIProvider>
  );
}

export default App;
