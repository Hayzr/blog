---
layout: post
title: "The Boring Stack Is Underrated"
date: 2026-05-15
---

Nobody gets promoted for choosing Postgres. Nobody writes a conference talk about it. You won't see it in a breathless LinkedIn post about the cutting-edge architecture powering someone's side project that has eleven users.

And yet Postgres will outlast most of the things people are currently breathless about.

<!--more-->

There's a particular kind of engineering culture that mistakes novelty for rigour. New tools feel like progress. Adopting them feels like keeping up. The implicit logic is: if it's newer, it must be better — and if we're not using the newest things, we must be falling behind.

This logic is mostly wrong.

## The cost of interesting choices

Every interesting architectural choice is a debt you take on in operational complexity, institutional knowledge, and hiring. That debt isn't always bad — sometimes the problem genuinely requires the solution. But more often, the interesting choice was made because it was interesting, and the debt was never properly accounted for.

The boring stack — Postgres, Redis, a well-understood web framework, a boring deployment platform — represents decades of accumulated battle-testing, documentation, and community knowledge. When something breaks at 2am (and something will break at 2am), you want to be debugging something that ten thousand other people have already debugged and written about.

## Boring is a strategy

This isn't an argument against innovation. It's an argument for being deliberate about where you spend your complexity budget. Teams that are conservative about their infrastructure choices often have more space to be ambitious about their product choices. The boring backend isn't the ceiling — it's the floor that lets you build higher.

The most reliable systems I've worked on were also the most boring. That's not a coincidence.

Choose boring. Write the conference talk about what you built on top of it.
