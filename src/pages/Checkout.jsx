import { useState } from "react";

const Checkout = () => {

  const [name, setName] =
    useState("");

  const [error, setError] =
    useState("");

  const submit = e => {

    e.preventDefault();

    if (name.length < 3) {
      setError(
        "Name must be 3 characters"
      );
      return;
    }

    alert("Order placed");
  };

  return (
    <form onSubmit={submit}>

      <input
        value={name}
        onChange={e =>
          setName(e.target.value)
        }
        placeholder="Name"
      />

      <p>{error}</p>

      <button>
        Place Order
      </button>

    </form>
  );
};

export default Checkout;