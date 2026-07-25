export default function ContactPage() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-green-700">
          お問い合わせ
        </h1>

        <div className="mt-6 space-y-6 leading-8 text-gray-700">
          <p>
            ゴルフクラブハンターをご覧いただきありがとうございます。
          </p>

          <p>
            当サイトへのご意見、ご質問、掲載内容に関するお問い合わせは、
            お問い合わせ窓口より受け付けています。
          </p>

          <section className="rounded-2xl bg-green-50 p-5">
            <h2 className="text-xl font-bold text-green-700">
              お問い合わせ内容
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>サイトについてのご意見・ご質問</li>
              <li>掲載しているゴルフクラブについて</li>
              <li>掲載内容の修正依頼</li>
              <li>その他のお問い合わせ</li>
            </ul>
          </section>

          <p className="text-sm text-gray-500">
  お問い合わせ先：
  <a
    href="mailto:golfclubhunter.contact@gmail.com"
    className="ml-2 font-bold text-green-700 underline"
  >
    golfclubhunter.contact@gmail.com
  </a>
</p>
        </div>
      </div>
    </main>
  );
}