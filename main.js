/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateBio": () => (/* binding */ generateBio)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/content.js");



//Generate bio details from content bio object
const generateBio = (e) => {
    e.preventDefault();
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    (0,_components__WEBPACK_IMPORTED_MODULE_0__.bioHeader)();
    (0,_components__WEBPACK_IMPORTED_MODULE_0__.bioInfo)();

    const bioTools = document.createElement('div');
    const toolsTitle = document.createElement('h2');
    bioTools.appendChild(toolsTitle);
    toolsTitle.textContent = 'Tools';
    const toolsList = document.createElement('ul');
    toolsList.classList.add('bio-list');
    for (const tool of _content__WEBPACK_IMPORTED_MODULE_1__.bio.tools) {
        const toolItem = document.createElement('li');
        toolItem.textContent = tool;
        toolsList.appendChild(toolItem);
    };
    bioTools.appendChild(toolsList);
    content.appendChild(bioTools);

    /* const resume = document.createElement('div');
    const resumeLink = document.createElement('a');
    resumeLink.classList.add('btn-resume');
    resumeLink.textContent = 'View Resume';
    resumeLink.href = bio.resume;
    resume.appendChild(resumeLink);
    content.appendChild(resume); */
};



/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bioHeader": () => (/* binding */ bioHeader),
/* harmony export */   "bioInfo": () => (/* binding */ bioInfo)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");


function bioHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.classList.add('bio-header');
    const name = document.createElement('h1');
    name.textContent = _content__WEBPACK_IMPORTED_MODULE_0__.bio.myName;
    header.appendChild(name);
    const title = document.createElement('h2');
    title.textContent = _content__WEBPACK_IMPORTED_MODULE_0__.bio.jobTitle;
    header.appendChild(title);
    content.appendChild(header);
};

function bioInfo() {
    const content = document.getElementById('content');
    const info = document.createElement('div');
    info.classList.add('bio-info');
    const headshot = document.createElement('img');
    headshot.src = _content__WEBPACK_IMPORTED_MODULE_0__.bio.headshot;
    headshot.alt = _content__WEBPACK_IMPORTED_MODULE_0__.bio.headshotAlt;
    info.appendChild(headshot);
    const description = document.createElement('div');
    description.textContent = _content__WEBPACK_IMPORTED_MODULE_0__.bio.description;
    info.appendChild(description);
    content.appendChild(info);
}



/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bio": () => (/* binding */ bio),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _SUScreenshot_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SUScreenshot.png */ "./src/SUScreenshot.png");
/* harmony import */ var _HotalingScreenshot_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HotalingScreenshot.png */ "./src/HotalingScreenshot.png");
/* harmony import */ var _WeatherPlaceholder_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeatherPlaceholder.jpg */ "./src/WeatherPlaceholder.jpg");
/* harmony import */ var _BertHeadshot_JPEG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BertHeadshot.JPEG */ "./src/BertHeadshot.JPEG");



//import BertResume from './CherryResume2023.pdf';


//Store portfolio item content as array of objects to access from projects and home
const projects = [
    { 
        title: 'Strive & Uplift',
        titleLink: 'https://www.striveanduplift.com/',
        screenshot: _SUScreenshot_png__WEBPACK_IMPORTED_MODULE_0__,
        screenshotAlt: 'Screenshot of the Strive & Uplift website, in bright blue, orange, and yellow color scheme' +
            ' features a top right menu and central logo with friendly "Explore our Services" button.',
        summary: 'Ground up build of webpage for two main client groups. First, for prospective members to find services that fit their needs.' +
            ' Then, for active members to enroll in classes and/or access virtual content.',
        audience: 'There are two typical client types for Strive & Uplift -- someone looking for a community gym space,' +
            ' and someone looking for online programming to train for ultimate frisbee.' +
            ' Both groups tend to be interested in a queer-friendly and body-positive training environment.' +
            ' Clients range in age from youth to seniors; some clients are not tech-savvy, while others work in tech themselves.',
        details: 'During the 2020 redesign of the website,' +
            ' I took into consideration coach feedback on how they wanted themselves and their services to be represented,' +
            ' as decision making trends toward collective processes.' +
            ' Accessbility is a core value for Strive & Uplift, and this extends to the online space.' +
            ' The color themes were chosen based on the established Strive & Uplift logo,' +
            ' conforming with WCAG AAA guidelines for text and interface readability, and A/B tested with the coaches.' +
            ' Mobile useability is a factor, with screen reader friendly options for pricing tables and zoomable images.' +
            ' For this site, I built a custom Wordpress theme and accompanying author guides for coaches.' +
            ' Direct client feedback and trends in frequently asked questions are taken into consideration for website improvements.' +
            ' Since the rebuild, 25% of new clients say they learned about the business from the website or a Google search.' +
            ' The services page is divided into sections based on what prospective clients are looking for, with subpages for more specific offerings.' +
            ' The class and gym access schedule for the community space are easy to locate for prospective and current clients,' +
            ' featured both on the front page of the site and as a screen reader friendly schedule with sign up options linked in the top navigation menu.',
    }, { 
        title: 'Hotaling Photo',
        titleLink: 'https://bertcherry.github.io/hotaling-photo-landing-page/',
        screenshot: _HotalingScreenshot_png__WEBPACK_IMPORTED_MODULE_1__,
        screenshotAlt: 'Screenshot of the Hotaling Photo landing page, featuring a slider of images in the main section,' +
        ' followed by four photos captioned with the photographer\'s primary interests.',
        summary: 'Landing page for a photographer\'s portfolio site who is interested in expanding further into sports photography and team studio media.' +
            ' The page integrates with a photo hosting service for direct sales to clients or to view additional galleries of work.',
        audience: 'The audience for this site is primarily on sports team media managers looking for action and studio photography for marketing materials.' +
            ' Additional clients may include individual athletes and fitness models, as well as people interested in purchasing prints of photos.',
        details: 'The design was created in collaboration with the photographer, with the intent to integrate with their current photo hosting site.' +
            ' We first reviewed other portfolios pages of photographers the client admires.' +
            ' Those portfolios used unobtrusive design elements and greyscale color palettes to let the images speak for themselves.' +
            ' A slideshow of featured images, galleries on specific subject matter,' +
            ' and an easy to locate contact button are the most important elements to connect with clients.',
    }, { 
        title: 'School Sports Weather App',
        titleLink: undefined,
        screenshot: _WeatherPlaceholder_jpg__WEBPACK_IMPORTED_MODULE_2__,
        screenshotAlt: 'Initial sketch of weather app idea',
        summary: 'This upcoming project plan will leverage WeatherAPI to guide school students who participate in after school sports' +
            ' on what they\'ll need to pack for the day.',
        audience: 'The primary demographic is school students who participate in after school sports, especially outdoor sports.' +
            ' The survey plan focuses on high schoolers, though further surveys could find ways to increase useability for a younger audience.',
        details: 'My plan for this project is to begin with a general survey for 10-15 students asking about their use of their phone\'s weather app.' +
            ' I\'ll also ask about the basic features proposed for this app, and what elements would feel helpful to them on a 5-point scale.' +
            ' I will then integrate student feedback with universal design principles for accessibility to build the weather app.' +
            ' Once the app is built, I will return to a smaller subset of the original group to test the app and provide' +
            ' initial impressions from their first user experience in getting the app set up.' +
            ' I will then use their feedback to make improvements and adjustments to the design and features.',
    },

];


//Store bio content as object to access from home and about
const bio = {
    myName: 'Bert Cherry',
    jobTitle: 'UX Developer',
    headshot: _BertHeadshot_JPEG__WEBPACK_IMPORTED_MODULE_3__,
    headshotAlt: 'Bert, a white femme-presenting person smiles in font of a blossoming cherry tree.',
    description: 'Creative and analytical thinker motivated to keep learning and building.' +
    ' Former science educator who applies concepts of inquiry and universal design to the UX and web development space.',
    tools: ['HTML', 'CSS', 'Javascript', 'Webpack', 'APIs', 'Photoshop/Gimp', 'Illustrator/Inkscape'],
    //resume: BertResume, //Resume file as pdf
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateHome": () => (/* binding */ generateHome)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");




//Homepage generation script as module pulling from content for bio and projects overview
function generateHome() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    
    (0,_components__WEBPACK_IMPORTED_MODULE_0__.bioHeader)();
    (0,_components__WEBPACK_IMPORTED_MODULE_0__.bioInfo)();

    const projectsOverview = document.createElement('div');
    projectsOverview.classList.add('projects-overview');
    const projectsTitle = document.createElement('h2');
    projectsTitle.textContent = 'Projects';
    projectsOverview.appendChild(projectsTitle);
    _content__WEBPACK_IMPORTED_MODULE_1__.projects.forEach(project => {
        const projectId = _content__WEBPACK_IMPORTED_MODULE_1__.projects.indexOf(project);
        const projectDiv = document.createElement('div');

        const screenshot = document.createElement('img');
        screenshot.src = project.screenshot;
        screenshot.alt = project.screenshotAlt;
        projectDiv.appendChild(screenshot);

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project-info');
        const title = document.createElement('h3');
        const titleLink = document.createElement('a');
        titleLink.id = projectId;
        titleLink.textContent = project.title;
        titleLink.addEventListener('click', _projects__WEBPACK_IMPORTED_MODULE_2__.projectDetails);
        title.appendChild(titleLink);
        projectInfo.appendChild(title);
        const projectSummary = document.createElement('div');
        projectSummary.textContent = project.summary;
        projectInfo.appendChild(projectSummary);
        projectDiv.appendChild(projectInfo);

        projectsOverview.appendChild(projectDiv);
    });
    content.appendChild(projectsOverview);
};



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectDetails": () => (/* binding */ projectDetails)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");


//Generate project pages from project content in content.js
function projectDetails(e) {
    const projectId = e.currentTarget.id;
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    const project = _content__WEBPACK_IMPORTED_MODULE_0__.projects.at(projectId);
    
    const title = document.createElement('h1');
    title.classList.add('project-title');
    if (project.titleLink != undefined) {
        const titleLink = document.createElement('a');
        titleLink.href = project.titleLink;
        titleLink.textContent = project.title;
        title.appendChild(titleLink);
    } else {
        title.textContent = project.title;
    }
    content.appendChild(title);

    const screenshot = document.createElement('img');
    screenshot.classList.add('project-screenshot');
    screenshot.src = project.screenshot;
    screenshot.alt = project.screenshotAlt;
    content.appendChild(screenshot);

    const summary = document.createElement('div');
    summary.classList.add('project-section');
    summary.classList.add('project-summary');
    const summaryTitle = document.createElement('h2');
    summaryTitle.textContent = 'Project Summary';
    summary.appendChild(summaryTitle);
    const projectSummary = document.createElement('div');
    projectSummary.textContent = project.summary;
    summary.appendChild(projectSummary);
    content.appendChild(summary);

    const audience = document.createElement('div');
    audience.classList.add('project-section');
    audience.classList.add('project-audience');
    const audienceTitle = document.createElement('h2');
    audienceTitle.textContent = 'Audience';
    audience.appendChild(audienceTitle);
    const projectAudience = document.createElement('div');
    projectAudience.textContent = project.audience;
    audience.appendChild(projectAudience);
    content.appendChild(audience);

    const details = document.createElement('div');
    details.classList.add('project-section');
    details.classList.add('project-details');
    const detailsTitle = document.createElement('h2');
    detailsTitle.textContent = 'Details';
    details.appendChild(detailsTitle);
    const projectDetails = document.createElement('div');
    projectDetails.textContent = project.details;
    details.appendChild(projectDetails);
    content.appendChild(details);
};



/***/ }),

/***/ "./src/BertHeadshot.JPEG":
/*!*******************************!*\
  !*** ./src/BertHeadshot.JPEG ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb2614d20efcc5982924.JPEG";

/***/ }),

/***/ "./src/HotalingScreenshot.png":
/*!************************************!*\
  !*** ./src/HotalingScreenshot.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f094ed77261571c4b19.png";

/***/ }),

/***/ "./src/SUScreenshot.png":
/*!******************************!*\
  !*** ./src/SUScreenshot.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "faf067942bd189c9f913.png";

/***/ }),

/***/ "./src/WeatherPlaceholder.jpg":
/*!************************************!*\
  !*** ./src/WeatherPlaceholder.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acd417f25f16cfc72725.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



window.onload = () => {
    const navHome = document.getElementById('nav-home');
    navHome.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__.generateHome);

    const navAbout = document.getElementById('nav-about');
    navAbout.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_0__.generateBio);

    (0,_home__WEBPACK_IMPORTED_MODULE_1__.generateHome)();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQnNDO0FBQ0E7O0FBRXRDO0FBQ0E7QUFDQSxzQ0FBc0MsK0NBQVk7O0FBRWxEO0FBQ0EsdUNBQXVDLCtDQUFXOztBQUVsRCxJQUFJLG1EQUFZO0FBQ2hCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmlvSGVhZGVyLCBiaW9JbmZvIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IGJpbyB9IGZyb20gJy4vY29udGVudCc7XG5cbi8vR2VuZXJhdGUgYmlvIGRldGFpbHMgZnJvbSBjb250ZW50IGJpbyBvYmplY3RcbmNvbnN0IGdlbmVyYXRlQmlvID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBiaW9IZWFkZXIoKTtcbiAgICBiaW9JbmZvKCk7XG5cbiAgICBjb25zdCBiaW9Ub29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvb2xzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGJpb1Rvb2xzLmFwcGVuZENoaWxkKHRvb2xzVGl0bGUpO1xuICAgIHRvb2xzVGl0bGUudGV4dENvbnRlbnQgPSAnVG9vbHMnO1xuICAgIGNvbnN0IHRvb2xzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdG9vbHNMaXN0LmNsYXNzTGlzdC5hZGQoJ2Jpby1saXN0Jyk7XG4gICAgZm9yIChjb25zdCB0b29sIG9mIGJpby50b29scykge1xuICAgICAgICBjb25zdCB0b29sSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRvb2xJdGVtLnRleHRDb250ZW50ID0gdG9vbDtcbiAgICAgICAgdG9vbHNMaXN0LmFwcGVuZENoaWxkKHRvb2xJdGVtKTtcbiAgICB9O1xuICAgIGJpb1Rvb2xzLmFwcGVuZENoaWxkKHRvb2xzTGlzdCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiaW9Ub29scyk7XG5cbiAgICAvKiBjb25zdCByZXN1bWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByZXN1bWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHJlc3VtZUxpbmsuY2xhc3NMaXN0LmFkZCgnYnRuLXJlc3VtZScpO1xuICAgIHJlc3VtZUxpbmsudGV4dENvbnRlbnQgPSAnVmlldyBSZXN1bWUnO1xuICAgIHJlc3VtZUxpbmsuaHJlZiA9IGJpby5yZXN1bWU7XG4gICAgcmVzdW1lLmFwcGVuZENoaWxkKHJlc3VtZUxpbmspO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdW1lKTsgKi9cbn07XG5cbmV4cG9ydCB7IGdlbmVyYXRlQmlvIH07IiwiaW1wb3J0IHsgYmlvIH0gZnJvbSAnLi9jb250ZW50JztcblxuZnVuY3Rpb24gYmlvSGVhZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdiaW8taGVhZGVyJyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGJpby5teU5hbWU7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGJpby5qb2JUaXRsZTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn07XG5cbmZ1bmN0aW9uIGJpb0luZm8oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnYmlvLWluZm8nKTtcbiAgICBjb25zdCBoZWFkc2hvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhlYWRzaG90LnNyYyA9IGJpby5oZWFkc2hvdDtcbiAgICBoZWFkc2hvdC5hbHQgPSBiaW8uaGVhZHNob3RBbHQ7XG4gICAgaW5mby5hcHBlbmRDaGlsZChoZWFkc2hvdCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGJpby5kZXNjcmlwdGlvbjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGluZm8pO1xufVxuXG5leHBvcnQgeyBiaW9IZWFkZXIsIGJpb0luZm8gfTsiLCJpbXBvcnQgU1VTY3JlZW5zaG90IGZyb20gJy4vU1VTY3JlZW5zaG90LnBuZyc7XG5pbXBvcnQgSG90YWxpbmdTY3JlZW5zaG90IGZyb20gJy4vSG90YWxpbmdTY3JlZW5zaG90LnBuZyc7XG5pbXBvcnQgV2VhdGhlclNjcmVlbnNob3QgZnJvbSAnLi9XZWF0aGVyUGxhY2Vob2xkZXIuanBnJztcbi8vaW1wb3J0IEJlcnRSZXN1bWUgZnJvbSAnLi9DaGVycnlSZXN1bWUyMDIzLnBkZic7XG5pbXBvcnQgQmVydEhlYWRzaG90IGZyb20gJy4vQmVydEhlYWRzaG90LkpQRUcnO1xuXG4vL1N0b3JlIHBvcnRmb2xpbyBpdGVtIGNvbnRlbnQgYXMgYXJyYXkgb2Ygb2JqZWN0cyB0byBhY2Nlc3MgZnJvbSBwcm9qZWN0cyBhbmQgaG9tZVxuY29uc3QgcHJvamVjdHMgPSBbXG4gICAgeyBcbiAgICAgICAgdGl0bGU6ICdTdHJpdmUgJiBVcGxpZnQnLFxuICAgICAgICB0aXRsZUxpbms6ICdodHRwczovL3d3dy5zdHJpdmVhbmR1cGxpZnQuY29tLycsXG4gICAgICAgIHNjcmVlbnNob3Q6IFNVU2NyZWVuc2hvdCxcbiAgICAgICAgc2NyZWVuc2hvdEFsdDogJ1NjcmVlbnNob3Qgb2YgdGhlIFN0cml2ZSAmIFVwbGlmdCB3ZWJzaXRlLCBpbiBicmlnaHQgYmx1ZSwgb3JhbmdlLCBhbmQgeWVsbG93IGNvbG9yIHNjaGVtZScgK1xuICAgICAgICAgICAgJyBmZWF0dXJlcyBhIHRvcCByaWdodCBtZW51IGFuZCBjZW50cmFsIGxvZ28gd2l0aCBmcmllbmRseSBcIkV4cGxvcmUgb3VyIFNlcnZpY2VzXCIgYnV0dG9uLicsXG4gICAgICAgIHN1bW1hcnk6ICdHcm91bmQgdXAgYnVpbGQgb2Ygd2VicGFnZSBmb3IgdHdvIG1haW4gY2xpZW50IGdyb3Vwcy4gRmlyc3QsIGZvciBwcm9zcGVjdGl2ZSBtZW1iZXJzIHRvIGZpbmQgc2VydmljZXMgdGhhdCBmaXQgdGhlaXIgbmVlZHMuJyArXG4gICAgICAgICAgICAnIFRoZW4sIGZvciBhY3RpdmUgbWVtYmVycyB0byBlbnJvbGwgaW4gY2xhc3NlcyBhbmQvb3IgYWNjZXNzIHZpcnR1YWwgY29udGVudC4nLFxuICAgICAgICBhdWRpZW5jZTogJ1RoZXJlIGFyZSB0d28gdHlwaWNhbCBjbGllbnQgdHlwZXMgZm9yIFN0cml2ZSAmIFVwbGlmdCAtLSBzb21lb25lIGxvb2tpbmcgZm9yIGEgY29tbXVuaXR5IGd5bSBzcGFjZSwnICtcbiAgICAgICAgICAgICcgYW5kIHNvbWVvbmUgbG9va2luZyBmb3Igb25saW5lIHByb2dyYW1taW5nIHRvIHRyYWluIGZvciB1bHRpbWF0ZSBmcmlzYmVlLicgK1xuICAgICAgICAgICAgJyBCb3RoIGdyb3VwcyB0ZW5kIHRvIGJlIGludGVyZXN0ZWQgaW4gYSBxdWVlci1mcmllbmRseSBhbmQgYm9keS1wb3NpdGl2ZSB0cmFpbmluZyBlbnZpcm9ubWVudC4nICtcbiAgICAgICAgICAgICcgQ2xpZW50cyByYW5nZSBpbiBhZ2UgZnJvbSB5b3V0aCB0byBzZW5pb3JzOyBzb21lIGNsaWVudHMgYXJlIG5vdCB0ZWNoLXNhdnZ5LCB3aGlsZSBvdGhlcnMgd29yayBpbiB0ZWNoIHRoZW1zZWx2ZXMuJyxcbiAgICAgICAgZGV0YWlsczogJ0R1cmluZyB0aGUgMjAyMCByZWRlc2lnbiBvZiB0aGUgd2Vic2l0ZSwnICtcbiAgICAgICAgICAgICcgSSB0b29rIGludG8gY29uc2lkZXJhdGlvbiBjb2FjaCBmZWVkYmFjayBvbiBob3cgdGhleSB3YW50ZWQgdGhlbXNlbHZlcyBhbmQgdGhlaXIgc2VydmljZXMgdG8gYmUgcmVwcmVzZW50ZWQsJyArXG4gICAgICAgICAgICAnIGFzIGRlY2lzaW9uIG1ha2luZyB0cmVuZHMgdG93YXJkIGNvbGxlY3RpdmUgcHJvY2Vzc2VzLicgK1xuICAgICAgICAgICAgJyBBY2Nlc3NiaWxpdHkgaXMgYSBjb3JlIHZhbHVlIGZvciBTdHJpdmUgJiBVcGxpZnQsIGFuZCB0aGlzIGV4dGVuZHMgdG8gdGhlIG9ubGluZSBzcGFjZS4nICtcbiAgICAgICAgICAgICcgVGhlIGNvbG9yIHRoZW1lcyB3ZXJlIGNob3NlbiBiYXNlZCBvbiB0aGUgZXN0YWJsaXNoZWQgU3RyaXZlICYgVXBsaWZ0IGxvZ28sJyArXG4gICAgICAgICAgICAnIGNvbmZvcm1pbmcgd2l0aCBXQ0FHIEFBQSBndWlkZWxpbmVzIGZvciB0ZXh0IGFuZCBpbnRlcmZhY2UgcmVhZGFiaWxpdHksIGFuZCBBL0IgdGVzdGVkIHdpdGggdGhlIGNvYWNoZXMuJyArXG4gICAgICAgICAgICAnIE1vYmlsZSB1c2VhYmlsaXR5IGlzIGEgZmFjdG9yLCB3aXRoIHNjcmVlbiByZWFkZXIgZnJpZW5kbHkgb3B0aW9ucyBmb3IgcHJpY2luZyB0YWJsZXMgYW5kIHpvb21hYmxlIGltYWdlcy4nICtcbiAgICAgICAgICAgICcgRm9yIHRoaXMgc2l0ZSwgSSBidWlsdCBhIGN1c3RvbSBXb3JkcHJlc3MgdGhlbWUgYW5kIGFjY29tcGFueWluZyBhdXRob3IgZ3VpZGVzIGZvciBjb2FjaGVzLicgK1xuICAgICAgICAgICAgJyBEaXJlY3QgY2xpZW50IGZlZWRiYWNrIGFuZCB0cmVuZHMgaW4gZnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvbnMgYXJlIHRha2VuIGludG8gY29uc2lkZXJhdGlvbiBmb3Igd2Vic2l0ZSBpbXByb3ZlbWVudHMuJyArXG4gICAgICAgICAgICAnIFNpbmNlIHRoZSByZWJ1aWxkLCAyNSUgb2YgbmV3IGNsaWVudHMgc2F5IHRoZXkgbGVhcm5lZCBhYm91dCB0aGUgYnVzaW5lc3MgZnJvbSB0aGUgd2Vic2l0ZSBvciBhIEdvb2dsZSBzZWFyY2guJyArXG4gICAgICAgICAgICAnIFRoZSBzZXJ2aWNlcyBwYWdlIGlzIGRpdmlkZWQgaW50byBzZWN0aW9ucyBiYXNlZCBvbiB3aGF0IHByb3NwZWN0aXZlIGNsaWVudHMgYXJlIGxvb2tpbmcgZm9yLCB3aXRoIHN1YnBhZ2VzIGZvciBtb3JlIHNwZWNpZmljIG9mZmVyaW5ncy4nICtcbiAgICAgICAgICAgICcgVGhlIGNsYXNzIGFuZCBneW0gYWNjZXNzIHNjaGVkdWxlIGZvciB0aGUgY29tbXVuaXR5IHNwYWNlIGFyZSBlYXN5IHRvIGxvY2F0ZSBmb3IgcHJvc3BlY3RpdmUgYW5kIGN1cnJlbnQgY2xpZW50cywnICtcbiAgICAgICAgICAgICcgZmVhdHVyZWQgYm90aCBvbiB0aGUgZnJvbnQgcGFnZSBvZiB0aGUgc2l0ZSBhbmQgYXMgYSBzY3JlZW4gcmVhZGVyIGZyaWVuZGx5IHNjaGVkdWxlIHdpdGggc2lnbiB1cCBvcHRpb25zIGxpbmtlZCBpbiB0aGUgdG9wIG5hdmlnYXRpb24gbWVudS4nLFxuICAgIH0sIHsgXG4gICAgICAgIHRpdGxlOiAnSG90YWxpbmcgUGhvdG8nLFxuICAgICAgICB0aXRsZUxpbms6ICdodHRwczovL2JlcnRjaGVycnkuZ2l0aHViLmlvL2hvdGFsaW5nLXBob3RvLWxhbmRpbmctcGFnZS8nLFxuICAgICAgICBzY3JlZW5zaG90OiBIb3RhbGluZ1NjcmVlbnNob3QsXG4gICAgICAgIHNjcmVlbnNob3RBbHQ6ICdTY3JlZW5zaG90IG9mIHRoZSBIb3RhbGluZyBQaG90byBsYW5kaW5nIHBhZ2UsIGZlYXR1cmluZyBhIHNsaWRlciBvZiBpbWFnZXMgaW4gdGhlIG1haW4gc2VjdGlvbiwnICtcbiAgICAgICAgJyBmb2xsb3dlZCBieSBmb3VyIHBob3RvcyBjYXB0aW9uZWQgd2l0aCB0aGUgcGhvdG9ncmFwaGVyXFwncyBwcmltYXJ5IGludGVyZXN0cy4nLFxuICAgICAgICBzdW1tYXJ5OiAnTGFuZGluZyBwYWdlIGZvciBhIHBob3RvZ3JhcGhlclxcJ3MgcG9ydGZvbGlvIHNpdGUgd2hvIGlzIGludGVyZXN0ZWQgaW4gZXhwYW5kaW5nIGZ1cnRoZXIgaW50byBzcG9ydHMgcGhvdG9ncmFwaHkgYW5kIHRlYW0gc3R1ZGlvIG1lZGlhLicgK1xuICAgICAgICAgICAgJyBUaGUgcGFnZSBpbnRlZ3JhdGVzIHdpdGggYSBwaG90byBob3N0aW5nIHNlcnZpY2UgZm9yIGRpcmVjdCBzYWxlcyB0byBjbGllbnRzIG9yIHRvIHZpZXcgYWRkaXRpb25hbCBnYWxsZXJpZXMgb2Ygd29yay4nLFxuICAgICAgICBhdWRpZW5jZTogJ1RoZSBhdWRpZW5jZSBmb3IgdGhpcyBzaXRlIGlzIHByaW1hcmlseSBvbiBzcG9ydHMgdGVhbSBtZWRpYSBtYW5hZ2VycyBsb29raW5nIGZvciBhY3Rpb24gYW5kIHN0dWRpbyBwaG90b2dyYXBoeSBmb3IgbWFya2V0aW5nIG1hdGVyaWFscy4nICtcbiAgICAgICAgICAgICcgQWRkaXRpb25hbCBjbGllbnRzIG1heSBpbmNsdWRlIGluZGl2aWR1YWwgYXRobGV0ZXMgYW5kIGZpdG5lc3MgbW9kZWxzLCBhcyB3ZWxsIGFzIHBlb3BsZSBpbnRlcmVzdGVkIGluIHB1cmNoYXNpbmcgcHJpbnRzIG9mIHBob3Rvcy4nLFxuICAgICAgICBkZXRhaWxzOiAnVGhlIGRlc2lnbiB3YXMgY3JlYXRlZCBpbiBjb2xsYWJvcmF0aW9uIHdpdGggdGhlIHBob3RvZ3JhcGhlciwgd2l0aCB0aGUgaW50ZW50IHRvIGludGVncmF0ZSB3aXRoIHRoZWlyIGN1cnJlbnQgcGhvdG8gaG9zdGluZyBzaXRlLicgK1xuICAgICAgICAgICAgJyBXZSBmaXJzdCByZXZpZXdlZCBvdGhlciBwb3J0Zm9saW9zIHBhZ2VzIG9mIHBob3RvZ3JhcGhlcnMgdGhlIGNsaWVudCBhZG1pcmVzLicgK1xuICAgICAgICAgICAgJyBUaG9zZSBwb3J0Zm9saW9zIHVzZWQgdW5vYnRydXNpdmUgZGVzaWduIGVsZW1lbnRzIGFuZCBncmV5c2NhbGUgY29sb3IgcGFsZXR0ZXMgdG8gbGV0IHRoZSBpbWFnZXMgc3BlYWsgZm9yIHRoZW1zZWx2ZXMuJyArXG4gICAgICAgICAgICAnIEEgc2xpZGVzaG93IG9mIGZlYXR1cmVkIGltYWdlcywgZ2FsbGVyaWVzIG9uIHNwZWNpZmljIHN1YmplY3QgbWF0dGVyLCcgK1xuICAgICAgICAgICAgJyBhbmQgYW4gZWFzeSB0byBsb2NhdGUgY29udGFjdCBidXR0b24gYXJlIHRoZSBtb3N0IGltcG9ydGFudCBlbGVtZW50cyB0byBjb25uZWN0IHdpdGggY2xpZW50cy4nLFxuICAgIH0sIHsgXG4gICAgICAgIHRpdGxlOiAnU2Nob29sIFNwb3J0cyBXZWF0aGVyIEFwcCcsXG4gICAgICAgIHRpdGxlTGluazogdW5kZWZpbmVkLFxuICAgICAgICBzY3JlZW5zaG90OiBXZWF0aGVyU2NyZWVuc2hvdCxcbiAgICAgICAgc2NyZWVuc2hvdEFsdDogJ0luaXRpYWwgc2tldGNoIG9mIHdlYXRoZXIgYXBwIGlkZWEnLFxuICAgICAgICBzdW1tYXJ5OiAnVGhpcyB1cGNvbWluZyBwcm9qZWN0IHBsYW4gd2lsbCBsZXZlcmFnZSBXZWF0aGVyQVBJIHRvIGd1aWRlIHNjaG9vbCBzdHVkZW50cyB3aG8gcGFydGljaXBhdGUgaW4gYWZ0ZXIgc2Nob29sIHNwb3J0cycgK1xuICAgICAgICAgICAgJyBvbiB3aGF0IHRoZXlcXCdsbCBuZWVkIHRvIHBhY2sgZm9yIHRoZSBkYXkuJyxcbiAgICAgICAgYXVkaWVuY2U6ICdUaGUgcHJpbWFyeSBkZW1vZ3JhcGhpYyBpcyBzY2hvb2wgc3R1ZGVudHMgd2hvIHBhcnRpY2lwYXRlIGluIGFmdGVyIHNjaG9vbCBzcG9ydHMsIGVzcGVjaWFsbHkgb3V0ZG9vciBzcG9ydHMuJyArXG4gICAgICAgICAgICAnIFRoZSBzdXJ2ZXkgcGxhbiBmb2N1c2VzIG9uIGhpZ2ggc2Nob29sZXJzLCB0aG91Z2ggZnVydGhlciBzdXJ2ZXlzIGNvdWxkIGZpbmQgd2F5cyB0byBpbmNyZWFzZSB1c2VhYmlsaXR5IGZvciBhIHlvdW5nZXIgYXVkaWVuY2UuJyxcbiAgICAgICAgZGV0YWlsczogJ015IHBsYW4gZm9yIHRoaXMgcHJvamVjdCBpcyB0byBiZWdpbiB3aXRoIGEgZ2VuZXJhbCBzdXJ2ZXkgZm9yIDEwLTE1IHN0dWRlbnRzIGFza2luZyBhYm91dCB0aGVpciB1c2Ugb2YgdGhlaXIgcGhvbmVcXCdzIHdlYXRoZXIgYXBwLicgK1xuICAgICAgICAgICAgJyBJXFwnbGwgYWxzbyBhc2sgYWJvdXQgdGhlIGJhc2ljIGZlYXR1cmVzIHByb3Bvc2VkIGZvciB0aGlzIGFwcCwgYW5kIHdoYXQgZWxlbWVudHMgd291bGQgZmVlbCBoZWxwZnVsIHRvIHRoZW0gb24gYSA1LXBvaW50IHNjYWxlLicgK1xuICAgICAgICAgICAgJyBJIHdpbGwgdGhlbiBpbnRlZ3JhdGUgc3R1ZGVudCBmZWVkYmFjayB3aXRoIHVuaXZlcnNhbCBkZXNpZ24gcHJpbmNpcGxlcyBmb3IgYWNjZXNzaWJpbGl0eSB0byBidWlsZCB0aGUgd2VhdGhlciBhcHAuJyArXG4gICAgICAgICAgICAnIE9uY2UgdGhlIGFwcCBpcyBidWlsdCwgSSB3aWxsIHJldHVybiB0byBhIHNtYWxsZXIgc3Vic2V0IG9mIHRoZSBvcmlnaW5hbCBncm91cCB0byB0ZXN0IHRoZSBhcHAgYW5kIHByb3ZpZGUnICtcbiAgICAgICAgICAgICcgaW5pdGlhbCBpbXByZXNzaW9ucyBmcm9tIHRoZWlyIGZpcnN0IHVzZXIgZXhwZXJpZW5jZSBpbiBnZXR0aW5nIHRoZSBhcHAgc2V0IHVwLicgK1xuICAgICAgICAgICAgJyBJIHdpbGwgdGhlbiB1c2UgdGhlaXIgZmVlZGJhY2sgdG8gbWFrZSBpbXByb3ZlbWVudHMgYW5kIGFkanVzdG1lbnRzIHRvIHRoZSBkZXNpZ24gYW5kIGZlYXR1cmVzLicsXG4gICAgfSxcblxuXTtcblxuXG4vL1N0b3JlIGJpbyBjb250ZW50IGFzIG9iamVjdCB0byBhY2Nlc3MgZnJvbSBob21lIGFuZCBhYm91dFxuY29uc3QgYmlvID0ge1xuICAgIG15TmFtZTogJ0JlcnQgQ2hlcnJ5JyxcbiAgICBqb2JUaXRsZTogJ1VYIERldmVsb3BlcicsXG4gICAgaGVhZHNob3Q6IEJlcnRIZWFkc2hvdCxcbiAgICBoZWFkc2hvdEFsdDogJ0JlcnQsIGEgd2hpdGUgZmVtbWUtcHJlc2VudGluZyBwZXJzb24gc21pbGVzIGluIGZvbnQgb2YgYSBibG9zc29taW5nIGNoZXJyeSB0cmVlLicsXG4gICAgZGVzY3JpcHRpb246ICdDcmVhdGl2ZSBhbmQgYW5hbHl0aWNhbCB0aGlua2VyIG1vdGl2YXRlZCB0byBrZWVwIGxlYXJuaW5nIGFuZCBidWlsZGluZy4nICtcbiAgICAnIEZvcm1lciBzY2llbmNlIGVkdWNhdG9yIHdobyBhcHBsaWVzIGNvbmNlcHRzIG9mIGlucXVpcnkgYW5kIHVuaXZlcnNhbCBkZXNpZ24gdG8gdGhlIFVYIGFuZCB3ZWIgZGV2ZWxvcG1lbnQgc3BhY2UuJyxcbiAgICB0b29sczogWydIVE1MJywgJ0NTUycsICdKYXZhc2NyaXB0JywgJ1dlYnBhY2snLCAnQVBJcycsICdQaG90b3Nob3AvR2ltcCcsICdJbGx1c3RyYXRvci9JbmtzY2FwZSddLFxuICAgIC8vcmVzdW1lOiBCZXJ0UmVzdW1lLCAvL1Jlc3VtZSBmaWxlIGFzIHBkZlxufTtcblxuZXhwb3J0IHsgcHJvamVjdHMsIGJpbyB9OyIsImltcG9ydCB7IGJpb0hlYWRlciwgYmlvSW5mbyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vY29udGVudCc7XG5pbXBvcnQgeyBwcm9qZWN0RGV0YWlscyB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG4vL0hvbWVwYWdlIGdlbmVyYXRpb24gc2NyaXB0IGFzIG1vZHVsZSBwdWxsaW5nIGZyb20gY29udGVudCBmb3IgYmlvIGFuZCBwcm9qZWN0cyBvdmVydmlld1xuZnVuY3Rpb24gZ2VuZXJhdGVIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIFxuICAgIGJpb0hlYWRlcigpO1xuICAgIGJpb0luZm8oKTtcblxuICAgIGNvbnN0IHByb2plY3RzT3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c092ZXJ2aWV3LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLW92ZXJ2aWV3Jyk7XG4gICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgcHJvamVjdHNPdmVydmlldy5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuc2hvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBzY3JlZW5zaG90LnNyYyA9IHByb2plY3Quc2NyZWVuc2hvdDtcbiAgICAgICAgc2NyZWVuc2hvdC5hbHQgPSBwcm9qZWN0LnNjcmVlbnNob3RBbHQ7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoc2NyZWVuc2hvdCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pbmZvJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgdGl0bGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICB0aXRsZUxpbmsuaWQgPSBwcm9qZWN0SWQ7XG4gICAgICAgIHRpdGxlTGluay50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHRpdGxlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3REZXRhaWxzKTtcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVMaW5rKTtcbiAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBjb25zdCBwcm9qZWN0U3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0U3VtbWFyeS50ZXh0Q29udGVudCA9IHByb2plY3Quc3VtbWFyeTtcbiAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQocHJvamVjdFN1bW1hcnkpO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcblxuICAgICAgICBwcm9qZWN0c092ZXJ2aWV3LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIH0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNPdmVydmlldyk7XG59O1xuXG5leHBvcnQgeyBnZW5lcmF0ZUhvbWUgfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vY29udGVudCc7XG5cbi8vR2VuZXJhdGUgcHJvamVjdCBwYWdlcyBmcm9tIHByb2plY3QgY29udGVudCBpbiBjb250ZW50LmpzXG5mdW5jdGlvbiBwcm9qZWN0RGV0YWlscyhlKSB7XG4gICAgY29uc3QgcHJvamVjdElkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmF0KHByb2plY3RJZCk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICBpZiAocHJvamVjdC50aXRsZUxpbmsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgdGl0bGVMaW5rLmhyZWYgPSBwcm9qZWN0LnRpdGxlTGluaztcbiAgICAgICAgdGl0bGVMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVMaW5rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3Qgc2NyZWVuc2hvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNjcmVlbnNob3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zY3JlZW5zaG90Jyk7XG4gICAgc2NyZWVuc2hvdC5zcmMgPSBwcm9qZWN0LnNjcmVlbnNob3Q7XG4gICAgc2NyZWVuc2hvdC5hbHQgPSBwcm9qZWN0LnNjcmVlbnNob3RBbHQ7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzY3JlZW5zaG90KTtcblxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdW1tYXJ5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc2VjdGlvbicpO1xuICAgIHN1bW1hcnkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zdW1tYXJ5Jyk7XG4gICAgY29uc3Qgc3VtbWFyeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdW1tYXJ5VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBTdW1tYXJ5JztcbiAgICBzdW1tYXJ5LmFwcGVuZENoaWxkKHN1bW1hcnlUaXRsZSk7XG4gICAgY29uc3QgcHJvamVjdFN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0U3VtbWFyeS50ZXh0Q29udGVudCA9IHByb2plY3Quc3VtbWFyeTtcbiAgICBzdW1tYXJ5LmFwcGVuZENoaWxkKHByb2plY3RTdW1tYXJ5KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHN1bW1hcnkpO1xuXG4gICAgY29uc3QgYXVkaWVuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhdWRpZW5jZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlY3Rpb24nKTtcbiAgICBhdWRpZW5jZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWF1ZGllbmNlJyk7XG4gICAgY29uc3QgYXVkaWVuY2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYXVkaWVuY2VUaXRsZS50ZXh0Q29udGVudCA9ICdBdWRpZW5jZSc7XG4gICAgYXVkaWVuY2UuYXBwZW5kQ2hpbGQoYXVkaWVuY2VUaXRsZSk7XG4gICAgY29uc3QgcHJvamVjdEF1ZGllbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEF1ZGllbmNlLnRleHRDb250ZW50ID0gcHJvamVjdC5hdWRpZW5jZTtcbiAgICBhdWRpZW5jZS5hcHBlbmRDaGlsZChwcm9qZWN0QXVkaWVuY2UpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXVkaWVuY2UpO1xuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zZWN0aW9uJyk7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRldGFpbHMnKTtcbiAgICBjb25zdCBkZXRhaWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGRldGFpbHNUaXRsZS50ZXh0Q29udGVudCA9ICdEZXRhaWxzJztcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNUaXRsZSk7XG4gICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGV0YWlscy50ZXh0Q29udGVudCA9IHByb2plY3QuZGV0YWlscztcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3REZXRhaWxzKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRldGFpbHMpO1xufTtcblxuZXhwb3J0IHsgcHJvamVjdERldGFpbHMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgZ2VuZXJhdGVCaW8gfSBmcm9tICcuL2Fib3V0JztcbmltcG9ydCB7IGdlbmVyYXRlSG9tZSB9IGZyb20gJy4vaG9tZSc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2SG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtaG9tZScpO1xuICAgIG5hdkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUhvbWUpO1xuXG4gICAgY29uc3QgbmF2QWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWFib3V0Jyk7XG4gICAgbmF2QWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUJpbyk7XG5cbiAgICBnZW5lcmF0ZUhvbWUoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=