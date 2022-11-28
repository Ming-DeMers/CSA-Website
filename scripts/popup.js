$(document).ready(function () {
    if ($.cookie('popup') = 'seen') {
        $("dim-sum").addClass('hidden');
    }
    else {
        $.cookie('popup', 'seen', { expires: 1 });
    }
});

$('#confirm').click(function () {
    $("#dim-sum").addClass("hidden");
});
