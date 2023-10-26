import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { ChatPage } from './pages/Chat/ChatPage';

import './style/reset.scss';
import './style/globals.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/chat',
      element: <ChatPage />,
    },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
