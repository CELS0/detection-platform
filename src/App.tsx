import './App.css';

import { useState } from 'react';

import Logo from '../assets/lol.png';

function App() {
  const [platform, setPlatform] = useState<null | string>('🌄');

  const getMobileOS = () => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      return 'Android';
    } else if (
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    ) {
      return 'iOS';
    }
    return 'desktop';
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p className="header">
          🚀 Bom dia + Bom dia + Bom dia <br /> = CJ
        </p>
        <div className="body">
          <button onClick={() => setPlatform(getMobileOS())}>
            🪂 Click detection platform: {platform}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
