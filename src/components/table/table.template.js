const CODES = {
    A: 65,
    Z: 90
}

function createRow(number = '', content) {
    const resize = number ? `<div class="row-resize" data-resize="row"></div>` : ''
    return `
        <div class="row" data-type="resizeble">
            <div class="row-info" data-index="${number}">
                ${number}
                ${resize}
            </div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function createCol(content, index) {
    return ` 
        <div class="column" data-type="resizeble" data-index="${index}">
            ${content}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}


function createCell(col, row) {
    return `
        <div class="cell" contenteditable data-col=${col} data-id=${row}:${col}></div>
    `
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A
    let count = CODES.A
    const rows = []
    const cols = []

    for (let i = 0; i <= colsCount; i++) {
        cols.push(createCol(String.fromCharCode(count), i))
        count++
    }

    rows.push(createRow('', cols.join('')))

    for (let i = 0; i <= rowsCount; i++) {
        const cells = []
        for (let j = 0; j <= colsCount; j++) {
            cells.push(createCell(j, i))
        }
        rows.push(createRow(i + 1, cells.join('')))
    } 
    
    return rows.join('')
}

export function colsCount() {
    const colsCount = CODES.Z - CODES.A
    return colsCount
}