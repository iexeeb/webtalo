const addDiv = (text) =>
  document.body.insertAdjacentHTML("afterend", `<div>${text}</div>`);

const b64DecodeUnicode = (str) =>
  decodeURIComponent(
    [...atob(str)]
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

let prevClipText = "";

const getClip = () =>
  navigator.clipboard.readText().then((clipText) => {
    if (prevClipText !== clipText) {
      prevClipText = clipText;
      addDiv(clipText);
      const decodeString = b64DecodeUnicode(clipText);
      addDiv(decodeString);
    }
  });

setInterval(getClip, 1000);
