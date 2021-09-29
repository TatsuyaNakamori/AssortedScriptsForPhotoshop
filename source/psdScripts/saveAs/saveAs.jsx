// Copyright (c) 2021 Tatsuya Nakamori

var toolVersion = "1.0";

// jsonIOを使えるようにするためのセットアップ
var jsonIOFile = new File($.fileName + "/../../site-packages/jsonIO/jsonIO.jsx");
$.evalFile(jsonIOFile);

var saveAsWindow;

function saveOptions() {
    if (saveExtension == ".jpg") {
        var jpgOptions = new JPEGSaveOptions()
        jpgOptions.embedColorProfile = true
        jpgOptions.quality = 10
        jpgOptions.formatOptions = FormatOptions.STANDARDBASELINE
        jpgOptions.matte = MatteType.NONE
        return jpgOptions

    } else if (saveExtension == ".png") {
        var pngOptions = new PNGSaveOptions()
        pngOptions.compression = 9  // 0 - 9
        pngOptions.interlaced = false
        return pngOptions
    }
    return null
}

function save() {
    var folderObj = new Folder(SAVE_PATH)

    var files = folderObj.getFiles()

    var newVer = ("000" + String(files.length + 1)).slice(-3)
    var fileName = filePrefix + "_" + newVer + saveExtension
    var fullPath = [SAVE_PATH, fileName].join("/")

    var fileObj = new File(fullPath)
    activeDocument.saveAs(
        fileObj, saveOptions(), true, Extension.LOWERCASE
    )

    // 保存されたフォルダを開く
    folderObj.execute()
}

function showWindow() {
    // uiのpreferenceを読み込み
    var jsonPath = $.fileName + "/../preference/uistate.json";
    var uistate = JSONIO.load(jsonPath);

    var saveDir = uistate["saveDir"];
    var saveFormat = uistate["saveFormat"];


    var SAVE_PATH = "C:/Users/tnaka/Documents/_tmp/pictures"
    var filePrefix = "pic";
    var saveExtension = ".png"

    // Windowの作成
    var saveAsWindow = new Window("window", "SAVE AS ("+toolVersion+")", [0, 0, 250, 250])

    var newFileButton = saveAsWindow.add("button", [5, 5, 245, 50], "New File")
    newFileButton.onClick = function () {
        app.documents.add(1920, 1080)
    }

    var message = "Sample text\nNew Line"
    saveAsWindow.add("statictext", undefined, message, {multiline: true})

    var edittext = saveAsWindow.add("edittext")
    edittext.preferredSize.width = 400

    saveAsWindow.center()
    saveAsWindow.show()
}

function main() {
    var bt = new BridgeTalk()
    bt.target = "photoshop"
    bt.body = showWindow.toString() + "\nshowWindow()"
    bt.send()
}

main();
