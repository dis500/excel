const CODES = {
    A: 65,
    Z: 90
}

function createRow(number = '', content) {
    return `
        <div class="row">
            <div class="row-info">${number}</div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function createCol(content) {
    return ` 
        <div class="column">
            ${content}
        </div>
    `
}

function createCell() {
    return `
        <div class="cell" contenteditable></div>
    `
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A
    const rows = []
    const cols = []
    const cells = []

    for (let i = 0; i <= colsCount; i++) {
        cols.push(createCol(String.fromCharCode(CODES.A)))
        cells.push(createCell())
        CODES.A++
    }

    rows.push(createRow('', cols.join('')))

    for (let i = 0; i <= rowsCount; i++) {
        rows.push(createRow(i + 1, cells.join('')))
    } 

    return rows.join('')
} 