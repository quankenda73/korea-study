
import {
  BookOpen,
  GraduationCap,
  Languages,
  Headphones,
  Target,
  Clock,
} from "lucide-react";

const features = [
  {
    title: "Từ vựng",
    description: "Học và ghi nhớ từ vựng tiếng Hàn",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Ngữ pháp",
    description: "Hệ thống ngữ pháp từ sơ cấp đến cao cấp",
    icon: GraduationCap,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Từ điển",
    description: "Tra cứu Hàn - Việt và Việt - Hàn",
    icon: Languages,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Luyện nghe",
    description: "Cải thiện kỹ năng nghe TOPIK",
    icon: Headphones,
    color: "bg-orange-100 text-orange-700",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-blue-600">
          KOREAN STUDY
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Chào mừng bạn trở lại!
        </h2>
        <p className="mt-2 text-slate-500">
          Hãy dành một chút thời gian để tiến bộ hơn mỗi ngày.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl bg-blue-700 p-6 text-white">
          <BookOpen size={25} />
          <p className="mt-4 text-sm text-blue-100">Từ vựng đã học</p>
          <p className="mt-1 text-3xl font-bold">0</p>
          <p className="mt-2 text-xs text-blue-100">Từ vựng đã ghi nhớ</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <Target size={25} className="text-purple-600" />
          <p className="mt-4 text-sm text-slate-500">Mục tiêu hôm nay</p>
          <p className="mt-1 text-3xl font-bold text-slate-900">0/20</p>
          <p className="mt-2 text-xs text-slate-400">Từ vựng cần học</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <Clock size={25} className="text-orange-600" />
          <p className="mt-4 text-sm text-slate-500">Thời gian học</p>
          <p className="mt-1 text-3xl font-bold text-slate-900">0 giờ</p>
          <p className="mt-2 text-xs text-slate-400">Thời gian học hôm nay</p>
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900">
            Khu vực học tập
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Chọn nội dung bạn muốn học hôm nay.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}>
                  <Icon size={24} />
                </div>

                <h4 className="mt-4 font-semibold text-slate-900">
                  {feature.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-bold text-slate-900">Tiến độ học tập</h3>
        <p className="mt-2 text-sm text-slate-500">
          Dữ liệu tiến độ sẽ được cập nhật khi chúng ta hoàn thành chức năng
          từ vựng, ngữ pháp và luyện thi.
        </p>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-0 rounded-full bg-blue-600" />
        </div>
        <p className="mt-2 text-right text-xs text-slate-400">0%</p>
      </section>
    </div>
  );
}
