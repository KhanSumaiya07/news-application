const API_KEY = "34738d5c5cf04748a6d27fad77c19dd0";
const API_URL = "https://newsapi.org/v2/top-headlines";

// Function to fetch news based on the selected category
async function fetchCategoryNews(category) {
    const url = `${API_URL}?country=in&language=en&category=${category}&apiKey=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display news articles on the page
function displayNews(newses) {
    const container = document.querySelector(".news-container");
    container.innerHTML = "";
    newses.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = "news-item";
        newsItem.innerHTML = `
          <div class="image">
            <img src="${news.urlToImage || 'https://via.placeholder.com/150'}" alt="News Image">
          </div>
          <div class="content">
            <h2>${news.title}</h2>
            <p>${news.description}</p>
          </div>
        `;
        container.appendChild(newsItem);
    });
}

// Fetch default news category (general) on page load
fetchCategoryNews('general');

function profile(){
    document.querySelector('#profile').style.right = "30px";
}
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector('#profile').style.right = "-100%";

})
