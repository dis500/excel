import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
    static className = 'excel__header'
    
    constructor($root, options) {
      super($root, {
        name: 'Formula',
        listeners: ['mousedown'],
        ...options
      })
    }

    toHTML() {
        return `<input type="text" class="input" value="Новая таблица" />

        <div>
  
          <div class="button">
            <button data-id="btn">Загрузить</button>
          </div>

          <div class="button">
            <i class="material-icons">delete</i>
          </div>
  
          <div class="button">
            <i class="material-icons">exit_to_app</i>
          </div>
  
        </div>`
    }

    onMousedown(event) {
      
    }
}


