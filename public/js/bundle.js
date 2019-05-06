/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/fonts.js":
/*!********************************!*\
  !*** ./src/constants/fonts.js ***!
  \********************************/
/*! exports provided: FONTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
var FONTS = ["Furore.otf", "GardensC.otf", "GoodVibesCyr.ttf", "Baron Neue.otf", "Philosopher-Regular.ttf", "Accuratist.otf", "Hagin Caps Medium.otf", "Fregat_Bold.otf", "Baris_Cerin.ttf", "Metropolis 1920.otf", "DisneyPark.ttf", "GetVoIP_Grotesque.ttf", "Hitch-hike.otf", "Federico.otf", "BERNIER.ttf", "Constantine.ttf", "Aire_Bold_Std.otf", "Bicubik_Central Europe.ttf", "Julia_Krysanova_Pharmadin-CondensedLight.otf", "Prosto.ttf", "firasans-heavy.ttf", "gooddog.ttf", "Hangyaboly.ttf", "FaraoBlackOT.otf", "Appetite.ttf", "Bradobrei.ttf", "AA_Higherup.ttf", "Gagarin_Star_Mix_Cyrillic_Regular.ttf", "Goudy_Trajan_Regular_2.otf", "bardi.ttf", "Esqadero FF CY 4F-Regular.otf", "Code Pro Bold LC.otf", "Colo_Pro_Black.otf", "FiraSans-Bold.ttf", "Geisha.ttf", "PFDinDisplayPro-Med.ttf", "CoreMellow-Medium.otf", "Code Pro.otf", "Bickham Script Two.ttf", "Inky.ttf", "FrutigerNeueLTW1G-Black.otf", "FarreronsSerifLight.otf", "beer money.ttf", "Rex Light.otf", "Idealist-Light.otf", "FedraSansPro Book.otf", "Days Sans Black.otf", "floydc.ttf", "Alexandra Zeferino Three.ttf", "JazzBall-Bold.ttf", "FedraSansPro Bold.otf", "CoreRhino75Heavy.otf", "Docker_One.ttf", "Iwona-Regular.ttf", "Gabriela-Regular.ttf", "FrutigerNeueLTW1G-CnBlk.otf", "Fregat.otf", "acquestscript.ttf", "Goedemorgen_-Luc_as.ttf", "Champagne_amp_amp_Limousines.ttf", "cheshirskiy_cat.ttf", "Flow_B.otf", "FedraSerifPro A Bold.otf", "GUERRILLA-Normal.otf", "Azoft Sans.otf", "BravoRG.otf", "auricom_regular.ttf", "Chunkfive_Ex.ttf", "Chupada Bold.otf", "Amazing Grotesk Book.otf", "Firenight-Regular.ttf", "aantiquetrady.ttf", "Intro_Inline.ttf", "Ekaterina Velikaya Two.ttf", "Airport.otf", "Debby.ttf", "Gputeks-Bold.ttf", "hermes_normal.ttf", "PlayfairDisplay-BlackItalic.ttf", "a_font_with_serifs.ttf", "Archive.otf", "Curely Regular.ttf", "FESTUS__.TTF", "JKB75.TTF", "NexaScript-Free.otf", "Frenchpress freefont.otf", "Favorit.ttf", "CHOPIN.ttf", "Chift Text Regular.otf", "Firenight-Regular.otf", "Bender-Bold.ttf", "BistroC.ttf", "agcoopercyr_roman.ttf", "Bubbleboddy Neue-trial.ttf", "Angry_Birds_Rus.ttf", "Ardeco-webfont.ttf", "Heather Script One.ttf", "AGCENR.TTF", "BravoSCT.otf", "Brusher.ttf", "Hot Russian Pancakes - Ivan.otf", "GreDisNarPro Regular.otf", "Appetite_New.otf", "Gora-Free.ttf", "Champagne_amp_amp_Limousines_Bold.ttf", "HuxleyRough_bold.ttf", "auricom_filled.ttf", "AndrijType - ZionTrainProStencil-Demibold.otf", "ALSDulsinea.otf", "Campanella.ttf", "AppetiteRounded.otf", "Azoft Sans-Bold.otf", "GRINYA.TTF", "Daria_Brajenko_Bradobrei.otf", "FontinSans_Cyrillic_B_46b.otf", "Forum-Regular.ttf", "Alexandra Zeferino One.ttf", "Jamaistevie.ttf", "CASLON~4.TTF", "PROXIMANOVA-BLACK.OTF", "BookmanC-Demi.otf", "Alexandra Script.ttf", "AA-Haymaker.ttf", "BIP.ttf", "Dewberry bold.ttf", "Five Minutes.otf", "Boomboom.ttf", "GothaProReg.otf", "Sergey Oleynik - Mateur.ttf", "Intruder.ttf", "fRPhO9gY.ttf", "GothaProBla.otf", "GreDisNarPro Light.otf", "Esenin script Two.ttf", "Glen Jan - Room-Bold.otf", "41413.ttf", "Heuristica-Regular.otf", "Chocogirl.ttf", "Imperial_One.ttf", "alice.ttf", "Futura PT Extra Bold.otf", "Aero Matics Stencil Regular.ttf", "Annabelle.ttf", "KankinRegular.otf", "Bankir-Retro.ttf", "Bickham Script One.ttf", "Baron Neue Black.otf", "Geometria-Heavy.otf", "Dobrozrachniy.ttf", "BanderaPro.otf", "Aver.ttf", "Copyist.ttf", "GenplanFree-Inline.otf", "Junegull.ttf", "Chift Display Regular.otf", "FTY_Garishing_Worse_NCV.ttf", "FreeSet Regular.ttf", "a_AlgeriusBlw Regular.ttf", "PFDinDisplayPro-Reg.ttf", "CoreRhino35Light.otf", "Fabryka 4F Medium.ttf", "ClearSans-Medium.ttf", "Brioni Text Regular.otf", "HarryP_-_Harry_P_-_Regular (1).ttf", "a_AlternaSw.ttf", "Chift Display Light.otf", "ArnoPro-Display.otf", "PFDinDisplayPro-Light.ttf", "Hattori Hanzo.otf", "harry_plotterctt_1.ttf", "BighausTitulBrk.ttf", "Foo-Regular.ttf", "Glen Jan - Room-Thin.otf", "gost_2_304-81_type.ttf", "Imperial Web.ttf", "black.otf", "Eimantas - Neris Black.otf", "Century Schoolbook.otf", "Cambria.ttf", "Andantino script.ttf", "AleksandraC_vintage.otf", "CoreRhino65Bold.otf", "Hagin Caps Thin.otf", "HMN75.otf", "dseraser2.ttf", "GothaProNarMed.otf", "Derby Regular.Ttf", "FuturaNewBold.otf", "Esenin script One.ttf", "Days.otf", "dearjoe.ttf", "CoreRhino45Regular.otf", "Brava.ttf", "Barkentina.ttf", "FrutigerNeueLTW1G-CnBold.otf", "HypatiaSansPro-Regular.otf", "AGMELR.TTF", "GothaProLig.otf", "Geometria-Bold.otf", "DECOR.TTF", "Freeride.otf", "BanderaPro-Bold.otf", "INFORMB.TTF", "EtelkaTextBold.otf", "EtelkaMediumBold.otf", "HypatiaSansPro-Black.otf", "FuturaNewExtraBold.otf", "EtelkaBoldPro.otf", "Ekibastuz_Light.otf", "Heather Script Two.ttf", "Ariston.ttf", "FrutigerNeueLTW1G-Regular.otf", "Eirik Raude.ttf", "Brioni Text Light.otf", "JIKHAREV.TTF", "Akrobat-Regular.otf", "DECORB.TTF", "Dited.otf", "FRAMDCN.TTF", "HouschkaPro-ExtraBold.otf", "DS-BroadBrush.ttf", "PFSquareSansPro-XBlack.ttf", "DarkEuphorigenic.ttf", "Ceremonious Three.ttf", "EtelkaMedium.otf", "Dewberry regular.ttf", "BlackGroteskC.otf", "hogarth script.ttf", "Insektofobiya.otf", "Glober Bold Free.otf", "FrutigerNeueLTW1G-Book.otf", "DS Rabbit Medium.ttf", "Eimantas - Neris SemiBold.otf", "Gagalin-Regular.ttf", "AdLib_Win95BT.ttf", "bold.otf", "Catenary-Stamp.ttf", "Attentica 4F UltraLight.ttf", "Futura PT Book.otf", "GretaDisplayPro Light.otf", "KALIAKRA.TTF", "Chickpeas.ttf", "BebasNeue Regular.otf", "Futura PT Light.otf", "FREH.TTF", "GretaDisplayPro Regular.otf", "Amazonica.ttf", "ArnoPro-Caption.otf", "DOLLAR.TTF", "Futura PT Bold.otf", "arab3end.ttf", "CALIGRAP.TTF", "Boyarsky Bold Italic.Ttf", "ElektraLightBold.otf", "CoreRhino55Medium.otf", "Kaligrafica.ttf", "Code Pro Black.otf", "Doux.ttf", "Aprior_Normal.ttf", "DigitalStripCyrillic.ttf", "EPSIL_C.TTF", "CoreRhino85Black.otf", "Bitter-Bold.otf", "Intro-Black.ttf", "PFDinDisplayPro-Black.ttf", "BTS55__C.TTF", "brushscript.ttf", "ChinaCyr.ttf", "Arsenal-Regular.otf", "Bully.otf", "2D Typo - DepotTrapharet2D.otf", "Hortensia.ttf", "Argocksaz_viper78.ttf", "Bizon.ttf", "CoreMellow-ExtraBold.otf", "Dita-Sweet.ttf", "HypatiaSansPro-Bold.otf", "HMN55.otf", "Doubletwo Studios - XXIICentarRegular.otf", "Deftone.ttf", "foo.otf", "DEVROYUN.ttf", "PFSquareSansPro-Light.ttf", "FuturaNewBook.otf", "HelveticaNeueCyr-Roman.otf", "Geometria-Medium.otf", "IRINA.TTF", "caberne.ttf", "Juliasys - Mir-Medium.otf", "Adelle Cyrillic Regular.ttf", "FontinSans_Cyrillic_R_46b.otf", "Flow.otf", "Globus.ttf", "Dan.otf", "GRUNGE.TTF", "Alexandra Zeferino Two.ttf", "Akrobat-Bold.otf", "burlak_.ttf", "Cansellarist.ttf", "JKB35.TTF", "Heinrich Text.ttf", "Flash.ttf", "GS_Semibold.ttf", "Coronet.ttf", "K141.otf", "Ceremonious One.ttf", "Eleventh-Square.otf", "Connetable.ttf", "Agatha-Modern.ttf", "Calligraphia Two.ttf", "FLOWERS.TTF", "Heinrich Script.ttf", "Decor Italic_cyr.Ttf", "Eimantas - Neris Light.otf", "English Script.TTF", "hauptbahnhof.ttf", "Gregor_reg_v20-06-2013.otf", "BlissPro-Bold.otf", "Artemon.ttf", "Eimantas - Neris Thin.otf", "evensong hollow.ttf", "ArnoPro-Regular.otf", "Calligraphia One.ttf", "Chift Text Light.otf", "Ekibastuz_Regular.otf", "BBrick.ttf", "dsnote.ttf", "EspumaPro-Regular.otf", "Chupada Hair.otf", "Chupada Thin.otf", "BravoSC.otf", "Corrida Cyrillic.Ttf", "DaxlinePro-Regular_13131.ttf", "FrutigerNeueLTW1G-Bold.otf", "Friends_by_Angry.ttf", "Casper Bold.ttf", "Brownfox - Geometria Light.otf", "BadScript-Regular.ttf", "Bello_Pro.otf", "EtelkaRegPro.otf", "Century Schoolbook Bold.otf", "Arkhive.ttf", "kanyon-regular.ttf", "DS Note.ttf", "Aver Bold.ttf", "Evolutionfonts - Dimitrina.otf", "Hrom.ttf", "Andika-R.ttf", "CoreMellow-CnExtraBold.otf", "PFSquareSansPro-Regular.ttf", "ClearSans-Bold.ttf", "InformaPro-Bold.otf", "DaxlinePro-Black_13126.ttf", "kanyon-light.ttf", "Ekibastuz_Bold.otf", "DaxlinePro-Medium_13130.ttf", "Akrobat-SemiBold.otf", "ALS_GrossKunst_display.otf", "amonumentotitul_bold.ttf", "BTS75__C.TTF", "agsouvenir_regular.ttf", "Futura PT Cond Bold.otf", "Galaktika.ttf", "Hot Russian Pancakes - Juan.otf", "Argocksaz Bold_viper78.ttf", "Glober Thin Free.otf", "FUTUR02.ttf", "HouschkaPro-Medium.otf", "epson1.ttf", "FuturaNewCondBook.otf", "BKHandyBoldCyr.ttf", "London.otf", "EtelkaMonoBold.otf", "Futura PT Cond Extra Bold.otf", "Ekibastuz_Black.otf", "DINPro-Bold.ttf", "Cream&Sugar.ttf", "EtelkaLight.otf", "EtelkaText.otf", "HouschkaPro-DemiBold.otf", "CYRBASH.TTF", "Jean-Jacques Morello - GrumpfhRegular.otf", "CyrillicChancellor.Ttf", "AleksandraC_regular.otf", "Zantroke-forMac.otf", "DizGu7zO.ttf", "FuturaNewCondBold.otf", "AnonymousPro-Regular.ttf", "FrutigerNeueLTW1G-CnBook.otf", "Kapnkin.otf", "Bitter-Regular.otf", "DS-Rabbit.ttf", "Gloria.TTF", "Discipuli Britannica Bold.ttf", "Decorlz.ttf", "Asessor.ttf", "ASTRA.TTF", "Edisson.ttf", "Arctika.ttf", "paranoia_by_drako6a-d4trnke.ttf", "amsterdam.ttf", "GOGOL.otf", "HM_Jaymse.ttf", "Kaori.otf", "Adine Kirnberg.ttf", "Dobrozrachniy-Regular.ttf", "20db.otf", "Adventure.ttf", "cafV_amp_amp_brewery.ttf", "Akrobat-Black.otf", "Captcha code.otf", "Ekaterina Velikaya One.ttf", "BlissPro-Heavy.otf", "Calligraph Regular.Ttf", "GS_Normal.ttf", "DCR____C.TTF", "Brioni Text Bold.otf", "batik_deco.ttf", "Deutsch_Gothic.ttf", "BanderaProHeavy.otf", "HARDLIFE.TTF", "Bristol.otf", "i_fink_u_freeky.ttf", "Discipuli Britannica.ttf", "Bardelin.otf", "GrandNover3.otf", "BTS35__C.TTF", "Hardpixel.OTF", "DINPro-Medium.ttf", "Isabella-Decor.ttf", "ElektraMedium.otf", "ARBAT-BO.TTF", "Ceremonious Two.ttf", "Chupada Demibold.otf", "Anna_Vasilieva_Boomboom.otf", "BukhariScript-Regular.otf", "Europe Normal.ttf", "Sports World-Regular.ttf", "ElektraLight.otf", "Eugeny_Filippov_JohnDaniels.otf", "Corrida Bold.Ttf", "PFDinDisplayPro-Bold.ttf", "DaxlinePro-Bold_13127.ttf", "Bender-Light.ttf", "Casper.ttf", "CyrillicRibbon.Ttf"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_fonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/fonts */ "./src/constants/fonts.js");

var exceptions = [];

var _loop = function _loop(i) {
  var font = _constants_fonts__WEBPACK_IMPORTED_MODULE_0__["FONTS"][i].split('.');
  var fontFace = {
    family: font[0],
    extension: font[1],
    url: "https://turbologo.com/fonts/app/".concat(_constants_fonts__WEBPACK_IMPORTED_MODULE_0__["FONTS"][i])
  };
  var newFont = new FontFace(fontFace.family, "url('".concat(fontFace.url, "')"));
  newFont.load().then(function () {}).catch(function () {
    return exceptions.push(fontFace);
  });
};

for (var i in _constants_fonts__WEBPACK_IMPORTED_MODULE_0__["FONTS"]) {
  _loop(i);
}

;

document.onclick = function () {
  return console.log(exceptions);
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map