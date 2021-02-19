{
  // Bad
  function betweenBad<T>(a1: T, a2: T, a3: T): boolean {
    return a2 <= a1 && a1 <= a3;
  }

  // Good
  function betweenGood<T>(value: T, left: T, right: T): boolean {
    return left <= value && value <= right;
  }
}
