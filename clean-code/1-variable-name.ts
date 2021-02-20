// Use meaningful varibale names
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

// Use pronouceable varible names
{
  // Bad
  type DtaRcrd102 = {
    genymdhms: Date;
    modymdhms: Date;
    pszqint: number;
  };

  // Good
  type Customer = {
    generationTimestamp: Date;
    modificationTimestamp: Date;
    recordId: number;
  };
}

// Use same vocab for the same type of variable
{
  // Bad
  function getUserInfo(): User;
  function getUserDetails(): User;
  function getUserData(): User;

  // Good
  function getUser(): User;
}

// Use searchable names
{
  // Bad
  setTimeout(restart, 86400000);

  // Good
  const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;

  setTimeout(restart, MILLISECONDS_IN_A_DAY);
}
