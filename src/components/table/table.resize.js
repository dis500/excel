import {$} from '@core/dom'

export function resizeHandler($root, event) {
    const $target = $(event.target)
    const $parent = $target.closest('[data-type="resizeble"]')
    const coords = $parent.getCoords()
    const type = $target.data.resize
    const targetStartHeight = $target.offsetHeight + 'px'
    const targetStartWidth = $target.offsetWidth + 'px'
    let value

    if (type === 'col') {
        value = $root.offsetHeight - 20 + 'px'
        $target.css({height: value})
    } else {
        value = $root.offsetWidth - 20 + 'px'
        $target.css({width: value})
    }

    document.onmousemove = e => {
        $target.css({opacity: 1})
        if (type === 'col') {
            const delta = e.pageX - event.pageX
            value = coords.width + delta
            $target.css({right: -delta + 'px'})
        } else {
            const delta = e.pageY - event.pageY
            value = coords.height + delta
            $target.css({bottom: -delta + 'px'})
        }
    }

    document.onmouseup = (e) => {
        if (type === 'col') {
            $parent.css({width: value + 'px'})
            
            const collection = $root.findAll(`[data-col="${$parent.data.index}"]`)
            collection.forEach(element => {
                element = $(element)
                element.css({width: value + 'px'})
            }) 
            $target.css({opacity: 0, height: targetStartHeight, right: 0})
        } else {
            $parent.css({height: value + 'px'})
            
            $target.css({opacity: 0, width: targetStartWidth, bottom: 0})
        }
        document.onmousemove = null
        document.onmouseup = null
    }
}
    