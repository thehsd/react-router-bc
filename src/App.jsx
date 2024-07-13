import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Orders from "./pages/profile/Orders"
import Addresses from "./pages/profile/Addresses"
import EditProfile from "./pages/profile/EditProfile"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} >
                    <Route
                        path="/profile/orders"
                        element={<Orders />} />
                    <Route
                        path="/profile/addresses"
                        element={<Addresses />} />
                    <Route
                        path="/profile/edit"
                        element={<EditProfile />} />

                </Route>
            </Routes>
        </BrowserRouter>
        // <div className="bg-gray-200 p-16 ">
        //     <Login />
        // </div>
    )
}

export default App