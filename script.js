function filterTech(category) {
  document.querySelector('.main-section-products').innerHTML = '';
  // get a reference to the category collection
  db.collection('items')
    .where('category', '==', category)
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          make: doc.data().make,
          rating: doc.data().rating,
          price: doc.data().price,
        });
      });
      generateItems(items);
    });
}

function getItems() {
  db.collection('items')
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          make: doc.data().make,
          rating: doc.data().rating,
          price: doc.data().price,
        });
      });
      generateItems(items);
    });
}

function addToCart(item) {
  let cartItem = db.collection('cart-items').doc(item.id);
  cartItem.get().then(function (doc) {
    if (doc.exists) {
      cartItem.update({
        quantity: doc.data().quantity + 1,
      });
    } else {
      cartItem.set({
        image: item.image,
        make: item.make,
        name: item.name,
        price: item.price,
        rating: item.rating,
        quantity: 1,
      });
    }
  });
}

function generateItems(items) {
  if (items.length === 0) {
    let itemsHTML =
      '<p>Sorry!</p><p>No Result...</p><img class="mx-auto" src="https://media.tenor.com/5mz52kzlg6IAAAAj/bloodbros-search.gif"/>';
    let doc = document.createElement('div');
    doc.innerHTML = itemsHTML;
    doc.classList.add('main-product', 'w-full', 'h-full', 'text-center');
    document.querySelector('.main-section-products').appendChild(doc);
  } else
    items?.forEach((item) => {
      let doc = document.createElement('div');
      doc.classList.add('main-product', 'w-48');
      doc.innerHTML = `
            <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
                <img class="w-full h-full object-contain" src="${item.image}">
            </div>
            <div class="p-2">
            <div class="product-name text-gray-700 font-bold mt-2 text-sm w-fit overflow-hidden">
                ${item.name.slice(0, 40)}${item.name.length > 40 ? '...' : ''}
            </div>
            <div class="product-make text-blue-700 font-bold">
                ${item.make}
            </div>
            <div class="product-rating text-gray-500 font-bold my-1">
             ${'⭐️'.repeat(item.rating) + ' ' + item.rating}
            </div>
            <div class="product-price font-bold text-gray-700 text-lg">
                ${numeral(item.price).format('$0,0.00')}
            </div>
            </div>
        `;

      let addToCartEl = document.createElement('div');
      addToCartEl.classList.add(
        'hover:bg-yellow-600',
        'cursor-pointer',
        'product-add',
        'h-8',
        'ml-2',
        'w-28',
        'rounded',
        'bg-yellow-500',
        'text-white',
        'text-md',
        'flex',
        'justify-center',
        'items-center'
      );
      addToCartEl.innerText = 'Add to cart';
      addToCartEl.addEventListener('click', function () {
        addToCart(item);
      });
      doc.appendChild(addToCartEl);
      document.querySelector('.main-section-products').appendChild(doc);
    });
}

getItems();
