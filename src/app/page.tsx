
const modules = [
  {
    icon: "📚",
    title: "Học từ vựng",
    description: "Học từ mới, flashcard và ôn tập.",
  },
  {
    icon: "📝",
    title: "Học ngữ pháp",
    description: "Công thức, ví dụ và bài tập.",
  },
  {
    icon: "🔎",
    title: "Từ điển Hàn - Việt",
    description: "Tra cứu từ vựng nhanh chóng.",
  },
  {
    icon: "🎧",
    title: "Luyện nghe",
    description: "Luyện nghe theo cấp độ TOPIK.",
  },
  {
    icon: "📖",
    title: "Luyện đọc",
    description: "Thực hành đọc hiểu tiếng Hàn.",
  },
  {
    icon: "🎓",
    title: "Thi thử TOPIK",
    description: "Thi thử và xem kết quả.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold text-indigo-700">
            Korean Study
          </h1>

          <nav className="flex items-center gap-3">
            <a
              href="/login"
              className="rounded-lg px-4 py-2 font-medium hover:bg-slate-100"
            >
              Đăng nhập
            </a>

            <a
              href="/register"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Đăng ký
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 font-semibold text-indigo-600">
            LEARN KOREAN EVERY DAY
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Học tiếng Hàn dễ dàng,
            <span className="text-indigo-600">
              {" "}chinh phục TOPIK
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Nền tảng học tiếng Hàn toàn diện.
            Học từ vựng, ngữ pháp, tra cứu và
            luyện thi TOPIK trong một nơi.
          </p>

          <a
            href="/login"
            className="mt-8 inline-block rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Bắt đầu học ngay
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="mb-2 text-2xl font-bold">
          Khám phá Korean Study
        </h3>

        <p className="mb-8 text-slate-500">
          Tất cả công cụ học tiếng Hàn bạn cần.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">
                {item.icon}
              </div>

              <h4 className="mb-2 text-lg font-bold">
                {item.title}
              </h4>

              <p className="text-sm text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Korean Study. Learn Korean every day.
      </footer>
    </main>
  );
}
