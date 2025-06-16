const restaurants = [
  {
    name: "Pizza Palace",
    image: "https://source.unsplash.com/400x300/?pizza",
    desc: "Best Italian Pizza in town!"
  },
  {
    name: "Biryani House",
    image: "https://source.unsplash.com/400x300/?biryani",
    desc: "Authentic Hyderabadi Biryani"
  },
  {
    name: "Burger Queen",
    image: "https://source.unsplash.com/400x300/?burger",
    desc: "Juicy burgers and crispy fries"
  },
  {
    name: "Sushi Station",
    image: "https://source.unsplash.com/400x300/?sushi",
    desc: "Fresh and delightful sushi rolls"
  }
];

const container = document.getElementById("restaurant-list");

function renderRestaurants(data) {
  container.innerHTML = "";
  data.forEach(rest => {
    container.innerHTML += `
      <div class="card">
        <img src="${rest.image}" alt="${rest.name}">
        <div class="card-body">
          <h3>${rest.name}</h3>
          <p>${rest.desc}</p>
        </div>
      </div>
    `;
  });
}

document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(keyword) ||
    r.desc.toLowerCase().includes(keyword)
  );
  renderRestaurants(filtered);
});

renderRestaurants(restaurants);
