import Admin from './Content/admin/Admin';
import Home from './home/Home';
import Layout from './Layout';
import PPlogin from './Content/Setting/innerSetting/PPlogin';
import PPmoreinfo from './Content/Setting/innerSetting/PPmoreinfo';
import Generalsetting from './Content/Setting/innerSetting/Generalsetting';
import Tax from './Content/Setting/innerSetting/Tax';
import Register from './Content/Setting/innerSetting/Register';
import Profileinfo from './Content/Setting/innerSetting/Profileinfo';
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
import TotalREvenue from './Content/total sell/TotalREvenue';
import TotalSell from './Content/total sell/TotalSell';
import TotalOrder from './Content/total sell/TotalOrder';
import OngoingOrder from './Content/order/OngoingOrder';
import Orderhistory from './Content/order/Orderhistory';
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
      path: "/admin/ongoingorder",
      element: <OngoingOrder />
    },
    {
      path: "/admin/orderHistory",
      element: <Orderhistory />
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
      path: "/admin/setting/profile",
      element: <Profileinfo />
    },
    {
      path: "/admin/setting/profile/more",
      element: <PPmoreinfo />
    },
    {
      path: "/admin/setting/profile/login",
      element: <PPlogin />
    },
    {
      path: "/admin/setting/generalsetting",
      element: <Generalsetting />
    },
    {
      path: "/admin/setting/tax",
      element: <Tax />
    },
    {
      path: "/admin/setting/register",
      element: <Register />
    },
    {
      path: "/admin/dashboard/totalorder",
      element: <TotalOrder />
    },
    {
      path: "/admin/dashboard/totalsell",
      element: <TotalSell />
    },
    {
      path: "/admin/dashboard/totalrevenue",
      element: <TotalREvenue />
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
