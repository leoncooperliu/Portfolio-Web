var APIKey = "c3ba5fa8e844fc1b4ef1ca56625e6e625aa111c6f8d5a0a68ff985fe5f001866";
var currentList;
var numSearch = 50;
var pageNumber = 1;
var isPicture = false;

$("#btn-aspect,#btn-d-pop,#btn-d-time").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);
    console.log("Default");
    $.getJSON(
        "https://api.unsplash.com/search/photos?query=" + search + "&per_page=" + numSearch + "&page=" + pageNumber + "&client_id=" + APIKey,
        function (data) {
            console.log(data);
            currentList = data.results;

            $.each(currentList, function (i, val) {
                var image = val;
                var imageURL = val.urls.regular;
                var imageLink = val.links.html;

                $(".grid").append(
                    '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>');
                console.log("append");
            });
        }
    );
});

$('#search-input').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $(".image").remove();
        $(".no-picture").remove();
        var search = $("#search-input").val();
        console.log(search);
        $.getJSON(
            "https://api.unsplash.com/search/photos?query=" + search + "&per_page=" + numSearch + "&page=" + pageNumber + "&client_id=" + APIKey,
            function (data) {
                console.log(data);
                currentList = data.results;

                $.each(currentList, function (i, val) {
                    var image = val;
                    var imageURL = val.urls.regular;
                    var imageLink = val.links.html;

                    $(".grid").append(
                        '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>');

                    console.log("append");

                });
            }
        );
    }
});

//portrait search
$("#portrait").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;

        if (imageHeight > imageWidth) {
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });

});

//landscape search
$("#landscape").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;

        if (imageHeight < imageWidth) {
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });
});

//square search
$("#square").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);

    isPicture = false;

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;

        if (imageHeight == imageWidth) {
            console.log("square");
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>');
            isPicture = true;
        }
        console.log("append");
    });

    if (isPicture == false) {
        $("<h3 class='no-picture' style='text-align: center; margin-top:30px;'>No picture applied</h3>").insertBefore(".photo--grid");
    }
});

//3:2
$("#3by2").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);

    isPicture = false;

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;
        var aspectRatio1 = imageWidth / imageHeight;
        var aspectRatio2 = imageHeight / imageWidth;
        var diff1 = Math.abs(aspectRatio1 - 3 / 2);
        var diff2 = Math.abs(aspectRatio1 - 2 / 3);

        if (diff1 < 0.01 || diff2 < 0.01) {
            console.log("square")
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>');
            isPicture = true;
        }
        console.log("append");

    });

    if (isPicture == false) {
        $("<h3 class='no-picture' style='text-align: center; margin-top:30px;'>No picture applied</h3>").insertBefore(".photo--grid");
    }
});

//4:3
$("#4by3").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);

    isPicture = false;

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;
        var aspectRatio1 = imageWidth / imageHeight;
        var aspectRatio2 = imageHeight / imageWidth;
        var diff1 = Math.abs(aspectRatio1 - 4 / 3);
        var diff2 = Math.abs(aspectRatio1 - 3 / 4);

        if (diff1 < 0.01 || diff2 < 0.01) {
            console.log("square")
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>');

            isPicture = true;
        }
        console.log("append");
    });

    if (isPicture == false) {
        $("<h3 class='no-picture' style='text-align: center; margin-top:30px;'>No picture applied</h3>").insertBefore(".photo--grid");
    }
});

//7:5
$("#7by5").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);

    isPicture = false;

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;
        var aspectRatio1 = imageWidth / imageHeight;
        var aspectRatio2 = imageHeight / imageWidth;
        var diff1 = Math.abs(aspectRatio1 - 7 / 5);
        var diff2 = Math.abs(aspectRatio1 - 5 / 7);

        if (diff1 < 0.01 || diff2 < 0.01) {
            console.log("square")
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>');

            isPicture = true;
        }
        console.log("append");
    });


    if (isPicture == false) {
        $("<h3 class='no-picture' style='text-align: center; margin-top:30px;'>No picture applied</h3>").insertBefore(".photo--grid");
    }
});

//10:8
$("#10by8").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);

    isPicture = false;

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;
        var aspectRatio1 = imageWidth / imageHeight;
        var aspectRatio2 = imageHeight / imageWidth;
        var diff1 = Math.abs(aspectRatio1 - 10 / 8);
        var diff2 = Math.abs(aspectRatio1 - 8 / 10);

        if (diff1 < 0.01 || diff2 < 0.01) {
            console.log("square")
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>');

            isPicture = true;
        }
        console.log("append");
    });


    if (isPicture == false) {
        $("<h3 class='no-picture' style='text-align: center; margin-top:30px;'>No picture applied</h3>").insertBefore(".photo--grid");
    }
});


//16:9
$("#16by9").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);

    isPicture = false;

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;
        var aspectRatio1 = imageWidth / imageHeight;
        var aspectRatio2 = imageHeight / imageWidth;
        var diff1 = Math.abs(aspectRatio1 - 16 / 9);
        var diff2 = Math.abs(aspectRatio1 - 9 / 16);

        if (diff1 < 0.01 || diff2 < 0.01) {
            console.log("square")
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>');

            isPicture = true;
        }
        console.log("append");
    });


    if (isPicture == false) {
        $("<h3 class='no-picture' style='text-align: center; margin-top:30px;'>No picture applied</h3>").insertBefore(".photo--grid");
    }
});

//sort high to low
$("#rankdown").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);
    $.getJSON(
        "https://api.unsplash.com/search/photos?query=" + search + "&per_page=" + numSearch + "&client_id=" + APIKey,
        function (data) {
            console.log(data);
            currentList = data.results;
            var popularity = [];

            $.each(currentList, function (index, val) {

                popularity.push(val.likes);

            });

            function sortNumber(a, b) {
                return a - b;
            }

            console.log("before = " + popularity);
            popularity.sort(sortNumber);
            console.log("after = " + popularity);
            popularity.reverse();

            $.each(popularity, function (index, val) {
                var likeCount = val;

                $.each(currentList, function (index, val) {

                    var imageURL = val.urls.regular;
                    var imageLink = val.links.html;

                    if (likeCount == val.likes) {
                        $(".grid").append(
                            '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
                    }
                    console.log("append " + likeCount);

                });

            });

        }
    );
});

//sort low to high
$("#rankup").click(function () {
    $(".image").remove();
    $(".no-picture").remove();
    var search = $("#search-input").val();
    console.log(search);
    $.getJSON(
        "https://api.unsplash.com/search/photos?query=" + search + "&per_page=" + numSearch + "&client_id=" + APIKey,
        function (data) {
            console.log(data);
            currentList = data.results;
            var popularity = [];

            $.each(currentList, function (index, val) {

                popularity.push(val.likes);

            });

            function sortNumber(a, b) {
                return a - b;
            }

            console.log("before = " + popularity);
            popularity.sort(sortNumber);
            console.log("after = " + popularity);

            $.each(popularity, function (index, val) {
                var likeCount = val;

                $.each(currentList, function (index, val) {

                    var imageURL = val.urls.regular;
                    var imageLink = val.links.html;

                    if (likeCount == val.likes) {
                        $(".grid").append(
                            '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
                    }
                    console.log("append " + likeCount);

                });

            });

        }
    );
});

//Latest
$("#btn-recent").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    console.log(search);
    $.getJSON(
        "https://api.unsplash.com/search/photos?query=" + search + "&per_page=" + numSearch + "&client_id=" + APIKey,
        function (data) {
            console.log(data);
            currentList = data.results;
            var time = [];

            $.each(currentList, function (index, val) {

                time.push(val.created_at);

            });

            // function sortNumber(a, b) {
            //     return a - b;
            // }

            console.log("before = " + time);
            time.sort();
            console.log("after = " + time);
            time.reverse();

            $.each(time, function (index, val) {
                var creationTime = val;

                $.each(currentList, function (index, val) {

                    var imageURL = val.urls.regular;
                    var imageLink = val.links.html;

                    if (creationTime == val.created_at) {
                        $(".grid").append(
                            '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
                    }
                    console.log("append ");

                });

            });

        }
    );
});

var backgroundImg = ["img-01.jpg", "img-02.jpg", "img-03.jpg"];

// $(".top").css("background", "url(img-04.jpg)");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var randomURL = backgroundImg[getRandomInt(0, backgroundImg.length - 1)];
console.log(randomURL);

$(".top").css("background", "url(" + randomURL + ")");

$(".top").css("background-position", "center");
$(".top").css("background-repeat", "no-repeat");
$(".top").css("background-size", "cover");