export const cartProductDelete = async (id) => {
  console.log(id);

  fetch(`http://localhost:3000/product-delete?id=${id}`, {
    method: "DELETE",
    credentials: "include",
  })
    .then((res) => {
      if (res.status == 200) {
        alert("Product deleted");
      } else {
        alert("Error");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const cartProductQuantity = (id, quantity) => {
  fetch(`http://localhost:3000/quantity-update`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quantity,
      id,
    }),
  })
    .then((res) => {
      if (res.status == 200) {
        alert("quantity got updated!!");
      } else {
        alert("Error");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addToCart = async (id,quantity) =>{
  try {
    const res = await fetch("http://localhost:3000/add-product-cart",{
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        id,quantity
      })
    })
    console.log(await res.json());
  } catch (error) {
    console.log(error);
  }
}
