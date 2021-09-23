import Handlebars from './templates/menu-card.hbs';
import menu from './menu.json';

const refs = {
    gallery: document.querySelector('.js-menu'),
    bodyTheme: document.querySelector('body'),
    toggleTheme: document.querySelector('.theme-switch__toggle')
}
refs.toggleTheme.addEventListener('change', onSwithTeme)
refs.toggleTheme.addEventListener('change', onLockalStorageTheme);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

function onSwithTeme(e) {
    e.preventDefault();
    const check = refs.toggleTheme.checked;
    if (check) {
        refs.bodyTheme.classList.add(Theme.DARK)
        refs.bodyTheme.classList.remove(Theme.LIGHT);
    } else {
        refs.bodyTheme.classList.add(Theme.LIGHT)
        refs.bodyTheme.classList.remove(Theme.DARK);
    }
}

function onLockalStorageTheme(e) {
    e.preventDefault();
    const check = refs.toggleTheme.checked;
    if (check) {
        localStorage.setItem('theme', Theme.DARK)
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}
const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.DARK) {
    refs.bodyTheme.classList.add(Theme.DARK);
    refs.toggleTheme.checked = true;
}

const card = createMenuCards(menu)
refs.gallery.insertAdjacentHTML('beforeend', card);
function createMenuCards(menu) {
    return menu.map(Handlebars).join('')
}

// let a = { name: 'Ben', surname: 'Patniz' }
// function foo({ name: n, surname: s, age: a = 55 }) {
//     console.log(n + s + a)
// }
// foo(a)



// var foo = 1;
// function bar() {

//     console.log(foo)
//     foo = 10;
//     console.log(foo)
//     return;
//     function foo() { };
// }
// bar()


// const foo = 1
// function bar() {
//     console.log(foo);
//     if (!foo) {
//         console.log(foo);
//         var foo = 10
//     }
//     console.log(foo);
// }
// bar()

// let o = {
//     firstName: 'John',
//     lastName: 'Quak'
// };
// let ol = {
//     firstName: 'Ben',
//     lastName: 'Lamen'
// };
// function sayHi() {
//     console.log(this.Name, this.lastName);
// }
// let foo = sayHi.bind(ol)
// foo = foo.bind(o)
// foo()

// var user = {
//     firstName: 'Vasya',
//     sayHi: function (who) {
//         console.log(this.firstName + '' + who)
//     }
// }
// setTimeout(user.sayHi.bind(user, 'Dima'), 10);
// setTimeout(function () {
//     user.sayHi()
// }, 100);

// function f() {
//     console.log(this.name,);
// }
// f = f.bind({ name: 'Vasya' }).bind({ name: 'Dima' })
// f()

// console.log(new Array(5).toString());