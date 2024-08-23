import React from 'react'
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './store'
import App from './app'
import {Router} from 'react-router-dom'
import history from './history'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {ApInfo, AllFlags, Navbar} from './components';

const router = createBrowserRouter([
  { path: "/", element: <AllFlags /> }, // 🆕
  { path: "/api-info", element: <ApInfo /> },
  { path: "*", element: <root /> },
]);


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<
  Provider store={store}>
  <RouterProvider router={router}>
  <Navbar />
  <App tab="home" />
  </RouterProvider>
  </Provider>);





// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Link to="/home">Home</Link>
//       </div>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }
