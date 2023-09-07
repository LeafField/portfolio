import { EndPoints } from "../../types/cms-types";
import testImage from "../../public/jess-bailey-q10VITrVYUM-unsplash.jpg";
import testImage2 from "../../public/sun-binbin-Ddk5lE7tM7U-unsplash.jpg";

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
      siteurl: "",
      github: "",
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
      siteurl: "",
      github: "",
    },
  ],
};

export const dummyData: EndPoints["get"]["portfolio"] = {
  content: "",
  createdAt: "",
  description:
    "figmaにてデザインから行いNext.jsで開発しました。訪れた人が癒されるようなコンセプトです。デザインから作る事でフロントエンドエンジニアとして、デザインへの理解を深めるいい機会になりました。",
  id: "fsdfhjskjd",
  image: {
    height: testImage.height,
    width: testImage.width,
    url: `${testImage.src}`,
    blurDataURL: "fdsafjhgas",
  },
  publishedAt: "",
  revisedAt: "",
  title: "このポートフォリオサイト",
  updatedAt: "",
  siteurl: "",
  github: "",
};

export const dummyContentData: EndPoints["get"]["portfolio"] = {
  id: "64z7y4lwo9",
  createdAt: "2023-09-06T08:13:01.715Z",
  updatedAt: "2023-09-06T08:15:58.723Z",
  publishedAt: "2023-09-06T08:15:58.723Z",
  revisedAt: "2023-09-06T08:15:58.723Z",
  title: "このポートフォリオサイト",
  description:
    "figmaにてデザインから行いNext.jsで開発しました。\n訪れた人が癒されるようなコンセプトです。\nデザインから作る事でフロントエンドエンジニアとして、デザインへの理解を深めるいい機会になりました。\n",
  content:
    '<h3 id="hb58d8dfae2">アプリ概要</h3><p>ポートフォリオを載せるサイトです。ナチュラルモダンのイメージでFigmaでデザインしNext.jsとMicroCMSを使用し開発しました</p><p>私がフロントエンドエンジニアを目指すきっかけになったのは色々なエンジニアが作る数々のポートフォリオサイトでした。</p><p>始めはどんなエンジニアを目指そうか、その目標を探すべくポートフォリオサイトを見ていたのですが、いつしかポートフォリオを入れる箱であるポートフォリオサイトの方に魅せられていました</p><p>いつか、あんなサイトを作ってみたい。そんな思いでずっとプログラミングの勉強をしてきましたがまだまだ道半ば。</p><p>プログラミングはもちろんですが、凄いポートフォリオサイトを作るにはデザインスキルやアニメーションのスキルも必要で、このサイトを作るにあたって非常に力不足を感じた所です。</p><p>なんかちょっと足りないな、そう思って付け足して見てもなんか違う。その繰り返しで四苦八苦しながら作ったこのサイトは未だ目標とするようなクリエイティブなサイトには遠く及ばないけれど凄く愛着が湧くサイトになりました。</p><h3 id="h48162eced8">使用技術</h3><ul><li>Next.js(Page Router)</li><li>TypeScript</li><li>MicroCMS</li><li>zustand</li><li>Tailwind CSS</li><li>Storybook</li></ul><p>フロントエンドはNext.jsとTypeScriptを使用、バックエンドはMicroCMS及びNext.jsのAPI Routesを使用しています。</p><p>zustandはハンバーガーメニューのstate管理やオープニングアニメーションのフラグ管理に使用。Reduxは最近余り見なくなり、Recoilは開発元が開発出来なくなっているようで今後のReactのstate管理には何が使われるのでしょうか？私はzustandを推したい</p><p>CSSはTailwind CSSを使用。一部疑似要素のプロパティが多いタグに対してはCSS Modulesを使用しています。CSS loaderが今後CSS Modulesについて対応しないと明言しReact公式でも非推奨になった為忘れ去られつつあるCSS ModulesですがNext.jsやViteは独自に対応してくれている為、今後もピンポイントで使う機会も出てくるのかなと思い採用。</p><h3 id="h28b62bc2c0">今後の課題</h3><p>デザインスキルやアニメーション周りのスキルの不足もあり、全体的に地味というか物足りないサイトになってしまったのが残念なポイント。</p><p>将来的にwebデザインやモーショングラフィックス等を勉強し、今度こそ見た人があっと驚くようなポートフォリオサイトを作りたいです。</p><p>最近Figmaのアップデートがあり、ただでさえ覚束ないFigmaの操作がさらに覚束なくなりました。Figmaの習熟も今後の課題です。</p>',
  image: {
    url: testImage.src,
    height: testImage.height,
    width: testImage.width,
    blurDataURL: "fhajkdfh",
  },
  siteurl: "https://portfolio-site-virid-alpha.vercel.app/",
  github: "https://github.com/LeafField/portfolio",
};
