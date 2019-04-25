import { MainMenuScene } from './main-menu-scene';
import { UIScene } from './ui-scene';
import { GameScene } from './game-scene';
import { BootScene } from './boot-scene';

/**
 * The order of this list matters. Scenes are drawn and evaluated in reverse order.
 * This also means that events are handled in drawing order - if you have multiple active scenes,
 * an input event will go to the last scene in the draw list that is being drawn where that event occurred.
 * Because of that, UI and Menu scenes that exist alongside the game should be drawn after the game scenes.
 */
export default [
  BootScene,
  MainMenuScene,
  GameScene,
  UIScene,
];
