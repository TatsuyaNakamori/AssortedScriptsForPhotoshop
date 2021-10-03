// Copyright (c) 2021 Tatsuya Nakamori

// Create Dialog object
if (typeof Dialog !== "object") {
    Dialog = {};
}

(function () {
    "use strict";

    // デフォルトの値が設定されたjpgOptionsを返す
    if (typeof Dialog.jpgOptions !== "function") {
        Dialog.jpgOptions = function () {
            $.writeln("Dialog.jpgOptions")
        }
    }

    // デフォルトの値が設定されたpngOptionsを返す
    if (typeof Dialog.pngOptions !== "function") {
        Dialog.pngOptions = function () {
            $.writeln("Dialog.pngOptions")
        }
    }
}());
