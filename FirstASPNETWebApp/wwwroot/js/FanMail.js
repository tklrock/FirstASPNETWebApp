/*
document.getElementById("buttonSend").addEventListener("click", function () {
    alert("From: " + document.getElementById("textFrom").value + "\nSubject: " + document.getElementById("textSubject").value + "\nMessage: " + document.getElementById("textMessage").value);
})*/

// jquery version

$("#buttonSend").click(function () {
    alert("From: " + $("#textFrom").val() + "\nSubject: " + $("#textSubject").val() + "\nMessage: " + $("#textMessage").val());

    //Fun animation
    $("#picGanderson").fadeOut("slow");
})