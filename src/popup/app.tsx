import { useColor } from '@/hooks/useColor';

const extensionVersion = chrome.runtime.getManifest().manifest_version;

export const App = () => {
  const { color } = useColor();

  const changeColor = (color?: string) => {
    if (color) {
      document.body.style.background = color;
    }
  };

  const handleClick = async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const curId = tabs[0].id;
      if (curId) {
        console.log(extensionVersion);
        if (extensionVersion === 3) {
          chrome.scripting.executeScript({ target: { tabId: curId }, func: changeColor, args: [color] });
        } else {
          chrome.tabs.executeScript(curId, { code: `document.body.style.background="${color}";` });
        }
      }
    });
  };

  if (!color) {
    return <div>Init color not found</div>;
  }

  return (
    <div style={{ display: 'grid', gap: '25px', width: '500px', height: '300px' }}>
      <form action="/" method="post" style={{ display: 'grid', gap: '10px', width: '100%', height: 'max-content' }}>
        <label htmlFor="cv-file">Upload cv for parsing</label>
        <input type="file" id="cv-file" />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Parse
        </button>
        <div
          onClick={handleClick}
          style={{
            background: color,
            padding: '5px 10px',
            color: 'white'
          }}
        >
          change background color
        </div>
      </form>
    </div>
  );
};
