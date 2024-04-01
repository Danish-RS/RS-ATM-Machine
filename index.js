#! /usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 10000;
let actualPin = 2024;
let pin = await inquirer.prompt([
    {
        Message: "Please Enter Your PIN Code",
        name: "userPin",
        type: "number",
    },
]);
if (pin.userPin === actualPin) {
    console.log("Pin Code Matched Successfully..!");
    let operations = await inquirer.prompt([
        {
            name: "selection",
            Message: "Please Perform Any Operation",
            type: "list",
            choices: ["withdraw", "checkBalance", "fastCash"], // Added Feature of Fast Cash as Assignment.
        },
    ]);
    if (operations.selection === "withdraw") {
        let askAmount = await inquirer.prompt([
            {
                name: "userAmount",
                Message: "Please Enter Your Amount",
                type: "number",
            },
        ]);
        if (askAmount.userAmount > totalBalance) { // Amount Cannot be Cash Above Total Balance (Restrictions included as Assignment).
            console.log("Your Balance is insufficient.");
        }
        else if ((totalBalance -= askAmount.userAmount)) {
            console.log(`Your Remaining Balance is: ${totalBalance}`); // Printing in Template Literal Style. (As Assignment).
        }
    }
    else if (operations.selection === "checkBalance") {
        console.log(`Your_Current_Balance_is: ${totalBalance}`); // Printing in Template Literal Style. (As Assignment).
    }
    if (operations.selection === "fastCash") {
        let urgentcash = await inquirer.prompt([
            {
                name: "cashAmount",
                Message: "Please Select Your Amount",
                type: "list",
                choices: [1000, 2000, 3000, 5000, 10000],
            },
        ]);
        if (urgentcash.cashAmount === 1000) {
            console.log("Withdrawal Successfull & Your Remaining Balance is: " +
                (totalBalance -= urgentcash.cashAmount));
        }
        else if (urgentcash.cashAmount === 2000) {
            console.log("Withdrawal Successfull & Your Remaining Balance is: " +
                (totalBalance -= urgentcash.cashAmount));
        }
        else if (urgentcash.cashAmount === 3000) {
            console.log("Withdrawal Successfull & Your Remaining Balance is: " +
                (totalBalance -= urgentcash.cashAmount));
        }
        else if (urgentcash.cashAmount === 5000) {
            console.log("Withdrawal Successfull & Your Remaining Balance is: " +
                (totalBalance -= urgentcash.cashAmount));
        }
        else if (urgentcash.cashAmount === 10000) {
            console.log("Withdrawal Successfull & Your Remaining Balance is: " +
                (totalBalance -= urgentcash.cashAmount));
        }
    }
}
else {
    console.log("Please Insert Valid Pin Code..!");
}
