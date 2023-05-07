
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import RootLayout from "./route/RootLayout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/registration' element={<Registration/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
  </Route>
))


function App() {
  return <RouterProvider router={router}/>
}

export default App;
