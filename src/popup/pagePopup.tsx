export const injectableMainFunction = () => {
  const POPUP_ID = 'SV_PARSER_POPUP';

  const createMainPopup = () => {
    const POPUP_ID = 'SV_PARSER_POPUP';
    const popupContainer = document.createElement('div');
    popupContainer.id = POPUP_ID;
    popupContainer.setAttribute(
      'style',
      `
        position: fixed;
        z-index: 999999999;
        right: 15px;
        top: 15px;
        width: 600px;
        height: max-content;
        background: white;
        color: #111;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
  `
    );
    popupContainer.innerHTML = `
    <div style="display: grid; gap: 25px; padding: 15px">
        <form action="/" method="post" style="display: grid; gap: 10px; width: 100%; height: max-content">
            <label htmlFor="cv-file" style="color:#111">Upload cv for parsing</label>
            <input type="file" id="cv-file" />

            <button type="submit" style="padding: 10px 20px">
                Parse
            </button>
        </form>
    </div>

    `;
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
