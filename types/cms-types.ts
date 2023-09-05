type Reference<T, R> = T extends "get" ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends "get"
  ? { id: string } & DateType & Required<P>
  : T extends "gets"
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends "patch" ? Partial<P> : P);

export type portfolio<T = "get"> = Structure<
  T,
  {
    /**
     * タイトル
     */
    title: string;
    /**
     * 説明文
     */
    description: string;
    /**
     * 本文
     */
    content?: any;
    /**
     * サムネイル画像
     */
    image?: {
      url: string;
      width: number;
      height: number;
      blurDataURL?: string | undefined;
    };
  }
>;

export interface EndPoints {
  get: {
    portfolio: portfolio<"get">;
  };
  gets: {
    portfolio: portfolio<"gets">;
  };
  post: {
    portfolio: portfolio<"post">;
  };
  put: {
    portfolio: portfolio<"put">;
  };
  patch: {
    portfolio: portfolio<"patch">;
  };
}
