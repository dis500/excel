import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...options
        })
    }

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `
    }

    init() {
        super.init()
        const input = this.$root.find('.input')
        
        this.$on('Table:keyup', text => {
            input.text(text)
        })
    }

    onInput(event) {
       const text = event.target.textContent.trim()
       this.$emit('Formula:input', text)
    }

    onKeydown(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            this.$emit('Formula:Enter')
        }
    }
}
