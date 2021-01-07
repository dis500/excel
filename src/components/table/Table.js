import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import {$} from '@core/dom'
import { resizeHandler } from '@/components/table/table.resize'
import {shouldResize} from '@/components/table/table.functions'

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown', 'mousemove']
    })
  }

	toHTML() {
		return createTable(20);
  }
  
  onMousedown(event) {
    if (event.target.dataset.resize) {
      resizeHandler(this.$root, event)
    }
  }
  
}
