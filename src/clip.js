const addDiv = (text) =>
  document.body.insertAdjacentHTML("afterend", `<div>${text}</div>`);

let prevClipText = "";

const getClip = () =>
  navigator.clipboard
    .readText()
    .then((clipText) => {
      if (prevClipText !== clipText) {
        prevClipText = clipText;
        addDiv(clipText);
        const decodeString = decodeURIComponent(escape(window.atob(clipText)));
        addDiv(decodeString);
      }
    })
    .catch(() => console.error("failed"));

setInterval(getClip, 1000);
