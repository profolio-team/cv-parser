import { callFunctionInPage } from '@/utils/callFunctionInPage';

import { injectableMainFunction } from './pagePopup';

export const App = () => {
  callFunctionInPage(injectableMainFunction);
  setTimeout(() => {
    window.close();
  }, 10);

  return <></>;
};
