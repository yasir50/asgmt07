import { createRoot } from "react-dom/client";
import logo from "./assets/icon.png";
import logo2 from "./assets/icon2.png";
createRoot(document.getElementById("root")).render(
  <>
    <h1>This is h1</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
      temporibus amet cupiditate excepturi. Recusandae adipisci, provident in
      itaque totam, minima quia vero neque, nam natus aliquam assumenda aperiam
      sint dolore?
    </p>
    <img src={logo} alt="img" height={"100px"} />
    <div>this is div</div>
    <img src={logo2} alt="img" height={"100px"} />
  </>
);
