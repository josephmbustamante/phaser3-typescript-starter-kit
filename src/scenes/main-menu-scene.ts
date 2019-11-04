import { MenuButton } from '../ui/menu-button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'MainMenu',
};

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.add.text(100, 50, 'Sample', { fill: '#FFFFFF' }).setFontSize(24);
    new MenuButton(this, 100, 150, 'Start Game', () => {
      this.scene.start('Game');
    });
    new MenuButton(this, 100, 200, 'Settings', () => console.log('settings button clicked'));
    new MenuButton(this, 100, 250, 'Help', () => console.log('help button clicked'));
  }
}
