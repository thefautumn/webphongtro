class LocalStorageManager {
  static instance = null;

  static getInstance() {
    if (!LocalStorageManager.instance) {
      LocalStorageManager.instance = new LocalStorageManager();
    }
    return LocalStorageManager.instance;
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }

  getRoomInfo(postKey) {
    return JSON.parse(localStorage.getItem(postKey)) || {};
  }
}

export default LocalStorageManager;
