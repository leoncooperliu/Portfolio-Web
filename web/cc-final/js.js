var APIKey = "c3ba5fa8e844fc1b4ef1ca56625e6e625aa111c6f8d5a0a68ff985fe5f001866";
var currentList;
var numSearch = 50;

$("#button-addon1").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    console.log(search);
    $.getJSON(
        "https://api.unsplash.com/search/photos?query=" + search + "&per_page=" + numSearch + "&client_id=" + APIKey,
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
        var search = $("#search-input").val();
        console.log(search);
        $.getJSON(
            "https://api.unsplash.com/search/photos?query=" + search + "&per_page=" + numSearch + "&client_id=" + APIKey,
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
    var search = $("#search-input").val();
    console.log(search);

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;

        if (imageHeight == imageWidth) {
            console.log("square")
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });
});

//high res search
$("#high-res").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    console.log(search);

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;
        var resoultion = imageWidth * imageHeight;

        if (resoultion >= 40000000) {
            console.log("square")
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });
});

//mid res search
$("#medium-res").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    console.log(search);

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;
        var resoultion = imageWidth * imageHeight;

        if (resoultion <= 40000000 && resoultion >= 24000000) {
            console.log("square")
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });
});

//small res search
$("#small-res").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    console.log(search);

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;
        var resoultion = imageWidth * imageHeight;

        if (resoultion <= 24000000) {
            console.log("square")
            $(".grid").append(
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });
});

//3:2
$("#3by2").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    console.log(search);

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
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });
});

//4:3
$("#4by3").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    console.log(search);

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
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });
});

//7:5
$("#7by5").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    console.log(search);

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
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });
});

//10:8
$("#10by8").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    console.log(search);

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
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });
});


//16:9
$("#16by9").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    console.log(search);

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
                '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });
});

//sort high to low
$("#rankdown").click(function () {
    $(".image").remove();
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



$("#leon").click(function () {
    $(".image").remove();
    var search = $("#search-input").val();
    $.getJSON(
        "https://api.unsplash.com/users/leoncooper/photos?" + "&per_page=50&client_id=" + APIKey,
        function (data) {
            console.log(data);
            currentList = data;

            $.each(currentList, function (i, val) {
                var image = val;
                console.log(image);
                var imageURL = val.urls.regular;
                var imageLink = val.links.html;

                $(".grid").append(
                    '<div class="image"><a href="' + imageLink + '" target="_blank"><img src="' + imageURL + '"></a></div>')

                console.log("append");
            });
        });
});