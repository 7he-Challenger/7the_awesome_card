export function useCreditCardValidation(){
    return function isNumberKey(e){
        var charCode = (e.which) ? e.which : e.keyCode
        if((charCode > 31 && (charCode < 48 || charCode > 57))){
            e.preventDefault()
            return false
        }

        return true
    }
}

export function useformatCreditCard(){
    return function cc_format(value) {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || ''
        var parts = []
        for (let i=0, len=match.length; i<len; i+=4) {
          parts.push(match.substring(i, i+4))
        }
        if (parts.length) {
          return parts.join(' ')
        } else {
          return value
        }
    }
}

export function useFormatStringCard(){
    return function cc_format(value) {
        var v = value.replace(/\s+/g, '')
        var matches = v.match(/.{4,16}/g);
        var match = matches && matches[0] || ''
        var parts = []
        for (let i=0, len=match.length; i<len; i+=4) {
          parts.push(match.substring(i, i+4))
        }
        if (parts.length) {
          return parts.join(' ')
        } else {
          return value
        }
    }
}

export function fillCardNumber(){
    const format = useFormatStringCard()

    return function fill(str){
        str = str.replace(/\s+/g, '')
        let forFill = str.length < 16 ? new Array(17 - str.length).join('#') : ''
        return format(str + forFill).split(' ')
    }
}