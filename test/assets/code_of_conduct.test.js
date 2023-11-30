const { JSDOM } = require('jsdom');

describe('Show/Hide Button Functionality', () => {

  beforeEach(() => {

    // Create a new JSDOM environment
    const dom = new JSDOM(`
    <span id="mentee-conduct" class="d-none">
        <li>Create a <a href="https://bit.ly/wwcodelondonslack">Slack Account</a>, join the #mentorship channel and check slack messages in the program to remain updated with all communication.</li>
        <li>Come to your sessions well-prepared and with realistic expectations.</li>
        <li>Whenever you see something is not going in the direction you want with the mentorship programme, provide feedback by email/slack or during your session with your mentor, so your mentor can adjust the sessions as necessary.</li>
        <li>If you have any concerns, don't hesitate to contact the Mentorship Programme Team (by slack or <a href="mailto:londonmentorship@womenwhocode.com">londonmentorship@womenwhocode.com</a>).</li>
        <li>Attending the Mentees Catch up sessions is crucial for the programme's improvement:
            <ul>
              <li>It is <b>mandatory</b> to provide feedback using google forms shared with you before the session.</li>
              <li>If you can't attend the session, explain your reason in reply to the invitation.</li>
            </ul>
        </li>
        <li>Do not use our programme for advertising or customer acquisition purposes.</li>
        <li>Please refrain from harsh, critical, and demeaning comments or feedback of any kind (be especially mindful of public written reviews).</li>
        <li>Please show your mentors and the Mentorship Programme some love by expressing your appreciation.</li>
        <li>Discussions between you and your mentor are considered to be confidential. Be careful about sensitive personal issues. Do not share any specific content of the sessions or personal data without the permission of your mentor.</li>
      </span>
      <div class="text-center">
        <a class="btn btn-primary" id="btn-mentee-learn-more" href="#">Learn More</a>
        <a class="btn btn-primary d-none" id="btn-mentee-show-less" href="#">Show Less</a>
      </div>
    `);
  
    // Set up global variables for the test environment
    global.document = dom.window.document;
    global.window = dom.window;
  
    // Load jQuery globally
    global.jQuery = require('jquery');
    global.$ = global.jQuery;
  });
  
  afterEach(() => {
      delete global.document;
      delete global.window;
      delete global.jQuery;
      delete global.$;
  });

  test('test functionality Show more / Show less', () => {

      require('../../assets/js/code_of_conduct');

      const learnMoreButton = document.getElementById('btn-mentee-learn-more');
      const showLessButton = document.getElementById('btn-mentee-show-less');
      const menteesConduct = document.getElementById('mentee-conduct');

      console.log(learnMoreButton);
    
      // Initial state assertions
      expect(learnMoreButton.innerHTML).toBe('Learn More');
      expect(learnMoreButton.classList.contains('d-none')).toBe(false);
      expect(showLessButton.classList.contains('d-none')).toBe(true);
      expect(menteesConduct.classList.contains('d-none')).toBe(true);
    
      learnMoreButton.click();
    
      // Assertions after clicking
      expect(learnMoreButton.classList.contains('d-none')).toBe(true);
      expect(showLessButton.innerHTML).toBe('Show Less');
      expect(showLessButton.classList.contains('d-none')).toBe(false);
      expect(menteesConduct.classList.contains('d-none')).toBe(false);
  });
});
