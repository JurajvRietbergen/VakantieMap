var L = require('leaflet');

var map = L.map('map');

// Basemap
// var map = L.map('mapid').setView([20.619005,90.295141], 3);
// L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
// 	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
// 	subdomains: 'abcd',
// 	maxZoom: 19,
// 	layers:[transMO, transMA,transSK,transSJ]
// }).addTo(map);


// // Makers
// var mSchiphol = L.marker([52.308039, 4.762198]).bindPopup("<b>Schiphol<b>")

// var mPulkovo = L.marker([59.80188714299779,30.271961232351707]).bindPopup("<b>Pulkovo<b>")

// var mMoskovskiy = L.marker([59.92940773248788,30.36217002031681]).bindPopup("<b>Moskovskiy Trainstation<b>")
	
// var mLeningradsky = L.marker([55.7288731827477,37.640874416699035]).bindPopup("<b>Leningradsky Trainstation<b>")

// var mYaroslavsky = L.marker([55.7768024,37.6573515]).bindPopup("<b>Yaroslavsky Trainstation<b>")

// var mBeijing = L.marker([39.90208233734751,116.4215965127216]).bindPopup("<b>Beijing Trainstation<b>")

// var mVladivostok = L.marker([43.11161047086922,131.88140754402076]).bindPopup("<b>Vladivostok Trainstation<b>")

// var mDonghae = L.marker([37.49684265833768,129.13402439854494]).bindPopup("<b>Donghae Port<b>")

// var mSeoul = L.marker([37.5666791,126.9782914]).bindPopup("<b>Seoul<b>")

// var mSeoulAP = L.marker([37.5590275,126.7932985]).bindPopup("<b>Seoul Airport<b>")

// var mSakaiminato = L.marker([35.54525765334201,133.2220610548145]).bindPopup("<b>Sakai-Minato Port<b>")

// var mKyoto = L.marker([35.021041,135.7556075]).bindPopup("<b>Kyoto<b>")

// var mOsaka = L.marker([34.4342045,135.222523]).bindPopup("<b>Osaka-KIX Airport<b>")

// // Markerless points
// var pChita = [52.033409,113.500893]; // Point where Manchurian line goes into china
// var pTakhtamygda = [54.1088,123.609];
// var pKhabarovsk = [48.4814,135.077];
// var pUlanUde = [51.84096188110149,107.58316250358831];
// var pUlaanbaatar = [47.90863506880966,106.8839715299694];
// var pHarbin = [45.75978595038456,126.62382161193685];

// // Schiphol -> Pulkovo
// var latlngs = [];

// var latlng1 = [52.308039, 4.762198],
//   latlng2 = [59.80188714299779,30.271961232351707];

// var offsetX = latlng2[1] - latlng1[1],
//   offsetY = latlng2[0] - latlng1[0];

// var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
//   theta = Math.atan2(offsetY, offsetX);

// var thetaOffset = (3.14 / 10);

// var r2 = (r / 2) / (Math.cos(thetaOffset)),
//   theta2 = theta + thetaOffset;

// var midpointX = (r2 * Math.cos(theta2)) + latlng1[1],
//   midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

// var midpointLatLng = [midpointY, midpointX];

// latlngs.push(latlng1, midpointLatLng, latlng2);

// var pathOptions = {
//   color: 'blue',
//   dashArray: "30 10",
//   weight: 3
// }

// var LineSP = L.curve(
//   [
//     'M', latlng1,
//     'Q', midpointLatLng,
//     latlng2
//   ], pathOptions);	


// // St.Petersburg -> Moscow
// var latlngs = [
//     mMoskovskiy.getLatLng(),
//     mLeningradsky.getLatLng()
// ];
// var LineML = L.polyline(latlngs, {color: 'blue'});

// // Moscow -> Ulan-Ude
// var latlngs = [
//     mYaroslavsky.getLatLng(),
//     pUlanUde
// ];
// var LineYU = L.polyline(latlngs, {color: 'blue'});

// // Ulan-Ude -> Uulanbaatar -> Beijing
// var pathOptions = {
//   color: 'blue',
//   weight: 3
// }

// var LineUB = L.curve(
//   [
//     'M', [51.84096188110149,107.58316250358831],
//     'Q', [47.90863506880966,102.9],
// 	[39.90208233734751,116.4215965127216]
//   ], pathOptions);


// // Chita -> Harbin -> Beijing
// var pathOptions = {
//   color: 'blue',
//   weight: 3
// }

// var LineCHB = L.curve(
//   [
//     'M', pChita,
//     'Q', [45.75978595038456,138.2],
// 	[39.90208233734751,116.4215965127216]
//   ], pathOptions);

// // Beijing -> Schiphol
// var latlngs = [];

// var latlng1 = [39.90208233734751,116.4215965127216],
//   latlng2 = [52.308039, 4.762198];

// var offsetX = latlng2[1] - latlng1[1],
//   offsetY = latlng2[0] - latlng1[0];

// var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
//   theta = Math.atan2(offsetY, offsetX);

// var thetaOffset = (3.14 / 10);

// var r2 = (r / 2) / (Math.cos(thetaOffset)),
//   theta2 = theta + thetaOffset;

// var midpointX = (r2 * Math.cos(theta2)) + latlng1[1],
//   midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

// var midpointLatLng = [midpointY, midpointX];

// latlngs.push(latlng1, midpointLatLng, latlng2);

// var pathOptions = {
//   color: 'blue',
//   dashArray: "30 10",
//   weight: 3
// }

// var LineBS = L.curve(
//   [
//     'M', latlng1,
//     'Q', midpointLatLng,
//     latlng2
//   ], pathOptions);

// // Ulan-Ude -> Chita
// var latlngs = [
// 	pUlanUde,
// 	pChita,
// ];
// var LineUC = L.polyline(latlngs, {color: 'blue'});

// // Chita -> Takhtamygda -> Khabarovsk
// var pathOptions = {
//   color: 'blue',
//   weight: 3
// }

// var LineCTK = L.curve(
//   [
//     'M', pChita,
//     'Q', [57,123.609],
// 	pKhabarovsk,
//   ], pathOptions);

// // Khabarovsk -> Vladivostok
// var pathOptions = {
//   color: 'blue',
//   weight: 3
// }

// var LineKV = L.curve(
//   [
//     'M', pKhabarovsk,
//     'Q', [46.005547,138],
// 	[43.11161047086922,131.88140754402076],
//   ], pathOptions);

// // Vladivostok -> Donghae
// var latlngs = [
// 	mVladivostok.getLatLng(),
// 	mDonghae.getLatLng()
// ];
// var LineVD = L.polyline(latlngs, {color: 'blue', dashArray: "30 10"});

// // Donghae -> Seoul
// var latlngs = [
// 	mDonghae.getLatLng(),
// 	mSeoul.getLatLng()
// ];
// var LineDS = L.polyline(latlngs, {color: 'blue'});

// // Seoul AP -> Schiphol
// var latlngs = [];

// var latlng1 = [37.5590275,126.7932985],
//   latlng2 = [52.308039, 4.762198];

// var offsetX = latlng2[1] - latlng1[1],
//   offsetY = latlng2[0] - latlng1[0];

// var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
//   theta = Math.atan2(offsetY, offsetX);

// var thetaOffset = (3.14 / 10);

// var r2 = (r / 2) / (Math.cos(thetaOffset)),
//   theta2 = theta + thetaOffset;

// var midpointX = (r2 * Math.cos(theta2)) + latlng1[1],
//   midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

// var midpointLatLng = [midpointY, midpointX];

// latlngs.push(latlng1, midpointLatLng, latlng2);

// var pathOptions = {
//   color: 'blue',
//   dashArray: "30 10",
//   weight: 3
// }

// var LineSS = L.curve(
//   [
//     'M', latlng1,
//     'Q', midpointLatLng,
//     latlng2
//   ], pathOptions);
  
// // Donghae -> Sakai-Minato
// var latlngs = [
// 	mDonghae.getLatLng(),
// 	mSakaiminato.getLatLng()
// ];
// var LineDSM = L.polyline(latlngs, {color: 'blue', dashArray: "30 10"});

// // Sakai-Minato -> Kyoto
// var latlngs = [
// 	mSakaiminato.getLatLng(),
// 	mKyoto.getLatLng()
// ];
// var LineSMK = L.polyline(latlngs, {color: 'blue'});

// // Osaka KIX -> Schiphol
// var latlngs = [];

// var latlng1 = [34.4342045,135.222523],
//   latlng2 = [52.308039, 4.762198];

// var offsetX = latlng2[1] - latlng1[1],
//   offsetY = latlng2[0] - latlng1[0];

// var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
//   theta = Math.atan2(offsetY, offsetX);

// var thetaOffset = (3.14 / 10);

// var r2 = (r / 2) / (Math.cos(thetaOffset)),
//   theta2 = theta + thetaOffset;

// var midpointX = (r2 * Math.cos(theta2)) + latlng1[1],
//   midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

// var midpointLatLng = [midpointY, midpointX];

// latlngs.push(latlng1, midpointLatLng, latlng2);

// var pathOptions = {
//   color: 'blue',
//   dashArray: "30 10",
//   weight: 3
// }

// var LineOS = L.curve(
//   [
//     'M', latlng1,
//     'Q', midpointLatLng,
//     latlng2
//   ], pathOptions);

// // Layers
// var transMO = L.layerGroup([mSchiphol, mPulkovo, mMoskovskiy, mYaroslavsky, mBeijing, LineSP, LineML, LineYU, LineUB, LineBS]);
// var transMA = L.layerGroup([mSchiphol, mPulkovo, mMoskovskiy, mYaroslavsky, mBeijing, LineSP, LineML, LineYU, LineUC,LineCHB, LineBS]);
// var transSK = L.layerGroup([mSchiphol, mPulkovo, mMoskovskiy, mYaroslavsky, mVladivostok, mDonghae, mSeoul, mSeoulAP, LineSP, LineML, LineYU, LineUC, LineCTK, LineKV, LineVD, LineDS, LineSS]);
// var transSJ = L.layerGroup([mSchiphol, mPulkovo, mMoskovskiy, mYaroslavsky, mDonghae, mSakaiminato, mKyoto, mOsaka, LineSP, LineML, LineYU, LineUC, LineCTK, LineKV, LineVD, LineDSM, LineSMK, LineOS]);


// var overlayMaps = {
// 	"Trans-Mongolian": transMO,
// 	 "Trans-Manchurian": transMA,
// 	 "Trans-Siberian Korea": transSK,
// 	 "Trans-Siberian Japan": transSJ
// };

// L.control.layers(null,overlayMaps).addTo(map);
