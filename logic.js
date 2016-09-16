function checkPart2() {
    if ($('#Liisa:checked').length) {
        openPart('p3');
    }
    else {
        displayTryAgain();
    }
}

function checkPart3() {
    if ($('#Herttakuningatar:checked').length) {
        openPart('p4');
    }
    else {
        displayTryAgain();
    }
}

function checkPart4() {
    if ($('#mika-tekee-isoksi').val().toLowerCase().indexOf('keks') > -1) {
        openPart('p5');
    }
    else {
        displayTryAgain();
        $('#vinkki').show(1000);
    }
    return false;
}

function checkPart5() {
    if ($('#koodi').val().indexOf('1986') > -1) {
        openPart('p6');
    }
    else {
        displayTryAgain();
    }
    return false;
}

function openPart(id) {
    $('.part').hide();
    $('#' + id).show();
}

function displayTryAgain() {
    alert('Väärin meni, yritä uudestaan.');

}

$(document).ready(function() {
    openPart('p1');
});