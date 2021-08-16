export class TableSelection {
    constructor() {
        this.group = []
        this.current = null
    }

    select($cell) {
        this.clear()
        this.group = []
        this.group.push($cell)
        $cell.addClass('selected')
        this.current = $cell
    }

    clear() {
        this.group.forEach($cell => $cell.removeClass('selected'))
        this.group = []
    }

    clearGroup() {
        const $cell = this.group.pop()
        $cell.removeClass('selected')
        return $cell.data.id
    }

    selectGroup(group) {
        this.clear()
        this.group = group
       
        this.group.forEach(($cell) => {
            $cell.addClass('selected')
        })
    }

    get selectedArray() {
        return this.group
    }
}