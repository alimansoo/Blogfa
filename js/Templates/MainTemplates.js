export class MainTemplates{
    static Header(){
        return `
        <header id="header">
            <nav id="nav" class="nav">
                <ul class="nav-list">
                    <li class="nav-list_item active">
                        <a href="http://localhost/Blogfa/">
                            صفحه اصلی
                        </a>
                    </li>
                    <li class="nav-list_item">
                        <a href="http://localhost/Blogfa/aaaa">
                            راهنما
                        </a>
                    </li>
                    <li class="nav-list_item">تماس با ما</li>
                </ul>
                <div class="nav-brand"><img src="./assets/images/blogfa-logo 1.png" alt=""></div>
            </nav>
            <section class="header-content">
                <div class="header-content_header">
                    بلاگفا
                </div>
                <div class="header-content_description">
                    بلاگفا یک ابزار قدرتمند برای ساخت و مدیریت وبلاگ است. بلاگفا به شما کمک می‌کند تا با سرعت و سهولت
                    اطلاعات، خاطرات، مطالب و مقالات خود را در اینترنت منتشر کنید.
                </div>
                <div class="header-content_actions">
                    <a href="new" class="btn btn-primary btn-icon">
                        <i class="fa-solid fa-plus"></i>
                        ثبت ولاگ جدید
                    </a>
                    <button class="btn btn-primary-outline mr-2">ورود به بخش مدیریت</button>
                </div>
            </section>
        </header>
        `;
    }
    
    static Navbar(){
        return `
            <header id="header" class="navbar">
                <nav id="nav" class="nav">
                    <ul class="nav-list">
                        <li class="nav-list_item active">
                            <a href="home">
                                صفحه اصلی
                            </a>
                        </li>
                        <li class="nav-list_item">
                            <a href="http://localhost/Blogfa/aaaa">
                                راهنما
                            </a>
                        </li>
                        <li class="nav-list_item">تماس با ما</li>
                    </ul>
                    <div class="nav-brand"><img src="./assets/images/blogfa-logo 1.png" alt=""></div>
                </nav>
            </header>
        `;
    }
    static addForm(){
        return `
            <div class="Container">
                <div class="form-container">
                    <form action="https://jsonplaceholder.typicode.com/posts" id="newArticle" class="form" method="post">
                        <div class="form-group">
                            <label for="ArticleTitle" class="form-group_label">عنوان مقاله:</label>
                            <input type="text" name="title" id="ArticleTitle" class="form-group_controller">
                        </div>
                        <div class="form-group" class="form-group_controller">
                            <label for="ArticleAuthor" class="form-group_label">نویسنده مقاله:</label>
                            <select name="userId" id="ArticleAuthor" class="form-group_controller">
                                <option value="">انتخاب کنید</option>
                                <option value="1">فاطمه احمدی</option>
                                <option value="2">فاطمه منصوری</option>
                                <option value="3">فاطمه حسینی</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="ArticleText" class="form-group_label">متن مقاله:</label>
                            <textarea name="body" class="form-group_area" id="ArticleText" cols="30" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">ثبت ولاگ جدید</button>
                    </form>
                </div>
            </div>
        `;
    }
    static mainTitle(title=`محتوا`){
        return `
            <div class="mainTitle">
                ${title}
            </div>
        `;
    }
    static notConnect(){
        return `
            <div class="Container">
                <div class=" align-center">
                    <img src="http://localhost/Blogfa/assets/images/disconnect.jpg" style="border-radius: 12px;" width="400px" alt="">
                    <h6 class="size-2x m-1" style="color: darkred">خطا در برقراری ارتباط</h6>
                    
                </div>
            </div>
        `;
    }
    static notFound(){
        return `
            <div class="Container">
                <div class=" align-center">
                    <img src="http://localhost/Blogfa/assets/images/notfound.png" style="border-radius: 12px;" width="400px" alt="">
                    <h6 class="size-2x m-1" style="color: darkred">صفحه مورد نظر پیدا نشد!!</h6>
                    
                </div>
            </div>
        `;
    }
    static loadingCard(count=1){
        let Container = ``;
        for (let index = 0; index < count; index++) {
            Container += `
                <div class="card">
                    <div class="card_title">
                        <div class="loading"></div>
                    </div>
                    <div class="card_body">
                        <div class="loading"></div>
                    </div>
                    <div class="card_footer">
                        <div class="card_footer_author">
                            <div class="author_avatar">
                                <div class="loading"></div>
                            </div>
                            <div class="author_name">
                                <div class="loading"></div>
                            </div>
                        </div>
                        <div class="card_footer_action">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>
            `;
        }
        return Container;
    }
    static CardContainer(Cards=''){
        return `
            <div class="cardContainer" id="cardContainer">
                ${Cards}
            </div>
        `;
    }
    static FooterContainer(){
        return `
            <div class="footerContainer">
                <a href="all" class="btn btn-primary-outline btn-icon-left text-primary">
                    وبلاگ های بیشتر
                    <i class="fa-solid fa-plus"></i>
                </a>
            </div>
        `;
    }
}