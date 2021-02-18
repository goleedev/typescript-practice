{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;

    const result = checkNotNullBad(123);
    console.log(result);

    checkNotNull(null);
  }

  function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const bool: boolean = checkNotNull(true);
}
