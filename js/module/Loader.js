export class Loader{
    static Show() {
        document.getElementById('loader-page').style.display = 'flex';
    }
    static Hide() {
        document.getElementById('loader-page').style.display = 'none';
    }
}