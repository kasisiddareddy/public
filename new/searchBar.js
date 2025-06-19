
  function searchProduct() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();

    // Keyword map: what users may type and where to send them
    const pages = {
      fruits: "raw-fruits.html",
      fruit: "raw-fruits.html",
      vegetables: "raw-vegetables.html",
      vegetable: "raw-vegetables.html",
      dairy: "raw-dairy.html",
      milk: "raw-dairy.html",
      meat: "raw-meat.html",
      chicken: "raw-meat.html",
      mutton: "raw-meat.html",
      homeneeds: "raw-homeneeds.html",
      home: "raw-homeneeds.html",
      needs: "raw-homeneeds.html"
    };

    // Match and redirect if found
    for (let keyword in pages) {
      if (input.includes(keyword)) {
        window.location.href = pages[keyword];
        return;
      }
    }

    // If no match found
    alert("No matching category found. Try searching for fruits, vegetables, meat, dairy, or homeneeds.");
  }

