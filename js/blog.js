console.log("Hi");

const allBlog = document.querySelector('#blog-all');
const avatar = document.querySelector('#blog-avatar');
const computing = document.querySelector('#blog-computing');
const famous = document.querySelector('#blog-famous');

const blogAvatar = document.querySelector('.card__avatar');
const blogComputing = document.querySelector('.card__computing');
const blogFamous = document.querySelector('.card__famous');

const showAvatarBlog = (event) => {
    blogAvatar.classList.remove('card--hide');
    blogAvatar.classList.add('card--show');
    blogComputing.classList.remove('card--show');
    blogComputing.classList.add('card--hide');
    blogFamous.classList.remove('card--show');
    blogFamous.classList.add('card--hide');
    console.log("Card-hide");
}


const showComputingBlog = (event) => {
    blogComputing.classList.remove('card--hide');
    blogComputing.classList.add('card--show');
    blogAvatar.classList.remove('card--show');
    blogAvatar.classList.add('card--hide');
    blogFamous.classList.remove('card--show');
    blogFamous.classList.add('card--hide');
}

const showFamousBlog = (event) => {
    blogFamous.classList.remove('card--hide');
    blogFamous.classList.add('card--show');
    blogAvatar.classList.remove('card--show');
    blogAvatar.classList.add('card--hide');
    blogComputing.classList.remove('card--show');
    blogComputing.classList.add('card--hide');
}

const showAllBlog = (event) => {
    blogAvatar.classList.remove('card--hide');
    blogAvatar.classList.add('card--show');
    blogComputing.classList.remove('card--hide');
    blogComputing.classList.add('card--show');
    blogFamous.classList.remove('card--hide');
    blogFamous.classList.add('card--show');
}

allBlog.addEventListener('click', showAllBlog);
avatar.addEventListener('click', showAvatarBlog);
computing.addEventListener('click', showComputingBlog);
famous.addEventListener('click', showFamousBlog);
