// Home.tsx
import Sidebar from './UIcomponents/SideBar';
import Chat from './UIcomponents/Chat';
import { chatFlow } from './dataflow/flow';

export default function Home() {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Chat customFlow={chatFlow} />
        </div>
      </div>
    </main>
  );
}
