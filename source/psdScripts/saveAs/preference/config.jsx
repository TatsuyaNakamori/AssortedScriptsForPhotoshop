// Copyright (c) 2021 Tatsuya Nakamori

// Create Config object
if (typeof Config !== "object") {
    Config = {};
}

(function () {
    "use strict";

    // デフォルトの値が設定されたjpgOptionsを返す
    if (typeof Config.jpgOptions !== "function") {
        Config.jpgOptions = function () {
            var jpgOptions = new JPEGSaveOptions();
            jpgOptions.embedColorProfile = true;
            jpgOptions.quality = 10;
            jpgOptions.formatOptions = FormatOptions.STANDARDBASELINE;
            jpgOptions.matte = MatteType.NONE;
            return jpgOptions
        }
    }

    // デフォルトの値が設定されたpngOptionsを返す
    if (typeof Config.pngOptions !== "function") {
        Config.pngOptions = function () {
            var pngOptions = new PNGSaveOptions();
            pngOptions.compression = 9;  // 0 - 9
            pngOptions.interlaced = false;
            return pngOptions
        }
    }
}());
