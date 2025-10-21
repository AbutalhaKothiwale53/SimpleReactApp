// Monkey-patch localStorage.setItem/removeItem for 'users' key to dispatch
// a custom event so same-window components can react when localStorage changes.
const origSetItem = Storage.prototype.setItem;
const origRemoveItem = Storage.prototype.removeItem;

Storage.prototype.setItem = function (key, value) {
  origSetItem.apply(this, [key, value]);
  if (key === 'users') {
    try {
      window.dispatchEvent(new CustomEvent('usersChanged', { detail: { key, value } }));
    } catch (e) {
      // ignore
    }
  }
};

Storage.prototype.removeItem = function (key) {
  origRemoveItem.apply(this, [key]);
  if (key === 'users') {
    try {
      window.dispatchEvent(new CustomEvent('usersChanged', { detail: { key, value: null } }));
    } catch (e) {
      // ignore
    }
  }
};

export default null;
