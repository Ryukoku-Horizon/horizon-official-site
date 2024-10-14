export interface News {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        title: string;
        date: string;
        main_content?: string;
      }

export interface NewsList {
        contents: News[];
        totalCount: number;
        offset: number;
        limit: number;
    }