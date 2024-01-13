# Jug Challenge Project

## Overview

The Jug Challenge is an interactive web application built to solve the classic Water Jug Riddle. This project implements a specific algorithm to measure an exact amount of water using two jugs with different capacities. The application provides a user-friendly interface, animated visual representation of the jug states, and a step-by-step guide to the solution.

## Algorithmic Approach

### Problem Statement

Given two jugs with capacities X and Y gallons, and a target Z gallons, the objective is to measure exactly Z gallons.

### Solution Strategy

The algorithm employs a **Breadth-First Search (BFS)** approach to explore all possible states (amounts of water in each jug) and actions (fill, empty, transfer) to reach the target amount. The key steps are:

1. **State Representation**: Each state is represented as a pair `(a, b)`, where `a` and `b` are the current amounts of water in Jug X and Jug Y, respectively.
2. **Action Application**: At each step, all possible actions are applied to the current state, leading to new states.
3. **State Exploration**: BFS is used to systematically explore states, avoiding repetitions, until the target is reached or no more states can be generated.

### Mathematical Consideration

The solution is feasible if and only if Z is a multiple of the Greatest Common Divisor (GCD) of X and Y. The algorithm checks this condition to determine solvability.

## Test Cases for Validation

Here are some test cases with their expected outcomes:

1. **Jugs (3, 5), Target 4**: Solvable. Sequence: Fill Jug Y, Transfer Jug Y to X, etc.
2. **Jugs (2, 6), Target 5**: Not solvable. No sequence exists.
3. **Large Numbers (1000, 2000), Target 1500**: Solvable. Demonstrates efficiency with large numbers.
4. **Edge Cases**: Includes jugs with zero capacity, negative capacity, and target larger than both jugs.

Each test case is validated through automated unit tests to ensure the reliability and correctness of the solution.

## Instructions to Run the Program

### Prerequisites

- Node.js (Version 12 or later)
- npm or Yarn

### Setup and Execution

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/jug-challenge.git
   cd jug-challenge
   ```
2. **Install Dependencies**:
   ```bash
    npm install
    # or
    yarn install
   ```
3. **Run the Application**:
   ```bash
    npm run dev
    # or
    yarn dev
   ```
   The application will be available at http://localhost:3000.
4. **Running Tests**:
   ```bash
    npm run test
    # or
    yarn test
   ```
