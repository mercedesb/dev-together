---
layout: post
title:  "How to make a pull request"
permalink:  "make-a-pull-request"
date:   2018-06-05 21:13:00 -0500
categories: git
---
In our [previous post]({{ '/first-event' | prepend: site.baseurl }}) on the blog, announcing our first event, I provided some brief background information on pull requests. After seeing some confusion from our Mentees during event registration and getting some questions, I thought it would be good to dive into the specifics of how to create a PR. 

To recap, Github describes a pull request as 

_"Pull requests let you tell others about changes you've pushed to a GitHub repository. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary."_

So how exactly do you make a PR? It all comes down to branches. A branch is a way for you to continue development in a separate stream of work without affecting any of the other branches. Branching strategies are a complex topic that you can dive into if you're interested, but for the purposes of this post, we'll be using a basic feature branch strategy (also referred to as a topic branch in some places). 

Great, let's get started.

Pretend you have a simple app that generates word searches for you. Right now, the app always builds a word search with the same number of rows and columns, but you want to add a feature so that the user can specify how many rows and columns of letters the word search has. So far you've been doing all of your work in the `master` branch but you know that you want your Mentor to review the code you write for this feature. What should you do?

Make a feature branch.

`git checkout -b user-input-rows-columns`

Now you have a branch in your local Git repo to make your commits to. The commits you make in this new branch will not affect the code you have in your `master` branch. 

Let's pretend that we start working on our feature. We'll probably want to add some inputs in the UI for the user to specify a number of rows and a number of columns. We'll also want to create and update any unit tests affected by the new inputs, such as snapshot tests. Then we'll commit that.

`git commit -m 'add user input for number of rows and columns'`

Then we want to use those new inputs to change the word search grid that gets outputted. And we'll of course write unit tests to cover this new code. And commit it.

`git commit -m 'use user input to change word search grid size'`

Now if we switch to the master branch, we'll no longer see our new code. 

`git checkout master`

Perfect, that's exactly what we expect.

`git checkout user-input-rows-columns`

Going back to our feature branch, we need to make sure our branch is pushed to our remote repo before we can create a PR.

`git push -u origin user-input-rows-columns` OR `git push -u origin head`

This command is both pushing our feature branch and using the upstream flag to set our local branch to track this remote branch so we can `push` and `pull` to it. We can use the `head` keyword if we are currently on the feature branch that we wish to push (as opposed to being on the `master` branch and wanting to push the `user-input-rows-columns` branch).

From this point, if we have more code changes to make, we can commit them and use `git push` to push them up to our remote repo.

Now that we've pushed code to our remote repository, we're ready to make a PR for our Mentor to review and give us feedback on our implementation. In the Github UI, click the 'New pull request' next to the branch dropdown. You'll be taken to the 'Compare changes' screen.

You want to choose the `user-input-rows-columns` from the 'compare' dropdown. Then you'll be taken to the 'Open a pull request screen.' On this screen, you can see a side by side comparison of your diff from the master branch.

Be sure to give your PR a descriptive title and use the description to provide context for your Mentor about the feature you are implementing, a summary of the code you wrote, and questions you have. Then click 'Create pull request'.

Your Mentor will now have an easy way to see what new code you have written and be able to provide Github comments on specific lines of code via the UI.

PRs are a great way to facilitate code reviews by providing an easy to understand diff of the code and an easy to UI for submitting feedback. They are a handy tool to have in your toolbox and will be extremely helpful for Dev Together events.
