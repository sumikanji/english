// ===== Cấu hình đăng nhập & đồng bộ Sumi English =====
// Để trống (null) → trang chạy như bình thường, tiến độ chỉ lưu trên trình duyệt của máy đang dùng.
//
// Muốn người học đăng nhập (Google / Email) và đồng bộ tiến độ giữa điện thoại – máy tính:
// làm theo HUONG-DAN-DANG-NHAP.md rồi dán cấu hình Firebase vào đây.
// Có thể dùng CHUNG dự án Firebase với Sumi Kanji: một tài khoản đăng nhập được cả hai trang,
// tiến độ tiếng Anh nằm riêng ở users/<uid>/english nên không đụng dữ liệu Kanji.
//
// window.SUMI_FIREBASE = {
//   apiKey: "AIza....",
//   authDomain: "sumi-kanji.firebaseapp.com",
//   databaseURL: "https://sumi-kanji-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "sumi-kanji",
//   appId: "1:1234567890:web:abcdef"
// };
window.SUMI_FIREBASE = {
  apiKey: "AIzaSyA1A3gyO4Ymh_AU0A35wX2mDWAv4Mp4DIo",
  authDomain: "sumienglish-f4406.firebaseapp.com",
  // Địa chỉ Realtime Database: nếu khi tạo database bạn chọn vùng khác Singapore,
  // hãy chép đúng địa chỉ ở thẻ "データ" của Realtime Database và thay vào dòng dưới.
  databaseURL: "https://sumienglish-f4406-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sumienglish-f4406",
  storageBucket: "sumienglish-f4406.firebasestorage.app",
  messagingSenderId: "710643162033",
  appId: "1:710643162033:web:5d4cba88f1c11dd4e8bb90"
};

// Bật / tắt từng cách đăng nhập
window.SUMI_AUTH_PROVIDERS = { google: true, email: true };
