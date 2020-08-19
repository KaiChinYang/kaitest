function calculate(n) { 
  return ((n * 100 + 20 - 4)) % 10 + 3  // 計算價格公式
}

module.exports = calculate // 把這個函式 export 出去
