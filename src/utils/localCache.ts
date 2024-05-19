class LocalCache {
    setCache(key: string, value: any) {
        window.localStorage.setItem(key, value);
    }
    getCache(key: string) {
        const value = window.localStorage.getItem(key);
        console.log(value)
        return value
        // if (value) {
        //     console.log(JSON.parse(value))
        //     return JSON.parse(value);
        // }
    }
    deleteCache(key: string) {
        window.localStorage.removeItem(key);
    }
    clearCache() {
        window.localStorage.clear();
    }
}
export default new LocalCache()