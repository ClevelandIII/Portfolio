`use strict`
$(function () {
    submitMessage.addEventListener("click", function () {
        if(nospace.value !="" && space.value !="" && norm.value !="" && large.value !=""){
            messageRecieved.textContent = "Message Recieved! We will get back to you within 2-5 buisness days."
            nospace.value = "";
            space.value = "";
            norm.value = "";
            large.value = "";
        }
    });

    (function titleScroller(text) {
        document.title = text;
        setTimeout(function () {
            titleScroller(text.substr(1) + text.substr(0, 1));
        }, 100);
    }("          Cleveland's Portfolio & Resume          "));

    
});

