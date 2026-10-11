/*! © 2026 Sumi English */
// Luyện âm khó cho người Việt — hoàn toàn bằng câu (mỗi câu chứa nhiều âm cần luyện)
window.SE_SOUNDS = [
  { id: 'end-s', t: 'Âm cuối /s/ và /z/', tip: 'Người Việt hay nuốt âm cuối. Bật nhẹ tiếng "xì" ở cuối: cats, likes, dogs, books.', say: [
    ['She likes cats and dogs.', 'Cô ấy thích mèo và chó.'],
    ['He reads three books every month.', 'Anh ấy đọc ba cuốn sách mỗi tháng.'],
    ['My parents always ask lots of questions.', 'Bố mẹ tôi luôn hỏi rất nhiều câu.'],
    ['The prices of these clothes are too high.', 'Giá của những bộ quần áo này quá cao.'],
    ['It takes ten minutes to get there by bus.', 'Đi xe buýt đến đó mất mười phút.'],
    ['She washes the dishes and he makes the beds.', 'Cô ấy rửa bát còn anh ấy dọn giường.']] },
  { id: 'end-t', t: 'Âm cuối /t/ /d/ /k/', tip: 'Chặn hơi rõ ràng ở cuối từ. "Light" khác "like", "bed" khác "bet".', say: [
    ['Good night, sleep tight.', 'Chúc ngủ ngon, ngủ thật say.'],
    ['I worked hard and walked home last night.', 'Tối qua tôi làm việc chăm chỉ và đi bộ về nhà.'],
    ['Put the book back on the desk.', 'Đặt cuốn sách lại lên bàn.'],
    ['He cooked a great steak for dinner.', 'Anh ấy nấu một miếng bít tết tuyệt vời cho bữa tối.'],
    ['Can you check the light in the kitchen?', 'Bạn kiểm tra đèn trong bếp được không?'],
    ['I need a good bed and a hot bath.', 'Tôi cần một chiếc giường tốt và một bồn tắm nóng.']] },
  { id: 'th', t: 'Âm /θ/ và /ð/ (th)', tip: 'Đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi. Không đọc thành "t", "d" hay "s".', say: [
    ['Thank you for thinking of me.', 'Cảm ơn bạn đã nghĩ đến tôi.'],
    ['They think this is the third time.', 'Họ nghĩ đây là lần thứ ba.'],
    ['My mother and father are both thirty-three.', 'Bố mẹ tôi đều ba mươi ba tuổi.'],
    ['There are three things in the bathroom.', 'Có ba thứ trong phòng tắm.'],
    ['I think the weather is better this month.', 'Tôi nghĩ thời tiết tháng này đẹp hơn.'],
    ['Breathe through your mouth, not your teeth.', 'Hãy thở bằng miệng, không phải qua răng.']] },
  { id: 'sh', t: 'Âm /ʃ/ (sh) và /s/', tip: '/s/: lưỡi gần răng, miệng cười nhẹ. /ʃ/: chu môi ra như khi bảo "suỵt".', say: [
    ['She sells seashells by the seashore.', 'Cô ấy bán vỏ sò bên bờ biển.'],
    ['Show me the short shirt, please.', 'Cho tôi xem chiếc áo ngắn đó nhé.'],
    ['I wish I could see the ship.', 'Ước gì tôi có thể nhìn thấy con tàu.'],
    ['Sit down and sip some fresh juice.', 'Ngồi xuống và nhấp chút nước ép tươi.'],
    ['The shop sells shoes and socks.', 'Cửa hàng bán giày và tất.'],
    ['Should we share this special dish?', 'Chúng ta có nên ăn chung món đặc biệt này không?']] },
  { id: 'rl', t: 'Âm /r/ và /l/', tip: '/r/: cong lưỡi về sau, không chạm vòm miệng. /l/: đầu lưỡi chạm phía sau răng trên.', say: [
    ['The red lorry is really long.', 'Chiếc xe tải đỏ thật sự rất dài.'],
    ['Please read the long letter.', 'Vui lòng đọc lá thư dài này.'],
    ['I really like light rain in spring.', 'Tôi thật sự thích mưa nhẹ vào mùa xuân.'],
    ['Turn right at the library.', 'Rẽ phải ở thư viện.'],
    ['Her brother plays in a rock band.', 'Anh trai cô ấy chơi trong một ban nhạc rock.'],
    ['Let me grab a glass of lemonade.', 'Để tôi lấy một ly nước chanh.']] },
  { id: 'v', t: 'Âm /v/, /w/ và /b/', tip: '/v/: răng trên chạm môi dưới, rung. /w/: tròn môi, không chạm răng. /b/: hai môi bật ra.', say: [
    ['We have a very nice view.', 'Chúng tôi có một khung cảnh rất đẹp.'],
    ['Victor visits Vietnam every winter.', 'Victor đến thăm Việt Nam mỗi mùa đông.'],
    ['I want to visit the west of the village.', 'Tôi muốn thăm phía tây ngôi làng.'],
    ['Would you like a glass of wine?', 'Bạn có muốn một ly rượu vang không?'],
    ['The van is in the bank parking lot.', 'Chiếc xe tải nhỏ ở bãi đậu xe ngân hàng.'],
    ['Never give up on your dreams.', 'Đừng bao giờ từ bỏ ước mơ.']] },
  { id: 'ii', t: 'Nguyên âm dài /iː/ và ngắn /ɪ/', tip: '/iː/ kéo dài, miệng cười căng. /ɪ/ ngắn và thả lỏng: "sheep" khác "ship".', say: [
    ['Please sit in this seat.', 'Vui lòng ngồi vào ghế này.'],
    ['I feel I need to leave.', 'Tôi cảm thấy mình cần phải đi.'],
    ['Did you eat it all?', 'Bạn đã ăn hết rồi à?'],
    ['The sheep is on the ship.', 'Con cừu ở trên con tàu.'],
    ['Fill the bottle and feel the cold water.', 'Đổ đầy chai và cảm nhận làn nước mát.'],
    ['We live near the green field.', 'Chúng tôi sống gần cánh đồng xanh.']] },
  { id: 'ae', t: 'Nguyên âm /æ/ và /e/', tip: '/æ/: mở miệng rộng, hạ hàm như khi ngạc nhiên. /e/: miệng hẹp hơn.', say: [
    ['The man had a bad day.', 'Người đàn ông đã có một ngày tồi tệ.'],
    ['My cat sat on the mat.', 'Con mèo của tôi ngồi trên tấm thảm.'],
    ['I said I was sad.', 'Tôi đã nói là tôi buồn.'],
    ['Can I borrow your black pen?', 'Tôi mượn cây bút đen của bạn được không?'],
    ['Ten men went to the bank.', 'Mười người đàn ông đã đến ngân hàng.'],
    ['That apple is better than this one.', 'Quả táo kia ngon hơn quả này.']] },
  { id: 'cl', t: 'Cụm phụ âm (str, spr, -sts)', tip: 'Đừng chèn thêm nguyên âm: "street" chứ không phải "sơ-tơ-rít". Nói liền mạch các phụ âm.', say: [
    ['The students walked down the street.', 'Các sinh viên đi bộ xuống phố.'],
    ['Spring is the best season.', 'Mùa xuân là mùa đẹp nhất.'],
    ['She texts her friends after class.', 'Cô ấy nhắn tin cho bạn bè sau giờ học.'],
    ['The strong wind scratched the windows.', 'Cơn gió mạnh cào xước cửa sổ.'],
    ['He asked for six extra desks.', 'Anh ấy xin thêm sáu cái bàn.'],
    ['Stop stressing about the test.', 'Đừng căng thẳng về bài kiểm tra nữa.']] },
  { id: 'stress', t: 'Trọng âm và ngữ điệu', tip: 'Nhấn mạnh từ quan trọng, nói lướt từ nhỏ. Lên giọng ở câu hỏi Có/Không, xuống giọng ở câu hỏi Wh-.', say: [
    ['Are you coming to the party?', 'Bạn có đến bữa tiệc không?'],
    ['Where are you going this weekend?', 'Cuối tuần này bạn đi đâu?'],
    ['I didn\'t say she stole the money.', 'Tôi không nói là cô ấy đã lấy trộm tiền.'],
    ['I\'d like to present my present to you.', 'Tôi muốn trao món quà của tôi cho bạn.'],
    ['The photographer took a beautiful photograph.', 'Nhiếp ảnh gia đã chụp một bức ảnh đẹp.'],
    ['What a wonderful idea!', 'Ý tưởng tuyệt vời quá!']] }
];
