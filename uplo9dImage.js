// uplo9dImage-js simpe upload handler with FileReader

var Uplo9dImage = function(_fileInput, _options) {

    "use strict";

    var fileInput = _fileInput;

    var handleFileSelect = function(evt) {

        var file = evt.target.files[0];

        var reader = new FileReader();


        reader.onloadstart = function() {

            if ('onStart' in _options && typeof _options.onStart === "function") {
                _options.onStart.call(this);
            } else {
                throw 'typeof onStart is not a function';
            }

        };

        reader.onprogress = function() {

            if ('onProgress' in _options && typeof _options.onProgress === "function") {
                _options.onProgress.call(this);
            } else {
                throw 'typeof onProgress is not a function';
            }

        };

        reader.onerror = function() {

            if ('onError' in _options && typeof _options.onError === "function") {
                _options.onError.call(this);
            } else {
                throw 'typeof onError is not a function';
            }

        };

        reader.onload = function(fileObject) {

            var data = fileObject.target.result;
            // Create an image object
            var image = new Image();

            image.onload = function() {

                if ('onComplete' in _options && typeof _options.onComplete === "function") {
                    _options.onComplete.call(this);
                } else {
                    throw 'typeof onComplete is not a function';
                }

            };
            // Set image data to background image.
            image.src = data;

        };

        reader.readAsDataURL(file);
    };


    fileInput.addEventListener("change", handleFileSelect);

};