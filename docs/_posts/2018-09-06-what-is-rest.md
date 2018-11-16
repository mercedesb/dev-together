---
layout: post
title:  "What is ReST — An Interview Survival Guide"
author: "Mina Slater | <a href=\"https://twitter.com/Minar528\">@Minar528</a>" 
description: "I was recently caught off-guard at a job interview by this question: What is Rest?"
permalink:  "/blog/what-is-rest"
canonical: https://medium.com/@Minar528/what-is-rest-415a1c32e224
date:   2018-09-06 12:00:00 -0500
---

_Mina, one of our members, was interviewing for her first dev job this past spring. During the process, she wrote a really great post about how to answer one of the common technical questions asked during interviews._

I was recently caught off-guard at a job interview by this question:

>What is ReST?

While my bootcamp instructors drilled us with algorithmic problems as found on [Codewars](https://www.codewars.com/), we did not allocate as much attention to the talk-about-coding type interview questions. Thinking back, it was negligent of me to assume that just because I understand something enough to use it, I could talk about it eloquently too.

WRONG!

I think I mumbled something about using HTTP verbs and URLs. I don’t really remember; I may have blacked out.

The paragraphs and images that follow barely skim the surface of understanding ReST, but should be sufficient knowledge to get you through your interview.

This is also what I wish I had given as my answer.

## ReST stands for Representational State Transfer

So, now that that’s out of the way, we can get down to what it actually means.

Assuming that you, the Reader, are familiar with the Client-Server-Database structure of most web applications, the short answer is that ReST is **a set of guidelines that describes how your client communicates with your server.**
<br/>
<br/>

{% include post_image.html src="../assets/images/WhatIsRest.jpeg" alt="A doodle drawn by DoodlingDev (http://doodlingdev.com/) of a webpage talking to a server and saying 'REST'" %} 


A “ReSTful” design is complex; way more complex than an Interviewer is looking for in a short interview answer. Here, we will cover the following:

* Endpoints named after resources
* Actions performed on those endpoints
* Stateless communications

SIDEBAR: If you are interested in diving into the nitty-gritty of ReSt, here is Chapter 5 of Roy Fielding’s [dissertation](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm).

## HOCKEY!
Let’s say I have a very simple CRUD web application for a hockey league, where I keep track of all the teams in the league. Upon surveying the Users, I have condensed the user stories down to the following:

1. As a User, I want to be able to create a team, so that I can add a new team when they join the league.
2. As a User, I want to see (read) all the teams, so that I can get an overview of the league.
3. As a User, I want to be able to update a team’s information, so that I can track wins and losses.
4. As a User, I want to be able to delete a team, so that I can remove a team when they leave the league.

Knowing that a route consists of two parts: the path / URL and an HTTP action verb, let’s get started.

## Resources as Endpoints
In a ReSTful architecture, the path is a noun describing a resource that is being accessed. It is generally named after database models (tables). These paths are the endpoints our client requests will hit.

In the hockey app above, our requests should all hit the path representing the Team resource. So let’s start the routes there and build up:

```
1. /team
2. /teams
3. /team
4. /team
```

## Actions on Endpoints
>If all these User Stories hit the same endpoint, how does the server know which of the actions to perform?

In order to differentiate between each of the CRUD activities, our request from the client will also send an HTTP action verb to the server, along with the path of the endpoint the app wants to hit.

Let’s update our routes for the hockey app:

```
1. POST /team
2. GET /teams
3. PUT or PATCH /team
4. DELETE /team
```

## Stateless Communication
Another big part of ReSTful design is that the “communications must be stateless in nature” (Roy Fielding). That simply boils down to the fact that all the information needed to understand each request is sent along as part of the request itself.

For our hockey app, we will need to add something to the PUT/PATCH and DELETE routes so that our server knows which team we want to apply the action to.

Like so, where 1 will be the id of a specific team:

```
1. POST /team
2. GET /teams
3. PUT or PATCH /team/1
4. DELETE /team/1
```

## TL;DR
To sum up the above points into a concise answer to the question, “What is ReST?”:

>ReST is a structure for the communication between client and server, where each path is a noun, named after the resource being accessed. The requests contain an HTTP verb to define the action to be performed on the endpoint, as well as everything necessary to understand the request.

There you have it. It is two weeks late for that interview, but here is my answer.

