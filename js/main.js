'use strict';
class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  show(el) {
    const elBody = el.querySelector('.accordion__body');
    if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
      return;
    }
    elBody.style['display'] = 'block';
    const height = elBody.offsetHeight;
    elBody.style['height'] = 0;
    elBody.style['overflow'] = 'hidden';
    elBody.style['transition'] = `height ${this._config.duration}ms ease`;
    elBody.classList.add('collapsing');
    el.classList.add('accordion__item_slidedown');
    elBody.offsetHeight;
    elBody.style['height'] = `${height}px`;
    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      el.classList.remove('accordion__item_slidedown');
      elBody.classList.add('collapse');
      el.classList.add('accordion__item_show');
      elBody.style['display'] = '';
      elBody.style['height'] = '';
      elBody.style['transition'] = '';
      elBody.style['overflow'] = '';
    }, this._config.duration);
  }
  hide(el) {
    const elBody = el.querySelector('.accordion__body');
    if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
      return;
    }
    elBody.style['height'] = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style['display'] = 'block';
    elBody.style['height'] = 0;
    elBody.style['overflow'] = 'hidden';
    elBody.style['transition'] = `height ${this._config.duration}ms ease`;
    elBody.classList.remove('collapse');
    el.classList.remove('accordion__item_show');
    elBody.classList.add('collapsing');
    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      elBody.classList.add('collapse');
      elBody.style['display'] = '';
      elBody.style['height'] = '';
      elBody.style['transition'] = '';
      elBody.style['overflow'] = '';
    }, this._config.duration);
  }
  toggle(el) {
    el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
  }
}

new ItcAccordion(document.querySelector('.accordion'), {
  alwaysOpen: true
});

/*-------------------------------------------*/
/*                  form                     */
/*-------------------------------------------*/
// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);
//   }

//   function formSend(form) {
//     let error = 0;
//     let formReq = document.querySelectorAll(_req);

//     for (let index = 0; index < formReq.length; index++) {
//       const input = formReq[index];
//       formReoveError(input);

//       if (input.classList.contains('_email')) {
//         if (emailTest(input)){
//           formAddError(input);
//           error++;
//         }
//       } else if(input.getAttribute("type") === "checkbox" && input.cheked === false) {
//           formAddError(input);
//           error++;
//       } else {
//         if (input.value === '') {
//           formAddError(input);
//           error++;
//         }
//       }
      

//     }
//   }
//   function formAddError(input) {
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
//   }
//   function formReoveError(input) {
//     input.parentElement.classList.remove('_error');
//     input.classList.remove('_error');
//   }
//   function emailTest(input) {
//     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//   }
// });