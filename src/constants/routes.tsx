import { Buttons } from "../pages/buttons"
import { Home } from "../pages/home"
import { Inputs } from "../pages/inputs"

export const routes:IRoutes[] = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/buttons",
        element: <Buttons/>
    },
    {
        path: "/inputs",
        element: <Inputs/>
    }
]