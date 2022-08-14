export function useDateHelper(){
    const pad = function(num){
        num = num.toString();
        return (num.length < 2) ? "0" + num : num;
    }
    
    const generateyear = function(){
        const current = new Date().getFullYear()
        let year = [current.toString()]
        for(let i = 1; i <= 10; i++){
            year.push((current + i).toString())
        }
        year.unshift('Year')
        return year
    }

    const generatemonth = function(){
        let month = Array.from({length: 12}, (_, i) => pad(i + 1))
        month.unshift('Month')
        return month
    }

    return {
        generateyear,
        generatemonth
    }
}