import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import{colsCount}  from '@/components/table/table.template'
import {$} from '@core/dom'
import { resizeHandler } from '@/components/table/table.resize'
import {shouldResize, matrix, navigate} from '@/components/table/table.functions'
import {TableSelection} from '@/components/table/TableSelection'

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'input', 'keydown', 'keyup'],
      ...options
    })
    this.flag = ''
    this.selectedCells = []
    this.shiftKey = false
  }

	toHTML() {
		return createTable(20);
  }

  init() {
    super.init()
    this.selection = new TableSelection()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
    $cell.focusing()

    this.$on('Formula:input', text => {
      this.selection.current.text(text)
    }) 

    this.$on('Formula:Enter', () => {
      this.selection.current.focusing()
    }) 
  }
  
  onMousedown(event) {
    if (event.target.dataset.resize) {
      resizeHandler(this.$root, event)
    } else if (event.target.dataset.col) {
      if (!event.shiftKey) {
        const $target = $(event.target)
        this.selection.select($target)
      } else if (event.shiftKey) {
        const $target = $(event.target)
        const startSelector = this.selection.current.id(true)
        const endSelector =  $target.id(true)
        const array = matrix(startSelector, endSelector)
        const $cells = array.map(selector => this.$root.find(`[data-id="${selector}"]`))
        this.selection.selectGroup($cells)
      }
    }
  }

  onKeydown(event) {
    const keys = ['Tab', 'ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Enter']
    const {key} = event

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()
      const $target = $(event.target)
      const id = $target.id(true)
      const selector = navigate(key, id)
      const $cell = this.$root.find(selector)
      this.selection.select($cell)
      $cell.focusing()
    } 
  }
  
  onKeyup(event) {
    const text = event.target.textContent.trim()
    this.$emit('Table:keyup', text) 
  }

  /* onFocusin(event) {
      const $target = $(event.target)
      this.selection.select($target)
  } */

  onInput(event) {
    
  }
}
