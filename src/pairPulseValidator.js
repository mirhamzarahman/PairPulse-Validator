/**
 * PairPulse Validator
 * 
 * Checks whether any two numeric signals
 * can satisfy a given threshold requirement.
 */

/**
 * Determines if any pair of signals reaches the target threshold.
 *
 * @param {number[]} signals - Array of numeric values
 * @param {number} threshold - Required minimum combined value
 * @returns {boolean} - True if a valid pair exists, otherwise false
 */
function validateSignalPair(signals, threshold) {
    const firstSignal = signals[0];
    const secondSignal = signals[1];
    const thirdSignal = signals[2];

    // Check every possible pair combination
    return (
        firstSignal + secondSignal >= threshold ||
        firstSignal + thirdSignal >= threshold ||
        secondSignal + thirdSignal >= threshold
    );
}


// Example usage
const signals = [8, 5, 3];
const approvalThreshold = 10;

const isApproved = validateSignalPair(
    signals,
    approvalThreshold
);

console.log(
    isApproved 
        ? "Validation Approved"
        : "Validation Rejected"
);
