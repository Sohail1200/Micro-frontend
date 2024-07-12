const remoteEntryUrl = "http://localhost:3003/remoteEntry.js";
const scope = "remote-app";
const moduleName = "child";

await __webpack_init_sharing__("default");

await new Promise((resolve, reject) => {
  const element = document.createElement("script");

  element.src = remoteEntryUrl;
  element.type = "text/javascript";
  element.async = true;

  element.onload = () => {
    element.parentElement?.removeChild(element);
    resolve();
  };

  element.onerror = err => {
    element.parentElement?.removeChild(element);
    reject(err);
  };

  document.head.appendChild(element);
});

// Initialize the federated module
const container = window[scope];
await container.init(__webpack_share_scopes__.default);

// Fetch module exposed by the federated module
const factory = await container.get(moduleName);
return factory();