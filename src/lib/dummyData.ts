import { EndPoints } from "../../types/cms-types";
import testImage from "../../public/jess-bailey-q10VITrVYUM-unsplash.jpg";
import testImage2 from "../../public/sun-binbin-Ddk5lE7tM7U-unsplash.jpg";
import testImage3 from "../../public/figma-image.jpg";

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
  content: `<h3 id="hb58d8dfae2">アプリ概要</h3><p>ポートフォリオを載せるサイトです。ナチュラルモダンのイメージでFigmaでデザインしNext.jsとMicroCMSを使用し開発しました。</p><p>私がフロントエンドエンジニアを目指すきっかけになったのは色々なエンジニアが作る数々のポートフォリオサイトでした。</p><p>始めはどんなエンジニアを目指そうか、その目標を探すべくポートフォリオサイトを見ていたのですが、いつしかポートフォリオを入れる箱であるポートフォリオサイトの方に魅せられていました</p><p>いつか、あんなサイトを作ってみたい。そんな思いでずっとプログラミングの勉強をしてきましたがまだまだ道半ば。</p><p>プログラミングはもちろんですが、凄いポートフォリオサイトを作るにはデザインスキルやアニメーションのスキルも必要で、このサイトを作るにあたって非常に力不足を感じた所です。</p><p>なんかちょっと足りないな、そう思って付け足して見てもなんか違う。その繰り返しで四苦八苦しながら作ったこのサイトは未だ目標とするようなクリエイティブなサイトには遠く及ばないけれど凄く愛着が湧くサイトになりました。</p><h3 id="h48162eced8">使用技術</h3><ul><li>Next.js(Page Router)</li><li>TypeScript</li><li>Tailwind CSS</li><li>Framer Motion</li><li>lottie-react(Lottie)</li><li>MicroCMS</li><li>zustand</li><li>Storybook</li><li>Jest<p></p></li></ul><p>フロントエンドはNext.jsとTypeScriptを使用、バックエンドはMicroCMS及びNext.jsのAPI Routesを使用しています。</p><p>Next.jsはPage Routerを採用しています。もう一つのポートフォリオであるGit EmptyがApp Routerだった為こちらはPage Routerを採用しました。今後はJamstackサイトもApp Routerを採用されていくのか、Page Routerがこれからも使われていくのか動向を見守りたいです。</p><p>API RoutesはContactページのフォームのバックエンドに利用、さらにnodemailerを使用し通知をメールで送るように設定しています。</p><p>ハンバーガーメニューやモーダルの状態を様々なコンポーネントの状態を管理する必要がありzustandを使用しています。状態管理ライブラリReduxは最近余り見なくなり、Recoilは開発元が開発出来なくなっているようで今後のReactのstate管理には何が使われていくのか気になる所です。</p><p>CSSはTailwind CSSを使用。一部疑似要素のプロパティが多いタグに対してはCSS Modulesを使用しています。CSS loaderが今後CSS Modulesについて対応しないと明言しReact公式でも非推奨になった為忘れ去られつつあるCSS ModulesですがNext.jsやViteは独自に対応してくれている為、今後もピンポイントで使う機会も出てくるのかなと思い採用。</p><p>ページ遷移アニメーションにはFramer Motion、オープニングアニメーションにはLottieを使用しています。</p><p>今回Lottieを初使用したのですが、このライブラリの本質は恐らくデザイナーとの対話。デザイナーとエンジニアの合わせ技で最大の力を発揮する、フロントエンドエンジニアの在り方を象徴するようなライブラリだと感じました。とはいえデザイナーの居ない今回はLottieFilesにかわいいアニメーションがあったので使用させていただきましたが、いつかデザイナーと一緒に素晴らしいアニメーションを実装したいものです。</p><p>テストはJestによるスナップショットテストと結合テストに重点を置きました。機能面のテストは慣れてきたのですが、ビジュアルが中心のこうしたJamstackサイトの場合のテストはどういう戦略で行うのがいいのか？現場の皆様の意見も聞いてみたいです。</p><p>無駄に覚えたてのDockerを設定していますが、デプロイ先がVercelなので完全に遊びです。ただ、Next.jsが内部的に使用しているsharpがWindowsとLinuxで別の実行ファイルを持つ為、両方の実行環境を同時に揃える事に無駄に苦戦しました。本当無駄に……</p><p>とはいえnpm rebuildで別環境用のファイルも同時にインストールできる事を知ったのは大戦果でした。</p><h3 id="h1f48361077">デザインについて</h3><figure><img src=${testImage3.src} alt="Figmaによるデザインの画像" width="1920" height="1030"></figure><p>文字で「自分はこういう人間です」と言うよりも作風で見せられたらと思い、シンプルモダンで、かつ見る人がリラックスできるようなデザインをコンセプトにFigmaでデザインをしました。</p><p>全体的に「見えない線」を意識しつつ、少しでもCSSのテクニックを見せられたらという意図とアクセントで所々にブロークングリッドレイアウトを入れています。</p><p>Next.jsにはnext/fontという神機能がある為、タイポグラフィでは惜しみなく3つのフォントを使用しています。</p><p>止まった時のデザイン先行でアニメーションは後回しにしてしまったのが今回のデザインの最大の失敗点。レスポンシブデザインまで考慮するとあまり派手なアニメーションを付ける事が出来ませんでした。この経験は今後のデザインに生かしていきたいです。</p><h3 id="h28b62bc2c0">今後の課題</h3><p>デザインスキルやアニメーション周りのスキルの不足もあり、全体的に地味というか物足りないサイトになってしまったのが残念なポイント。</p><p>将来的にwebデザインやモーショングラフィックス等を勉強し、今度こそ見た人があっと驚くようなポートフォリオサイトを作りたいです。</p><p>最近Figmaのアップデートがあり、ただでさえ覚束ないFigmaの操作がさらに覚束なくなりました。Figmaの習熟も今後の課題です。</p>`,
  image: {
    url: testImage.src,
    height: testImage.height,
    width: testImage.width,
    blurDataURL: "fhajkdfh",
  },
  siteurl: "https://portfolio-site-virid-alpha.vercel.app/",
  github: "https://github.com/LeafField/portfolio",
};

export const dummyContentData2: EndPoints["get"]["portfolio"] = {
  id: "64z7y4lwo9",
  createdAt: "2023-09-06T08:13:01.715Z",
  updatedAt: "2023-09-06T08:15:58.723Z",
  publishedAt: "2023-09-06T08:15:58.723Z",
  revisedAt: "2023-09-06T08:15:58.723Z",
  title: "このポートフォリオサイト",
  description:
    "figmaにてデザインから行いNext.jsで開発しました。\n訪れた人が癒されるようなコンセプトです。\nデザインから作る事でフロントエンドエンジニアとして、デザインへの理解を深めるいい機会になりました。\n",
  content: `<h3 id="hb58d8dfae2">アプリ概要</h3><p>ポートフォリオを載せるサイトです。ナチュラルモダンのイメージでFigmaでデザインしNext.jsとMicroCMSを使用し開発しました。</p><p>私がフロントエンドエンジニアを目指すきっかけになったのは色々なエンジニアが作る数々のポートフォリオサイトでした。</p><p>始めはどんなエンジニアを目指そうか、その目標を探すべくポートフォリオサイトを見ていたのですが、いつしかポートフォリオを入れる箱であるポートフォリオサイトの方に魅せられていました</p><p>いつか、あんなサイトを作ってみたい。そんな思いでずっとプログラミングの勉強をしてきましたがまだまだ道半ば。</p><p>プログラミングはもちろんですが、凄いポートフォリオサイトを作るにはデザインスキルやアニメーションのスキルも必要で、このサイトを作るにあたって非常に力不足を感じた所です。</p><p>なんかちょっと足りないな、そう思って付け足して見てもなんか違う。その繰り返しで四苦八苦しながら作ったこのサイトは未だ目標とするようなクリエイティブなサイトには遠く及ばないけれど凄く愛着が湧くサイトになりました。</p><h3 id="h48162eced8">使用技術</h3><ul><li>Next.js(Page Router)</li><li>TypeScript</li><li>Tailwind CSS</li><li>Framer Motion</li><li>lottie-react(Lottie)</li><li>MicroCMS</li><li>zustand</li><li>Storybook</li><li>Jest<p></p></li></ul><p>フロントエンドはNext.jsとTypeScriptを使用、バックエンドはMicroCMS及びNext.jsのAPI Routesを使用しています。</p><p>Next.jsはPage Routerを採用しています。もう一つのポートフォリオであるGit EmptyがApp Routerだった為こちらはPage Routerを採用しました。今後はJamstackサイトもApp Routerを採用されていくのか、Page Routerがこれからも使われていくのか動向を見守りたいです。</p><p>API RoutesはContactページのフォームのバックエンドに利用、さらにnodemailerを使用し通知をメールで送るように設定しています。</p><p>ハンバーガーメニューやモーダルの状態を様々なコンポーネントの状態を管理する必要がありzustandを使用しています。状態管理ライブラリReduxは最近余り見なくなり、Recoilは開発元が開発出来なくなっているようで今後のReactのstate管理には何が使われていくのか気になる所です。</p><p>CSSはTailwind CSSを使用。一部疑似要素のプロパティが多いタグに対してはCSS Modulesを使用しています。CSS loaderが今後CSS Modulesについて対応しないと明言しReact公式でも非推奨になった為忘れ去られつつあるCSS ModulesですがNext.jsやViteは独自に対応してくれている為、今後もピンポイントで使う機会も出てくるのかなと思い採用。</p><p>ページ遷移アニメーションにはFramer Motion、オープニングアニメーションにはLottieを使用しています。</p><p>今回Lottieを初使用したのですが、このライブラリの本質は恐らくデザイナーとの対話。デザイナーとエンジニアの合わせ技で最大の力を発揮する、フロントエンドエンジニアの在り方を象徴するようなライブラリだと感じました。とはいえデザイナーの居ない今回はLottieFilesにかわいいアニメーションがあったので使用させていただきましたが、いつかデザイナーと一緒に素晴らしいアニメーションを実装したいものです。</p><p>テストはJestによるスナップショットテストと結合テストに重点を置きました。機能面のテストは慣れてきたのですが、ビジュアルが中心のこうしたJamstackサイトの場合のテストはどういう戦略で行うのがいいのか？現場の皆様の意見も聞いてみたいです。</p><p>無駄に覚えたてのDockerを設定していますが、デプロイ先がVercelなので完全に遊びです。ただ、Next.jsが内部的に使用しているsharpがWindowsとLinuxで別の実行ファイルを持つ為、両方の実行環境を同時に揃える事に無駄に苦戦しました。本当無駄に……</p><p>とはいえnpm rebuildで別環境用のファイルも同時にインストールできる事を知ったのは大戦果でした。</p><h3 id="h1f48361077">デザインについて</h3><figure><img src=${testImage3.src} alt="Figmaによるデザインの画像" width="1920" height="1030"></figure><p>文字で「自分はこういう人間です」と言うよりも作風で見せられたらと思い、シンプルモダンで、かつ見る人がリラックスできるようなデザインをコンセプトにFigmaでデザインをしました。</p><p>全体的に「見えない線」を意識しつつ、少しでもCSSのテクニックを見せられたらという意図とアクセントで所々にブロークングリッドレイアウトを入れています。</p><p>Next.jsにはnext/fontという神機能がある為、タイポグラフィでは惜しみなく3つのフォントを使用しています。</p><p>止まった時のデザイン先行でアニメーションは後回しにしてしまったのが今回のデザインの最大の失敗点。レスポンシブデザインまで考慮するとあまり派手なアニメーションを付ける事が出来ませんでした。この経験は今後のデザインに生かしていきたいです。</p><h3 id="h28b62bc2c0">今後の課題</h3><p>デザインスキルやアニメーション周りのスキルの不足もあり、全体的に地味というか物足りないサイトになってしまったのが残念なポイント。</p><p>将来的にwebデザインやモーショングラフィックス等を勉強し、今度こそ見た人があっと驚くようなポートフォリオサイトを作りたいです。</p><p>最近Figmaのアップデートがあり、ただでさえ覚束ないFigmaの操作がさらに覚束なくなりました。Figmaの習熟も今後の課題です。</p>`,
  image: {
    url: testImage.src,
    height: testImage.height,
    width: testImage.width,
    blurDataURL: "fhajkdfh",
  },
  siteurl: "",
  github: "https://github.com/LeafField/portfolio",
};
