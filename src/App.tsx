import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import ChartPage from './pages/ChartPage';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';


//Create Router for react Router for routing pages from the sidebar
const route = createBrowserRouter([
  {path:'/', element: <ContactPage />},
  {path:'/chart', element: <ChartPage />},
  {path:'/addcontact', element: <AddContact />},
  {path:'/editcontact/:id', element: <EditContact />}
]);

function App() {
  return (
    <div className="App">
      {/* this provides the router the route that needs to be loaded */}
      <RouterProvider router={route} /> 
    </div>
  );
}

export default App;
