//View Selection
infovisApp.controller('viewController', function ($scope) {
    function AppCtrl($scope) {
        $scope.getPartial = function () {
            return "'partial/waveform.html'";
        };
        console.log("got Here");


    };
});


$('#viewSelect1').change(function () {
    var valSelected = $("#viewSelect1 option:selected").text();

    var viewSelect = $('#view1');
    displayControl();
    console.log(valSelected);
    if (valSelected == "Waveform") {
        viewSelect.load("partial/waveform.html");
    } else if (valSelected == "Location") {
        viewSelect.load("partial/location.html");
        console.log('sent ' + valSelected);
    } else if (valSelected == "Lyrics") {
        viewSelect.load("partial/lyrics.html");
        console.log('sent ' + valSelected);
    } else if (valSelected == "Subgenres") {
        viewSelect.load("partial/subgenres.html");
        console.log('sent ' + valSelected);
    } else if (valSelected == "Attributes") {
        viewSelect.load("partial/overTime.html");
        console.log('sent ' + valSelected);
    };
});

$('#viewSelect2').change(function () {
    var valSelected = $("#viewSelect2 option:selected").text();
    var viewSelect = $('#view2');
    displayControl();
    console.log(valSelected);
    if (valSelected == "Waveform") {
        viewSelect.load("partial/waveform.html");
    } else if (valSelected == "Location") {
        viewSelect.load("partial/location.html");
        console.log('sent ' + valSelected);
    } else if (valSelected == "Lyrics") {
        viewSelect.load("partial/lyrics.html");
        console.log('sent ' + valSelected);
    } else if (valSelected == "Subgenres") {
        viewSelect.load("partial/subgenres.html");
        console.log('sent ' + valSelected);
    } else if (valSelected == "Attributes") {
        viewSelect.load("partial/overTime.html");
        console.log('sent ' + valSelected);
    };
});

var displayControl = function () {
    var select1 = $("#viewSelect1 option:selected").text();
    var select2 = $("#viewSelect2 option:selected").text();
    if (select1 == "Lyrics" || select2 == "Lyrics") {
        $(".timeline").show();
    } else {
        $(".timeline").hide();
    }
};

displayControl();