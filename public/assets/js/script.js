const log = console.log;
// log("Hello World");

$(document).ready(function () {





  




    
});

// Typewriter effect for Welcome Statement when page loads
// let t = 0;
// let text = "This application is designed to simulate basic stock transactions over a fixed series of historical 30-day monthly periods. You start with $100,000 cash and have a list of stocks and indexes (basket of stocks) to choose from. The prices on screen are historical prices from that respective period. Your only limitation to buying and selling is your cash balance. Once your done trading for a specific period, click the ‘Next Period’ button to advance and see the new prices and your new portfolio valuation. The full simulation is 12 periods long. After you complete all 12 periods click the ‘Create Chart” button to see a visualization of your stock portfolio's performance over the given time series.";
// let speed = 25;
// typeWriter();

// function typeWriter() {    
//   if (t < text.length) {
//     document.getElementById("introStatement").innerHTML += text.charAt(t);
//     t++;
//     setTimeout(typeWriter, speed);
//   }
// }

// Function to buy stock
// for (let i = 0; i < 11; i++) {
//     $("#form-positions-buy" + i).on("click", function (event) {
//         event.preventDefault();

//         let newBuy = {
//             monthly_period: $("monthly_period").val(),
//             stock: $("#stock").val(),
//             ticker: $("#ticker").val(),
//             price: $("#price").val(),
//             shares: $("#shares").val(),
//             buyShares: $("#buy_shares").val()
//         };
//         log(newBuy);
//         postNewBuy();

//     });

//     function postNewBuy(newBuy) {
//         $.post("/buy", newBuy, function () {


//         })
//     }
//     $("#buy_shares").val("");

// }


// // Function to sell stock
// for (let i = 0; i < 11; i++) {
//     $("#form-positions-sell" + i).on("click", function (event) {
//         event.preventDefault();

//         let newSell = {
//             monthly_period: $("monthly_period").val(),
//             stock: $("#stock").val(),
//             ticker: $("#ticker").val(),
//             price: $("#price").val(),
//             shares: $("#shares").val(),
//             sellShares: $("#sell_shares").val()
//         };
//         log(newSell);
//         postNewSell();

//     });

//     function postNewSell(newSell) {
//         $.post("/sell", newSell, function () {


//         })
//     }
//     $("#sell_shares").val("");

// }