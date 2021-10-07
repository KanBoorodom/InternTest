/* 
    Open internTest.html in browser and open Developer Tools to test function below.
    Thank you
    Kan Boorodom
*/

const firstQuestion = (arr,sum) => {
    console.log('Input array value: ' + arr)
    console.log('Sum value ' + sum)
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === sum){
                console.log(`${arr[i]} + ${arr[j]}`)
                console.log('-------------')
                arr[i] = ''
                arr[j] = ''
            }
        }
    }
}

/* Test case
firstQuestion([1,2,3,4,5,6],7)
firstQuestion([1,2,3,4,5],5)
firstQuestion([1,2,3,4,5],4) 
*/
/*****Second Question ***************************/ 
const secondQuestion = (firstS,secondS) => {
        /* ถ้า size ไม่เท่ายังไงก็ Not equal */
        if(firstS.length !== secondS.length){
            console.log('Not same')
            console.log('-------------------')
            return false
        } 
        /* ปรับให้เป็นพิมพ์เล็กเหมือนกันให้หมดก่อน */
        let temp1 = firstS.toLowerCase(),
        temp2 = secondS.toLowerCase(),
        tempArray1 = [],
        tempArray2 = []

        console.log(temp1)
        console.log(temp2)

        /* turn string to array bc string is immutable  */
        for(let i = 0; i < temp1.length; i++){
            tempArray1.push(temp1[i])
            tempArray2.push(temp2[i])
        }
        for(let i = 0; i < tempArray1.length; i++){
            for(let j = 0; j < tempArray1.length; j++){
                if(tempArray1[i] === tempArray2[j]){
                    /* ทำตัวที่เหมือนกันให้เป็น '' เพื่อไม่ให้เช็คซ้ำ */
                    tempArray2[j] = ''
                    break
                }
                else if( j === (tempArray1.length - 1)){
                    console.log('Not same')
                    console.log('-------------------')
                    return false
                }
            }
        }
        console.log('Same')
        console.log('-------------------')
        return true
}
/* Test Case
secondQuestion('hello','olleh')
secondQuestion('Mary','ymra')
secondQuestion('Mary','Army')
secondQuestion('Maryy','Armyy')
secondQuestion('Maryy','Army')
secondQuestion('Marym','Armyy') 
*/

/*****Second Question with built in function***************************/ 
const secondQuestionUseBuiltIn = (firstS,secondS) => {
    if(firstS.length !== secondS.length){
        console.log('Not same')
        console.log('-------------------')
        return false
    } 
    console.log(firstS)
    console.log(secondS)
    /* Turn string to array for sorting */
    let temp1 = firstS.toLowerCase().split('').sort(),
    temp2 = secondS.toLowerCase().split('').sort()
    /* Use .join to turn array to string for compare */
    if(temp1.join('') === temp2.join('')){
        console.log('Same')
        console.log('-------------------')
        return true
    }
    console.log('Not same')
    console.log('-------------------')
    return false
}
/*  Test case 
secondQuestionUseBuiltIn('Mary','ymra')
secondQuestionUseBuiltIn('Mary','Army')
secondQuestionUseBuiltIn('Maryy','Armyy')
secondQuestionUseBuiltIn('Maryy','Army')
secondQuestionUseBuiltIn('Marym','Armyy') 
*/

/*****Third Question ***************************/ 
const thirdQuestion = (arr)=>{
    let continuous = [],
    temp = []
    for(let i = 0; i < arr.length; i++){
        if( arr[i+1] === (arr[i]+1) ){
            continuous.push(arr[i])
            continuous.push(arr[i+1])
        }
        else{
            if(continuous.length !== 0){
                let temp2 = continuous[0] + '-' + continuous[continuous.length - 1]
                temp.push(temp2)
                continuous = []
            }
            else{
                temp.push(arr[i])
            }
        }
    }
    let final = ''
    for(let i = 0; i<temp.length; i++){
        if(i !== 0){
            final = final + ',' + temp[i]
        }
        else{
            final = final + temp[i]
        }
    }
    console.log(final)

    /*  
        Optional way *****
        You can use built in .toString() to turn array to string with comma sepperate each item in array
        let final = temp.toString()  
        console.log(final)    
    */
}
/* Test case 
thirdQuestion([1,2,3,4,5,6,7,8,9,10])
thirdQuestion([1, 4, 6, 9, 10, 14, 16, 17])
*/

/*****Fouth Question ***************************/ 
const fourthQuestion = () => {
    let totalFloor = prompt('Enter floor')
    while( isNaN(totalFloor) || totalFloor.trim().length === 0 ){
        alert('Please enter a number...')
        totalFloor = prompt('Enter floor')
    }
    totalFloor = parseInt(totalFloor)
    /* หาขนาดความยาวของ * ในแต่ละชั้น */
    let floorLength = totalFloor + totalFloor - 1

    for(let i = 0;i < totalFloor; i++){
        let temp = ''
        for(let j = 0; j < floorLength; j++){
            if( j >= i && j < (floorLength - i) ){
                temp+='*'
            }
            else{
                temp+=' '
            }
        }
        console.log(temp)
    }
}
fourthQuestion()

/*****Fifth Question ***************************/ 
const fifthQuestion = () => {
    let totalFloor = prompt('Enter floor')
    while( isNaN(totalFloor) || totalFloor.trim().length === 0 ){
        alert('Please enter a number...')
        totalFloor = prompt('Enter floor')
    }
    totalFloor = parseInt(totalFloor)
    let floorLength = totalFloor + totalFloor - 1,
    mid = Math.ceil(floorLength / 2), /* หาจุดกลาง */
    value = 0,
    temp = ''
    for(let i = 0; i < totalFloor; i++){
        for(let j = 1;j <= floorLength; j++){
            /* ชั้นเลขคู่ของ input เลขคู่ และ ชั้นเลขคี่ของ input เลขคี่ จะตกตรงนี้ */
            if( ( ( i % 2 === 0 ) && ( totalFloor % 2 === 0 ) ) || ( ( i % 2 !== 0 ) && ( totalFloor % 2 !== 0 ) ) ) {
                /* ช่วงของการพิมพ์ค่า value */
                if( ( j >= (mid - i ) ) && ( j <= (mid + i ) )  ){
                    /* จะพิมพ์ค่า value แค่ที่ column เลขคู่เท่านั้น col อื่นจะเป็น ' ' */
                    if( j % 2 === 0){
                        value = value + 1
                        if(value === 10){value = 0}
                        temp = temp + value
                    }
                    else{temp = temp + ' '}
                }
                /* นอกช่วงจะพิมพ์ ' ' ทั้งหมด */
                else{temp = temp + ' '}
            }

            /* ชั้นเลขคี่ของ input เลขคู่ และ ชั้นเลขคู่ของ input เลขคี่ จะตกตรงนี้ */
            else{
                /* ช่วงของการพิมพ์ค่า value */
                if( ( j >= (mid - i ) ) && ( j <= (mid + i ) )  ){             
                    /* จะพิมพ์ค่า value แค่ที่ column เลขคี่ท่านั้น col อื่นจะเป็น ' ' */
                    if( j % 2 !== 0){
                        value = value + 1
                        if(value === 10){value = 0}
                        temp = temp + value
                    }
                    else{temp = temp + ' '}
                }
                else{temp = temp + ' '}
            }
        }
        console.log(temp)
        temp = ''
    }
}
/* 
fifthQuestion() 
*/


/*****Sixth Question ***************************/ 
/* เรียงมากไปน้อย */
const sixthQuestion = () => {
    let totalInput = []
    for(let i = 0;i<10;i++){
        let input = prompt('Enter a number')
        while( isNaN(input) || input.trim().length === 0 ){
            alert('Please enter a number...')
            input = prompt('Enter a number')
        }
        totalInput.push( parseInt(input))
    }

    for(let i =0;i<10;i++){
        for(let j = i+1;j<10;j++){
            if(totalInput[j] > totalInput[i]){
                let temp = totalInput[i]
                totalInput[i] = totalInput[j]
                totalInput[j] = temp
            }
        }
    }
    console.log(totalInput)
}

/* sixthQuestion()  */


/*****Seventh Question ***************************/ 
/* 
 1 hour = 3600 seconds
 1 minute = 60 seconds
*/
const seventhQuestion = () => {
    let second = prompt('Enter total second')
    while( isNaN(second) || second.trim().length === 0 ){
        alert('Please enter a number...')
        second = prompt('Enter total second')
    }
    second = parseInt(second)

    /* หารแบบปัดเศษลงเก็บเป็นชั่วโมง */
    let hours = Math.floor(second / 3600)
    if(hours < 10){hours = `0${hours}`}

    /* ใช้เศษชั่วโมงมาหารปัดเศษเก็บนาที */
    let minutes = Math.floor( (second % 3600) / 60)
    if(minutes < 10){minutes = `0${minutes}`}

    /* หาวินาที */
    let seconds = second % 60
    if(seconds < 10){seconds = `0${seconds}`}

    console.log(`${hours}:${minutes}:${seconds}`)
}

/* seventhQuestion() */

/*****Eigth Question ***************************/ 
const eigthQuestion = () => {
    let checkPrice = true
    while(checkPrice){
        var itemPrice = prompt('Please enter your item price..')
        if( isNaN(itemPrice) || itemPrice.trim().length === 0){
            alert('Please enter a number')
        }
        else if(itemPrice > 1000){
            alert('Item price must below 1,000')
        }
        else{
            itemPrice = parseInt(itemPrice)
            checkPrice = false
        }
    }

    let returnMoney = 1000 - itemPrice
    let fiveHundred = Math.floor(returnMoney / 500)
    let oneHundred = Math.floor( (returnMoney % 500) / 100 )
    let fifty = Math.floor( (returnMoney % 100) / 50 )
    let ten = Math.floor( (returnMoney % 50) / 10 )
    let five  = Math.floor( (returnMoney % 10) / 5 )
    let one = returnMoney % 5
    console.log('Item price is '+itemPrice)
    console.log('Your return is '+returnMoney)
    console.log('500: '+ fiveHundred)
    console.log('100: '+ oneHundred)
    console.log('50: '+ fifty)
    console.log('10: '+ ten)
    console.log('5: '+ five)
    console.log('1: '+ one)
}

/* eigthQuestion() */


/*****Ninth Question ***************************/ 
const ninthQuestion = (word) => {
    let temp = ''
    let storeWord = ''
    console.log(word)
    for(let i = 0; i < word.length; i++){
        if(word[i] !== ' '){
            temp = temp + word[i] 
        }
        /* ถ้าใช้ else ตัวสุดท้ายจะไม่โดนเก็บมา reverse */
        if(word[i] === ' ' || i === word.length - 1)
        {
            for(let i = temp.length - 1; i >= 0; i-- ){
                storeWord = storeWord + temp[i]
            }
            if(i !== word.length - 1){storeWord = storeWord + ' '}
            temp = ''
        }
    }
    console.log(storeWord)
}
/* Test case 
ninthQuestion('hello world')
ninthQuestion('Welcome to clicknext')
*/

/*****Ninth Question with built in function***************************/ 
const ninthQuestionUseBuiltIn = (word) => {
    let temp = ''
    console.log(word)
    word = word.split(' ') /* สร้าง array word แต่ละคำ */
    for(let i of word){
        i = i.split('') /* สร้าง array ของแต่ละตัวอักษร */
        i = i.reverse() 
        i = i.join('') /* รวมเป็น string */
        temp+=i
        if(word.indexOf(i) !== word.length -1){temp+=' '} /* space between each word */
    }
    console.log(temp)
}
/* Test case
ninthQuestionUseBuiltIn('hello world')
ninthQuestionUseBuiltIn('Welcome to clicknext')
*/

/*****Tenth Question ***************************/ 
const tenthQuestion = () => {
    let totalFloor = prompt('Enter floor')
    while( isNaN(totalFloor) || totalFloor.trim().length === 0 ){
        alert('Please enter a number...')
        totalFloor = prompt('Enter floor')
    }
    totalFloor = parseInt(totalFloor)
    let floorLength = totalFloor + totalFloor - 1,
    mid = Math.ceil(floorLength / 2), /* หาจุดกลาง */
    temp = ''

    for(let i = 0; i < totalFloor; i++){
        for(let j = 1;j <= floorLength; j++){
            if( ( j >= (mid - i ) ) && ( j <= (mid + i ) )  ){
                    temp = temp + '*'
                }
                else{temp = temp + ' '}
        }
        console.log(temp)
        temp = ''
    }
}

/* tenthQuestion() */


/*****Eleventh Question ***************************/ 
/* เรียงน้อยไปมาก */
const eleventhQuestion = ()=>{
    let totalInput = []
    for(let i = 0;i<10;i++){
        let input = prompt('Enter a number')
        while( isNaN(input) || input.trim().length === 0 ){
            alert('Please enter a number...')
            input = prompt('Enter a number')
        }
        totalInput.push( parseInt(input))
    }

    for(let i =0;i<10;i++){
        for(let j = i+1;j<10;j++){
            if(totalInput[j] < totalInput[i]){
                let temp = totalInput[j]
                totalInput[j] = totalInput[i]
                totalInput[i] = temp
            }
        }
    }
    console.log(totalInput)
}

/* eleventhQuestion()  */
