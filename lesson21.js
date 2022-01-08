class Movie {
    constructor(title = "", year = 0, country = '') {
        this.title = title
        this.year = year
        this.country = country
    //     this.type = year > new Date().getFullYear() ? 'New Movie' : 'Old Movie'
    }
    type = 'Фильм'
    info = () => console.log(`${this.title} был выпущен в ${this.country}, в ${this.year} году`)
} 

const spiderMan1 = new Movie('Человек-Паук', 2001, 'США')
console.log(spiderMan1)
spiderMan1.info()

const homeAlone1 = new Movie('Один дома', 1998, 'США')
console.log(homeAlone1)
homeAlone1.info()

class tvShow extends Movie {
    constructor (title, year, country, seasonsQty = 0) {
        super(title, year, country)
        this.seasonsQty = seasonsQty
    }
    type = 'Сериал'
}

const bibBangTheoty = new tvShow('Теория большого взрыва', 1999, 'USA', 13)
console.log(bibBangTheoty)
bibBangTheoty.info()

class Anime extends tvShow {
    constructor (title, year, country, seasonsQty = 1) {
        super(title, year, country)
        this.seasonsQty = seasonsQty
    }
    type = 'аниме'
}

const anime = new tvShow('Jujutsu Kaisen', 2020, 'Япония', 1)
console.log(anime)
anime.info()