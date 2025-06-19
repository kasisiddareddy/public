const categories = [
    { name: "Fruits", link: "raw-fruits.html" },
    { name: "Vegetables", link: "raw-vegetables.html" },
    { name: "Meat", link: "raw-meat.html" },
    { name: "Dairy", link: "raw-dairy.html" },
    { name: "Home Needs", link: "raw-homeneeds.html" }
  ];

  const input = document.getElementById("searchInput");
  const results = document.getElementById("categoryResults");

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase().trim();
    results.innerHTML = "";

    if (value === "") return;

    const filtered = categories.filter(cat =>
      cat.name.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
      results.innerHTML = "<div style='color:red;'>No results found.</div>";
      return;
    }

    filtered.forEach(cat => {
      const div = document.createElement("div");
      div.className = "category-item";
      div.textContent = cat.name;
      div.onclick = () => (window.location.href = cat.link);
      results.appendChild(div);
    });
  });