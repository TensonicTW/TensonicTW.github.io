---
title: How to Calculate the Power Budget for a Constant-Voltage Paging System
date: 2026-07-15
author: Product Team
tags: [paging, system design, power]
summary: Power budgeting for a constant-voltage (70V/100V) paging system comes down to summing each zone's speaker tap wattage, then adding a safety margin. This piece walks through the calculation steps, common pitfalls, and how much headroom to leave when sizing an amplifier.
draft: false
---

## The Problem

A recurring field issue with fixed PA paging systems: after the amplifier is installed, it distorts at full load, or the system overheats and trips after a few extra speakers are added. Tracing it back, the root cause is usually that the power budget was never properly calculated at the planning stage — the amplifier wattage was picked "roughly right" from experience rather than from the actual load.

## Analysis: How Constant-Voltage Systems Calculate Power

A constant-voltage paging system (70V or 100V line) is designed to let multiple speakers run in parallel on a single line, without needing impedance-matching calculations like a low-impedance system would. Each speaker's line transformer has an adjustable tap wattage — 3W, 6W, 10W and so on — selected on site to match the required output.

Steps for calculating the power budget:

1. **Sum the tap wattage for each zone's speakers.** For example, a zone with 10 speakers each set to a 6W tap has a total load of 60W.
2. **Sum the loads across all zones for the total system load.** With 5 zones at 60W each, the total load is 300W.
3. **Keep a safety margin.** A 20–30% margin is recommended to avoid overheating or distortion from prolonged full-load operation. For a 300W total load, an amplifier rated at 360–400W or higher is a reasonable choice.
4. **Confirm the measurement basis for the rated power figure.** Always check whether a manufacturer's rated output is continuous (RMS) or peak power — the two can differ by more than double, and mixing them up leads to serious under-sizing.

## Common Pitfalls

- **Sizing off peak power alone.** Peak power is usually a short-duration instantaneous figure; sustained paging load should be sized against RMS rated power.
- **Ignoring future expansion.** If a site is likely to add zones or speakers later, reserve at least 30% growth headroom during initial planning to avoid replacing the entire amplifier down the line.
- **Not measuring actual line voltage drop.** Cable runs that are too long or too thin will cause insufficient SPL at the far end of a line — this is a wiring design problem, not an amplifier power problem, and no amount of power-budget accuracy will fix it.

## Method

In practice, list every zone's speakers and tap settings at the planning stage, sum them, and apply a 1.2–1.3× safety factor as the floor for amplifier sizing. For systems serving both background music and emergency paging, emergency scenarios typically require every zone to play simultaneously at full load — size the power budget against this worst-case simultaneous scenario, not average usage.

Tensonic's source equipment uses toroidal transformers and low-noise linear power regulation (as in the TS-DMP8). This doesn't directly affect the amplifier-side power budget, but it does lower noise floor and distortion at the source, so the downstream amplifier maintains a cleaner signal-to-noise ratio even near full load — reducing the "power is adequate but sound quality degrades" scenario.

## Follow-Up Recommendations

At the planning stage:
- Record each zone's speaker count and planned tap setting during the site survey, rather than reconstructing the numbers afterward.
- Once the power budget is calculated, reserve extra headroom for amplifier thermal management and standby margin — especially important for sites running long hours, such as retail or factory floors.
- Review system load periodically (annually is a reasonable cadence), and recalculate the total power whenever zones are added or speakers are replaced, to confirm it still sits within the amplifier's safety margin.
