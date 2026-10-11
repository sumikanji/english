# Bật đăng nhập và đồng bộ tiến độ cho Sumi English (Firebase)

Mặc định `firebase-config.js` để trống: trang chạy bình thường, tiến độ chỉ lưu trên trình duyệt của máy đang dùng và không hiện nút đăng nhập.

Khi điền cấu hình Firebase, góc trên bên phải hiện nút **Đăng nhập**. Người học đăng nhập bằng **Google** hoặc **Email + mật khẩu**. Tiến độ tự lưu lên tài khoản khoảng 2 giây sau mỗi lần học, và đăng nhập trên máy khác là học tiếp được. Tiến độ đang có trên máy được **gộp** vào tài khoản, không bị ghi đè: giữ bài nhiều sao hơn, câu ôn nhiều lần hơn, XP cao hơn.

Gói miễn phí (Spark) của Firebase là đủ dùng. Trang phải được mở qua `https://…` (hoặc `http://localhost`), không mở trực tiếp file trên máy.

---

## Cách A: dùng chung dự án Firebase của Sumi Kanji (nhanh nhất)

Nếu Sumi Kanji đã bật đăng nhập:

1. Mở `sumi-kanji/firebase-config.js`, chép khối `window.SUMI_FIREBASE = { … };`.
2. Dán khối đó vào `sumi-english/firebase-config.js`, thay cho dòng `window.SUMI_FIREBASE = null;`.
3. Vào Firebase Console → **Authentication → Settings → Authorized domains**, thêm tên miền của Sumi English (ví dụ `sumi-english.web.app`).

Không cần sửa luật database. Luật `users/$uid` của Sumi Kanji đã cho mỗi người đọc và ghi phần của chính mình. Tiến độ tiếng Anh nằm ở `users/<uid>/english`, tách riêng khỏi dữ liệu Kanji. Một tài khoản đăng nhập được cả hai trang.

---

## Cách B: tạo dự án Firebase mới

### 1. Tạo dự án và ứng dụng web
1. Vào https://console.firebase.google.com → **Add project**, đặt tên, ví dụ `sumi-english`.
2. Trong dự án, bấm biểu tượng **</>** (Web app) → đặt tên → **Register app**.
3. Firebase hiện đoạn `firebaseConfig = { apiKey: …, authDomain: …, projectId: …, appId: … }`. Giữ lại đoạn này.

### 2. Bật cách đăng nhập
Vào **Build → Authentication → Get started → Sign-in method**:
- **Email/Password**: bật **Enable** → Save.
- **Google**: bật **Enable**, chọn email hỗ trợ → Save.

Ở **Authentication → Settings → Authorized domains**, thêm tên miền bạn dùng để mở trang. `localhost` thường đã có sẵn.

### 3. Tạo Realtime Database
1. **Build → Realtime Database → Create database**, chọn vùng **asia-southeast1 (Singapore)**, chế độ **Locked mode**.
2. Thẻ **Rules**, dán luật sau rồi **Publish**. Với luật này, mỗi người chỉ đọc và ghi được dữ liệu của chính mình:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid"
      }
    }
  }
}
```

3. Chép địa chỉ database ở đầu trang Data, dạng `https://sumi-english-default-rtdb.asia-southeast1.firebasedatabase.app`.

### 4. Điền cấu hình
Mở `firebase-config.js`, thay `window.SUMI_FIREBASE = null;` bằng:

```js
window.SUMI_FIREBASE = {
  apiKey: "AIza…",
  authDomain: "sumi-english.firebaseapp.com",
  databaseURL: "https://sumi-english-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sumi-english",
  appId: "1:…:web:…"
};
```

Các khoá này để công khai trên trang web được. Firebase bảo vệ dữ liệu bằng luật database ở bước 3, không bằng việc giấu khoá.

Muốn tắt đăng nhập Google, chỉ cho dùng email: sửa `window.SUMI_AUTH_PROVIDERS = { google: false, email: true };`.

### 5. Đưa trang lên mạng bằng Firebase Hosting (miễn phí)
```bash
npm install -g firebase-tools
firebase login
cd sumi-english
firebase init hosting      # chọn dự án vừa tạo, public directory: .  , single-page app: No
firebase deploy
```
Trang sẽ có địa chỉ `https://<tên-dự-án>.web.app`. Tên miền này tự được thêm vào Authorized domains.

---

## Kiểm tra
1. Mở trang → bấm **Đăng nhập** ở góc trên → tạo tài khoản bằng email.
2. Học một bài, đợi vài giây.
3. Vào Firebase Console → Realtime Database → thấy `users/<mã người dùng>/english`.
4. Mở trang trên điện thoại, đăng nhập cùng tài khoản → tiến độ hiện ra.

## Lỗi thường gặp
| Thông báo | Cách sửa |
|---|---|
| Tên miền này chưa được thêm vào Firebase | Thêm tên miền vào Authentication → Settings → Authorized domains |
| Cách đăng nhập này chưa được bật | Bật Email/Password hoặc Google ở Sign-in method |
| Không thấy nút Đăng nhập | Kiểm tra `firebase-config.js` đã điền chưa, và trang có mở qua `http(s)://` không |
| Đăng nhập được nhưng không đồng bộ (chấm đỏ ở nút tài khoản) | Kiểm tra `databaseURL` và luật Rules ở bước 3 |
