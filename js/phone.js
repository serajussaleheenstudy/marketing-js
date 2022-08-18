/*
    1. add event listener to the phone plus button
    2. get the value inside the phone number field (input field)
    3. convert the number to an integer
    4. calculate the new phone number
    5. set the value to the phone number field
*/ 

function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);

    let newPhoneNumber;

    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    
    // const newCaseNumber = previousCaseNumber + 1;
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

// function updatePhoneNumberMinus(){
//     const phoneNumberField = document.getElementById('phone-number-filed');
//     const phoneNumberFieldString = phoneNumberField.value;
//     const previousPhoneNumber = parseFloat(phoneNumberFieldString);

//     const newPhoneNumber = previousPhoneNumber - 1;
//     phoneNumberField.value = newPhoneNumber;
// }

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
} 

document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(true);

   updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);

   updatePhoneTotalPrice(newPhoneNumber);

   calculateSubTotal();

//    calculate total
//     const currentPhoneTotal = getTextElementValueById('phone-total');
//     const currentCaseTotal = getTextElementValueById('case-total');
//     const currentSubTotal = currentCaseTotal + currentPhoneTotal;

//     const subTotalElement = document.getElementById('sub-total');
//     subTotalElement.innerText = currentSubTotal;
})