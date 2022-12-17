import {RouteService} from "./web";
import {TemplateService} from './template';
import {LinkUrl} from "../config";
import {Loader} from "../module/Loader";
import {FromClass} from "../Froms";

let routes = {};
let templates = {};

export function route(path, template) {
    if (typeof template === 'function') {
        return routes[path] = template;
    }
    else if (typeof template === 'string') {
        return routes[path] = templates[template];
    } else {
        return;
    }
}

export function template (name, templateFunction) {
    return templates[name] = templateFunction;
}

export function resolveRoute(route) {
    if (routes[route]){
        return routes[route];
    }
    return templates['404'];
}

export async function router(e) {
    Loader.Hide();
    // ShowLoader();
    let url = LinkUrl(
        window.location.href
    );
    // console.log('aaaaa',window.location)
    let route = resolveRoute(url);
    await route();

    // HideLoader();
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click',function (e){
            if (this.target !== '_blank'){
                e.preventDefault();
                window.history.pushState({}, '', LinkUrl(this.href));
                router();
            }
        })
    });
    document.querySelectorAll('form').forEach(Form => {
        Form.addEventListener('submit',function (e){
            e.preventDefault();
            let thisForm = new FromClass(this.id);
            let Values = {};
            this.querySelectorAll('input').forEach(Input =>{
                Values[Input.name] = Input.value;
            });
            this.querySelectorAll('select').forEach(Select =>{
                Values[Select.name] = Select.options[Select.selectedIndex].value;
            });
            this.querySelectorAll('textarea').forEach(textarea =>{
                Values[textarea.name] = textarea.value;
            });
            Loader.Show();
            let validateResult = thisForm.Validation(Values);
            console.log(validateResult)
            if (thisForm.Validation(Values) === 1){
                axios.post(this.action, Values)
                    .then(function (response) {
                        Loader.Hide();
                        console.log(response);
                        if (response.status === 201) {
                            iziToast.success({
                                title: '',
                                message: thisForm.success,
                            });
                        }else{
                            iziToast.error({
                                title: '',
                                message: thisForm.failure,
                            });
                        }

                    })
                    .catch(function (error) {
                        Loader.Hide();
                        iziToast.error({
                            title: '',
                            message: thisForm.failure,
                        });
                        console.log(error);
                    });
            }else {
                Loader.Hide();
                console.log('Validate Failure');
            }
        })
    });
}

TemplateService();
RouteService();