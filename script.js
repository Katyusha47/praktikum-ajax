$(document).ready(function () {
    $("#formSapa").submit(function (event) {
        event.preventDefault();
        
        let name = $("#name").val();

        $.ajax({
            url: "sapa.php", 
            type: "POST",
            data: { name: name },
            success: function (response) {
                $("#response").html(response);
            },
            error: function () {
                $("#response").html("Terjadi kesalahan. Silakan coba lagi.");
            }
        });
    });
});
