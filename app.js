(function(){

    var wrapperImage = document.getElementById("wrapper-image");

    var up = new Uplo9dImage(document.getElementById("file"), {

        onComplete : function() {
            console.log("complete", this);
            wrapperImage.innerHTML = "";
            wrapperImage.appendChild(this);
        },

        onProgress : function() {
            console.log("progress " + this);
        },

        onStart : function() {
            console.log("start");
            wrapperImage.innerHTML = 'chargement...';
        },

        onerror : function() {
            console.log(this);
        }

    });

})();