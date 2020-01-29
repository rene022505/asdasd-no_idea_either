$(document).ready(function() {
    $("#button").click(() => {
        if($("#name").val() !== "" && $("#age").val() !== "") {
            $.post({
                type: "POST",
                data: {
                    "name": $("#name").val(),
                    "age": $("#age").val()
                },
                url: "./formHandler.php",
                dataType: "json",
                error: (data) => {
                    console.log(data.responseText);
                }
            }).done((data) => {
                console.log(data);
                $("input").val("");
            });
        } else {
            alert("Please input something before clicking the button!");
        }
    });
});