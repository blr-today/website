import { atcb_action } from "add-to-calendar-button";

function subscribeButton (elementId, icsFile, title, overrides = {}) {
  const config = {
    name: title,
    subscribe: true,
    icsFile: icsFile,
    options: ['Apple','Google','iCal','Outlook.com','Yahoo','Microsoft365','MicrosoftTeams'],
    lightMode: "system",
    listStyle: "dropup-static",
    trigger: "click",
    // The branding looks weird, we instead give credit in lots of other places.
    hideBranding: true,
    ...overrides
  };
  const button = document.getElementById(elementId);
  if (button) {
    button.addEventListener('click', () => atcb_action(config, button));
  }
}

export { subscribeButton };
