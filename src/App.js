import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Game from './components/Game';
import Magnifier from './components/Magnifier';
import Welcome from './components/Welcome';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Welcome/>
  },
  {
    path:'/start',
    element:<Start/>
  },
  {
    path:'/tictactoe',
    element:<Game/>
  },
  {
    path:'/magnifier',
    element:<Magnifier/>
  }
])

function App() {
  return (
    <RouterProvider router={appRouter}>

    </RouterProvider>
  );
}

export default App;
