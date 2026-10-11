/*! © 2026 Sumi English */
// Khung cấp độ. Mỗi bài: L(id, tên Việt, tên Anh, bối cảnh, tên người nói chuyện, `A|câu|nghĩa` mỗi dòng)
// A = người nói chuyện với bạn, B = bạn (người học)
window.SE_DATA = [
  { id: 'a1', name: 'A1', title: 'Khởi đầu', sub: 'Những câu đầu tiên: chào hỏi, gia đình, ăn uống, mua sắm, giờ giấc', color: '#f59e0b', lessons: [] },
  { id: 'a2', name: 'A2', title: 'Sơ cấp', sub: 'Tự xoay xở hằng ngày: nhà hàng, khách sạn, đi lại, khám bệnh, công việc', color: '#f97316', lessons: [] },
  { id: 'b1', name: 'B1', title: 'Trung cấp', sub: 'Trò chuyện tự tin: kể chuyện, kế hoạch, công sở, giải quyết vấn đề', color: '#10b981', lessons: [] },
  { id: 'b2', name: 'B2', title: 'Trung cao', sub: 'Trôi chảy: trình bày, thương lượng, tranh luận, thời sự', color: '#0ea5e9', lessons: [] },
  { id: 'c1', name: 'C1', title: 'Cao cấp', sub: 'Tinh tế: thành ngữ, lãnh đạo, ngoại giao, thảo luận chuyên sâu', color: '#8b5cf6', lessons: [] },
  { id: 'c2', name: 'C2', title: 'Thành thạo', sub: 'Như người bản xứ: tiếng lóng, hàm ý, hùng biện, văn phong học thuật', color: '#e11d48', lessons: [] }
];
window.L = function (id, t, en, s, a, txt) {
  return { id, t, en, s, a, d: txt.trim().split('\n').map(x => x.trim().split('|').map(y => y.trim())) };
};
window.SE_ADD = function (lv, arr) {
  const L = window.SE_DATA.find(x => x.id === lv);
  arr.forEach(l => L.lessons.push(l));
};
