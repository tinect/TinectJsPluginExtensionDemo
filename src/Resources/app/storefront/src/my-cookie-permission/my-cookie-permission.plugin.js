import CookiePermissionPlugin from 'src/plugin/cookie/cookie-permission.plugin';
import CookieStorage from 'src/helper/storage/cookie-storage.helper';
export default class MyCookiePermission extends CookiePermissionPlugin {
    init() {
        CookieStorage.setItem(this.options.cookieName, '');
        super.init();
    }
}