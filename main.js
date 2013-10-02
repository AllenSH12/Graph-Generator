(function () {
	"use strict";

	var generator;

	function init(gen) {
		generator = gen;

		generator.addMenuItem("gg","Graph Generator", true, false);
		generator.onPhotoshopEvent("generatorMenuChanged", menuClicked);
	}

	function menuClicked (e) {
		if (e.generatorMenuChanged.name == "gg") {

			var newStuff = "var data = new Array(150,235,40,300,450,200,300,225,185,190,160,80,140,350,370,480); \
											var maxDataValue = 0; \
											for (var i=0; i<data.length; i++) { \
												if (data[i] > maxDataValue) { \
													maxDataValue = data[i]; \
												} \
											} \
											var populationSize = data.length; \
											var doc = app.activeDocument; \
											var h = parseInt(doc.height); \
											var w = parseInt(doc.width); \
											var xSpan = w / data.length; \
											var ySpan = h / maxDataValue; \
											var squareSize = 10; \
											var testing = doc.artLayers.add(); \
											testing.name = 'layarrrr'; \
											for (var i=0; i<populationSize; i++) { \
												var dataEntry = data[i]; \
												var x = i * xSpan; \
												var y = dataEntry * ySpan; \
												var lineArray = new Array(); \
												for (var j=0; j<4; j++) { \
													lineArray[j] = new PathPointInfo; \
													if (j==0) { \
														lineArray[j].anchor = Array(x-squareSize/2,y); \
													} else if (j==1) { \
														lineArray[j].anchor = Array(x,y+squareSize/2); \
													} else if (j==2) { \
														lineArray[j].anchor = Array(x+squareSize/2,y); \
													} else if (j==3) { \
														lineArray[j].anchor = Array(x,y-squareSize/2); \
													} \
													lineArray[j].kind = PointKind.CORNERPOINT; \
													lineArray[j].leftDirection = lineArray[j].anchor; \
													lineArray[j].rightDirection = lineArray[j].anchor; \
												} \
												var lineName = 'Line ' + i; \
												var lineSubPathArray = new Array(); \
													lineSubPathArray[0] = new SubPathInfo(); \
													lineSubPathArray[0].operation = ShapeOperation.SHAPEXOR; \
													lineSubPathArray[0].closed = true; \
													lineSubPathArray[0].entireSubPath = lineArray; \
												var myPathItem = doc.pathItems.add(lineName, lineSubPathArray); \
												myPathItem.strokePath(ToolType.BRUSH); \
											}";

			generator.evaluateJSXString(newStuff);
		}
	}

	exports.init = init;

}());