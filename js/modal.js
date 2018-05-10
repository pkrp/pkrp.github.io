$(document).ready(function () {
    var modal = $("#message-modal");
    var btn = $("#message-button");
    var span = $(".close")[0];
    var submitButton = $("#button-submit");


    span.onclick = function () {
        modal.css("display", "none");
    };

    btn.click(function () {
        var display = modal.css("display");
        if (display === "none") {
            modal.css("display", "block")
        } else modal.css("display", "none")
    });

    submitButton.click(function () {
        console.log("submit click")
        var senderName = $("#sender-name").val();
        var senderEmail = $("#sender-email").val();
        var message = $("#message").val();

        var sendData = {
            "Messages": [
                {
                    "From": {
                        "Email": "asd@gmail.com",
                        "Name": "ASD"
                    },
                    "To": [
                        {
                            "Email": "draftuj@gmail.com",
                            "Name": "Draftuj"
                        }
                    ],
                    "Subject": "Draftuj feedback message",
                    "TextPart": "test"
                }
            ]
        };

        $("#message-form").ajaxSubmit({
            type: "POST",
            url: "https://api.mailjet.com/v3.1/send",
            beforeSend: function (xhr) {
                console.log("before")
                xhr.setRequestHeader("Authorization", "Basic " + btoa("22a12e19d5fa4806a2234bab0b4edcfc:d4c6907d396a021a2a69e88bcf16c55a"));
            },
            data: sendData,
            contentType: 'application/json',
            success: function (sth) {
                console.log("sth")
                alert('Kocham Cie')
            },
            error: function (error, a, b) {
                console.log(a)
                console.log(b)
                console.log(error)
            }
        });
    });
});