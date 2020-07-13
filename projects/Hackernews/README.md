# Notes

## Packages

-  react-content-loader
-  redux
-  thunk
-  styled-components

## Patterns

- Skeleton added on load to make it nicer when page loads
- Functional components
- Hooks
- Redux state management

## Approach 

To make a better experience for the user I used one of the hacker new aggravates.  This cut out me having to do unneeded queries back to the API, improving page load time.

To make the page more interesting I've added a sticky banner, there is also a skeleton when the data loads too slowly..  I also added in infinity scrolling with a spinner to save performance to. 

The site uses redux o manage the news state,  The idea was to add a filter reducer, to only return 5 result at the same time.

## Issues

Run out of time and wouldn't be able to look at this again for a few days so submitting now semi finished, apologies but this week has been crazy

The things I would like to improve are:

The design could be tweaked a lot.  I think the outline is there as its easy to read and simple to take action

The plan was to add infinite scroll to make the page load quicker and feel more interactive.  Theres a sticky banner I was planning to add a menu on to help people navigate to other things.

It is not responsive either.  Works in desktop only.  This was down to lack of time to spend on this.

Things I would improve:

- The UI needs some polish.  Ran out of time
- More tests

# Introduction

In this task, you will implement a news reader. Your application will make it easy to browse
a list of articles featured on Hacker News. You will be expected to use React but beyond
this, you are free to make whatever technology choices you think best.
Your application should make use of the Hacker News API to provide a list of the most
recent stories. The documentation for this API is available at:

https://github.com/HackerNews/API

Quoting the README, "it's not the ideal public API". You are expected to account for these
limitations in your application, providing a beautiful user experience despite the limitations.
Equal focus will be given to the user experience and the quality of the code. Ultimately, we
care about building beautiful products for our users and so the experience you provide is
paramount.

# Requirements

Your solution should contain your source code and a README containing build and
deployment instructions. You may assume the engineer assessing your solution has
working Node.js and yarn installations.