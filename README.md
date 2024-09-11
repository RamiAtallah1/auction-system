# Auction System for Coin Batches

## Overview

This project implements an auction system for selling coins in multiple batches, each at different price points. The system prioritizes bidders based on the time they are willing to wait to receive their coins, with longer wait times increasing their chances of winning coins from earlier, lower-priced batches.

### Features

- **Multiple Batch Auction**: Handles auctions with varying numbers of batches, each containing a specific number of coins at different prices.
- **Time-Based Bidding**: Bidders' priority is determined by the duration they are willing to wait, not the bid amount.
- **Optimized Coin Allocation**: Efficiently allocates coins to maximize the chances of bidders with longer wait times.
- **Winner Reporting**: Provides a detailed breakdown of each winner's allocation, including coins won from each batch.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

##### 1. Clone the Repository:

```
git clone https://github.com/RamiAtallah1/auction-system.git
cd auction-system
```

##### 2. Install Dependencies:

```
npm install
```

### Running the Auction System

#### Usage

##### 1. Modify the Input Data:

Edit the `index.js` file to adjust the batches and bidders.

##### 2. Run the Auction:

Execute the auction by running the following command:

```
npm start
```

##### 3. View Results:

The results will be printed to the console, showing the coins won by each bidder and from which batch.

### Testing

### Running Tests

To run tests, use the following command:

```
npm test
```

This will execute the test suite, which includes various scenarios to ensure the auction system works correctly.

### Test Coverage

The tests cover the following cases:

- Bidders with different wait times.
- Bidders receiving coins from multiple batches.
- All bidders does not receive any coin
- Case where some bidders do not receive any coins.

### Optimizations

The auction system is optimized for efficient coin allocation using a pointer (`currentBatchIndex`) and early exit conditions to minimize unnecessary iterations. This improves performance, especially for larger datasets.
