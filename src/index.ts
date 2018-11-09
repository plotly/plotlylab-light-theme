import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the PlotlyLab Light
 */
const plugin: JupyterLabPlugin<void> = {
  id: 'plotlylab-light-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    const style = 'plotlylab-light-theme/index.css';
    manager.register({
      name: 'PlotlyLab Light',
      isLight: true,
      load: function() {
        return manager.loadCSS(style)
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};


export default plugin;
