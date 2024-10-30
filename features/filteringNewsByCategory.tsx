import { News } from '../types/news';

export function filteringNewsByCategory( {news, category}: {news: News[], category: string[]} ) {
    if (category.length === 0) {
        return news;
      }
      const filteredNews = news.filter((item) => {
        return category.every(cat => item.categories.includes(cat));
      });
    
      return filteredNews;
}