# ⚡ PairPulse Validator

A lightweight numeric validation engine that checks whether a combination of two signals can satisfy a defined business threshold.

## 📌 Project Overview

PairPulse Validator is a simple decision-support system designed to evaluate small groups of numeric inputs and determine whether any pair meets a required condition.

The project represents a common real-world scenario where systems need to quickly validate combinations of values, such as score verification, eligibility checks, risk assessment, or rule-based approvals.

---

## 🌍 Real-World Conceptual Scenario

Imagine a financial scoring platform where three independent indicators are generated:

- Customer reliability score
- Transaction history score
- Account activity score

The system needs to determine whether **any two indicators combined can reach the minimum approval threshold**.

PairPulse Validator performs this validation instantly using efficient pair checking logic.

---

## 🧠 Core Concept

The project demonstrates:

- Pair comparison techniques
- Conditional decision making
- Efficient evaluation of small datasets
- Clean and readable algorithm design

Instead of checking unnecessary combinations, the system directly evaluates all possible valid pairs.

---

## ⚙️ How the System Works

1. Receive a group of numeric signals.
2. Generate possible pair combinations.
3. Compare each pair against the required threshold.
4. Return a validation result:
   - ✅ Approved when a valid pair exists
   - ❌ Rejected when no pair satisfies the requirement

---

## 🔍 Algorithm / Data Structure Used

### Algorithm:
**Pairwise Comparison**

### Data Structure:
**Array**

Since the input size is small, checking all possible pairs provides a simple and efficient solution.

---

## 🪜 Step-by-Step Logic

Example:

Input:

```text
Signals: [8, 5, 3]
Threshold: 10
```

Possible combinations:

```
8 + 5 = 13 ✅
8 + 3 = 11 ✅
5 + 3 = 8 ❌
```

Since at least one pair reaches the threshold:

```
Result: APPROVED
```

---

## ✨ Key Features

- Fast numeric validation
- Simple rule-based decision engine
- Clean modular implementation
- Easy integration into larger systems
- Demonstrates fundamental algorithmic thinking

---

## 📊 Example Use Case

### Input

```javascript
const signals = [4, 4, 5];
const threshold = 10;
```

### Processing

```
4 + 4 = 8
4 + 5 = 9
4 + 5 = 9
```

### Output

```text
Rejected
```

---

## ⏱️ Complexity Analysis

| Metric | Complexity |
|---|---|
| Time Complexity | O(1) |
| Space Complexity | O(1) |

The system checks only three possible pairs, making execution extremely efficient.

---

## 🛠️ Technologies Used

- JavaScript (ES6)
- Node.js
- Git & GitHub

---

## 📁 Project Structure

```
PairPulse-Validator/
│
├── src/
│   └── pairPulseValidator.js
│
├── README.md
│
└── package.json
```

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/mirhamzarahman/PairPulse-Validator.git
```

### 2. Navigate into the project folder

```bash
cd PairPulse-Validator
```

### 3. Run the application

```bash
node src/pairPulseValidator.js
```

---

## 📚 Learning Outcomes

Through this project, I practiced:

- Designing practical solutions from algorithmic concepts
- Working with conditional logic
- Evaluating combinations efficiently
- Writing clean and maintainable JavaScript
- Transforming basic algorithms into real-world applications

---

## 🔮 Future Improvements

Possible enhancements:

- Support dynamic numbers of input signals
- Add customizable validation rules
- Create a REST API version
- Add a frontend dashboard for visualization
- Store validation history using a database

---

## 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project with proper attribution.
