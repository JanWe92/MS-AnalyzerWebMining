//View Selection
infovisApp.controller('viewController', function ($scope) {
    function AppCtrl($scope) {
        $scope.getPartial = function () {
            return "'partial/waveform.html'";
        };
    };
});


$('#viewSelect1').change(function () {
    var valSelected = $("#viewSelect1 option:selected").text();

    var viewSelect = $('#view1');
    displayControl();

    var valSelectedOther = $("#viewSelect2 option:selected").text();
    if (valSelected == "Waveform") {
        if (valSelectedOther != "Waveform") {
            viewSelect.load("partial/waveform.html");
        } else {
            viewSelect.load("partial/home.html");
        }

    } else if (valSelected == "Lyrics") {
        if (valSelectedOther != "Lyrics") {
            viewSelect.load("partial/lyrics.html");
            console.log('sent ' + valSelected);
        }
    } else if (valSelected == "Attributes") {
        if (valSelectedOther != "Attributes") {
            viewSelect.load("partial/overTime.html");
            console.log('sent ' + valSelected);
        } else {
            viewSelect.load("partial/home.html");
        }
    };
});

$('#viewSelect2').change(function () {
    var valSelected = $("#viewSelect2 option:selected").text();
    var viewSelect = $('#view2');
    displayControl();
    var valSelectedOther = $("#viewSelect1 option:selected").text();
    if (valSelected == "Waveform") {
        if (valSelectedOther != "Waveform") {
            viewSelect.load("partial/waveform.html");
        } else {
            viewSelect.load("partial/home.html");
        }

    } else if (valSelected == "Lyrics") {
        if (valSelectedOther != "Lyrics") {
            viewSelect.load("partial/lyrics.html");
            console.log('sent ' + valSelected);
        } else {
            viewSelect.load("partial/home.html");
        }
    } else if (valSelected == "Attributes") {
        if (valSelectedOther != "Attributes") {
            viewSelect.load("partial/overTime.html");
            console.log('sent ' + valSelected);
        } else {
            viewSelect.load("partial/home.html");
        }
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