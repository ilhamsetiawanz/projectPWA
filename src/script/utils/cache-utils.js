import { configData } from '../configuration/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    await cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((name) => name !== configData.CACHE_NAME)
        .map((filteredName) => caches.delete(filteredName)),
    );
  },

  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      await this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },

  async _openCache() {
    return caches.open(configData.CACHE_NAME);
  },

  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  },

  async _addCache(request) {
    try {
      const cache = await this._openCache();
      const modifiedRequest = new Request(request.url, {
        headers: configData.CACHE_HEADERS,
        method: request.method,
        mode: request.mode,
        credentials: request.credentials,
        redirect: request.redirect,
        referrer: request.referrer,
        body: request.body,
        bodyUsed: request.bodyUsed,
      });
      await cache.add(modifiedRequest);
    } catch (error) {
      console.error('Gagal menambahkan entri ke dalam cache:', error);
    }
  },
};

export default CacheHelper;
