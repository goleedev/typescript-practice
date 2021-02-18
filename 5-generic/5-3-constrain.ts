interface Employee {
  pay(): void;
}

class FulLTimeEmployee implements Employee {
  pay() {}
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {}
  workPartTime() {}
}

function pay<Type extends Employee>(employee: Type): Type {
  employee.pay();
  return employee;
}
