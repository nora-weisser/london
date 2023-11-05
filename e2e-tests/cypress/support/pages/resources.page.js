import resourcesLocatorManager from '../locators/resources_page/resources_page.locate';

const EXPECTED_NUMBER_RESOURCES_CARDS = 4; // as of November, 2023

export function verifyResourceSection() {
    resourcesLocatorManager.validateResourcesPageHeader();
    resourcesLocatorManager.validateResourcesCards();
}

export function verifyEventsSection() {
    resourcesLocatorManager.validateEventHeader();
    resourcesLocatorManager.validateEventCards();
}

export function verifyBlogPostsSection() {
    resourcesLocatorManager.validateBlogPostsHeader();
    resourcesLocatorManager.validateBlogPostsCards();
}