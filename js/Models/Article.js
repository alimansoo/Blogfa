export class Article{
    static Users=[];
    static async getAll(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        let Articles = [];
        for (const article of response.data) {
            Articles.push(
                new Article(article)
            );
        }
        return Articles
    }
    static async getLimit(count=10){
        let Articles = [];
        for (let index = 0; index < count; index++) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${index+1}`);
            // console.log(response);
            Articles.push(
                new Article(response.data)
            );
        }
        return Articles
    }
    constructor(data) {
        this.id = data.id;
        this.userId = data.userId;
        this.title = data.title;
        this.body = data.body;
    }
    async user(){
        let thisUser = Article.Users.find(user=>{
            return user.id == this.userId;
        });
        Array.prototype.random = function () {
            return this[Math.floor((Math.random()*this.length))];
        }
        let avatars = [
            'avatar.png',
            'avatar2.png',
            'avatar3.png',
            'avatar4.png',
        ];
        if (thisUser){
            return thisUser;
        }
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`);
        let user = {
            ...response.data,
            'avatar' : avatars.random()
        };
        Article.Users.push(user);
        return user;
    }
}