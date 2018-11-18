import { html } from './node_modules/lit-html/lit-html.js';

const lockedPage = (validate) => {
  const onSubmit = () => {
    let pw = document.getElementById('code').value
    return validate(pw)
  }

  return html`
    <style>
      input[type="number"] {
        background-color: transparent;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        font-size: 18px;
        font-family: system-ui;
        color: #ECECEC;
        text-align: center;
      }

      input[type="submit"] {
        color: #ECECEC;
        font-family: 'Kaushan Script', cursive;
      }
    </style>

    <div class="content">
      <h1>Enter Code</h1>
      <form action="#" @submit=${onSubmit}>
        <input type="number" id="code">
        <input type="submit" value="OK">
      </form>
    </div>
  `
}

export { lockedPage }
