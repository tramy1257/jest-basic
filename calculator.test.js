const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  beforeAll(() => {
    console.log("beforeAll called");
  });

  // Each
  beforeEach(() => {
    console.log("beforeEach called");
  });
  afterEach(() => {
    console.log("afterEach called");
  });


  test("adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
  test("substracting 2 from 10 should return 8", () => {
    expect(mathOperations.diff(10, 2)).toBe(8);
  });
  test("multiplying 2 and 8 should return 16", () => {
    expect(mathOperations.product(2, 8)).toBe(16);
  });

  afterAll(() => {
    console.log("afterAll called");
  });
})

describe("Jest Matchers tests", () => {
  test("Equality matchers", () => {
    expect(2 * 2).toBe(4);
    expect(4 - 2).not.toBe(3);
  });

  test("Truthiness Matchers", () => {
    const name = "Non null";
    const n = null;
    expect(n).toBeNull();
    expect(name).not.toBeNull();
    expect(name).toBeTruthy();
    expect(n).toBeTruthy();
    expect(n).toBeFalsy();
    expect(0).toBeFalsy();
  });

  test("Number Matchers", () => {
    expect(100).toBeGreaterThan(10);
    expect(-20).toBeLessThanOrEqual(0);
    expect(0).toBeGreaterThanOrEqual(0);
  });

  test("String Matchers", () => {
    const str = "Software testing";
    expect(str).toMatch(/test/);
    expect(str).toMath(/abc/);
  })
})