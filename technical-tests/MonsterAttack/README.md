# NOTES

## Packages

- type-script
- styled-components
- react testing library
- jest
- enzyme

## Patterns
- Functional Components
- React context
- Hooks

## Issues

Run out of time and wouldn't be able to look at this again for a few days so submitting

Things I would improve:

- End game flag/reset game.  Fairly easy to do as everything lives in context
- More tests
- Better type checking
- Might not pass game status into dashboard
- Limited to only two players, could easily make this a multiple-player game with some better inheritance


# INSTRUCTIONS

You will be coding a simple “Battle Simulator” for an RPG. You should spend around 1-2 hours completing this.
The simulator should be developed in JavaScript or TypeScript using React. It is preferred but not required to use
reducer-based state management (e.g useReducer, Redux). You may use any other libraries or UI frameworks you
wish so long as you have implemented the core requirements yourself.
It is up to you how to present things as long as it is clear; any additional visual polish or animation gets bonus
points and is an opportunity to demonstrate your skill in different areas, but are completely optional as long as
the specification is satisfied. You can get creative with your solution – we think this is a great quality to have in
teammates!

At the in-person interview we will be asking some questions about your solution as well as requiring you to make
some additional changes to the code.

Your solution can be provided as a zip/rar file, or as a link to a github repository. Please ensure to not include the
node_modules folder as these contain thousands of files and are very slow to unzip.

THE SPECIFICATION

In this game you (The Player) are fighting some kind of monster (your choice). Both characters begin with 100
health points. The two health values must be represented somehow on the screen.
The UI consists of an “Attack!” button. When you click this, the following sequence should happen:

1. Two dice are rolled for The Player
2. Two dice are rolled for The Monster
All dice are 6-sided. For each roll pick a random number between 1 and 6. The results of all 4 rolls should
be displayed.
3. Whoever scores the lowest total will take damage and lose health points. The amount of health they
lose will be the difference between the two rolls. So: if the player rolls a 2 and a 3, and the monster rolls
a 4 and a 5, the player will take (4+5)-(3+2) = 4 damage.
4. Now the player can attack again when they like

If The Player loses all their health the game stops and “Game Over” is displayed in large red text.
If the monster loses all their health the game ends and “You Win” is displayed in large green text.

We have not specified exactly how things should be presented. You should try to represent this sequence of
events in such a way that the player can easily understand what is happening. We have provided a wireframe as a
guide to how the screen might look, but if you have a better idea then go for it!
This is a developer position so we are not judging on graphic design ability (although it is considered a bonus),
but we are very interested in seeing your ability with CSS and HTML.
