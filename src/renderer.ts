/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
// import Mousetrap from 'mousetrap';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

// Bind Ctrl+Shift+I to toggle DevTools Browser Inspector
// Mousetrap.bind('ctrl+shift+i', () => {
//     const devTools = document.querySelector('.dev-tools');
//     if (devTools) {
//         devTools.classList.toggle('hidden');
//     } else {
//         console.error('Dev tools element not found');
//     }
// });

// Add this to the end of the existing file
import './app';

