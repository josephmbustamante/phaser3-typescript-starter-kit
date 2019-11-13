# Phaser 3 + TypeScript Starter Kit

This repository contains all the code necessary to start making a game in Phaser 3 using TypeScript.

The code contained here is an expansion of what is created in [this blog post that I wrote.](https://spin.atomicobject.com/2019/07/13/phaser-3-typescript-tutorial/)
This repository contains all the code that I go through in that tutorial, plus some additional things to help get your game off the ground. Notably, besides a loading screen and main menu screen, an example sprite is included that can be moved around with the arrow keys.

**Update:** The starter kit has been updated to work with Phaser 3.20 and TypeScript 3.7.

## How to Use

You should be able to clone this repository and run `yarn install` to get any of the necessary dependencies.
Once you're done installing, simply run `yarn dev` and the game should begin to run. You'll have to open an internet browser and go to the port that the game is running on (usually `localhost:8080` by default).

The game opens up to a main menu. Only the "Start Game" button does anything - the other two are placeholders. If you click "Start Game", you'll be taken to a black screen with a small sprite. You can move the sprite with the arrow keys. This starter kit is far from feature complete, but it's meant to take away the boilerplate that can come with getting a Phaser 3 + TypeScript project up-and-running.

## Contributions

I don't actively update this repository unless major breaking changes occur in either Phaser or TypeScript. Any PRs, whether to fix bugs or add new features, are welcomed and encouraged.

A big thank-you to these people who have contributed PRs to help keep this starter kit up-to-date:
 - @tailot - fixing issues with the Phaser 3.17 upgrade and getting the types aligned.

## Future Optimizations

I won't be able to tackle these myself, unfortunately, but feel free to open a PR or explore these on your own:

- Switch from TSLint to ESLint. TSLint has been deprecated in favor of ESLint for all TypeScript projects.
- Sample controls for different types of games. Currently, arrow key movement is provided, but it would be nice if there were examples of the physics engine, jumping, or controlling a character in a different type of game, like a top-down one.

## Further Reading

The [official Phaser documentation](https://phaser.io/learn) has lots of great tutorials, and the [Phaser Labs page](https://labs.phaser.io/) is full of great examples of using any aspect of Phaser.

I've written a few small games in Phaser. One was a game I created with a team of people for [Ludum Dare 44 called Root Maker](https://ldjam.com/events/ludum-dare/44/root-maker). You can find a great [post-mortem of that game here](https://spin.atomicobject.com/2019/05/11/ludum-dare-44/).
Additionally, Root Maker is open source. To see what a larger project might look like in Phaser (albeit one that doesn't use the physics system or much in the way of graphics), [you can find the source code here.](https://github.com/josephmbustamante/Root-Maker)
