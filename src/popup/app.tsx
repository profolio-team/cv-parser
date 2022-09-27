import { callFunctionInPage } from '@/utils/callFunctionInPage';

export const App = () => {
  const color = 'red';

  const changeColor = () => {
    document.body.style.background = 'red';
  };

  return (
    <div style={{ display: 'grid', gap: '25px', width: '500px', height: '300px' }}>
      <form action="/" method="post" style={{ display: 'grid', gap: '10px', width: '100%', height: 'max-content' }}>
        <label htmlFor="cv-file">Upload cv for parsing</label>
        <input type="file" id="cv-file" />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Parse
        </button>
        <div
          onClick={() => callFunctionInPage(changeColor)}
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
