const FILMS = {
    page: ["film-near.html", "film-chasing.html", "film-gala.html"],
    location: ["mp4/home-near1.mp4", "mp4/home-shadow.mp4", "mp4/home-gala.mp4"],
    name: ["View Short Film", "View Feature Film", "View Trailer"],
    poster: ["img/home-film-near.jpg", "img/home-film-shadow.jpg", "img/home-film-gala.jpg"],
    type: ["mp4", "mp4", "mp4"]
}

const PHOTOS = {
    page: ["photo-dancer.html", "photo-kathy.html", "photo-long.html"],
    location: ["img/home-photo-dancer.jpg", "img/home-photo-kathy.jpg", "img/home-photo-land.jpg"],
    name: ["View Portraiture", "View Portraiture", "View Landscape"],
    type: ["img", "img", "img"]
}

const RECENTS = {
    page: ["photo-dancer.html", "film-near.html", "photo-kathy.html", "film-chasing.html", "photo-long.html", "film-gala.html"],
    location: ["img/home-photo-dancer.jpg", "mp4/home-near1.mp4", "img/home-photo-kathy.jpg", "mp4/home-shadow.mp4", "img/home-photo-land.jpg", "mp4/home-gala.mp4"],
    name: ["View Portraiture", "View Short Film", "View Portraiture", "View Feature Film", "View Landscape", "View Trailer"],
    poster: ["", "img/home-film-near.jpg", "", "img/home-film-shadow.jpg", "", "img/home-film-gala.jpg"],
    type: ["img", "mp4", "img", "mp4", "img", "mp4"]
}

console.log("Hi");
console.log(FILMS["location"][0]);

const allProject = document.querySelector('#all-project');
const films = document.querySelector('#nav-film');
const recent = document.querySelector('#nav-recent');
const photos = document.querySelector('#nav-photo');
const designs = document.querySelector('#nav-design');

const showProjects = (inputArray) => {
    allProject.innerHTML = "";

    for (let i in inputArray['type']) {
        const a1 = document.createElement('a');
        const a2 = document.createElement('a');
        const outDiv = document.createElement("div");
        const inDiv = document.createElement("div");
        const title = document.createElement('h4');

        if (inputArray['type'][i] == "mp4") {
            const vid = document.createElement('video');
            a1.setAttribute('href', inputArray["page"][i]);
            vid.src = inputArray["location"][i];
            vid.loop = true;
            vid.muted = true;
            vid.autoplay = true;
            vid.poster = inputArray["poster"][i];
            a1.appendChild(vid);

            a2.setAttribute('href', inputArray["page"][i]);
            title.innerHTML = inputArray["name"][i];
            title.classList.add('nova-semibold');
            a2.appendChild(title);
            console.log(title);

            inDiv.appendChild(a2);
            inDiv.classList.add('card-text');

            outDiv.classList.add('card', 'animated', 'fadeInUp');
            outDiv.appendChild(a1);
            outDiv.appendChild(inDiv);
            allProject.appendChild(outDiv);
            console.log('sucess-video');

        }
        if (inputArray['type'][i] == "img") {
            const img = document.createElement('img');
            a1.setAttribute('href', inputArray["page"][i]);
            img.src = inputArray["location"][i];
            a1.appendChild(img);

            a2.setAttribute('href', inputArray["page"][i]);
            title.innerHTML = inputArray["name"][i];
            title.classList.add('nova-semibold');
            a2.appendChild(title);
            console.log(title);

            inDiv.appendChild(a2);
            inDiv.classList.add('card-text');

            outDiv.classList.add('card', 'animated', 'fadeInUp');
            outDiv.appendChild(a1);
            outDiv.appendChild(inDiv);
            allProject.appendChild(outDiv);
            console.log('sucess-img');
        }

    }
}

const showFilmProjects = (event) => {
    showProjects(FILMS);
    films.classList.add('ls-active');
    designs.classList.remove('ls-active');
    photos.classList.remove('ls-active');
    recent.classList.remove('ls-active');
}

const showPhotoProjects = (event) => {
    showProjects(PHOTOS);
    photos.classList.add('ls-active');
    designs.classList.remove('ls-active');
    films.classList.remove('ls-active');
    recent.classList.remove('ls-active');
}

const showRecentProjects = (event) => {
    showProjects(RECENTS);
    recent.classList.add('ls-active');
    designs.classList.remove('ls-active');
    photos.classList.remove('ls-active');
    films.classList.remove('ls-active');
}

films.addEventListener('click', showFilmProjects);
photos.addEventListener('click', showPhotoProjects);
recent.addEventListener('click', showRecentProjects);
