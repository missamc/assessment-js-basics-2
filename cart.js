///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc.length + cart)
    console.log(summedPrice)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

let calcFinalPrice = 


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    If this were an UberEats type of situation, then the properties I intend to include in my customer object will be the first and last name, address, phone number, and email. All of this information is crucial because you need to know who and where you are delivering the food to. When the driver arrives at the address provided, they need proof of the identity provided on the account and will require them to give their name. The phone number helps make communication easier if any issues should arise for any reason, like the uber driver is having issues finding the apartment number or cant access the building if the instructions provided for delivery are either incorrect or just having issues. Having the ability to message or call helps to clarify these issues asap. Having the email can help the company promote great deals, as well as customer service, because most people prefer to be informed via email in regards to this type of information than phone number.
    

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    first name: `Cindy`
    last name: `Who`
    address: `3675 Melrose St, Los Angeles, CA 91245`
    number: `6193459743`
    email: `cindylouwho@whoville.suess`



}