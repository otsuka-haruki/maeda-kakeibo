export function setToastDataFunctions(bool, message, className) {
const toastObject = {
  bool,
  message,
  className,
};
const toastJSON = JSON.stringify(toastObject);
localStorage.setItem('toast_to_show', toastJSON);
setTimeout(() => {
  location.reload()
}, 1000);
}
