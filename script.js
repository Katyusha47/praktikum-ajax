$(document).ready(function () {
    $("#formSapa").submit(function (event) {
        event.preventDefault(); 

        let name = $("#name").val().trim();

        $.ajax({
            url: "post.php", 
            type: "POST",
            data: { name: name },
            success: function (response) {
                $("#response").html(response);
            },
            error: function () {
                $("#response").html("<span class='text-danger'>Terjadi kesalahan. Silakan coba lagi.</span>");
            }
        });
    });
});
