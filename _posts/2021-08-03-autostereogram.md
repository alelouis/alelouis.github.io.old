---
title: Autostereograms, eyes and brain
date: 2021-08-03 16:00:00 -00:00
layout: post
---
# Autostereograms, eyes and brain.

This subject divides a fair amount of my friends. Those who cannot enjoy [autostereograms](https://www.pakin.org/~scott/stereograms/) tells the other group that it’s a complete hoax, while the *"can see it"* group takes its superior look.

I won’t lie, if you *can* see autostereogram this blog post will hopefully be of greater interest than if you don’t.

## Eyes

Tiny muscles, ciliary muscles, in our eyes enable humans to focus and have sharp vision at close and far distances. Those muscles act on the crystalline lens in order to modify its shape. Analogous to a regular optical lens, the change of lens' [concavity](https://en.wikipedia.org/wiki/Lens) affects the point of focus. Both eyes are focusing at one point at the same time and while this process (accommodation) is fast and unconscious, a good percentage of people can manually control those muscles.

Being able to control eyes muscles do not look that useful at first sight (*optical puns*). This is probably why people may not be aware they are doing it or how. If you often find yourself looking straight at no particular thing with a blurry vision, deep in your thoughts, chances are your already know how to relax your eyes.

In a bio-hacking fashion, some *probably* bored peoples found out that our brain can be easily tricked to see fake 3D if the right information is displayed to both eyes. By consciously adjusting our crystalline lens to arbitrary focus lengths, one can look at a 2D image that triggers a 3D perception illusion, without any accessories.

## How it works

In everyday life, [we perceive our world in three dimensions](https://en.wikipedia.org/wiki/Stereopsis) only because our two eyes do not sense the same information. For a given point in a scene, each eye receive a slightly different projection (we have two cameras at two positions). Our brain then does the hard work of estimating depth from it.

In nominal case, the focus length is adapted to the distance of the object which is being looked at. We can picture this scenario with two straight lines starting from each eye and converging towards the point of focus.

<img style="margin: 0 auto; display: block; width : 50%;" src="../images/autostereogram/normal.png">

In the autostereogram case, we are looking at an image but with a point of focus *behind* the screen (or paper). By construction, there is only one focus length that triggers the 3D illusion. 

<img style="margin: 0 auto; display: block; width : 50%;" src="../images/autostereogram/stereo.png">

The trick consists in building an image that, if viewed with a focus point behind the image plane, feeds the same visual information about the focus point (mainly color here) to both eyes. When both eyes see the same information at focus point, the brains knows that there is an object at focus distance (because that’s what happens everyday).

In image terms, this means we have to adjust the value of two pixels separated by a given distance (we call it the stereo separation) to be the same. Of course, the stereo separation depends on focus point hence on the depth map. By looking at my humble drawing above, you can see how changing the focus point position (which is a function of the depth map) will shrink or expand the stereo separation.

**Finding this focus length is what is precisely hard about seeing autostereogram since it is basically trial and error**.

 If you never attempted to see one before, here is an autostereogram I generated :

<img style="margin: 0 auto; display: block; width : 50%;" src="../images/autostereogram/example.png">

When close to focus distance, you should feel like two separate images are merging. The depth illusion is sharp and crisp, the feeling is exactly the same as looking a normal object behind your screen. At the right spot, you should see the logo below in 3D, higher values (bright) being closer. 

From aside, this should be the depth profile observed.

<img style="margin: 0 auto; display: block; width : 70%;" src="../images/autostereogram/3D.png">

## Implementation

I (re)implemented a generation algorithm based on [SIRDS](https://www.cs.waikato.ac.nz/~ihw/papers/94-HWT-SI-IHW-SIRDS-paper.pdf) paper in Rust. I extended the algorithm in order to support image tiling input instead of binary dots.

**Source code**: [alelouis/autostereogram-rust](https://github.com/alelouis/autostereogram-rust)

Feel free to experiment with your own depth maps and tile textures ! 