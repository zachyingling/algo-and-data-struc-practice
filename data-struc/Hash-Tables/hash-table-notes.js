// Hash Tables

// What is a hash table?
// Hash Tables are used to store key-value pairs. They are like arrays, but the
// keys are not ordered. Unlike arrays, hash tables are fast for all of the
// following operations: finding values, adding new values, and removing values

// To implement a hash table, I'll be using an array.
// In order to look up values by key, we need a way to convert keys into valid array indices.
// A function that performs this task is called a hash function.

// What makes a good hash? (Not cryptographically secure one)
// 1. Fast (constant time)
// 2. Doesn't cluster outputs at specific indices, but distrubtes uniformly
// 3. Deterministic (same input yields same output)

