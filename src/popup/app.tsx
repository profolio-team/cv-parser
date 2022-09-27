export const App = () => {
  const color = 'red';

  const changeColor = () => {
    document.body.style.background = 'red';
  };

  const handleClick = async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const curId = tabs[0].id;
      if (curId) {
        chrome.scripting.executeScript({ target: { tabId: curId }, func: changeColor, args: [] });
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
