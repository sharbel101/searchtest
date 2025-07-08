// Home.tsx

import ChatWrapper from '@/components/ui/Layout/ChatWrapper'; //wrapper with cleint side dynamic import
import Sidebar from '@/components/ui/Layout/SideBar';

export default function Home() {
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
