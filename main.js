import { render } from './node_modules/lit-html/lit-html.js';

import { lockedPage } from './locked-page.js';
import { cluePage } from './clue-page.js';

function validate(pw) {
  if (pw === '181109') {
    render(cluePage(), document.body);
    return true;
  } else {
    return false;
  }
}

render(lockedPage(validate), document.body);
