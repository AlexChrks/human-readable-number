module.exports = function toReadable (number) {
    let finalArray = [];
    let hundred = 0;
    let decades = 0;
    let units = 0;
    
    if (number == 0) {
        return 'zero';
    }
    
    if (number / 100 >= 1) {
        hundred = Math.floor(number / 100);
        number = number - hundred * 100;
             switch (hundred) {
           case 1: 
           hundred = 'one';
           break;
           case 2: 
           hundred = 'two';
           break;
           case 3: 
           hundred = 'three';
           break;
           case 4: 
           hundred = 'four';
           break;
           case 5: 
           hundred = 'five';
           break;
           case 6: 
           hundred = 'six';
           break;
           case 7: 
           hundred = 'seven';
           break;
           case 8: 
           hundred = 'eight';
           break;
           case 9: 
           hundred = 'nine';
           break;
       }
       finalArray.push(`${hundred} hundred`); 
    }
        
    
    if (number / 10 >= 2) {
        decades = Math.floor(number / 10);
        number = number - (decades * 10);
        switch (decades) {
           case 2: 
           decades = 'twenty';
           break;
           case 3: 
           decades = 'thirty';
           break;
           case 4: 
           decades = 'forty';
           break;
           case 5: 
           decades = 'fifty';
           break;
           case 6: 
           decades = 'sixty';
           break;
           case 7: 
           decades = 'seventy';
           break;
           case 8: 
           decades = 'eighty';
           break;
           case 9: 
           decades = 'ninety';
           break;
       }
        finalArray.push(`${decades}`);
    }
    
    
    if ((number / 10) >=1 && (number / 10) < 2) {
        switch (number) {
            case 10:
            decades = 'ten';
            break;
            case 11:
            decades = 'eleven';
            break;
            case 12:
            decades = 'twelve';
            break;
            case 13:
            decades = 'thirteen';
            break;
            case 14:
            decades = 'fourteen';
            break;
            case 15:
            decades = 'fifteen';
            break;
            case 16:
            decades = 'sixteen';
            break;
            case 17:
            decades = 'seventeen';
            break;
            case 18:
            decades = 'eighteen';
            break;
            case 19:
            decades = 'nineteen';
            break;
        }
        number = null;
        finalArray.push(`${decades}`);
    }
    
    
    if (number >= 1 && number <= 9 ) {
        switch (number) {
            case 1: 
            units = 'one';
            break;
            case 2: 
            units = 'two';
            break;
            case 3: 
            units = 'three';
            break;
            case 4: 
            units = 'four';
            break;
            case 5: 
            units = 'five';
            break;
            case 6: 
            units = 'six';
            break;
            case 7: 
            units = 'seven';
            break;
            case 8: 
            units = 'eight';
            break;
            case 9: 
            units = 'nine';
            break;
        }
        finalArray.push(`${units}`);
    }
    
    return finalArray.join(' ');
     
}
