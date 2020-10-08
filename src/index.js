module.exports = function toReadable(number) {
    let numToArr = ('' + number).split('')
    if (numToArr.length === 1 && numToArr[0] === '0') return 'zero'
    let getHumanNum = (hn) => {
        if (hn === '1') return 'one'
        else if (hn === '2') return 'two'
        else if (hn === '3') return 'three'
        else if (hn === '4') return 'four'
        else if (hn === '5') return 'five'
        else if (hn === '6') return 'six'
        else if (hn === '7') return 'seven'
        else if (hn === '8') return 'eight'
        else if (hn === '9') return 'nine'
        else if (hn === '0') return ''
    }
    let getDoubleNumber = (arr) => {
        if (arr[0] === '0' && arr[1] === '0') return ''
        else if (arr[0] === '1' && arr[1] === '0') return 'ten'
        else if (arr[0] === '1' && arr[1] === '1') return 'eleven'
        else if (arr[0] === '1' && arr[1] === '2') return 'twelve'
        else if (arr[0] === '1' && arr[1] === '3') return 'thirteen'
        else if (arr[0] === '1' && arr[1] === '4') return 'fourteen'
        else if (arr[0] === '1' && arr[1] === '5') return 'fifteen'
        else if (arr[0] === '1' && arr[1] === '6') return 'sixteen'
        else if (arr[0] === '1' && arr[1] === '7') return 'seventeen'
        else if (arr[0] === '1' && arr[1] === '8') return 'eighteen'
        else if (arr[0] === '1' && arr[1] === '9') return 'nineteen'
        else if (arr[0] === '2') return ('twenty ' + getHumanNum(arr[1])).trim()
        else if (arr[0] === '3') return ('thirty ' + getHumanNum(arr[1])).trim()
        else if (arr[0] === '4') return ('forty ' + getHumanNum(arr[1])).trim()
        else if (arr[0] === '5') return ('fifty ' + getHumanNum(arr[1])).trim()
        else if (arr[0] === '8') return ('eighty ' + getHumanNum(arr[1])).trim()
        else return ((getHumanNum(arr[0]) === '' ? '' : (getHumanNum(arr[0]) + 'ty ')) + getHumanNum(arr[1])).trim()
    }
    let getHundred = (h) => {
        return getHumanNum(h) + ' hundred '
    }
    if (numToArr.length === 1) return getHumanNum(numToArr[0])
    else if (numToArr.length === 2) return getDoubleNumber(numToArr)
    else return (getHundred(numToArr.shift()) + getDoubleNumber(numToArr)).trim()
}
