import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">ChatGPT SaaS</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Đăng nhập
            </Link>
            <Link
              href="/login"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Dùng thử miễn phí
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                Tăng năng suất công việc với AI Assistant
              </h2>
              <p className="text-xl mb-8">
                ChatGPT SaaS cung cấp giải pháp trí tuệ nhân tạo để giúp bạn tự
                động hóa công việc, tăng năng suất và sáng tạo hơn trong công
                việc hàng ngày.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/login"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium text-center hover:bg-gray-50 transition-colors"
                >
                  Bắt đầu ngay
                </Link>
                <Link
                  href="#features"
                  className="border border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white/10 transition-colors"
                >
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="h-6 flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-indigo-100 p-3 rounded-md">
                      <p className="text-gray-700">
                        Bạn có thể giúp tôi tóm tắt bài viết này không?
                      </p>
                    </div>
                    <div className="bg-indigo-600 p-3 rounded-md">
                      <p className="text-white">
                        Tôi sẽ giúp bạn tóm tắt nội dung chính của bài viết...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Tính năng nổi bật
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Khám phá những gì ChatGPT SaaS có thể làm cho bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Trò chuyện thông minh
              </h3>
              <p className="text-gray-600">
                Trò chuyện với AI của chúng tôi để nhận câu trả lời nhanh chóng
                và chính xác cho mọi câu hỏi của bạn.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tạo nội dung
              </h3>
              <p className="text-gray-600">
                Tạo nội dung chất lượng cao cho blog, email, mạng xã hội và
                nhiều hơn nữa chỉ với vài cú nhấp chuột.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tích hợp dễ dàng
              </h3>
              <p className="text-gray-600">
                Tích hợp nhanh chóng với các ứng dụng và công cụ bạn đang sử
                dụng hàng ngày.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">
            Sẵn sàng trải nghiệm sức mạnh của AI?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Đăng ký ngay hôm nay để có 7 ngày dùng thử miễn phí. Không cần thẻ
            tín dụng.
          </p>
          <Link
            href="/login"
            className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium inline-block hover:bg-gray-100 transition-colors"
          >
            Đăng ký miễn phí
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ChatGPT SaaS</h3>
              <p className="text-gray-400">
                Giải pháp AI tiên tiến cho doanh nghiệp và cá nhân.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Sản phẩm</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tính năng
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Bảng giá
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Ứng dụng
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Công ty</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Pháp lý</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Điều khoản
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Bảo mật
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} ChatGPT SaaS. Đã đăng ký bản
              quyền.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
