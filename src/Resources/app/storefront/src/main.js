import MyCookiePermission from './my-cookie-permission/my-cookie-permission.plugin';
const PluginManager = window.PluginManager;
PluginManager.override('CookiePermission', MyCookiePermission, '[data-cookie-permission]');
// Necessary for the webpack hot module reloading server
if (module.hot) {
    module.hot.accept();
}