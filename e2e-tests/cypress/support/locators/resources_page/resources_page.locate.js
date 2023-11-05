import { validateLink } from '../../helper'

const EVENTS = '.events > h2';
const RESOURCES_CARDS = '.material .card';
const EVENTS_CARDS = '.events .card';
const BLOG_POSTS_HEADER = '.blog > h2'
const BLOG_CARDS = '.blog .card';

// expected results files
const RESOURCES_FILE = 'test_data/resources.yml';
const EVENTS_FILE = 'test_data/events.yml';
const BLOG_POSTS_FILE = 'test_data/blogs.yml'

// resources elements
const RESOURCES_TITLE = '.card-title';
const RESOURCES_IMAGE = '.card-img-top';
const RESOURCE_LINK = '.stretched-link';

// events elements
const EVENT_TITLE = '.card-title';
const EVENT_DESCRIPTION = '.card-text';
const EVENT_IMAGE = '.card-image';
const EVENT_CHECK_MORE = '.links';
const EVENT_YOUTUBE = '.card-content > ul > :nth-child(1) > a';
const EVENT_MEETUP = '.card-content > ul > :nth-child(2) > a';
const EVENT_DATE_FORMAT = '.card-body > :nth-child(2)';

// blog elements
const BLOG_TITLE = '.card-title';
const BLOG_DESCRIPTION = '.card-content .card-text';
const BLOG_DATE_AUTHOR = '.card-body > :nth-child(2)';
const BLOG_IMAGE = '.card-image';
const BLOG_LINK = '.link > a';

class resourcesLocatorManager {
  
  validateResourcesPageHeader = () => {
    return cy
      .get('h1')
      .shouldBeVisible().should('contain', 'Resources');
  };

  validateResourcesCards = () => {
    const YAML = require('yamljs')
    cy.fixture(RESOURCES_FILE).then((file) => {
      const expectedResources = YAML.parse(file);
      cy.get(RESOURCES_CARDS)
      .should('have.length', expectedResources.length)
      .each(($option, index) => {
        cy.wrap($option).find(RESOURCES_TITLE).should('contain', expectedResources[index].title);
        cy.wrap($option).find(RESOURCES_IMAGE).shouldBeVisible();
        validateLink($option, RESOURCE_LINK, expectedResources[index].link);
      })
    });
  }

  validateEventHeader = () => {
    return cy.get(EVENTS)
    .shouldBeVisible().should('contain', 'Events')
  };

  validateEventCards = () => {
    const YAML = require('yamljs');
    cy.fixture(EVENTS_FILE).then((file) => {
      const expectedEvents = YAML.parse(file);
      cy.get(EVENTS_CARDS)
        .should('have.length', expectedEvents.length)
        .each(($option, index) => {
          cy.wrap($option).find(EVENT_TITLE).should('contain', expectedEvents[index].title);
          cy.wrap($option).find(EVENT_DESCRIPTION).should('contain', expectedEvents[index].description);
          cy.wrap($option).find(EVENT_IMAGE).shouldBeVisible();
          cy.wrap($option).find(EVENT_CHECK_MORE).should('contain', 'Check more:');
          cy.wrap($option).find(EVENT_DATE_FORMAT).should('contain', expectedEvents[index].date + " | " + expectedEvents[index].format);
          validateLink($option, EVENT_YOUTUBE, expectedEvents[index].links[0].youtube);
          validateLink($option, EVENT_MEETUP, expectedEvents[index].links[1].meetup);
        })
    })
  }

  validateBlogPostsHeader = () => {
    return cy.get(BLOG_POSTS_HEADER)
      .shouldBeVisible()
      .should('contain', 'Blog Posts')
  }

  validateBlogPostsCards = () => {
    const YAML = require('yamljs');
    cy.fixture(BLOG_POSTS_FILE).then((file) => {
      const expectedBlogs = YAML.parse(file);
      cy.get(BLOG_CARDS)
        .should('have.length', expectedBlogs.length)
        .each(($option, index) => {
          cy.wrap($option).find(BLOG_TITLE).should('contain', expectedBlogs[index].title);
          cy.wrap($option).find(BLOG_DESCRIPTION).should('contain', expectedBlogs[index].description);
          cy.wrap($option).find(BLOG_IMAGE).shouldBeVisible();
          cy.wrap($option).find(BLOG_DATE_AUTHOR).should('contain', expectedBlogs[index].date + ' | ' + expectedBlogs[index].author);
          validateLink($option, BLOG_LINK, expectedBlogs[index].link);
        })
    })
  }

}

export default new resourcesLocatorManager();