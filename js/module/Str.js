export class Str{
    static LimitText(str,lenght=50){
        return str.slice(0, lenght) + (str.length > lenght ? "..." : "");
    }
}