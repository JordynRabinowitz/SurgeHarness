# <img width="20" alt="WhiteSurgeLogo" src="https://github.com/user-attachments/assets/1a08640d-4039-4090-871b-b49827467df4"/>urge Harness

**Strength you can feel. Control you can build.**

Surge Harness is a wearable movement-resistance system designed to help climbers, athletes, and everyday users build strength and improve movement control safely. Instead of adding bulky external load, the system uses elastic resistance routed from the torso to the arms to gently slow motion, promote body awareness, and support mindful training and rehabilitation.

## Live Links

- **Live Site:** [Surge Harness Website](https://jordynrabinowitz.github.io/SurgeHarness/)
- **User Manual:** [Surge Harness User Manual](https://sway-river-90012031.figma.site/)
- **Video Demonstration:** [Surge Harness Video](https://o365coloradoedu-my.sharepoint.com/:v:/g/personal/jora8609_colorado_edu/IQAmOEfObG5rRLzrwedxgOQhAROI4-Q68OfRh3XDvvATiG0?e=z8P03b&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7fX0%3D)
- **Full Documentation:** [Capstone Development Timeline](https://docs.google.com/document/d/1Ow9AekOLRRCUhUxUgIQepOyi0AhpZZKI180Od1Nkrhk/edit?usp=sharing)

## Project Overview

Surge Harness was created to explore a gap between athletic training gear and rehabilitation tools. Traditional options like weighted vests, static posture tools, or basic resistance bands can feel limiting, uncomfortable, or disconnected from real movement. Surge approaches that problem differently by adding dynamic resistance through a harness-based system that moves with the body.

The project is currently in the **prototype phase** and is being developed through research, community feedback, and iterative testing.

## The Problem

Climbers and other active users often need ways to rebuild strength and control without overloading the body. Existing tools can make it difficult to:

- train precise movement safely
- rebuild shoulder stability after injury
- add resistance without adding impact or bulk
- integrate strength and body awareness into real movement

## The Solution

Surge Harness introduces **movement resistance** rather than just added weight. Elastic bands anchored from the torso to the arms create gentle, customizable tension during motion. This helps encourage slower, more intentional movement and supports technique, stability, and control.

## Key Features

- **Wearable resistance system** for torso-to-arm movement
- **Low-impact strength support** without heavy external loading
- **Modular tension setup** for different training and rehab contexts
- **Mindful movement focus** that encourages control and body awareness
- **Prototype-driven development** informed by testing and iteration

## Use Cases

### Climbing
Technique under resistance for more controlled movement on the wall.

### Rehabilitation
Supports careful rebuilding and movement awareness during recovery.

### Posture + Core
Encourages active engagement instead of passive bracing.

### Training / Warmups
Useful for prehab, movement prep, and intentional low-load strength work.

## Media

<img width="734" height="385" alt="SurgeTorsoEdit2 0" src="https://github.com/user-attachments/assets/46e3a4da-2ff3-4003-a316-0b7acd035ed4" />


<!-- ```md
![Surge Harness prototype](public/images/your-prototype-image.png)
![Website screenshot](public/images/your-website-screenshot.png)
``` -->


## How It Works

The harness uses directional elastic routing to create resistance during arm and upper-body movement. Rather than forcing the body into place, the resistance provides feedback through motion. The goal is to support control, awareness, and safer strength-building during movement-based activity.

## Project Status

Surge Harness is an active capstone and venture prototype. Current work includes:

- iterative prototyping
- user testing and feedback
- movement and rehab research
- website and documentation development

## Technologies Used

### Software

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React**
- **GitHub Pages** for deployment
- **R for data analysis**

### Design / Documentation

- **Figma** for user manual and design presentation

### Physical Prototyping

- resistance bands / elastic tubing
- webbing
- buckles and D-rings
- sewn fabric components

## Repository Structure

```bash
SurgeHarness/
├── .github/workflows/
├── app/
├── public/
├── README.md
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Installation

To run the site locally:

```bash
git clone https://github.com/JordynRabinowitz/SurgeHarness.git
cd SurgeHarness
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Build / Deployment

This project is configured as a static Next.js export and deployed through GitHub Pages.

```bash
npm run build
```

The production configuration uses a GitHub Pages base path for this repository.

## Usage

Visitors to the website can:

- learn what the Surge Harness is
- explore use cases for climbing, rehab, posture, and training
- view the product story and team
- access project updates and documentation
- join the waitlist for future launch updates

## Research and Design Background

This project grew out of capstone research into climbing injury, rehabilitation, movement control, and wearable resistance systems. It has also been shaped by precedent research, prototype testing, and feedback from users and domain experts in areas like climbing and rehabilitation.

### Testing
As part of the development process for Surge Harness we conducted three rounds of focus group testing and a final climbing meetup that was open to the public.

We had a total of 7 participants consisting of three men and four women. There was a range of climbing experience with one beginner, one competitive climber, and five mid-level climbers. There was a range of shoulder mobility as well from a standard range of mobility to extremely hypermobile. There was also a range of history of shoulder injury from no shoulder injuries to multiple shoulder injuries.

Since these observations are distributed across so few participants we will be looking at distributions. More data is required for statistical significance.

### Aquiring the Data
The data is mainly self-reported and testing participants were free to choose the difficulty of climbs attempted as well as the strength of resistance used with the harness. Participants were also asked to attempt the same climbs with and without the harness. We had a total of 7 participants each doing 8-11 climbs for a total of 59 climbs. Each climb will be analyzed as a discrete data point. Climbs were rated on difficulty on a scale of 1-11 to normalize across different gyms rating systems. All climbs were completed at or below a difficulty of 8.

### Data Distributions
<img width="400" alt="Figure1" src="https://github.com/JordynRabinowitz/SurgeHarness/blob/81c1dace89f8c80c4085a0548be70c221a4502ea/public/images/Figure1.png"/> <img width="400" alt="Figure2" src="https://github.com/JordynRabinowitz/SurgeHarness/blob/f4505f067ce6d979308ac630de361f6c63e119d1/public/images/Figure2.png"/>
<img width="400" alt="Figure3" src="https://github.com/JordynRabinowitz/SurgeHarness/blob/81c1dace89f8c80c4085a0548be70c221a4502ea/public/images/Figure3.png"/> <img width="400" alt="Figure4" src="https://github.com/JordynRabinowitz/SurgeHarness/blob/f4505f067ce6d979308ac630de361f6c63e119d1/public/images/Figure4.png"/>
<img width="400" alt="Figure5" src="https://github.com/JordynRabinowitz/SurgeHarness/blob/1920b37f8322d835c19021b74546ea6543c17c2a/public/images/Figure5.png"/> <img width="400" alt="Figure6" src="https://github.com/JordynRabinowitz/SurgeHarness/blob/4dd74fc9583385db30f3b4f266c7626bbd24760a/public/images/Figure6.png"/>

### Conclusions
From these distributions the average completed climb with the harness was marginally less difficult than without. The difference is minimal and the overall distributions are comparable. There does not seem to be any significant negative affect to using the Surge Harness for climbing. The data set is fairly limited so more testing is encouraged to draw more confident conclusions.

## Team

- **Jordyn Rabinowitz** — Project Manager, Prototyping
- **Arva Syed** — User Testing Lead, Medical Research, Prototyping

## Inspiration / Related References

Some adjacent categories and precedent areas explored during development include:

- climbing training tools
- weighted and resistance apparel
- posture support systems
- rehabilitation and movement feedback devices

## Future Development

Planned next steps include:

- refining the physical prototype
- expanding testing and feedback
- developing movement guides and support resources
- exploring accessories such as replacement band kits
- continuing toward launch-ready documentation and branding

## Notes

This project is a prototype and should not be treated as medical advice. Users recovering from injury should consult a qualified professional before use.

## Credits

Created as part of a 2026 ATLAS / CU Boulder capstone project.

Special thanks to collaborators, testers, and community members who have helped shape the design through feedback and iteration.
