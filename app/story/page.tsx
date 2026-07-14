"use client";

import Link from "next/link";
import Image from "next/image";

export default function Story() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image
              src="/images/logo.png"
              alt="하링하링솝 로고"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">하링하링솝</span>
          </Link>
          <ul className="hidden md:flex gap-8">
            <li>
              <Link href="/story" className="text-primary font-semibold">
                Brand Story
              </Link>
            </li>
            <li>
              <Link href="/character" className="text-gray-700 hover:text-primary">
                Character
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-700 hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link href="/class" className="text-gray-700 hover:text-primary">
                Class
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-gray-700 hover:text-primary">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            딸의 이름이 곧 브랜드가 되었습니다
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            뷰티 전문가에서 엄마가 된 한정미 대표가 2019년,
            <br />
            가장 순수한 마음으로 시작했습니다.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            하링하링솝의 성장 이야기
          </h2>

          <div className="space-y-12">
            {[
              {
                year: "2019",
                title: "하링하링솝 탄생",
                description:
                  "딸 하링이를 위해 만든 첫 번째 비누에서 시작. 엄마의 사랑으로 아이에게 안전한 제품을 전해주고 싶다는 순수한 마음이 담겨있습니다.",
              },
              {
                year: "2020",
                title: "정식 허가 취득",
                description:
                  "화장품 제조업·제조판매업 정식 허가를 받으며 프로페셔널한 브랜드로의 첫 걸음을 내디뎠습니다.",
              },
              {
                year: "2021",
                title: "혼비 키트 개발",
                description:
                  "'집에서 쉽게 만드는 비누'라는 콘셉트로 혼비 키트를 개발. 가족과 함께 즐길 수 있는 경험을 제공하기 시작했습니다.",
              },
              {
                year: "2022",
                title: "1만 개 판매 돌파",
                description:
                  "입소문을 통해 첫 1만 개 판매를 달성. 엄마들과 아이들의 따뜻한 반응에 힘입어 더욱 성장했습니다.",
              },
              {
                year: "2023",
                title: "캐릭터 개발",
                description:
                  "브랜드 대표 캐릭터 '하링'이 다양한 모습으로 변신. 아기자기한 패키지로 선물 문화를 선도하기 시작했습니다.",
              },
              {
                year: "2024-2025",
                title: "5만 개 달성 & 브랜드 확장",
                description:
                  "누적 5만 개 판매와 함께 다양한 라인업을 출시. 웹사이트를 통해 더 많은 고객과 직접 만나고 있습니다.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 md:gap-12">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shrink-0">
                    {item.year}
                  </div>
                  {idx < 5 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-primary to-gray-200"></div>
                  )}
                </div>
                <div className="pb-4 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            우리의 가치
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "💚",
                title: "안전성",
                description:
                  "우리 아이에게 주는 마음으로 선택한 100% 천연 재료와 정식 허가로 보증하는 안전함",
              },
              {
                emoji: "✨",
                title: "진정성",
                description:
                  "10년 차 뷰티 전문가의 노하우와 엄마의 마음이 담긴 정직한 제품 개발",
              },
              {
                emoji: "🎨",
                title: "창의성",
                description:
                  "'혼비'라는 독창적인 콘셉트로 단순한 비누를 즐거운 경험으로 전환",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{value.emoji}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg p-12 border border-pink-200">
            <div className="mb-6 text-4xl">💬</div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              대표 한정미로부터의 메시지
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              처음 이 브랜드를 시작할 때 마음에 품었던 것은 작지만 순수한 바람이었습니다.
              "우리 딸이 사용할 가장 안전한 비누를 만들고 싶다"는 그 마음이 지금도 모든
              결정의 중심입니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              비누는 단순한 세제가 아닙니다. 엄마가 아이를 위해 만든 사랑이고, 아이가
              발견하는 즐거움이며, 그 순간이 모두에게 의미 있는 추억이 되기를 바랍니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              혼자 재밌게, 그 속에서 함께 즐거워지는 '혼비'의 철학이 언제나 우리 곁에
              있기를 원합니다. 감사합니다.
            </p>
            <p className="text-right mt-8 text-gray-600 font-semibold">
              - 하링하링솝 대표 한정미
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">이제 당신도 혼비를 시작할 차례</h2>
          <Link
            href="/products"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            베스트셀러 키트 보기
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">하링하링솝</h3>
              <p className="text-gray-400 text-sm">
                딸 하링이를 위해 만든 천연 수제비누 브랜드
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/story" className="text-gray-400 hover:text-white">
                    Brand Story
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-gray-400 text-sm mb-2">
                이메일: info@haringharing.com
              </p>
              <p className="text-gray-400 text-sm">카카오톡: @하링하링솝</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 하링하링솝. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
