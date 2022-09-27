export const injectableMainFunction = () => {
  const POPUP_ID = 'SV_PARSER_POPUP';

  const createMainPopup = () => {
    const POPUP_ID = 'SV_PARSER_POPUP';
    const popupContainer = document.createElement('div');
    const shadow = popupContainer.attachShadow({ mode: 'closed' });
    popupContainer.id = POPUP_ID;
    popupContainer.setAttribute(
      'style',
      `
        position: fixed;
        z-index: 999999999;
        right: 0;
        top: 0;
        width: 600px;
        height: 100vh;
        background: white;
        color: #111;
        box-shadow: -10px 0 38px rgba(0, 0, 0, 0.7), 0 15px 12px rgba(0, 0, 0, 0.4);
  `
    );

    const wrapper = document.createElement('iframe');
    wrapper.src = `https://profolio.dev/parser/public`;
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.border = 'none';

    shadow.appendChild(wrapper);
    document.body.appendChild(popupContainer);
  };

  const destroyMainPopup = () => {
    const POPUP_ID = 'SV_PARSER_POPUP';
    const popupContainer = document.querySelector(`#${POPUP_ID}`);
    if (popupContainer) {
      popupContainer.remove();
    }
  };

  const togglePagePopup = () => {
    const isExistsPopup = !!document.querySelector(`#${POPUP_ID}`);

    if (isExistsPopup) {
      destroyMainPopup();
    } else {
      createMainPopup();
    }
  };

  togglePagePopup();
};
