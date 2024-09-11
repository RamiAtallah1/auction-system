class Auction {
  constructor(batches, bidders) {
    this.batches = batches; // Array of batches with number of items and price
    this.bidders = bidders; // Array of bidders with bid amount and wait time
    this.results = []; // Auction results to store winners
  }

  runAuction() {
    // Sort bidders by time commitment (longest first) and then by arrival order
    this.bidders.sort((a, b) => b.time - a.time);

    let currentBatchIndex = 0;
    let totalAvailableCoins = this.batches.reduce(
      (sum, batch) => sum + batch.items,
      0
    );

    // Iterate over each bidder and allocate coins from batches
    for (const bidder of this.bidders) {
      if (totalAvailableCoins === 0) break; // Stop if no coins are left

      let coinsWon = 0;
      let allocationDetails = [];

      // Allocate coins to the current bidder
      while (
        currentBatchIndex < this.batches.length &&
        coinsWon < bidder.bidAmount
      ) {
        const batch = this.batches[currentBatchIndex];
        if (batch.items > 0) {
          // Calculate the number of coins the bidder can win from this batch
          const coinsToAllocate = Math.min(
            batch.items,
            bidder.bidAmount - coinsWon
          );

          // Allocate coins and decrease batch items
          batch.items -= coinsToAllocate;
          coinsWon += coinsToAllocate;
          totalAvailableCoins -= coinsToAllocate; // Update total available coins

          // Record allocation details
          allocationDetails.push({
            batchPrice: batch.price,
            coins: coinsToAllocate,
          });
        }

        // Move to the next batch if the current one is exhausted
        if (batch.items === 0) {
          currentBatchIndex++;
        }
      }

      // Record result if the bidder won any coins
      if (coinsWon > 0) {
        this.results.push({
          bidderName: bidder.name,
          totalCoins: coinsWon,
          allocations: allocationDetails,
        });
      }
    }
  }

  getResults() {
    return this.results;
  }

  displayResults() {
    if (this.results.length === 0) {
      console.log("No winners in this auction.");
    } else {
      console.log("Auction Results:");
      for (const result of this.results) {
        console.log(`\nBidder: ${result.bidderName}`);
        console.log(`Total Coins Won: ${result.totalCoins}`);
        result.allocations.forEach((alloc) => {
          console.log(
            `  Coins from $${alloc.batchPrice} batch: ${alloc.coins}`
          );
        });
      }
    }
  }
}

module.exports = Auction;
