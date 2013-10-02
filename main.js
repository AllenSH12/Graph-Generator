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
			console.log("this is working....");

			/*
			var str = "var startRulerUnits = app.preferences.rulerUnits; \
									app.preferences.rulerUnits = Units.pixels; \
									var doc = app.activeDocument; \
									var res = doc.reslution; \
									var LB = doc.activeLayer.bounds; \
									var height = LB[3].value - LB[1].value; \
									var onePix = 100/height; \
									var newSize = onePix * (res * 6); \
									doc.activeLayer.resize(newSize, newSize, AnchorPostion.MIDDLECENTER); \
									app.preferences.rulerUnits = startRulerUnits;";

			var str = "var color = app.foregroundColor; \
								color.rgb.red = " + Math.floor(Math.random()*255) + "; \
								color.rgb.green = " + Math.floor(Math.random()*255) + "; \
								color.rgb.blue = " + Math.floor(Math.random()*255) + "; \
								app.foregroundColor = color; \
								var l1 = app.activeDocument.artLayers.add(); \
								l1.name = 'NEW LAYAR'; \
								l1.applyClouds(); \
								l1.resize(50,50, AnchorPostion.MIDDLECENTER);";
			*/

			var str = "var l1 = app.activeDocument.activeLayer; \
									l1.applyGaussianBlur(25);";

			var iceCream = "var data = new Array(150,235,40,300,450,200,300); \
											var doc = app.activeDocument; \
											var lineArray = new Array(); \
											for (var i=0; i<data.length; i++) { \
												var y = data[i]; \
												lineArray[i] = new PathPointInfo; \
												lineArray[i].anchor = Array(i*50, y); \
												lineArray[i].kind = PointKind.CORNERPOINT; \
												lineArray[i].leftDirection = lineArray[i].anchor; \
												lineArray[i].rightDirection = lineArray[i].anchor; \
											} \
											var lineSubPathArray = new Array(); \
												lineSubPathArray[0] = new SubPathInfo(); \
												lineSubPathArray[0].operation = ShapeOperation.SHAPEXOR; \
												lineSubPathArray[0].closed = false; \
												lineSubPathArray[0].entireSubPath = lineArray; \
											var myPathItem = doc.pathItems.add('A Line', lineSubPathArray); \
											myPathItem.strokePath(ToolType.BRUSH); \
											preferences.rulerUnits = startRulerUnits;";

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

			var createSquare = "var lineArray = new Array(); \
													var squareSize = 10; \
													var x = i * xSpan; \
													var y = Math.floor(Math.random()*h); \
													for (var j=0; j<4; j++) { \
														lineArray[j] = new PathPointInfo; \
														if (j==0) { \
															lineArray[j].anchor = Array(x,y); \
														} else if (j==1) { \
															lineArray[j].anchor = Array(x,y+squareSize); \
														} else if (j==2) { \
															lineArray[j].anchor = Array(x+squareSize,y+squareSize); \
														} else if (j==3) { \
															lineArray[j].anchor = Array(x+squareSize,y); \
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
													myPathItem.strokePath(ToolType.BRUSH);";

			generator.evaluateJSXString(newStuff);
		}
	}

	exports.init = init;

}());