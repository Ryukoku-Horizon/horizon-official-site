export interface rawNews {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        title: string;
        date: string;
        main_content?: string;
        category: rawNewsCategory[];
      }

export interface rawNewsList {
        contents: rawNews[];
        totalCount: number;
        offset: number;
        limit: number;
    }

export interface rawNewsCategory {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        category: string;
    }

export interface rawNewsCategoryList {
        contents: rawNewsCategory[];
        totalCount: number;
        offset: number;
        limit: number;
    }


export interface News {
    id: string;
    title: string;
    date: string;
    categories: string[];
  }

export interface NewsCategory {
    id: string;
    title: string;
    selected: boolean;
  }