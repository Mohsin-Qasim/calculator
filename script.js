function handlebtn(value) {
    var result = document.getElementById("input-result");
  
    if (value === '=') {
      const expression = result.value;
      const calculatedResult = calculateExpression(expression); // Manually calculate karo
      result.value = calculatedResult;
    } else if (value === 'C') {
      result.value = ""; // Clear field
    } else {
      result.value += value; // Append value
    }
  }
  
  function calculateExpression(expression) {
    // Step 1: Split the expression into numbers and operators
    const numbers = expression.split(/[\+\-\*\/%]/).map(Number);
    const operators = expression.replace(/[0-9]|\./g, '').split('');
  
    // Step 2: Handle multiplication, division, and modulus first
    while (operators.includes('*') || operators.includes('/') || operators.includes('%')) {
      for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '*') {
          numbers[i] = numbers[i] * numbers[i + 1];
          numbers.splice(i + 1, 1);
          operators.splice(i, 1);
          break;
        } else if (operators[i] === '/') {
          numbers[i] = numbers[i] / numbers[i + 1];
          numbers.splice(i + 1, 1);
          operators.splice(i, 1);
          break;
        } else if (operators[i] === '%') {
          numbers[i] = numbers[i] % numbers[i + 1];
          numbers.splice(i + 1, 1);
          operators.splice(i, 1);
          break;
        }
      }
    }
  
    // Step 3: Handle addition and subtraction
    while (operators.length > 0) {
      if (operators[0] === '+') {
        numbers[0] = numbers[0] + numbers[1];
      } else if (operators[0] === '-') {
        numbers[0] = numbers[0] - numbers[1];
      }
      numbers.splice(1, 1);
      operators.splice(0, 1);
    }
  
    return numbers[0]; // Final result
  }
  