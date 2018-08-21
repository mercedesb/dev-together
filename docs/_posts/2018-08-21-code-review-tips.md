---
layout: post
title:  "Code Review Tips"
permalink:  "code-review-tips"
date:   2018-08-21 07:00:00 -0500
categories: event recap
---

Code reviews are a valuable form of mentorship at our events. In order to make sure everyone is getting the most out of the code reviews, please find some tips below.

Have tips that you don't see here? Tweet us @devtogetherchi with your suggestions!


## For the Submitter
- Guiding principles before submitting code for review
  - Build
    - Does the code build?
    - Use a linter so the Reviewer isn't looking for whitespace and other style issues
  - Context
    - What are you looking for feedback on? Be able to briefly describe the topic or area of the code you want your reviewer to look at
    - If submitting a PR, list the changes and describe the goal of the changes in the PR description
    - Make sure to have available documentation for the project background and how to set it up

## For the Reviewer
- Guiding principles when doing a code review
  - Readability
    - Is the naming expressive enough (methods and variables)?
    - Function and class length
    - Are there enough variables? limit magic strings/numbers
    - Are there too many method arguments? Should these be split into multiple methods?
  - Architecture/Code Design
    - Does this code satisfy the goal of the change?
    - DRY
    - Single responsibility
    - Was the changed code left in a better state than before the change?
    - Identify potential bugs (off by one errors, edge cases, loops terminate correctly)
    - Is there error handling?
    - Are there opportunities for optimization? (reduce number of iterations, etc)
  - Testing
    - Are there tests?
    - Do the tests cover enough cases?
    - Do the tests use mocks and stubs?
  - **Don't forget to leave positive feedback!** 
  - Are there third party libraries to research and use?
  - Is there enough documentation? Is it clear and updated?
  - Ask questions if anything is unclear
  - Provide helpful blogs, stack overflow links, or documentation to support your suggestion or requested change

  - Pseudocode is so helpful to explain your thoughts, but don't fix everything for them
  - Don't go overboard requesting changes, sometimes it makes more sense to log an issue in the repo so they can come back to it (especially if the issue appears in code that's not part of the change)
