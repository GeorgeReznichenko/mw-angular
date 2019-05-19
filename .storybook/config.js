import { configure } from '@storybook/angular';

function loadStories() {
  const req = require.context('./stories', true, /\.story\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
