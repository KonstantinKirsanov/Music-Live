const news = [
    {date: '24.01.2020', info: 'ПОЛНЫЙ СОСТАВ АРТИСТОВ НА TOMORROWLAND 2020!', img: 'content/news-blocks/images/1.jpg'},
    {date: '17.11.2019', info: 'ARMIN VAN BUUREN ПРЕДСТАВИТ НОВОЕ ШОУ THIS IS ME', img: 'content/news-blocks/images/2.jpg'},
    {date: '08.11.2019', info: 'MICHAEL SCHACK И NIGEL WILLIAMS ЗАПИСАЛИ ПОЛИТИЧЕСКИЙ ТРЕК ПРО БРЕКЗИТ', img: 'content/news-blocks/images/3.jpg'},
    {date: '22.10.2019', info: 'ОБЪЯВЛЕН СПИСОК 100 ЛУЧШИХ ДИДЖЕЕВ ПЛАНЕТЫ', img: 'content/news-blocks/images/4.jpg'},
    {date: '27.05.2019', info: 'DJ MAG’S TOP 50 FESTIVALS 2019 — 50 ЛУЧШИХ ФЕСТИВАЛЕЙ ПЛАНЕТЫ.', img: 'content/news-blocks/images/5.jpg'}
]

function createNews (news) {
    return `
    <a href="#" class="content__news-blocks__elements"> 
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="height: 300px; overflow: hidden;">
            <img src="${news.img}" class="img-responsive content__news-blocks__elements__images">
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h5 class="date">${news.date}</h5>
            <div>${news.info}</div>
        </div>
    </a>
    `
}

const templates = news.map(news => createNews (news))
const html = templates.join(" ")

document.querySelector('.content__news-blocks').innerHTML = html