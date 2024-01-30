const categories = document.querySelector("categories");
const allCategories = categories.querySelectorAll(".item");
const allCategoriesNumber = allCategories.length;
console.log("Number of categories: ${allCategoriesNumber}");

allCategories.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("li").length;
});
