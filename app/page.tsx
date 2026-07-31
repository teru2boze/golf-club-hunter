"use client";

import { useState } from "react";
import Link from "next/link";
import { clubs } from "./clubs";

export default function Home() {
  const [start, setStart] = useState(false);
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(false);
  const [recommend, setRecommend] = useState(0);
  const [concern, setConcern] = useState("");
const [ranking, setRanking] = useState([0, 1, 2]);

  const second = ranking[1];
const third = ranking[2];

  const showResult = (priority: string) => {
  const scored = clubs.map((club, index) => {
    let score = 0;

    if (priority === "distance") {
      score += club.distance * 3;
    }

    if (priority === "forgiveness") {
      score += club.forgiveness * 3;
    }

    if (priority === "workability") {
      score += club.workability * 3;
    }

    if (priority === "distance") {
  score += club.distance * 3;

  if (club.type === "飛距離") {
    score += 2;
  }
}

    if (concern === "slice") {
      score += club.forgiveness * 2;
    }

    if (concern === "hook") {
      score += club.workability * 2;
    }

    if (concern === "mishit") {
      score += club.forgiveness * 2;
    }

    if (concern === "workability") {
      score += club.workability * 2;
    }

    return {
      index,
      score,
    };
  });

  const top3 = scored
    .sort((a, b) => {
  if (b.score !== a.score) {
    return b.score - a.score;
  }

  if (concern === "slice" || concern === "mishit") {
  return clubs[a.index].workability - clubs[b.index].workability;
}

if (priority === "distance" || concern === "distance") {
  return clubs[b.index].forgiveness - clubs[a.index].forgiveness;
}

return 0;
})
    .slice(0, 3)
    .map((item) => item.index);

  setRanking(top3);
  setRecommend(top3[0]);
  setResult(true);
};

  const resetDiagnosis = () => {
    setStart(false);
    setStep(1);
    setResult(false);
    setRecommend(0);
    setConcern("");
  };

  if (result) {
    return (
      <main className="min-h-screen bg-green-50 px-6 py-10">
        <div className="mx-auto w-full max-w-[560px] rounded-3xl bg-white p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-green-700">
            診断結果
          </h2>

          <p className="mt-4 text-gray-600">
            あなたにおすすめの3本はこちら
          </p>

          <div className="mt-8 grid gap-4 text-left">
            <div className="rounded-2xl bg-yellow-50 p-5 shadow">
              <img
                src={clubs[recommend].image}
                alt={clubs[recommend].name}
                className="mb-4 h-52 w-full rounded-xl bg-white object-contain"
              />

              <p className="text-xl font-bold">
                🥇 {clubs[recommend].name}
              </p>

              <p className="mt-2 font-bold text-green-700">
                新品：{clubs[recommend].price}
              </p>

              <p className="text-gray-500">
                中古：{clubs[recommend].usedPrice}
              </p>

              <p className="mt-2 text-gray-600">
                {clubs[recommend].comment}
              </p>

              <Link
                href={`/club/${clubs[recommend].id}`}
                className="mt-3 inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white"
              >
                詳細を見る
              </Link>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5 shadow">
              <img
                src={clubs[second].image}
                alt={clubs[second].name}
                className="mb-3 h-36 w-full object-contain"
              />

              <p className="text-xl font-bold">
                🥈 {clubs[second].name}
              </p>

              <p className="mt-2 font-bold text-green-700">
                新品：{clubs[second].price}
              </p>

              <p className="text-gray-500">
                中古：{clubs[second].usedPrice}
              </p>

              <p className="mt-2 text-gray-600">
                {clubs[second].comment}
              </p>

              <Link
                href={`/club/${clubs[second].id}`}
                className="mt-3 inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white"
              >
                詳細を見る
              </Link>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5 shadow">
              <img
                src={clubs[third].image}
                alt={clubs[third].name}
                className="mb-3 h-36 w-full object-contain"
              />

              <p className="text-xl font-bold">
                🥉 {clubs[third].name}
              </p>

              <p className="mt-2 font-bold text-green-700">
                新品：{clubs[third].price}
              </p>

              <p className="text-gray-500">
                中古：{clubs[third].usedPrice}
              </p>

              <p className="mt-2 text-gray-600">
                {clubs[third].comment}
              </p>

              <Link
                href={`/club/${clubs[third].id}`}
                className="mt-3 inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white"
              >
                詳細を見る
              </Link>
            </div>
          </div>

          <button
            onClick={resetDiagnosis}
            className="mt-8 rounded-xl bg-green-700 px-8 py-4 font-bold text-white"
          >
            トップへ戻る
          </button>
        </div>
      </main>
    );
  }

  if (start) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50 px-6 py-10">
      <div className="w-full max-w-[600px] rounded-3xl bg-white p-10 text-center shadow-2xl">
        <h2 className="text-3xl font-bold text-green-700">
          クラブ診断
        </h2>

        <p className="mt-3 text-sm font-bold text-green-600">
          質問 {step} / 3
        </p>

        <div className="mt-2 h-3 w-full rounded-full bg-gray-200">
          <div
            className="h-3 rounded-full bg-green-600 transition-all duration-300"
            style={{ width: (step / 3) * 100 + "%" }}
          />
        </div>

        <p className="mt-6 text-3xl font-bold text-gray-800">
          {step === 1
            ? "Q1. ゴルフ歴は？"
            : step === 2
            ? "Q2. 一番悩んでいることは？"
            : "Q3. ドライバーで重視することは？"}
        </p>

        <div className="mt-8 grid gap-4">
            {step === 1 ? (
              <>
                <button
                  onClick={() => setStep(2)}
                  className="h-12 rounded-xl bg-green-600 text-base font-bold text-white transition hover:bg-green-700"
                >
                  初心者
                </button>

                <button
                  onClick={() => setStep(2)}
                  className="h-12 rounded-xl bg-green-600 text-base font-bold text-white transition hover:bg-green-700"
                >
                  100切り
                </button>

                <button
                  onClick={() => setStep(2)}
                  className="h-12 rounded-xl bg-green-600 text-base font-bold text-white transition hover:bg-green-700"
                >
                  90切り
                </button>

                <button
                  onClick={() => setStep(2)}
                  className="h-12 rounded-xl bg-green-600 text-base font-bold text-white transition hover:bg-green-700"
                >
                  シングル
                </button>
              </>
            ) : step === 2 ? (
              <>
                <button
                  onClick={() => {
                    setConcern("distance");
                    setStep(3);
                  }}
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  飛距離
                </button>

                <button
                  onClick={() => {
                    setConcern("slice");
                    setStep(3);
                  }}
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  スライス
                </button>

                <button
                  onClick={() => {
                    setConcern("hook");
                    setStep(3);
                  }}
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  フック
                </button>

                <button
                  onClick={() => {
                    setConcern("mishit");
                    setStep(3);
                  }}
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  ミスヒット
                </button>

                <button
                  onClick={() => {
                    setConcern("workability");
                    setStep(3);
                  }}
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  操作性
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => showResult("stability")}
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  とにかく安定性
                </button>

                <button
                  onClick={() => showResult("distance")}
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  飛距離を伸ばしたい
                </button>

                <button
                  onClick={() => showResult("forgiveness")}
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  やさしさ重視
                </button>
                <button
  onClick={() => showResult("workability")}
  className="rounded-xl bg-green-600 py-3 text-white"
>
  操作性重視
</button>
              </>
            )}
          </div>
          </div>
        </main>
    );
  }

  return (
    <main className="min-h-screen bg-green-50 px-6 py-10">
      <section className="mx-auto max-w-7xl text-center">
        

        <h1 className="text-3xl md:text-5xl font-extrabold text-green-900 leading-tight md:whitespace-nowrap">
          🏌️ あなたに合うゴルフクラブを3分で診断
</h1>

        <p className="mt-6 text-xl text-gray-700">
          3つの質問に答えるだけ。あなたに合うクラブを3本診断します。
        </p>

        <button
          onClick={() => {
            setStart(true);
            setStep(1);
            setResult(false);
            setConcern("");
          }}
          className="mt-8 rounded-2xl bg-green-700 px-10 py-6 text-3xl font-bold text-white shadow-lg hover:bg-green-800 transition"
        >
          無料で診断スタート
        </button>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="text-6xl">🎯</div>
            <h2 className="mt-3 text-xl font-bold">
              3分診断
            </h2>

            <p className="mt-2 text-gray-600">
              たった3分で最適クラブが分かる
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="text-4xl">🔄</div>

            <h2 className="mt-3 text-xl font-bold">
              乗り換えナビ
            </h2>

            <p className="mt-2 text-gray-600">
              今のクラブから次の1本へ
            </p>
          </div>

                    <div className="rounded-2xl bg-white p-6 shadow">
            <div className="text-4xl">⚔️</div>

            <h2 className="mt-3 text-xl font-bold">
              ライバル比較
            </h2>

            <p className="mt-2 text-gray-600">
              迷う2本の違いをわかりやすく
            </p>
          </div>
                </div>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-green-800">
            🏆 人気ランキング
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {clubs.slice(0, 3).map((club, index) => (
              <Link
                key={club.id}
                href={`/club/${club.id}`}
                className="rounded-2xl bg-white p-6 shadow transition hover:shadow-xl"
              >
                <div className="text-center text-4xl">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                </div>

                <img
                  src={club.image}
                  alt={club.name}
                  className="mx-auto mt-4 h-36 w-full object-contain"
                />

                <h3 className="mt-4 text-center text-xl font-bold">
                  {club.name}
                </h3>
<p className="text-center text-yellow-500">
  ★★★★★
</p>
                <p className="mt-2 text-center text-gray-600">
                  {club.comment}
                </p>
                <p className="text-center text-yellow-500 text-2xl">
  🥇 おすすめ No.1
</p>
                <div className="mt-4 space-y-1">
  {club.recommendedFor.map((item) => (
    <p key={item} className="text-sm text-green-700">
      ✅ {item}
    </p>
  ))}
</div>
<p className="mt-4 font-bold">
  新品：{club.price}
</p>

<p className="text-gray-600">
  中古：{club.usedPrice}
</p>
<div className="mt-4 rounded-xl bg-green-600 py-3 text-center font-bold text-white">
  詳細を見る
</div>
              </Link>
            ))}
          </div>
        </section>
      </section>
      <section className="mt-10 rounded-2xl bg-white p-6 shadow">
  <h2 className="text-2xl font-bold text-green-800">
    🔥 人気ドライバー比較
  </h2>

  <div className="mt-5 grid gap-4 md:grid-cols-2">
    <Link
      href="/compare/qi4d-vs-qi35-max"
      className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
    >
      <h3 className="font-bold text-green-800">
        Qi4D vs Qi35 MAX
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        飛距離・やさしさ・操作性の違いを比較
      </p>
    </Link>

    <Link
      href="/compare/qi4d-vs-quantum-max"
      className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
    >
      <h3 className="font-bold text-green-800">
        Qi4D vs QUANTUM MAX
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        最新モデル2本の特徴を比較
      </p>
    </Link>
    <Link
  href="/compare/g440-max-vs-g430-max-10k"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    PING G440 MAX vs G430 MAX 10K
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    飛距離・やさしさ・安定性の違いを比較
  </p>
</Link>
<Link
  href="/compare/g440-max-vs-g430-max"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    PING G440 MAX vs G430 MAX
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    新旧モデルの違いを比較
  </p>
</Link>
  <Link
  href="/compare/g440-max-vs-qi35-max"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    PING G440 MAX vs Qi35 MAX
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    飛距離・やさしさ・操作性の違いを比較
  </p>
</Link>
  <Link
  href="/compare/g440-max-vs-qi4d"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    PING G440 MAX vs Qi4D
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    飛距離・やさしさ・操作性の違いを比較
  </p>
</Link>
  <Link
  href="/compare/g430-max-vs-qi4d"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    PING G430 MAX vs Qi4D
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    飛距離・やさしさ・操作性の違いを比較
  </p>
</Link>
  <Link
  href="/compare/g430-max-vs-qi35-max"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    PING G430 MAX vs Qi35 MAX
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    飛距離・やさしさ・操作性の違いを比較
  </p>
</Link>
  <Link
  href="/compare/g430-max-vs-quantum-max"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    PING G430 MAX vs QUANTUM MAX
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    飛距離・やさしさ・操作性の違いを比較
  </p>
</Link>
<Link
  href="/compare/g440-max-vs-quantum-max"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    PING G440 MAX vs QUANTUM MAX
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    飛距離・やさしさ・操作性の違いを比較
  </p>
</Link>
  <Link
  href="/compare/qi35-max-vs-quantum-max"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    Qi35 MAX vs QUANTUM MAX
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    飛距離・やさしさ・操作性の違いを比較
  </p>
</Link>
  <Link
  href="/compare/g430-max-10k-vs-elyte-x"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    PING G430 MAX 10K vs ELYTE X
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    最新PINGとELYTE Xを比較
  </p>
</Link>

<Link
  href="/compare/elyte-x-vs-quantum-max"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    ELYTE X vs QUANTUM MAX
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    人気ドライバー同士を比較
  </p>
</Link>
  <Link
  href="/compare/g440-max-vs-quantum-max"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    PING G440 MAX vs QUANTUM MAX
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    安定性と飛距離性能を比較
  </p>
</Link>

<Link
  href="/compare/qi35-max-vs-elyte-x"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    Qi35 MAX vs ELYTE X
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    最新人気モデルを比較
  </p>
</Link>

<Link
  href="/compare/g430-max-10k-vs-qi35-max"
  className="rounded-xl border border-green-200 p-4 hover:bg-green-50"
>
  <h3 className="font-bold text-green-800">
    Qi35 MAX vs G430 MAX 10K
  </h3>
  <p className="mt-2 text-sm text-gray-600">
    飛距離・やさしさ・直進性を比較
  </p>
</Link>
  </div>
</section>
     <div className="mt-8 flex justify-center gap-6 text-center">
  <Link
    href="/disclosure"
    className="text-sm text-gray-500 underline hover:text-green-700"
  >
    広告・アフィリエイトについて
  </Link>

  <Link
    href="/privacy"
    className="text-sm text-gray-500 underline hover:text-green-700"
  >
    プライバシーポリシー
  </Link>

  <Link
    href="/about"
    className="text-sm text-gray-500 underline hover:text-green-700"
  >
    運営者情報
  </Link>

  <Link
    href="/contact"
    className="text-sm text-gray-500 underline hover:text-green-700"
  >
    お問い合わせ
  </Link>
</div>
    </main>
  );
}