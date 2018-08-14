#
target Illustrator# targetengine main

//  Top View;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var ang = 30; // define rotation angle

// Check that a document is open and that at least 1 pathItem is selected

if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
    thisDoc = app.activeDocument;
    for (i = 0; i < thisDoc.selection.length; i++) {
        selectedObject = thisDoc.selection[i];

        // Rotate
        selectedObject.rotate(ang);

        // Shear
        var im = app.getIdentityMatrix();
        DeltaAngToRad = toRadians(ang);
        im.mValueC = -1 * (Math.tan(DeltaAngToRad));
        selectedObject.transform(im, true, true, true, true, 1, undefined);

        // Scale Y
        AngToRad = toRadians(ang);
        scale2 = Math.cos(AngToRad) * 100;
        revscale2 = 100 * (100 / scale2);
        selectedObject.resize(100, revscale2);
    }
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}
