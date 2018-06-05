const apiKey = '592852cd79fb4a8a867862084f7bb533';
//const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const url = `https://newsapi.org/v2/everything?domains=gothamist.com&apiKey=${apiKey}`;

const everythingUrl = 'https://newsapi.org/v2/everything';

function getApiUrl() {
  return `${everythingUrl}?apiKey=${apiKey}`
}

function parameterizeDomains(domains) {
  return '&domains=' + domains.join(',');
}

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}

export async function getNewsForGroup(group) {
  const url = getApiUrl() + parameterizeDomains(group.domains);
  const result = await fetch(url).then(response => response.json());
  return result.articles.map((article, index) => {
    return {...article, index};
  });
}
