///////////////////////////////
//Function to get Genre Changes
///////////////////////////////
$('document').ready(function () {
    $('#genre1').on('change', function () {
        var genreSelect1;
        genreSelect1 = $("#genre1 option:selected").text();
        var select = genreSelect1;
    });

    $('#genre2').change(function () {
        var genreSelect2;
        genreSelect2 = $("#genre2 option:selected").text();
        var select = genreSelect2;
    });
});


///////////////////////////////
//Function to get the data
///////////////////////////////

var getData = function (displaySelect) {

    d3.csv('data/metadata/' + genre1Selected + '.csv', function (data) {

        //Set number of songs
        $('#numSongs1').text(Math.floor(data[0].Songs * 1));


        //Set Average Length
        var durVal = data[0].Duration;
        var minutes = Math.floor(durVal / 60);
        var seconds = Math.floor(durVal % 60);
        $('#averageDur1').text(minutes + ":" + seconds + " mins");

        //Get the Average Loudness
        $('#averageLoud1').text(Math.floor(data[0].Loudness * 1) + " dB");


        //Get the Average Temp
        $('#averageTempo1').text(Math.floor(data[0].Tempo * 1) + " BPM");

        //Get the Average Hotness
        $('#averageHotness1').text(Math.floor(data[0].Hotness * 100) + "%");
    });

    d3.csv('data/metadata/' + genre2Selected + '.csv', function (data) {

        //Set number of songs
        $('#numSongs2').text(data[0].Songs);

        //Set Average Length
        var durVal = data[0].Duration;
        var minutes = Math.floor(durVal / 60);
        var seconds = Math.floor(durVal % 60);

        $('#averageDur2').text(minutes + ":" + seconds + "mins");

        //Get the Average Loudness
        var loudsss = Math.floor(data[0].Loudness * 1.0);
        $('#averageLoud2').text(loudsss + " dB");

        //Get the Average Temp
        $('#averageTempo2').text(Math.floor(data[0].Tempo * 1) + " BPM");

        //Get the Average Hotness
        $('#averageHotness2').text(Math.floor(data[0].Hotness * 100) + "%");
    });
};

getData();