"use client";

import Link from "next/link";
import { useState } from "react";

export default function Support() {
  const [activeTab, setActiveTab] = useState("notice");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img
              src="/haringharingsoap/images/logo.png"
              alt="하링하링솝 로고"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">하링하링솝</span>
          </Link>
          <ul className="hidden md:flex gap-8">
            <li>
              <Link href="/story" className="text-gray-700 hover:text-primary">
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
              <Link href="/support" className="text-primary font-semibold">
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
            고객지원
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            우리는 언제나 고객님의 의견을 소중히 여깁니다.
            <br />
            궁금한 점이나 문제가 있으시면 언제든 연락주세요.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "📧",
                title: "이메일",
                content: "info@haringharing.com",
                desc: "이메일로 문의 주시면 24시간 이내에 답변드립니다.",
              },
              {
                emoji: "💬",
                title: "카카오톡 플러스친구",
                content: "@하링하링솝",
                desc: "카카오톡으로 편하게 상담받으실 수 있습니다.",
              },
              {
                emoji: "📞",
                title: "전화",
                content: "02-1234-5678",
                desc: "월-금 10:00-18:00 (점심시간 12:00-13:00 제외)",
              },
            ].map((contact, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">{contact.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-lg text-primary font-bold mb-3">
                  {contact.content}
                </p>
                <p className="text-sm text-gray-600">{contact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("notice")}
              className={`px-6 py-4 font-bold transition border-b-2 ${
                activeTab === "notice"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-700 hover:text-primary"
              }`}
            >
              📢 공지사항
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-6 py-4 font-bold transition border-b-2 ${
                activeTab === "faq"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-700 hover:text-primary"
              }`}
            >
              ❓ FAQ
            </button>
            <button
              onClick={() => setActiveTab("review")}
              className={`px-6 py-4 font-bold transition border-b-2 ${
                activeTab === "review"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-700 hover:text-primary"
              }`}
            >
              ⭐ 고객후기
            </button>
          </div>

          {/* Notice */}
          {activeTab === "notice" && (
            <div className="space-y-4">
              {[
                {
                  date: "2026.07.10",
                  title: "여름 시즌 세일 이벤트 안내",
                  content:
                    "전 상품 20% 할인! 7월 10일부터 7월 31일까지 진행됩니다. 여름 특판 키트도 함께 출시되었습니다!",
                },
                {
                  date: "2026.07.01",
                  title: "새로운 '여름 산책' 캐릭터 키트 출시",
                  content:
                    "하링이가 새로운 옷으로 변신했어요! 산뜻한 여름 색감으로 준비한 '여름 산책' 편이 이제 사용 가능합니다.",
                },
                {
                  date: "2026.06.15",
                  title: "배송 일정 안내",
                  content:
                    "현재 주문량이 많아 배송이 3-5일 소요될 수 있습니다. 양해 부탁드립니다.",
                },
                {
                  date: "2026.06.01",
                  title: "고객 만족도 5점 달성!",
                  content:
                    "누적 5만 개 판매를 기념하여 고객님 감사 이벤트를 진행합니다. 자세한 내용은 카카오톡 채널에서 확인하세요!",
                },
              ].map((notice, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {notice.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {notice.content}
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm shrink-0">
                      {notice.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FAQ */}
          {activeTab === "faq" && (
            <div className="space-y-4">
              {[
                {
                  q: "배송은 어떻게 진행되나요?",
                  a: "주문 후 2-3일 내에 배송되며, 일반 택배로 배송됩니다. 배송 조회는 주문 후 카카오톡 채널에서 확인하실 수 있습니다.",
                },
                {
                  q: "배송비는 얼마인가요?",
                  a: "기본 배송비는 3,000원이며, 50,000원 이상 구매 시 무료배송입니다.",
                },
                {
                  q: "국제배송이 가능한가요?",
                  a: "현재는 국내 배송만 가능합니다. 해외 배송에 대해서는 카카오톡으로 문의 주세요.",
                },
                {
                  q: "환불은 어떻게 받나요?",
                  a: "상품 수령 후 7일 이내 환불 신청 시 배송비를 제외한 금액을 환불해드립니다. 미사용 상품이어야 합니다.",
                },
                {
                  q: "결제 수단은 어떻게 되나요?",
                  a: "신용카드, 체크카드, 계좌이체, 계좌이체(무통장입금), 카카오페이 등 다양한 결제 수단을 지원합니다.",
                },
                {
                  q: "성분 정보를 알고 싶어요",
                  a: "모든 제품은 100% 천연 재료로 만들어집니다. 정확한 성분 정보는 상품 상세페이지에서 확인하실 수 있습니다.",
                },
                {
                  q: "아토피가 있어도 사용할 수 있나요?",
                  a: "모든 제품은 정식 허가된 화장품이며 천연 재료만 사용합니다. 다만 민감한 피부라면 사용 전 테스트를 권장합니다.",
                },
                {
                  q: "구독 서비스가 있나요?",
                  a: "매달 새로운 테마의 키트를 정기 배송받는 구독 서비스를 준비 중입니다. 출시 시 안내해드리겠습니다.",
                },
              ].map((item, idx) => (
                <details
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition group"
                >
                  <summary className="p-6 cursor-pointer flex justify-between items-center font-bold text-gray-900 hover:bg-gray-50">
                    <span className="flex items-center gap-3">
                      <span className="text-primary text-lg">Q.</span>
                      {item.q}
                    </span>
                    <span className="text-2xl group-open:rotate-180 transition">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-gray-700 border-t border-gray-200">
                    <p className="flex gap-3">
                      <span className="text-secondary text-lg shrink-0">A.</span>
                      <span>{item.a}</span>
                    </p>
                  </div>
                </details>
              ))}
            </div>
          )}

          {/* Reviews */}
          {activeTab === "review" && (
            <div className="space-y-4">
              {[
                {
                  name: "박○○",
                  rating: 5,
                  date: "2026.07.10",
                  title: "아이가 정말 즐거워해요!",
                  content:
                    "처음에는 걱정했는데 영상을 따라 하니까 정말 쉬웠어요. 6살 딸이 함께 만들었는데 완성된 비누를 자랑스러워하며 사용하고 있습니다. 친구 생일 선물로도 주고 싶을 정도로 마음에 들어요!",
                },
                {
                  name: "김○○",
                  rating: 5,
                  date: "2026.07.08",
                  title: "품질이 정말 좋습니다",
                  content:
                    "비누가 얼마나 오래 가는지 깜짝 놀랐어요. 다른 수제비누 키트보다 재료의 질이 눈에 띄게 다릅니다. 가격이 조금 있지만 후회 없는 구매입니다.",
                },
                {
                  name: "이○○",
                  rating: 5,
                  date: "2026.07.05",
                  title: "선물하기 완벽한 상품",
                  content:
                    "패키지부터 정말 예뻐서 받는 사람이 즐거워했습니다. 혼자도 즐겁게 만들 수 있고, 함께 만들어도 좋은 추억이 되는 상품입니다!",
                },
                {
                  name: "최○○",
                  rating: 4,
                  date: "2026.07.01",
                  title: "두 번째 구매합니다",
                  content:
                    "첫 번째 소행성 편이 너무 좋아서 이번엔 반짝이는 편을 구매했어요. 조금 더 어렵지만 결과가 정말 예뻐서 만족합니다.",
                },
                {
                  name: "정○○",
                  rating: 5,
                  date: "2026.06.28",
                  title: "천연 재료가 정말 다릅니다",
                  content:
                    "성분을 확인해보니 정말 천연 재료만 사용했네요. 아이도 안심하고 사용할 수 있어서 엄마 입장에서 정말 만족합니다.",
                },
              ].map((review, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-900">
                          {review.name}
                        </span>
                        <span className="text-yellow-400">
                          {"★".repeat(review.rating)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {review.title}
                  </h4>
                  <p className="text-gray-600">{review.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            1:1 문의하기
          </h2>
          <form className="bg-white rounded-lg p-8 border border-gray-200 space-y-6">
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                이름
              </label>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                이메일
              </label>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                연락처
              </label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                문의 분류
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                <option>상품 정보</option>
                <option>배송 관련</option>
                <option>반품/교환</option>
                <option>기타 문의</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                내용
              </label>
              <textarea
                rows={5}
                placeholder="문의 내용을 입력하세요"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-accent transition"
            >
              문의 보내기
            </button>
            <p className="text-sm text-gray-600 text-center">
              카카오톡으로 더 빠른 답변을 받을 수 있습니다.
            </p>
          </form>
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
