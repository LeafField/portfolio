import { EndPoints } from "../../../../types/cms-types";
import testImage from "../../../../public/jess-bailey-q10VITrVYUM-unsplash.jpg";
import testImage2 from "../../../../public/sun-binbin-Ddk5lE7tM7U-unsplash.jpg";

export const multipleDummyData: EndPoints["gets"]["portfolio"] = {
  limit: 10,
  offset: 0,
  totalCount: 2,
  contents: [
    {
      content: "",
      createdAt: "",
      description: "figmaにてデザインから行いNext.jsで開発しました。",
      id: "fsdfhjskjd",
      image: {
        height: testImage.height,
        width: testImage.width,
        url: `${testImage.src}`,
        blurDataURL: "dahvkjsdfhv",
      },
      publishedAt: "",
      revisedAt: "",
      title: "このポートフォリオサイト",
      updatedAt: "",
    },
    {
      content: "",
      createdAt: "",
      description: "テスト用の説明文です",
      id: "gjdskhgsvc",
      image: {
        height: testImage2.height,
        width: testImage2.width,
        url: `${testImage2.src}`,
        blurDataURL: "gusdgsadif",
      },
      publishedAt: "",
      revisedAt: "",
      title: "テストタイトルです",
      updatedAt: "",
    },
  ],
};
