import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {  createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'

import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx';
import Contact from './components/contact.jsx';
import EventFetching from './components/EventComponent.tsx';

import EventFininder from './pages/eventFinder.tsx';
import MyEventViewer from './pages/myEventsViewer.tsx';
import AllEventViewer from './pages/allEventsViewer.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  // children: [
  //   {
  //   path: "contacts/:contactId",
  //   element: <Contact />
  //   }]
  },
  {
    path: "event/:userEmail",
    element: <MyEventViewer/>,
  },
  {
    path: "events/:userEmail",
    element: <AllEventViewer/>,
  }
  // {
  //   path: ":userEmail/events",
  //   element: <EventFininder />,
  // },

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
