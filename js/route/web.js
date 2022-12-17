import {route} from './route';
import {Article} from "../Models/Article";
import {MainTemplates} from '../Templates/MainTemplates';
import {Str} from "../module/Str";

export var RouteService = (
    () => {
        route('/', async function(){
            document.getElementById('mainContent').innerHTML =
                MainTemplates.Header()+
                MainTemplates.mainTitle(`وبلاگ‌های بروز شده`)+
                MainTemplates.CardContainer(
                    MainTemplates.loadingCard(9)
                )+
                MainTemplates.FooterContainer();

            window.scrollTo({ top: 0, behavior: 'smooth' });

            await getPosts(9);
        });
        route('home', async function(){
            document.getElementById('mainContent').innerHTML =
                MainTemplates.Header()+
                MainTemplates.mainTitle(`وبلاگ‌های بروز شده`)+
                MainTemplates.CardContainer(
                    MainTemplates.loadingCard(9)
                )+
                MainTemplates.FooterContainer();

                window.scrollTo({ top: 0, behavior: 'smooth' });

                await getPosts(9);
        });
        route('all', async function(){
            document.getElementById('mainContent').innerHTML =
                MainTemplates.Navbar()+
                MainTemplates.mainTitle(` تمام بلاگ ها `)+
                MainTemplates.CardContainer(
                    MainTemplates.loadingCard(12)
                );

            window.scrollTo({ top: 0, behavior: 'smooth' });

            await getPosts(15);
        });
        route('new', function(){
            document.getElementById('mainContent').innerHTML =
                MainTemplates.Navbar()+
                MainTemplates.mainTitle(`بلاگ جدید`)+
                MainTemplates.addForm();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
);

async function allPosts() {
    try {
        let CardContainer = '';
        let articles = await Article.getAll();

        for (const article of articles) {
            CardContainer += await renderCard(
                article
            )
        }
        document.getElementById('cardContainer').innerHTML = CardContainer;
        return '0';
    } catch (error) {
        document.getElementById('mainContent').innerHTML =
                MainTemplates.Header()+
                MainTemplates.notConnect();
        console.error('خطا در برقراری ارتباط');
    }
}
async function getPosts(count=9) {
    try {
        let CardContainer = '';
        let articles = await Article.getLimit(count);

        for (const article of articles) {
            CardContainer += await renderCard(
                article
            )
        }
        document.getElementById('cardContainer').innerHTML = CardContainer;
        return '0';
    } catch (error) {
        document.getElementById('mainContent').innerHTML =
            MainTemplates.Navbar()+
            MainTemplates.notConnect();
        console.error('خطا در برقراری ارتباط');
    }
}


async function renderCard(article) {
    
    let user = await article.user();
    console.log(user);
    return `
        <div class="card">
            <div class="card_title">${Str.LimitText(article.title,50)}</div>
            <div class="card_body">
                ${Str.LimitText(article.body,100)}
            </div>
            <div class="card_footer">
                <div class="card_footer_author">
                    <img src="./assets/images/${user.avatar}" class="avatar" alt="">
                    <div class="author_name">${user.name}</div>
                </div>
                <a href='post' class="btn btn-primary btn-icon-left">
                    مشاهده
                    <i class="fa-solid fa-arrow-left"></i>
                </a>
            </div>
        </div>
    `;
}
