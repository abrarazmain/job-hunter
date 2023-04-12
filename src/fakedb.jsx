// use local storage to manage cart data
const addToDb = id => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
      shoppingCart[id] = 1;
  }
  else {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const addToDB = (id) => {
  let appliedJob = []
  const previousJob = localStorage.getItem('applied-job')
  JSON.parse(previousJob)
  if (previousJob) {
    const newAppliedJob = (id)
    appliedJob.push(newAppliedJob)
  }
  else {
    appliedJob.push(id)
  }
  localStorage.setItem('applied-job',appliedJob)
}


const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("applied-job", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("applied-job");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("applied-job");
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart,addToDB };
