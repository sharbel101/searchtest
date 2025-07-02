// Home.tsx

import Chat from '@/components/ui/Layout/Chat';
import Sidebar from '@/components/ui/Layout/SideBar';

export default function Home() {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Chat />
        </div>
      </div>
    </main>
  );
}
