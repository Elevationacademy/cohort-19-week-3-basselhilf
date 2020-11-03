// Closures & Modules
//ex-1
// const StringFormatter = function () {
//     const capitalizeFirst = function (name) {
//             name = name.toLowerCase();
//             name =  name[0].toUpperCase() + name.substring(1)
//             console.log(name)
       
//     }
//     const skewerCase = str => console.log(str.split(" ").join("-").toLowerCase())
//     return {
//         capitalizeFirst: capitalizeFirst,
//         skewerCase: skewerCase
//             }
// }
// const formatter = StringFormatter()
// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box

//ex-2
    // const Bank = function () {
    //     let money=500
    //         const depositCash = function (cash) {
    //               money+=cash  
            
    //         }
    //         const checkBalance = function () {
    //                     console.log(money)
    //                 }
    //                 return {
    //                     deposit: depositCash,
    //                     showBalance: checkBalance
    //                                 }
    //     }
    //     const bank = Bank()
    //     bank.deposit(200)
    //     bank.deposit(250)
    //     bank.showBalance() //should print 950