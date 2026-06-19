test("cart total", () => {

  const total =
    [100,200,300]
      .reduce((a,b)=>a+b,0);

  expect(total).toBe(600);

});