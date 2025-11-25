import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";

export function App(){
  return (
      <BrowserRouter>
        <Routes>
          {
            routes.map(({path,element}) => (
              <Route key={path} path={path} element={element}/>
            ))
          }
        </Routes>
      </BrowserRouter>
  )
}
