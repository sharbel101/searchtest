// Home.tsx
import Sidebar from './UIcomponents/SideBar';
import Chat from './UIcomponents/Chat';

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
