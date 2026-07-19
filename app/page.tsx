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

  const second = (recommend + 1) % clubs.length;
  const third = (recommend + 2) % clubs.length;

  const showResult = (priority: string) => {
    let selected = 0;

    if (concern === "distance") {
      selected = priority === "distance" ? 1 : 0;
    } else if (concern === "slice") {
      selected = 2;
    } else if (concern === "hook") {
      selected = priority === "workability" ? 4 : 0;
    } else if (concern === "mishit") {
      selected = priority === "distance" ? 1 : 0;
    } else if (concern === "workability") {
      selected = priority === "forgiveness" ? 3 : 4;
    }

    setRecommend(selected);
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
        <div className="w-full max-w-[500px] rounded-3xl bg-white p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-green-700">
            クラブ診断
          </h2>

          <p className="mt-8 text-xl">
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
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  初心者
                </button>

                <button
                  onClick={() => setStep(2)}
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  100切り
                </button>

                <button
                  onClick={() => setStep(2)}
                  className="rounded-xl bg-green-600 py-3 text-white"
                >
                  90切り
                </button>

                <button
                  onClick={() => setStep(2)}
                  className="rounded-xl bg-green-600 py-3 text-white"
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
              </>
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-green-50 px-6 py-10">
      <section className="mx-auto max-w-4xl text-center">
        

        <h1 className="text-5xl font-bold text-green-900">
          🏌️ あなたに合うゴルフクラブを3分で診断
        </h1>

        <p className="mt-6 text-xl text-gray-700">
          スコア・経験・悩みから、
          あなたに最適なドライバー・アイアン・UTを診断します。
        </p>

        <button
          onClick={() => {
            setStart(true);
            setStep(1);
            setResult(false);
            setConcern("");
          }}
          className="mt-8 rounded-2xl bg-green-700 px-10 py-5 text-2xl font-bold text-white shadow-lg hover:bg-green-800 transition"
        >
          無料で診断を始める
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

                <p className="mt-2 text-center text-gray-600">
                  {club.comment}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}