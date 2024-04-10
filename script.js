function get_data() {
    $.getJSON("https://api.quotable.io/random", (e) => {
        $("blockquote span").html(e.content);
        $("cite").html("—  " + e.author);
    });
}

$(document).ready(function () {
    get_data();

    $("button").on("click", () => {
        get_data();
    });

    $(document).ajaxError(function () {
        alert("Please wait a few seconds. Also check your internet!");
    });
});
