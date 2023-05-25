const storagePrefix = "lp_web_";

const storage = {
  getToken: () => {
    const token = window.localStorage.getItem(
      `${storagePrefix}token`
    ) as string;

    return token && !["null", "undefined"].includes(token) ? token : null;
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, token);
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};

export default storage;
