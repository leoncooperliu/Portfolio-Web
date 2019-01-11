const FILMS = {
    page: ["film-near.html",
           "film-hidden.html",
           "film-gala.html"],
    location: ["mp4/home-near.mp4",
               "mp4/home-hidden.mp4",
               "mp4/home-gala.mp4"],
    name: ["View Short Film",
           "View Short Film",
           "View Trailer"],
    poster: ["img/home-film-near.jpg",
             "img/home-film-hidden.jpg",
             "img/home-film-gala.jpg"],
    type: ["mp4",
           "mp4",
           "mp4"]
}

const DESIGNS = {
    page: ["design-lantern.html",
           "design-mid.html",
           "design-next.html"],
    location: ["img/home-design-lantern.jpg",
               "img/home-design-mid.jpg",
               "img/home-design-next.jpg"],
    name: ["View Poster",
           "View Poster",
           "View Layout"],
    poster: [],
    type: ["img",
           "img",
           "img"]
}

const PHOTOS = {
    page: ["photo-dancer.html",
           "photo-kathy.html",
           "photo-long.html",
          "photo-park.html"],
    location: ["img/home-photo-dancer.jpg",
               "img/home-photo-kathy.jpg",
               "img/home-photo-long.jpg",
              "img/home-photo-park.jpg"],
    name: ["View Portraiture",
           "View Portraiture",
           "View Landscape",
          "View Landscape"],
    type: ["img",
           "img",
           "img",
          "img"]
}

const RECENT = {
    page: ["photo-dancer.html",
           "photo-kathy.html",
           "film-near.html",
          "film-gala.html"],
    location: ["img/home-photo-dancer.jpg",
               "img/home-photo-kathy.jpg",
               "mp4/home-near.mp4",
              "mp4/home-gala.mp4"],
    name: ["View Portraiture",
           "View Landscape",
           "View Short Film",
          "View Trailer"],
    poster: ['',
               '',
             "img/home-film-near.jpg",
              "img/home-film-gala.jpg"],
    type: ["img",
           "img",
           "mp4",
          "mp4"]
}


console.log("Hi");

const allProject = document.querySelector('#all-project');
const films = document.querySelector('#nav-film');
const recent = document.querySelector('#nav-recent');
const photos = document.querySelector('#nav-photo');
const designs = document.querySelector('#nav-design');
const blogs = document.querySelector('#nav-blogs');

const showProjects = (inputArray) => {
    allProject.innerHTML = "";

    for (let i in inputArray['type']) {
        const a1 = document.createElement('a');
        const a2 = document.createElement('a');
        const outDiv = document.createElement("div");
        const inDiv = document.createElement("div");
        const title = document.createElement('h4');

        //poster
        const inDivPoster = document.createElement('div');
        const outDivPoster = document.createElement('div');
        const a3 = document.createElement('a');
        const a4 = document.createElement('a');
        const title1 = document.createElement('h4');

        if (inputArray['type'][i] == "mp4") {
            const vid = document.createElement('video');
            const source = document.createElement('source');
            a1.setAttribute('href', inputArray["page"][i]);
            source.src = inputArray["location"][i];
            source.type = "video/mp4";
            vid.loop = true;
            vid.muted = true;
            vid.autoplay = true;
            vid.poster = inputArray["poster"][i];
            vid.appendChild(source);
            a1.appendChild(vid);

            a2.setAttribute('href', inputArray["page"][i]);
            title.innerHTML = inputArray["name"][i];
            title.classList.add('font--nova-semibold');
            a2.appendChild(title);

            inDiv.appendChild(a2);
            inDiv.classList.add('works__card__text');

            outDiv.classList.add('works__card', 'animated', 'fadeInUp', 'large-screen');
            outDiv.appendChild(a1);
            outDiv.appendChild(inDiv);
            allProject.appendChild(outDiv);


            //poster
            a3.setAttribute('href', inputArray["page"][i]);
            const img = document.createElement('img');
            img.src = inputArray["poster"][i];
            a3.appendChild(img);

            a4.setAttribute('href', inputArray["page"][i]);
            title1.innerHTML = inputArray["name"][i];
            title1.classList.add('font--nova-semibold');
            a4.appendChild(title1);

            inDivPoster.appendChild(a4);
            inDivPoster.classList.add('works__card__text');

            outDivPoster.classList.add('works__card', 'animated', 'fadeInUp', 'small-screen')
            outDivPoster.appendChild(a3);
            outDivPoster.appendChild(inDivPoster);
            allProject.appendChild(outDivPoster);
            console.log('sucess video img')

        }
        if (inputArray['type'][i] == "img") {
            const img = document.createElement('img');
            a1.setAttribute('href', inputArray["page"][i]);
            img.src = inputArray["location"][i];
            a1.appendChild(img);

            a2.setAttribute('href', inputArray["page"][i]);
            title.innerHTML = inputArray["name"][i];
            title.classList.add('font--nova-semibold');
            a2.appendChild(title);
            console.log(title);

            inDiv.appendChild(a2);
            inDiv.classList.add('works__card__text');

            outDiv.classList.add('works__card', 'animated', 'fadeInUp');
            outDiv.appendChild(a1);
            outDiv.appendChild(inDiv);
            allProject.appendChild(outDiv);
            console.log('sucess-img');
        }
    }
}

const showRecentProjects = (event) => {
    showProjects(RECENT);
    recent.classList.add('btn--active');
    designs.classList.remove('btn--active');
    photos.classList.remove('btn--active');
    films.classList.remove('btn--active');
}


const showFilmProjects = (event) => {
    showProjects(FILMS);
    films.classList.add('btn--active');
    designs.classList.remove('btn--active');
    photos.classList.remove('btn--active');
    recent.classList.remove('btn--active');
}

const showPhotoProjects = (event) => {
    showProjects(PHOTOS);
    photos.classList.add('btn--active');
    designs.classList.remove('btn--active');
    films.classList.remove('btn--active');
    recent.classList.remove('btn--active');
}

const showDesignProjects = (event) => {
    showProjects(DESIGNS);
    designs.classList.add('btn--active');
    photos.classList.remove('btn--active');
    films.classList.remove('btn--active');
    recent.classList.remove('btn--active');
}

films.addEventListener('click', showFilmProjects);
photos.addEventListener('click', showPhotoProjects);
recent.addEventListener('click', showRecentProjects);
designs.addEventListener('click', showDesignProjects);