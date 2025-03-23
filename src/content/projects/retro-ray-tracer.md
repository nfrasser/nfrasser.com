---
title: "Retro Ray Tracer"
date: "Dec 12 2016"
summary: "Final project for my Computer Graphics course at the University of Waterloo"
---

# Retro Ray Tracer

_Originally published December 2016 [on Medium](https://medium.com/@nfrasser/retro-ray-tracing-eb0437d04eae)_

I recently completed University of Waterloo’s [Introduction to Computer Graphics Course](https://www.student.cs.uwaterloo.ca/~cs488/Fall2016/index.html).
If you’re a present or future computer science student at Waterloo: This was one
of the most interesting and challenging courses I’ve taken at the University;
definitely check it out if you can (especially if it’s being taught by the
wonderful [Craig Kaplan](http://www.cgl.uwaterloo.ca/csk/)). **Fair warning:**
The work load is quite high.

The course work consists of four assignments covering OpenGL basics, the
graphics pipeline, hierarchical modelling, and ray tracing, as well as a final
project. For the project, I chose to extend my ray tracer from the fourth
assignment with some extra features. I cover the most interesting five here.

## 1. Solid Textures

Also known as procedurally-generated textures, these are defined as functions
that take a coordinate in 3D space and return a colour. I implemented two
textures with this technique, checkers and marble.

For marble, I use a deterministic noise-generation function with turbulence and
bilinear interpolation for smoothing. I noticed that I get a cool pixelated
effect when smoothing is disabled. I apply this effect in my final scene.

## 2. Soft Shadows

I define lights as triangle meshes and cast multiple shadow rays at random
points on the mesh. A portion of the shadow rays intersect with other objects in
the scene, meaning the surface is partially lit and appears increasingly darker.

One area light is defined on the ceiling in the example above. I used 256
samples per light.

## 3. Depth of Field

Much like photographic depth of field, depth of field here is simulated by
defining a finite-width aperture. For each pixel, the position of the camera is
sampled at random locations on a disk parallel to a user-defined focal plane in
the scene. The camera always points at a specific point on the focal plane, so
items close to the plane are always in focus.

Check out the original _[Distributed Ray Tracing](http://artis.inrialpes.fr/Enseignement/TRSA/CookDistributed84.pdf)_
paper by Cook, Porter, and Carpenter for more details about ray tracing depth of
field and soft shadows.

## 4. Feature Lines

This is implemented with the technique developed by Choudhury and Parker in
their paper _[Ray Tracing NPR-Style Feature Lines](http://hodad.bioen.utah.edu/publications/choudhury09/NPR-lines.NPAR09.pdf)_.
It makes some scenes look like comic book drawings.

## 5. Voxel Mode

A voxel is basically a large, 3D pixel. When voxel mode is enabled, any scene is
approximated with fixed-size cubes. Used appropriately, this produces scenes
akin to old-school 8-bit video games.

The idea for this feature came from [this wonderful piece](https://medium.com/retronator-magazine/pixels-and-voxels-the-long-answer-5889ecc18190)
by [Matej ‘Retro’ Jan](https://medium.com/@retronator). My final scene was very
much inspired by the referenced artwork.

## Putting it all together

Here’s the final demo scene I created with the above features.

Here’s what this looked like before voxelization. The rendering on the right has
depth of field enabled.

## Other features I implemented

- Orthographic projection mode (as seen above)
- Parallel ray tracing on multiprocessors
- Spatial partitioning optimization (helped a ton when tracing thousands of
  voxels per scene).

---

Huge thanks to Professor Kaplan for pointing me in the right direction when I
was first getting started, as well as to the rest of the CS 488 teaching staff
for being generally awesome. Huger thanks to my classmates Adam and Stefanie, I
would be completely lost without your emotional support!
