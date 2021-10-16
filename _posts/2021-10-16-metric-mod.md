---
title: Time dilation with metric modulation
date: 2021-10-16 11:28:00 -00:00
layout: post
---

Two days ago, [Adam Neely](https://www.youtube.com/channel/UCnkp4xDOwqqJD7sSM3xdUiQ) and [Shawn Crowder](https://www.youtube.com/channel/UCiPApSjDJ_ShVUbCFZRzxQQ) released their last album [Perihelion](https://sungazermusic.bandcamp.com/album/perihelion).  
As a part of their launching campaign, they released (yet) [two](https://youtu.be/_d8wApjLuf8) [videos](https://youtu.be/ACA-i8BOr9Q) explaining several music theory concepts used in the elaboration of the tracks.

## Metric Modulation

One of them being *metric modulation*. Metric modulation, in short, is about modulating (changing) the tempo or meter of a song. Of course, it is not about doing it without caution, for example jumping from 100 BPM to 120 without prior notice. The goal here is to modulate smoothly from tempo A to tempo B, much alike a smooth harmony modulation (e.g. ii V I in target key).

One way to smooth a metric modulation, the one being discussed about in Adam's video (explained by Shawn about the track Macchina), is to accentuate different groupings of notes prior to a final switch. 

By only using the existing grid and changing the grouping, a butter-smooth transition can be obtained.

## Examples in 4/4

As always, let's take an example in 4/4, which means a beat is subdivided in 4 quarter notes. For calculus clarity, we set our tempo to 100 Beats Per Minute (BPM). The **beat** is played every 4 notes (subdivision = 4) at 100 BPM.

**Example 1:** If we were to play the beat every *third* notes, the new BPM / tempo would speed up to a new tempo of :

$$
\begin{align}
   100 \times 4/3 \approx 133 \text{ BPM}
\end{align}
 $$

 **Example 2:** If we were to play the beat every *fifth* notes, the new BPM / tempo would slow down to a new tempo of :

$$
\begin{align}
   100 \times 4/5 = 80 \text{ BPM}
\end{align}
$$

Notice that we have two ways of thinking about the same musical result :
- either stay at 100 BPM and accentuate groupings of 5
- or set metronome to 80 BPM and play the new beat.

## Generalization

For further analysis, here is a piece of code I wrote that lists down possible metrics modulations ratios for a given beat subdivision (in a two beats span).

```python
def find_possible_metric_modulations(subdivisions):
    print(f"Possible metric modulations for {subdivisions} subdivisions per beat (2 beats span)")
    for i in range(1, 2*(subdivisions)+1):
        print(f"- Every {i:02} notes : tempo x {(subdivisions/i):.2f} ({subdivisions}/{i})")
```

For the 4 subdivisions case the talked about we can find back our results among many others : 

```python
> find_possible_metric_modulations(4)

Possible metric modulations for 4 subdivisions per beat (2 beats span)
- Every 01 notes : tempo x 4.00 (4/1)
- Every 02 notes : tempo x 2.00 (4/2)
- Every 03 notes : tempo x 1.33 (4/3)
- Every 04 notes : tempo x 1.00 (4/4)
- Every 05 notes : tempo x 0.80 (4/5)
- Every 06 notes : tempo x 0.67 (4/6)
- Every 07 notes : tempo x 0.57 (4/7)
- Every 08 notes : tempo x 0.50 (4/8)
```
## Sungazer's Macchina

As a real music example, let's break down in details how the metric modulation from Sungazer's Macchina works.

### Before transition
First, the BPM is equal to 95 BPM. Groupings of 4 are played, a bit offset from the real beat but that changes nothing. 

The glue of all of this, that never changes, is the 16th note ostinato (the engine, as they call it) played on the side stack and hi-hat.

### Shifting gears, part 1
Then comes the start of the transition. As Shawn says in Adam's video, he first plays 8th dotted notes, that would be groupings of 3 notes. Personally, I feel that this first part is slower than the later one, so I consider the beat to be groupings of 6.  

By looking at the ratios above, or just thinking about it, the equivalent new tempo should be slowed down by 4/6: 
 
$$
\begin{align}
   95 \times 4/6 \approx 63.3 \text{ BPM}
\end{align}
$$

In total, 4 groupings of 6 notes are played. This is clever: they want people to bang their head to this transition, so everything have to stay in 4/4 (in temporary tempo) in order to feel everything slowing down.

Remember, the ostinato do not change here. And yes, it is completely out of sync. By the end of the 4 groupings of 6 notes, we are in the middle of the ostinato.

### Shifting gears, part 2
But it's only temporary, the real metric modulation is coming. The pattern changes and Shawn is now playing grouping of 5. Again, the equivalent new tempo should slow down by 4/5 (with respect to original 95 BPM, we feel it speeding up because we come from 63): 

$$
\begin{align}
   95 \times 4/5 \approx 76 \text{ BPM}
\end{align}
$$

We can even see 76 BPM being notated on the score on Adam's video.
In total, 8 groupings of 5 notes are played. Again, we can *feel* it like two measures of 4/4 at 76 BPM.  
Again, the thing that glues everything is the ostinato pattern running at 95 BPM. By the end of the first 4 groupings of 5 notes, the current ostinato is at 3/4 completion. By the end of the 8 groupings, it completes entirely, right before the final switch, **good job**.

### Full power
At the end of the second measure of pre-76, the nice fill lands on the 1 of the first measure of 4/4 at 76 BPM. We know that because the stack / hi-hat pattern switches to regular 16th notes at 76 BPM. The ostinato stops.

## Ableton playground

I overlapped several layers onto the real track in order to visualize and hear more clearly the analysis:
- with varying metronomes
- with midi instrument playing different grouping
- with the full 16th notes grid playing behind

Enjoy :D

<div style="text-align:center;">
<video  style="margin: 0 auto; width: 100%; max-width: 1020px;">
```
   <source src="../images/explain_machina.mp4" type="video/mp4" />
```
   </video>
</div>