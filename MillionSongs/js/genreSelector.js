var genre1Selected = "Dance and Electronica";
var genre2Selected = "Pop and Rock";


$('#genre1').change(function () {
    newGenre = $('#genre1').val();
    genre1Selected = newGenre;
    getData();

    if (typeof waveUpdate == 'function') {

        waveUpdate();
    };

    if (typeof overTimeUpdate == 'function') {

        overTimeUpdate();
    };
    if (typeof lyricsUpdate == 'function') {

        changeLyrics();
    };
    setCurrentGenre("genre1");
    overtimeGraphs();
});

$('#genre2').change(function () {
    newGenre = $('#genre2').val();
    genre2Selected = newGenre;


    getData();
    if (typeof waveUpdate == 'function') {

        waveUpdate();
    };

    if (typeof overTimeUpdate == 'function') {

        overTimeUpdate();
    };
    if (typeof lyricsUpdate == 'function') {

        changeLyrics();
    };
    setCurrentGenre("genre2");
    overtimeGraphs();
});