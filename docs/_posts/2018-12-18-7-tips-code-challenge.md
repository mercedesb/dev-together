---
layout: post
title:  "7 tips to make your code challenge stand out"
description: "We’re here to offer some tips on how to be successful this upcoming hiring season, starting with tips on how to make your code challenge stand out and get you seen."
permalink:  "/blog/7-tips-code-challenge"
date:   2018-12-15 12:00:00 -0500
---

The New Year is about to start and you know what that means, hiring season will be in full swing! The start of the new year marks the start of new hiring budgets for many companies. We’re here to offer some tips on how to be successful this upcoming hiring season, starting with tips on how to make your code challenge stand out and get you seen.

## 1. Nail the logistic details
It may seem trivial but the logistics of a code challenge are very important. Read through the challenge and note any deadlines, submission format requirements, communication preferences, and other logistic details. Ask questions right away if any of these are unclear.

Make sure that you submit your challenge on time and in the right format. 
* If the company doesn’t want your submission posted publicly, don’t put it on your Github. 
* If they want a zip file, don’t link them to your Dropbox. 
* If they want it by EOD (end of day), don’t submit it at 11:00 pm. 

These are all easy things you can do to make sure that your submission is given the attention it deserves.

If the challenge asks for a README, be sure to include one. Include set up instructions for your app, information about why you made the decisions you did, and some information about ways you’d want to extend or improve your code in the README. All of these things show communication skills and can help answer questions the reviewers may have when looking at your code. 

If your reviewer has a positive experience reviewing your submission, they’ll be more likely to rate it favorably and get you to the next step in the interview process.

## 2. Focus on requirements
Before focusing on a fancy UI or stellar animations, make sure your code meets the bare minimum requirements. If the challenge provides example output, make sure your code produces the same output in the given test case. Unfortunately, a large number of submitted code challenges look beautiful but don’t meet basic requirements and get set aside.

It can be helpful when reading through the challenge to write down any requirements that you see in a bulleted list. This is especially helpful if your code challenge is a story problem. For example, given the following challenge problem

>Given the attached CSV data file, write a function find_open_restaurants(csv_filename, search_datetime) which takes as parameters a filename and a DateTime object and returns a list of restaurant names which are open on that date and time. Optimized solutions are nice, but correct solutions are more important! <br/><br/>
    Assumptions:<br/>
     • If a day of the week is not listed, the restaurant is closed on that day <br/>
     • All times are local — don’t worry about timezone-awareness<br/>
     • The CSV file will be well-formed

Your requirements list might look like this
* Restaurant data is in CSV file
* Restaurant is closed on days not listed
* Ignore timezones
* Function takes CSV file name and DateTime
* Function returns a list of strings (restaurant names) open at the provided DateTime

From there you can take your requirements and make a to-do list to help you approach the problem. From the requirements above, I might make a plan like this
1. Read in CSV file from `csv_filename`
2. Parse each line of CSV file some kind of restaurant object
3. Parse hours of operation text into DateTime(s)
4. Flag restaurant closed for days not listed
5. DateTime math to calculate if the restaurant is open for `search_datetime`
6. If open, add restaurant name to an array
7. Return array

Now you have a plan to make sure that you meet all of the requirements. If you have time left over, you can create a nice UI for the user. Maybe you want to add a file picker for the user to choose the CSV file or create a nice list or grid view for the restaurant names. 

## 3. Code that reads like a story
If the person reading your code challenge submission struggles to understand what you wrote and what each function is doing, they may give up and set your submission aside. Focus on writing clean, readable code that someone can understand quickly. 

Naming is often the hardest part of coding, but spending a little extra time can make a big difference. If we refer to the restaurant problem above, you’ll probably have a function that calculates if a restaurant is open for a given DateTime. Instead of something like this
```
function calculate(start, end, dateTime)
```
We would probably want something like this
```
function isOpen(restaurant, dateTime)
```
In the first, it’s unclear what is being calculated, what kind of data will be returned, and what the parameters are referring to. In the second, it’s more clear that you want to calculate if a given restaurant is open at a provided date and time and that you’re returning a boolean.

While we’re talking about code style, if you're borrowing some code you found on Stack Overflow (we all do it!), make sure that you take the time to understand what the code does and update it to match your code style and the naming scheme you’ve decided on. Automatic code linters like esLint or rubocop can help enforce things like spacing, indentation, and other style rules so that the code you submit is consistent and shows that you prioritize readability.

## 4. Remember the basics
HTML and CSS often get a reputation as “easy,” but that’s not the case. There is just as much to learn about web fundamentals as there is about the fancy new frameworks. If your code challenge requries a frontend, don’t forget to use well-formed, semantic markup. Use `<header>` and `<footer>` where it makes sense, and don’t forget to put your site navigation in a `<nav>` element.

And even more importantly, make sure your markup is accessible. Your `<label>` elements should enclose the elements they’re labeling or have the `for` attribute populated. Your `<img>` elements should have alt text. And use CSS to change the presentation of your markup; don’t change your markup to achieve the display presentation you want.

Style your page according to CSS best practices. Avoid `!important`, and show off your knowledge about the **Cascade** in **Cascading Style Sheets**.

## 5. Error handling
After your code meets requirements, think about ways to take it to the next level. Error handling is not usually specified in requirements, but it is a very common part of a programmer’s job. If you include error handling, you are showing the person reviewing your submission that you have the foresight to see potential error states in the application and handle them gracefully. 

The quickest and easiest places to add error handling are around any user inputs. If the challenge asks for the user to enter any input, add validation and error handling there.

For example, in the restaurant challenge at the start of this post, you may want to add some error handling around the passed in `csv_filename` parameter. Validate that the CSV file can be found and that it is, in fact, a CSV file. If not, raise an error.

## 6. Unit tests
Another way to really make your code challenge submission stand out is to add unit tests. Unit testing is an important skill in software development, because it lets other developers easily understand requirements. It also makes refactoring easier, because it helps quickly identify regressions before your code is deployed.

When writing unit tests, make sure you cover both expected and error states. Unit test the edge cases to make sure your validation and error handling behave as expected.

## 7. Make sure you can explain it
After you submit your code challenge and blow away the reviewers with your solution, the quality of your code, your error handling, and your unit testing, the next step is for them to talk to you about your submission. This is your chance to talk through your code, show them your thought process, and how you make decisions. 

Explaining the code you’ve written shows a fundamental understanding of concepts. It also shows off your communication skills which are essential if you’re working within a team and need to share and discuss code decisions you’ve made. 

Make sure that you can explain in plain language what each function does. And make sure you can explain the flow of information within your app from user input to your processing logic, from function to function, and from frontend to backend. 

Writing simple, readable code makes this part easier on you. Often this step in the interview process can come a week or two after you wrote the code when it's no longer fresh. When writing your code, don’t be tempted to write clever code. Any code that technically works but could be written more simply should be written more simply. Write the code that does the job, and write it like a story so your code tells you what it does when you’re reviewing it for this step of the interview process.

If you're ever looking for feedback on code challenge submissions, bring them to one of our Code Review & Pairing events. Our Mentors are happy to give you feedback and help you improve for your next one!
