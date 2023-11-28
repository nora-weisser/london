const { JSDOM } = require('jsdom');
global.$ = global.$ || require('jquery');
global.jQuery = $;

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

// Import the functions to be tested
const {
    showPresentation,
    showSkills,
    showMenteesData,
    showReviewsData,
    CLASS_ACTIVE,
    CLASS_HIDDEN
  } = require('./../assets/js/mentors');
  

  
  describe('controllerMentors', () => {
  
    describe('showPresentation', () => {

      test('should show presentation and hide other sections', () => {
        // Mock DOM elements
        document.body.innerHTML = `
          <div id="bt-p-1"></div>
          <div id="bt-s-1"></div>
          <div id="bt-m-1"></div>
          <div id="bt-v-1"></div>
          <div id="presentation-1"></div>
          <div id="skills-1"></div>
          <div id="mentees-1"></div>
          <div id="reviews-1"></div>
        `;
  
        const presentationButton = document.getElementById('bt-p-1');
        presentationButton.click();
  
        // Assertions
      });
    });
  

  });
