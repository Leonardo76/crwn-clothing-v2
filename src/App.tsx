import './categories.scss'
import Home from "./routes/home/home.tsx";
import {Route, Routes} from "react-router";
import Navigation from "./routes/navigation/navigation.tsx";
import SignIn from "./routes/sign-in/sign-in.tsx";


const Shop = () => {
    return (
        <h1>I am the shop page</h1>
    )
}

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='sign-in' element={<SignIn/>}/>
            </Route>
        </Routes>
    )
};

export default App
