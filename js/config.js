export const BaseUrl = "http://localhost/Blogfa/";
export const apiurl = "http://192.168.1.150/api/v1/foods";
export const baseurl = "http://192.168.1.150";

export const mainDiv = document.getElementById('ProductContainer');

export function LinkUrl(url){
    return url.replace(BaseUrl,'') || '/';
}