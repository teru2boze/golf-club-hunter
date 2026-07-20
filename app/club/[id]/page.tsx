import Link from "next/link";
import { clubs } from "../../clubs";

export default async function ClubPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const club = clubs.find((c) => String(c.id) === id);

  if (!club) {
    return (
      <main className="min-h-screen bg-green-50 flex items-center justify-center p-6">
        <div className="rounded-2xl bg-white p-8 shadow">
          <p className="text-xl font-bold">
            クラブが見つかりません。
          </p>

          <Link
            href="/"
            className="mt-5 inline-block rounded-lg bg-green-600 px-5 py-3 font-bold text-white"
          >
            トップへ戻る
          </Link>
        </div>
      </main>
    );
  }
const rivalIds =
  (club as { rivals?: number[] }).rivals ?? [];

const rivalClubs = clubs.filter((c) =>
  rivalIds.includes(c.id)
);
  return (
    <main className="min-h-screen bg-green-50 flex justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-xl w-full">
        <img
          src={club.image}
          alt={club.name}
          className="w-full rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold text-green-700">
          {club.name}
        </h1>
<div className="mt-3 text-yellow-500 text-xl">
  {"★".repeat(club.rating)}
  {"☆".repeat(5 - club.rating)}
  <span className="ml-2 text-sm text-gray-600">
    {club.rating}.0
  </span>
</div>
        <p className="mt-4 text-lg">
          💰 新品：{club.price}
        </p>

        <p className="text-lg">
          ♻️ 中古：{club.usedPrice}
        </p>

        <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6 shadow-sm">
  <h2 className="mb-3 text-xl font-bold text-green-700">
    📝 編集部レビュー
  </h2>

  <p className="leading-8 text-[17px] text-gray-700">
    {club.comment}
  </p>
</div>
        

        <div className="mt-6 space-y-2">
          <p>
            ⭐ 総合評価：
            {"★".repeat(club.rating ?? 0)}
            {"☆".repeat(5 - (club.rating ?? 0))}
          </p>

          <p>
            🚀 飛距離：
            {"★".repeat(club.distance ?? 0)}
            {"☆".repeat(5 - (club.distance ?? 0))}
          </p>

          <p>
            🎯 やさしさ：
            {"★".repeat(club.forgiveness ?? 0)}
            {"☆".repeat(5 - (club.forgiveness ?? 0))}
          </p>

          <p>
            🏌️ 操作性：
            {"★".repeat(club.workability ?? 0)}
            {"☆".repeat(5 - (club.workability ?? 0))}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold">
            おすすめゴルファー
          </h2>

          <ul className="ml-6 list-disc">
            {club.recommendedFor?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-3">
          {club.newUrl ? (
            <a
              href={club.newUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block rounded-lg bg-green-600 px-5 py-3 text-center font-bold text-white hover:bg-green-700"
            >
              新品最安値を見る
            </a>
          ) : (
            <p className="rounded-lg bg-gray-100 px-5 py-3 text-center text-gray-500">
              新品リンク準備中
            </p>
          )}

          {club.usedUrl ? (
            <a
              href={club.usedUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block rounded-lg bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700"
            >
              中古最安値を見る
            </a>
          ) : (
            <p className="rounded-lg bg-gray-100 px-5 py-3 text-center text-gray-500">
              中古リンク準備中
            </p>
          )}

          {club.rakutenUrl ? (
            <a
              href={club.rakutenUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block rounded-lg bg-red-500 px-5 py-3 text-center font-bold text-white hover:bg-red-600"
            >
              楽天で探す
            </a>
          ) : (
            <p className="rounded-lg bg-gray-100 px-5 py-3 text-center text-gray-500">
              楽天リンク準備中
            </p>
          )}
        </div>
{rivalClubs.length > 0 && (
  <div className="mt-10">
    <h2 className="mb-4 text-2xl font-bold text-green-700">
      🥊 ライバルクラブ
    </h2>

    <div className="grid gap-4 sm:grid-cols-2">
      {rivalClubs.map((rival) => (
        <Link
          key={rival.id}
          href={`/club/${rival.id}`}
          className="rounded-2xl border border-gray-200 p-4 shadow-sm transition hover:shadow-md"
        >
          <img
            src={rival.image}
            alt={rival.name}
            className="mb-3 h-40 w-full rounded-xl object-cover"
          />

          <h3 className="font-bold text-green-700">
            {rival.name}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm text-gray-600">
            {rival.comment}
          </p>
        </Link>
      ))}
    </div>
  </div>
)}
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg border border-green-600 px-5 py-3 font-bold text-green-700 hover:bg-green-50"
        >
          ← 診断に戻る
        </Link>
      </div>
    </main>
  );
}