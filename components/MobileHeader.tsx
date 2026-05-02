"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

const QUICK_QUESTIONS = [
  "Tìm BĐS theo ngân sách",
  "Tư vấn khu vực đầu tư",
  "Định giá bất động sản",
  "Thủ tục mua bán nhà đất",
];

const AI_ANSWERS: Record<string, string[]> = {
  "Tìm BĐS theo ngân sách": [
    "Với ngân sách dưới 2 tỷ, bạn có thể tìm căn hộ chung cư tại các quận vùng ven như Bình Dương, Long An hoặc nhà phố nhỏ tại các huyện ngoại thành. Nên ưu tiên dự án có sổ hồng riêng và pháp lý rõ ràng.",
    "Ngân sách 3-5 tỷ phù hợp với nhà phố trong hẻm tại Quận 9, Quận 12, Bình Tân hoặc đất nền tại các khu quy hoạch mới. Hãy kiểm tra kỹ quy hoạch trước khi xuống tiền.",
    "Với 1-2 tỷ đồng, bạn nên xem xét đất nền tại các tỉnh lân cận TP.HCM như Long An, Đồng Nai. Tiềm năng tăng giá tốt nếu chọn đúng vị trí gần khu công nghiệp hoặc đường lớn.",
  ],
  "Tư vấn khu vực đầu tư": [
    "Khu vực phía Đông TP.HCM (TP Thủ Đức) đang là điểm nóng đầu tư nhờ hạ tầng phát triển mạnh, gần các trường đại học và khu công nghệ cao. Giá đất tăng đều 10-15%/năm.",
    "Bình Dương và Đồng Nai là lựa chọn tốt cho đầu tư dài hạn. Nhiều khu công nghiệp mới, dân số tăng nhanh, giá BĐS còn thấp so với TP.HCM nhưng tiềm năng rất lớn.",
    "Long An đang nổi lên nhờ quy hoạch đô thị mới và hạ tầng giao thông cải thiện. Đất nền ven các trục đường lớn có thể tăng 20-30% trong 3-5 năm tới.",
  ],
  "Định giá bất động sản": [
    "Giá BĐS phụ thuộc vào: vị trí (mặt tiền hay trong hẻm), diện tích, pháp lý (sổ hồng/sổ đỏ), tình trạng xây dựng và tiện ích xung quanh. Nên tham khảo ít nhất 3-5 bất động sản tương tự trong khu vực.",
    "Để định giá chính xác, hãy so sánh giá giao dịch thực tế (không phải giá rao) của các BĐS tương tự trong bán kính 500m. Giá mặt tiền thường cao hơn trong hẻm 30-50%.",
    "Công thức đơn giản: Giá đất = Giá/m² khu vực × Diện tích × Hệ số vị trí. Nhà mặt tiền đường lớn có hệ số 1.5-2x so với hẻm nhỏ. Nên thuê thẩm định viên độc lập cho giao dịch lớn.",
  ],
  "Thủ tục mua bán nhà đất": [
    "Quy trình mua bán nhà đất gồm 5 bước: 1) Kiểm tra pháp lý sổ đỏ/sổ hồng, 2) Ký hợp đồng đặt cọc, 3) Công chứng hợp đồng mua bán, 4) Nộp thuế phí (2% thuế thu nhập + 0.5% lệ phí trước bạ), 5) Sang tên tại văn phòng đăng ký đất đai.",
    "Lưu ý quan trọng khi mua BĐS: Kiểm tra quy hoạch tại UBND phường/xã, xác minh không có tranh chấp hay thế chấp ngân hàng, đọc kỹ hợp đồng trước khi ký. Thời gian sang tên thường mất 15-30 ngày làm việc.",
    "Chi phí phát sinh khi mua nhà: Thuế TNCN 2% (người bán chịu), lệ phí trước bạ 0.5% (người mua chịu), phí công chứng 0.1-0.3%, phí thẩm định hồ sơ. Tổng khoảng 3-4% giá trị BĐS.",
  ],
};

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const marqueeAds = [
    "🏠 Bán nhà mặt tiền Quận 1 - 18 Tỷ - SHR - LH ngay!",
    "🏡 Đất nền Long An 500m² - Giá chỉ 1.2 Tỷ - Sổ đỏ",
    "🏢 Căn hộ cao cấp Bình Thạnh - 2PN - 3.5 Tỷ - View sông",
    "🌳 Biệt thự vườn Bình Dương - 800m² - 5 Tỷ - Thương lượng",
    "🏬 Mặt bằng kinh doanh Quận 7 - 120m² - Giá thuê hấp dẫn",
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function askAI(question: string) {
    if (!question.trim() || loading) return;
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    // Giả lập delay như đang suy nghĩ
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 700));

    const pool = AI_ANSWERS[question] ?? [
      "Cảm ơn bạn đã hỏi! Để được tư vấn chi tiết hơn về bất động sản, vui lòng liên hệ hotline hoặc chat Zalo với chúng tôi.",
      "Đây là câu hỏi hay! Thị trường BĐS hiện tại đang có nhiều cơ hội tốt. Hãy liên hệ chuyên viên của chúng tôi để được tư vấn cụ thể theo nhu cầu của bạn.",
      "Chúng tôi có nhiều dự án phù hợp với nhu cầu của bạn. Vui lòng để lại số điện thoại để chuyên viên tư vấn liên hệ hỗ trợ bạn sớm nhất!",
    ];

    const answer = pool[Math.floor(Math.random() * pool.length)];
    setMessages((prev) => [...prev, { role: "ai", text: answer }]);
    setLoading(false);
  }

  return (
    <div style={{ position: "relative", zIndex: 9999 }}>

      {/* === TICKER QUẢNG CÁO BĐS === */}
      <div style={{
        background: "linear-gradient(90deg, #003087 0%, #0050c8 100%)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "6px 0",
        borderBottom: "2px solid #ffd700",
      }}>
        <div style={{
          display: "inline-block",
          animation: "marquee-scroll 28s linear infinite",
          paddingLeft: "100%",
        }}>
          {marqueeAds.map((ad, i) => (
            <span key={i} style={{ color: "#fff", fontSize: "13px", fontWeight: "600", marginRight: "60px" }}>
              {ad}
            </span>
          ))}
        </div>
      </div>

      {/* === LOGO + HAMBURGER === */}
      <div style={{
        background: "white",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        padding: "10px 16px",
      }}>
        <div
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            width: "44px", height: "44px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", flexShrink: 0,
            borderRadius: "6px",
            background: menuOpen ? "#e5e7eb" : "transparent",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              <span style={{ color: "rgb(0,92,198)" }}>BDS</span>
              <span style={{ color: "red" }}>.com</span>
            </div>
            <div style={{ fontSize: "11px", color: "#9ca3af", fontStyle: "italic" }}>
              Mua bán nhà đất uy tín
            </div>
          </Link>
        </div>

        <div style={{ width: "44px", flexShrink: 0 }} />
      </div>

      {/* Overlay đóng menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9998 }}
          onClick={() => setMenuOpen(false)} />
      )}

      {/* Dropdown menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "108px", left: 0, right: 0,
          background: "white", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", zIndex: 9999,
        }}>
          {[
            { href: "/", label: "Trang chủ" },
            { href: "/oto", label: "Tìm mua BĐS" },
            { href: "/salon-oto", label: "Công ty BĐS" },
            { href: "/dang-nhap", label: "Đăng tin bán" },
            { href: "/gia-xe-oto", label: "Giá BĐS" },
            { href: "/tin-mua-xe", label: "Cần mua ?" },
            { href: "/my-bonbanh", label: "Tài khoản" },
          ].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "14px 20px", color: "rgb(3,49,196)", fontWeight: "bold", borderBottom: "1px solid #f3f4f6", fontSize: "16px", textDecoration: "none" }}>
              {item.label}
            </Link>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "3px solid #e5e7eb" }}>
            <Link href="/dang-nhap" onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "14px", textAlign: "center", background: "rgb(16,92,182)", color: "white", fontWeight: "bold", fontSize: "15px", textDecoration: "none" }}>
              Đăng nhập
            </Link>
            <Link href="/dang-ky" onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "14px", textAlign: "center", color: "rgb(16,92,182)", fontWeight: "bold", fontSize: "15px", background: "#f9fafb", textDecoration: "none" }}>
              Đăng ký
            </Link>
          </div>
        </div>
      )}

      {/* === FLOATING BUTTONS: ZALO + AI === */}
      <div style={{
        position: "fixed", bottom: "24px", right: "16px",
        display: "flex", flexDirection: "column", gap: "12px", zIndex: 9990,
      }}>
        {/* Zalo */}
        <a href="https://zalo.me/0909000000" target="_blank" rel="noopener noreferrer" title="Chat Zalo"
          style={{
            width: "52px", height: "52px", borderRadius: "50%",
            background: "#0068ff", display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 14px rgba(0,104,255,0.5)",
            animation: "zalo-shake 1.2s ease-in-out infinite",
            position: "relative", textDecoration: "none",
          }}
        >
          <span style={{ position: "absolute", inset: "-4px", borderRadius: "50%", border: "3px solid #ff2222", animation: "zalo-ring 1.2s ease-out infinite" }} />
          <span style={{ position: "absolute", inset: "-10px", borderRadius: "50%", border: "2px solid #ff4444", animation: "zalo-ring 1.2s ease-out infinite 0.3s" }} />
          <img src="/zalo-icon.svg" alt="Zalo" width="36" height="36" />
        </a>

        {/* AI */}
        <button onClick={() => setAiOpen((v) => !v)} title="Hỏi AI BĐS"
          style={{
            width: "52px", height: "52px", borderRadius: "50%",
            background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
            border: "none", display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 14px rgba(124,58,237,0.5)",
            cursor: "pointer", animation: "ai-pulse 2.5s ease-in-out infinite",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.15"/>
            <path d="M9 9h1.5l1.5 4 1.5-4H15" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="7.5" cy="12" r="1" fill="white"/>
            <circle cx="16.5" cy="12" r="1" fill="white"/>
            <path d="M8 16c1.1.8 2.4 1.2 4 1.2s2.9-.4 4-1.2" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* === AI CHAT POPUP === */}
      {aiOpen && (
        <div style={{
          position: "fixed", bottom: "90px", right: "16px",
          width: "300px", background: "white", borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)", zIndex: 9991,
          display: "flex", flexDirection: "column", maxHeight: "460px",
          overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
            padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between",
            flexShrink: 0,
          }}>
            <div style={{ color: "white", fontWeight: "bold", fontSize: "14px" }}>🤖 AI Tư vấn BĐS</div>
            <button onClick={() => setAiOpen(false)}
              style={{ background: "none", border: "none", color: "white", fontSize: "20px", cursor: "pointer", lineHeight: 1 }}>×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {messages.length === 0 && (
              <div style={{ fontSize: "13px", color: "#374151" }}>
                <p style={{ margin: "0 0 10px", fontWeight: "600" }}>Xin chào! Tôi có thể giúp bạn:</p>
                {QUICK_QUESTIONS.map((q) => (
                  <div key={q} onClick={() => askAI(q)}
                    style={{
                      padding: "8px 12px", marginBottom: "6px",
                      background: "#f3f4f6", borderRadius: "8px",
                      cursor: "pointer", fontSize: "12px", color: "#2563eb", fontWeight: "500",
                    }}>
                    💬 {q}
                  </div>
                ))}
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  maxWidth: "85%",
                  padding: "8px 12px",
                  borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                  background: msg.role === "user" ? "#2563eb" : "#f3f4f6",
                  color: msg.role === "user" ? "white" : "#1f2937",
                  fontSize: "12px",
                  lineHeight: "1.5",
                  whiteSpace: "pre-wrap",
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{
                  padding: "8px 14px", background: "#f3f4f6", borderRadius: "12px 12px 12px 2px",
                  fontSize: "18px", letterSpacing: "2px",
                }}>
                  <span style={{ animation: "dot-blink 1.2s infinite 0s" }}>•</span>
                  <span style={{ animation: "dot-blink 1.2s infinite 0.2s" }}>•</span>
                  <span style={{ animation: "dot-blink 1.2s infinite 0.4s" }}>•</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            borderTop: "1px solid #e5e7eb", padding: "10px 12px",
            display: "flex", gap: "8px", flexShrink: 0,
          }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && askAI(input)}
              placeholder="Nhập câu hỏi..."
              style={{
                flex: 1, border: "1px solid #d1d5db", borderRadius: "8px",
                padding: "7px 10px", fontSize: "12px", outline: "none",
              }}
            />
            <button onClick={() => askAI(input)} disabled={loading || !input.trim()}
              style={{
                background: loading || !input.trim() ? "#9ca3af" : "#2563eb",
                color: "white", border: "none", borderRadius: "8px",
                padding: "7px 12px", cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                fontSize: "12px", fontWeight: "600",
              }}>
              Gửi
            </button>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes zalo-shake {
          0%, 100% { transform: rotate(0deg); }
          15%       { transform: rotate(-12deg); }
          30%       { transform: rotate(12deg); }
          45%       { transform: rotate(-8deg); }
          60%       { transform: rotate(8deg); }
          75%       { transform: rotate(-4deg); }
          90%       { transform: rotate(4deg); }
        }
        @keyframes zalo-ring {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes ai-pulse {
          0%, 100% { box-shadow: 0 4px 14px rgba(124,58,237,0.5); }
          50%       { box-shadow: 0 4px 24px rgba(124,58,237,0.9), 0 0 0 6px rgba(124,58,237,0.15); }
        }
        @keyframes dot-blink {
          0%, 80%, 100% { opacity: 0.2; }
          40%            { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
