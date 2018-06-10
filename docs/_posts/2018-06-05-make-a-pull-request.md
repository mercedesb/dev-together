---
layout: post
title:  "How to make a pull request"
permalink:  "make-a-pull-request"
date:   2018-06-05 21:13:00 -0500
categories: git
---
In our [previous post]({{ '/first-event' | prepend: site.baseurl }}) on the blog, I provided some brief background information on pull requests. In this post, we'll dive into the specifics of how to create a PR. 

To recap, Github describes a pull request as 

_"Pull requests let you tell others about changes you've pushed to a GitHub repository. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary."_

So how exactly do you make a PR? It all comes down to branches. A branch is a way for you to continue development in a separate stream of work without affecting any of the other branches. Branching strategies are a complex topic that you can explore if you're interested, but for the purposes of this post, we'll be using a basic feature branch strategy (also referred to as a topic branch in some places). 

Let's get started.

Pretend you have a simple app that generates word searches for you. Currently, the app only generates a single size word search, but you want to add a feature so that the user can specify the size of the grid for the word search. So far you've been doing all of your work in the `master` branch, but you want your Mentor to review the code you write for this feature. What should you do?

Make a feature branch.
<br/>
<br/>
`git checkout -b user-input-grid-size`
<br/>
<br/>
Now you have a branch in your local Git repo to make your commits to. The commits you make in this new branch will not affect the code you have in your `master` branch. 

Let's start working on our feature. We'll add an input in the UI for the user to specify the grid size. We'll also create and update any unit tests affected by the new inputs, such as snapshot tests. Let's commit that.
<br/>
<br/>
`git commit -m 'add user input for grid size'`
<br/>
<br/>
Now, we want to use that new input to change the word search grid that gets outputted. And we'll of course write unit tests to cover this new code. Let's commit that too.
<br/>
<br/>
`git commit -m 'use user input to change word search grid size'`
<br/>
<br/>
Now if we switch to the master branch, we'll no longer see our new code.
<br/>
<br/>
`git checkout master`
<br/>
<br/>
Perfect, that's exactly what we expect.
<br/>
<br/>
`git checkout user-input-grid-size`
<br/>
<br/>
Going back to our feature branch, we need to make sure our branch is pushed to our remote repo before we can create a PR.
<br/>
<br/>
`git push -u origin user-input-grid-size`
<br/>
<br/>
This command is both pushing our feature branch to our remote repo and using the upstream flag to set our local branch to track this remote branch so we can `push` and `pull` to it. 

From this point, if we have more code changes to make, we can commit them and use `git push` to push them up to our remote repo.

Now that we've pushed code to our remote repository, we're ready to make a PR for our Mentor to review and give us feedback on our implementation. In the Github UI, click the 'Compare and pull request' button that's visible after you pushed your feature branch.
<br/>
<br/>
![Compare and pull request]({{ '/assets/images/CompareAndPullRequest.png' | prepend: site.baseurl }})
<br/>
<br/>
You'll be taken to the 'Open a pull request screen.' 
<br/>
<br/>
![Open a pull request]({{'/assets/images/OpenPullRequest.png' | prepend: site.baseurl }})
<br/>
<br/>
On this screen, you can see a side by side comparison of your diff from the master branch.
<br/>
<br/>
![Pull request diff]({{'/assets/images/PullRequestDiff.png' | prepend: site.baseurl }})
<br/>
<br/>
Be sure to give your PR a descriptive title and use the description to provide context for your Mentor about the feature you are implementing, a summary of the code you wrote, and questions you have. Then click 'Create pull request'.

Your Mentor will now have an easy way to see what new code you have written and be able to provide Github comments on specific lines of code via the UI.

PRs are a great way to facilitate code reviews by providing an easy to understand diff of the code and an easy UI for submitting feedback. They are a handy tool to have in your toolbox and will be extremely helpful for Dev Together events.
