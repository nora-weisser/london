import { Then } from 'cypress-cucumber-preprocessor/steps';

import {
  verifyResourceSection,
  verifyEventsSection,
  verifyBlogPostsSection
} from '../pages/resources.page';

Then('I verify UI elements on Resource section', () => {
  verifyResourceSection();
  verifyEventsSection();
  verifyBlogPostsSection();
});
