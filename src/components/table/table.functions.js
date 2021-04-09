export function shouldResize (event) {
    return event.target.dataset.resize
}

export function matrix(start, end) {
    const result = []
   
    if (start.row > end.row) {
      [start.row, end.row] = [end.row, start.row]
    }
    if (start.col > end.col) {
      [start.col, end.col] = [end.col, start.col]
    }
  
    const rows = []
    for (let index = start.row; index <= end.row; index++) {
      rows.push(index)
    }
  
    const cols = []
    for (let index = start.col; index <= end.col; index++) {
      cols.push(index)
    }
    
    for (let row of rows) {
      for (let col of cols) {
        result.push('' + row + ':' + col + '')
      }
    }
    
    return result
  }

export function navigate(keys, {row, col}) {
    const minValue = 0
  
    switch (keys) {
      case 'Enter': 
      case 'ArrowDown':
        row++ 
        break;
      case 'ArrowUp':
        row = row > 0 ? row - 1 : minValue
        break
      case 'Tab': 
      case 'ArrowRight':
        col++
        break
      case 'ArrowLeft':
        col = col > 0 ? col - 1 : minValue
        break
    }
  
    return `[data-id="${row}:${col}"]`
  } 
