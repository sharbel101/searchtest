// Home.tsx
'use client';
import { useState } from 'react';
import ChatWrapper from '@/components/ui/Layout/ChatWrapper'; //wrapper with cleint side dynamic import
import Sidebar from '@/components/ui/Layout/SideBar';
import LoginPage from './login';

// Set this to true to enable the login page, false to disable it
const showLoginPage = true;

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (showLoginPage && !isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <ChatWrapper />
        </div>
      </div>
    </main>
  );
}
