interface Either<LEFT, RIGHT> {
  left: () => LEFT;
  right: () => RIGHT;
}

class SimpleEither<LEFT, RIGHT> implements Either<LEFT, RIGHT> {
  constructor(private leftValue: LEFT, private rightValue: RIGHT) {}
  left(): LEFT {
    return this.leftValue;
  }

  right(): RIGHT {
    return this.rightValue;
  }
}

const either = new SimpleEither(4, 5);
