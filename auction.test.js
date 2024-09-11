const Auction = require("./auction");

describe("Auction System Tests", () => {
  test("Basic Allocation Test", () => {
    const batches = [
      { price: 1, items: 15 },
      { price: 2, items: 5 },
      { price: 3, items: 10 },
    ];

    const bidders = [
      { name: "Rami", bidAmount: 10, time: 6 },
      { name: "Roni", bidAmount: 8, time: 12 },
      { name: "Dima", bidAmount: 15, time: 3 },
      { name: "Diana", bidAmount: 5, time: 9 },
    ];

    const auction = new Auction(batches, bidders);
    auction.runAuction();
    const results = auction.getResults();

    expect(results).toEqual([
      {
        bidderName: "Roni",
        totalCoins: 8,
        allocations: [{ batchPrice: 1, coins: 8 }],
      },
      {
        bidderName: "Diana",
        totalCoins: 5,
        allocations: [{ batchPrice: 1, coins: 5 }],
      },
      {
        bidderName: "Rami",
        totalCoins: 10,
        allocations: [
          { batchPrice: 1, coins: 2 },
          { batchPrice: 2, coins: 5 },
          { batchPrice: 3, coins: 3 },
        ],
      },
      {
        bidderName: "Dima",
        totalCoins: 7,
        allocations: [{ batchPrice: 3, coins: 7 }],
      },
    ]);
  });

  test("No Winners Test", () => {
    const batches = [
      { price: 1, items: 0 },
      { price: 2, items: 0 },
      { price: 3, items: 0 },
    ];

    const bidders = [{ name: "Rami", bidAmount: 10, time: 6 }];

    const auction = new Auction(batches, bidders);
    auction.runAuction();
    const results = auction.getResults();

    expect(results).toEqual([]);
  });

  test("Partial Winner Test", () => {
    const batches = [{ price: 1, items: 10 }];

    const bidders = [
      { name: "Rami", bidAmount: 5, time: 10 },
      { name: "Roni", bidAmount: 5, time: 8 },
      { name: "Dima", bidAmount: 5, time: 6 },
      { name: "Diana", bidAmount: 5, time: 4 },
    ];

    const auction = new Auction(batches, bidders);
    auction.runAuction();
    const results = auction.getResults();

    expect(results).toEqual([
      {
        bidderName: "Rami",
        totalCoins: 5,
        allocations: [{ batchPrice: 1, coins: 5 }],
      },
      {
        bidderName: "Roni",
        totalCoins: 5,
        allocations: [{ batchPrice: 1, coins: 5 }],
      },
    ]);
  });
});
