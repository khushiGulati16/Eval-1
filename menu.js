document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const itemName = button.getAttribute('data-name');
    alert(`Your item '${itemName}' has been added to the cart!`);
  });
});

function searchMenu() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
      const itemName = item.querySelector("h4").textContent.toLowerCase();
      if (itemName.includes(searchInput)) {
          item.style.display = "block";
      } else {
          item.style.display = "none";
      }
  });
}


