const Auction = require("./auction");

// Sample data for testing
const batches = [
  { price: 1, items: 15 },
  { price: 2, items: 5 },
  { price: 3, items: 10 },
];

const bidders = [
  { name: "Rami", bidAmount: 10, time: 6 }, // Waits 6 months
  { name: "Roni", bidAmount: 8, time: 12 }, // Waits 12 months
  { name: "Dima", bidAmount: 15, time: 3 }, // Waits 3 months
  { name: "Diana", bidAmount: 5, time: 9 }, // Waits 9 months
];

// Create Auction instance and run auction
const auction = new Auction(batches, bidders);
auction.runAuction();
auction.displayResults();
