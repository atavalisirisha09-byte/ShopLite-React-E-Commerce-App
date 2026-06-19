import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

test("renders title", () => {

  render(
    <ProductCard
      product={{
        title:"Laptop",
        price:500
      }}
    />
  );

  expect(
    screen.getByText("Laptop")
  ).toBeInTheDocument();
});
