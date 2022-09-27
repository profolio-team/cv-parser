export const callFunctionInPage = async (injectableFunction: () => void) => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const curId = tabs[0].id;
    if (curId) {
      chrome.scripting.executeScript({ target: { tabId: curId }, func: injectableFunction, args: [] });
    }
  });
};
