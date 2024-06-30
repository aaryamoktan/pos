import Admin from './Content/admin/Admin';
import Home from './home/Home';
import Layout from './Layout';
import Login from './Content/login/Login';
import Dashboard from './Content/dashboard/Dashboard';
import Setting from './Content/Setting/Setting';
import Order from './Content/order/Order';
import Updateint from './Content/inventry/Updateint';
import FinalOrder from './finalOrder/FinalOrder';
import Int from './Content/inventry/Int';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/admin/dashboard",
      element: <Dashboard />
    },
    {
      path: "/admin/order",
      element: <Order />
    },
    {
      path: "/admin/inventry/update/:id",
      element: <Updateint />
    },
    {
      path: "/admin/inventry",
      element: <Int />
    },
    {
      path: "/admin/setting",
      element: <Setting />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/admin",
      element: <Admin />
    },
    {
      path: "/order",
      element: <FinalOrder />
    },
    ]
  }
])
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
