import headerComponent from "./components/headerComponent.js";
import mainComponent from "./components/mainComponent.js";
import carrouselComponent,
    { insertMovementsListerner } from "./components/carrouselComponent.js";
import formComponent,
    { insertListenersForms} from "./components/formComponent.js";
import footerComponent from "./components/footerComponent.js";



const app = document.getElementById("app");


app.appendChild(headerComponent());
app.appendChild(mainComponent());
app.appendChild(carrouselComponent());
insertMovementsListerner();
app.appendChild(formComponent());
insertListenersForms();
app.appendChild(footerComponent());

