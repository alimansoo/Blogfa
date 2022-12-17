import {route, template} from "./route";
import {MainTemplates} from "../Templates/MainTemplates";


export var TemplateService = (
    () => {
        template('404', function(){
            document.getElementById('mainContent').innerHTML =
                MainTemplates.Navbar()+
                MainTemplates.notFound();
            // document.getElementById('mainContent').innerHTML = '404-Notfound';
        });
    }
);

// document.querySelector('div.cardContainer')[0].style.bac