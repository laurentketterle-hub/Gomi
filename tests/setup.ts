// Mock HTMLCanvasElement.getContext for jsdom (not implemented by default)
HTMLCanvasElement.prototype.getContext = (() => {
  // Return a minimal mock that satisfies type checks
  return null;
}) as typeof HTMLCanvasElement.prototype.getContext;
