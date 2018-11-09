"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apputils_1 = require("@jupyterlab/apputils");
/**
 * A plugin for the PlotlyLab Light
 */
const plugin = {
    id: 'plotlylab-light-theme:plugin',
    requires: [apputils_1.IThemeManager],
    activate: function (app, manager) {
        const style = 'plotlylab-light-theme/index.css';
        manager.register({
            name: 'PlotlyLab Light',
            isLight: true,
            load: function () {
                return manager.loadCSS(style);
            },
            unload: function () {
                return Promise.resolve(void 0);
            }
        });
    },
    autoStart: true
};
exports.default = plugin;
