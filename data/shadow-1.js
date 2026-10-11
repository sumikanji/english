/*! © 2026 Sumi English — Shadowing: đoạn văn tự kể chuyện (A1–A2) */
window.SE_SHADOW = window.SE_SHADOW || [];
window.SH = function (lv, vi, en, txt) {
  const n = window.SE_SHADOW.filter(x => x.lv === lv).length + 1;
  window.SE_SHADOW.push({ id: 'sh-' + lv + '-' + String(n).padStart(2, '0'), lv, t: vi, en, s: txt.trim().split('\n').map(l => l.trim()).filter(Boolean).map(l => l.split('|')) });
};

// ===================== A1 =====================
SH('a1', 'Giới thiệu bản thân', 'About me', `
Hi! My name is Lan.|Chào! Tên mình là Lan.
I am twenty-five years old.|Mình hai mươi lăm tuổi.
I am from Vietnam.|Mình đến từ Việt Nam.
Now I live in Japan.|Bây giờ mình sống ở Nhật Bản.
I work at a hotel near the airport.|Mình làm việc ở một khách sạn gần sân bay.
I like music, cooking and walking in the park.|Mình thích âm nhạc, nấu ăn và đi dạo trong công viên.
I am learning English every day.|Ngày nào mình cũng học tiếng Anh.
Nice to meet you!|Rất vui được gặp bạn!
`);
SH('a1', 'Gia đình tôi', 'My family', `
I have a small family.|Mình có một gia đình nhỏ.
There are four people in my family.|Gia đình mình có bốn người.
My father is a teacher.|Bố mình là giáo viên.
My mother is a nurse.|Mẹ mình là y tá.
I have one younger brother.|Mình có một em trai.
He is a student, and he likes football.|Em ấy là học sinh, và em ấy thích bóng đá.
We eat dinner together every evening.|Tối nào cả nhà cũng ăn cơm cùng nhau.
I love my family very much.|Mình rất yêu gia đình mình.
`);
SH('a1', 'Nhà của tôi', 'My home', `
I live in a small apartment.|Mình sống trong một căn hộ nhỏ.
It is on the fifth floor.|Nó ở tầng năm.
There is a bedroom, a kitchen and a bathroom.|Có một phòng ngủ, một nhà bếp và một phòng tắm.
My bedroom has a big window.|Phòng ngủ của mình có một cửa sổ lớn.
I can see the mountains from my window.|Mình có thể nhìn thấy núi từ cửa sổ.
The kitchen is small, but it is clean.|Nhà bếp nhỏ, nhưng sạch sẽ.
I have a lot of plants on my balcony.|Mình có rất nhiều cây ở ban công.
I like my home because it is quiet.|Mình thích nhà mình vì nó yên tĩnh.
`);
SH('a1', 'Khu tôi sống', 'My neighborhood', `
My neighborhood is quiet and friendly.|Khu mình sống yên tĩnh và thân thiện.
There is a supermarket near my house.|Có một siêu thị gần nhà mình.
There is also a park with many trees.|Cũng có một công viên với rất nhiều cây.
I go to the park on Sunday mornings.|Mình ra công viên vào các sáng Chủ nhật.
The train station is ten minutes away on foot.|Ga tàu cách đây mười phút đi bộ.
There is a small coffee shop on the corner.|Có một quán cà phê nhỏ ở góc phố.
The people here are very kind.|Mọi người ở đây rất tốt bụng.
I am happy to live here.|Mình vui khi được sống ở đây.
`);
SH('a1', 'Một ngày của tôi', 'My day', `
I get up at six o'clock.|Mình dậy lúc sáu giờ.
I wash my face and brush my teeth.|Mình rửa mặt và đánh răng.
I have bread and coffee for breakfast.|Bữa sáng mình ăn bánh mì và uống cà phê.
I go to work by bus.|Mình đi làm bằng xe buýt.
I start work at eight o'clock.|Mình bắt đầu làm việc lúc tám giờ.
I have lunch with my friends at noon.|Buổi trưa mình ăn cùng các bạn.
In the evening, I cook dinner and watch TV.|Buổi tối, mình nấu bữa tối và xem ti vi.
I go to bed at eleven o'clock.|Mình đi ngủ lúc mười một giờ.
`);
SH('a1', 'Bạn thân của tôi', 'My best friend', `
My best friend is Mai.|Bạn thân của mình là Mai.
We met at school ten years ago.|Bọn mình gặp nhau ở trường mười năm trước.
She is tall and she has long black hair.|Bạn ấy cao và có mái tóc đen dài.
She is funny and very kind.|Bạn ấy vui tính và rất tốt bụng.
She likes reading books and drawing.|Bạn ấy thích đọc sách và vẽ tranh.
We talk on the phone every week.|Tuần nào bọn mình cũng nói chuyện điện thoại.
Sometimes we go shopping together.|Thỉnh thoảng bọn mình đi mua sắm cùng nhau.
I am lucky to have a friend like her.|Mình thật may mắn khi có một người bạn như vậy.
`);
SH('a1', 'Món ăn tôi thích', 'My favorite food', `
My favorite food is pho.|Món ăn mình thích nhất là phở.
Pho is a Vietnamese noodle soup.|Phở là một món mì nước của Việt Nam.
It has rice noodles, beef and fresh herbs.|Phở có bánh phở, thịt bò và rau thơm.
I eat pho for breakfast on weekends.|Cuối tuần mình ăn phở vào bữa sáng.
My mother makes the best pho.|Mẹ mình nấu phở ngon nhất.
I also like fruit, especially mangoes.|Mình cũng thích trái cây, nhất là xoài.
I don't like very spicy food.|Mình không thích đồ ăn quá cay.
What is your favorite food?|Món ăn yêu thích của bạn là gì?
`);
SH('a1', 'Thú cưng của tôi', 'My pet', `
I have a cat.|Mình có một con mèo.
Her name is Miu.|Tên nó là Miu.
She is three years old.|Nó ba tuổi.
She is white and grey, and her eyes are green.|Nó màu trắng xám, mắt màu xanh lá.
She sleeps on my bed every night.|Đêm nào nó cũng ngủ trên giường mình.
She likes fish and milk.|Nó thích cá và sữa.
When I come home, she runs to the door.|Khi mình về nhà, nó chạy ra cửa.
Miu makes me happy every day.|Miu làm mình vui mỗi ngày.
`);
SH('a1', 'Cuối tuần của tôi', 'My weekend', `
I love weekends.|Mình rất thích cuối tuần.
On Saturday, I clean my room and wash my clothes.|Thứ Bảy, mình dọn phòng và giặt quần áo.
In the afternoon, I go to the market.|Buổi chiều, mình đi chợ.
I buy vegetables, fish and fruit.|Mình mua rau, cá và trái cây.
On Sunday, I meet my friends.|Chủ nhật, mình gặp bạn bè.
We often have lunch at a small restaurant.|Bọn mình hay ăn trưa ở một nhà hàng nhỏ.
Then we walk by the river.|Sau đó bọn mình đi dạo bên bờ sông.
Weekends are short, but they are fun.|Cuối tuần ngắn, nhưng rất vui.
`);
SH('a1', 'Thời tiết nơi tôi sống', 'The weather here', `
I live in Fukuoka.|Mình sống ở Fukuoka.
In spring, it is warm and there are many flowers.|Mùa xuân trời ấm và có rất nhiều hoa.
In summer, it is very hot and it rains a lot.|Mùa hè trời rất nóng và mưa nhiều.
In autumn, the weather is cool and nice.|Mùa thu thời tiết mát mẻ và dễ chịu.
In winter, it is cold, but it doesn't snow much.|Mùa đông trời lạnh, nhưng không có nhiều tuyết.
My favorite season is autumn.|Mùa mình thích nhất là mùa thu.
In my hometown in Vietnam, it is hot all year.|Ở quê mình tại Việt Nam, trời nóng quanh năm.
Today it is sunny and windy.|Hôm nay trời nắng và có gió.
`);
SH('a1', 'Sở thích của tôi', 'My hobbies', `
I have many hobbies.|Mình có nhiều sở thích.
I like listening to music in the evening.|Mình thích nghe nhạc vào buổi tối.
I can play the guitar a little.|Mình có thể chơi ghi-ta một chút.
I also like taking photos.|Mình cũng thích chụp ảnh.
I take photos of flowers, the sky and the sea.|Mình chụp ảnh hoa, bầu trời và biển.
On weekends, I go swimming.|Cuối tuần, mình đi bơi.
Swimming is good for my health.|Bơi lội tốt cho sức khoẻ của mình.
What are your hobbies?|Sở thích của bạn là gì?
`);
SH('a1', 'Công việc của tôi', 'My job', `
I work at a hotel.|Mình làm việc ở một khách sạn.
I work at the front desk.|Mình làm ở quầy lễ tân.
I say hello to the guests and give them their keys.|Mình chào khách và đưa chìa khoá cho họ.
I answer the phone and I help people.|Mình nghe điện thoại và giúp đỡ mọi người.
Many guests come from other countries.|Nhiều khách đến từ các nước khác.
So I speak English every day.|Vì vậy ngày nào mình cũng nói tiếng Anh.
My job is busy, but it is interesting.|Công việc của mình bận, nhưng thú vị.
I like my coworkers very much.|Mình rất quý các đồng nghiệp.
`);

// ===================== A2 =====================
SH('a2', 'Quê hương tôi', 'My hometown', `
I was born in a small town in the north of Vietnam.|Mình sinh ra ở một thị trấn nhỏ ở miền Bắc Việt Nam.
It is about two hours from Hanoi by car.|Nó cách Hà Nội khoảng hai tiếng đi ô tô.
My hometown is famous for its rice fields.|Quê mình nổi tiếng với những cánh đồng lúa.
In summer, the fields turn green, and in autumn they turn gold.|Mùa hè cánh đồng xanh mướt, còn mùa thu chuyển sang màu vàng.
Life there is slower than in the city.|Cuộc sống ở đó chậm hơn ở thành phố.
People know each other and often help their neighbors.|Mọi người biết nhau và thường giúp đỡ hàng xóm.
When I was a child, I played in the fields with my friends.|Hồi nhỏ, mình chơi ngoài đồng với các bạn.
I miss my hometown, so I go back every Tet holiday.|Mình nhớ quê, nên Tết nào mình cũng về.
`);
SH('a2', 'Chuyến đi đáng nhớ', 'A trip I remember', `
Last year, I went to Da Nang with my family.|Năm ngoái, mình đi Đà Nẵng cùng gia đình.
We stayed in a hotel near the beach for four days.|Cả nhà ở một khách sạn gần biển bốn ngày.
Every morning, we swam in the sea.|Sáng nào cả nhà cũng bơi ở biển.
The water was clear and warm.|Nước biển trong và ấm.
One day, we visited the old town of Hoi An.|Một hôm, cả nhà đi thăm phố cổ Hội An.
At night, the streets were full of colorful lanterns.|Buổi tối, phố phường rực rỡ đèn lồng nhiều màu.
We ate a lot of seafood and took hundreds of photos.|Cả nhà ăn rất nhiều hải sản và chụp hàng trăm tấm ảnh.
It was the best holiday of my life.|Đó là kỳ nghỉ tuyệt nhất trong đời mình.
`);
SH('a2', 'Tôi học tiếng Anh thế nào', 'How I learn English', `
I started learning English two years ago.|Mình bắt đầu học tiếng Anh hai năm trước.
At first, it was very difficult for me.|Lúc đầu, nó rất khó với mình.
I couldn't understand people when they spoke fast.|Mình không hiểu khi người ta nói nhanh.
So I decided to listen to English every day.|Vì vậy mình quyết định nghe tiếng Anh mỗi ngày.
I listen to short stories on the bus.|Mình nghe truyện ngắn trên xe buýt.
I also repeat sentences out loud at home.|Mình cũng lặp lại các câu thành tiếng ở nhà.
Now I can talk with guests at work without fear.|Bây giờ mình có thể nói chuyện với khách ở chỗ làm mà không sợ.
My advice is: practice a little every day.|Lời khuyên của mình là: luyện một chút mỗi ngày.
`);
SH('a2', 'Thói quen mua sắm', 'My shopping habits', `
I don't like shopping in big malls.|Mình không thích mua sắm ở các trung tâm thương mại lớn.
They are too crowded and noisy.|Ở đó quá đông và ồn ào.
I usually buy clothes online.|Mình thường mua quần áo trên mạng.
It is cheaper, and I can shop at home.|Rẻ hơn, và mình có thể mua sắm ở nhà.
But sometimes the size is wrong, and I have to send it back.|Nhưng đôi khi sai kích cỡ, và mình phải gửi trả lại.
For food, I go to the supermarket twice a week.|Còn đồ ăn, mỗi tuần mình đi siêu thị hai lần.
I always make a shopping list before I go.|Mình luôn viết danh sách mua sắm trước khi đi.
That way, I don't buy things I don't need.|Như vậy, mình không mua những thứ không cần.
`);
SH('a2', 'Nấu món tôi thích', 'Cooking my favorite dish', `
I want to tell you how I make spring rolls.|Mình muốn kể bạn nghe cách mình làm nem cuốn.
First, I buy rice paper, shrimp, pork and fresh vegetables.|Đầu tiên, mình mua bánh tráng, tôm, thịt lợn và rau sống.
Then I boil the shrimp and the pork.|Sau đó mình luộc tôm và thịt.
Next, I wash the lettuce and the herbs carefully.|Tiếp theo, mình rửa xà lách và rau thơm thật kỹ.
I put the rice paper in water for a second to make it soft.|Mình nhúng bánh tráng vào nước một giây cho mềm.
After that, I put everything on the paper and roll it up.|Sau đó, mình đặt mọi thứ lên bánh và cuốn lại.
The sauce is very important, so I make it myself.|Nước chấm rất quan trọng, nên mình tự làm.
My Japanese friends love my spring rolls.|Các bạn người Nhật của mình rất thích nem cuốn mình làm.
`);
SH('a2', 'Ngày đầu đi làm', 'My first day at work', `
I still remember my first day at the hotel.|Mình vẫn nhớ ngày đầu tiên ở khách sạn.
I woke up very early because I was nervous.|Mình dậy rất sớm vì hồi hộp.
I wore a new shirt and black shoes.|Mình mặc áo sơ mi mới và giày đen.
My manager showed me around the building.|Quản lý dẫn mình đi xem khắp toà nhà.
Then a coworker taught me how to use the computer system.|Sau đó một đồng nghiệp dạy mình dùng hệ thống máy tính.
In the afternoon, I made a mistake with a guest's booking.|Buổi chiều, mình nhầm đặt phòng của một vị khách.
My coworker helped me fix it and told me not to worry.|Đồng nghiệp giúp mình sửa và bảo mình đừng lo.
When I went home, I was tired but happy.|Khi về nhà, mình mệt nhưng vui.
`);
SH('a2', 'Mùa tôi yêu thích', 'My favorite season', `
My favorite season is spring.|Mùa mình thích nhất là mùa xuân.
In Japan, spring is the season of cherry blossoms.|Ở Nhật, mùa xuân là mùa hoa anh đào.
The weather is not too hot and not too cold.|Thời tiết không quá nóng cũng không quá lạnh.
People have picnics under the trees with their friends.|Mọi người đi dã ngoại dưới tán cây cùng bạn bè.
Last spring, my coworkers and I had a picnic in the park.|Mùa xuân năm ngoái, mình và đồng nghiệp đi dã ngoại ở công viên.
We brought rice balls, fruit and cold drinks.|Bọn mình mang theo cơm nắm, trái cây và đồ uống lạnh.
The pink flowers were falling like snow.|Những cánh hoa hồng rơi như tuyết.
I want to see that view again next year.|Mình muốn ngắm cảnh đó lần nữa vào năm sau.
`);
SH('a2', 'Phòng ngủ của tôi', 'My bedroom', `
My bedroom is my favorite place in the house.|Phòng ngủ là nơi mình thích nhất trong nhà.
It isn't very big, but it is comfortable.|Nó không to lắm, nhưng rất thoải mái.
There is a bed next to the window.|Có một cái giường cạnh cửa sổ.
On the wall, there are photos of my family and friends.|Trên tường có ảnh gia đình và bạn bè mình.
I have a small desk where I study in the evening.|Mình có một cái bàn nhỏ để học buổi tối.
There is a lamp, some books and a plant on it.|Trên đó có một cái đèn, vài cuốn sách và một chậu cây.
My clothes are in a white wardrobe.|Quần áo của mình ở trong một tủ áo màu trắng.
When I am tired, I just want to lie in my bed and read.|Khi mệt, mình chỉ muốn nằm trên giường đọc sách.
`);
SH('a2', 'Sinh nhật đáng nhớ', 'A birthday I remember', `
My twentieth birthday was very special.|Sinh nhật hai mươi tuổi của mình rất đặc biệt.
I was studying in the city, far from my family.|Lúc đó mình đang học ở thành phố, xa gia đình.
I thought nobody remembered my birthday.|Mình nghĩ không ai nhớ sinh nhật mình.
In the evening, my roommates asked me to go out for dinner.|Buổi tối, các bạn cùng phòng rủ mình đi ăn tối.
When we came back, the room was dark.|Khi bọn mình quay về, căn phòng tối om.
Suddenly, the lights came on and everyone shouted "Happy birthday!"|Đột nhiên đèn bật sáng và mọi người hét lên "Chúc mừng sinh nhật!"
There was a cake, and my parents were on a video call.|Có một chiếc bánh kem, và bố mẹ mình đang gọi video.
I cried because I was so happy.|Mình khóc vì quá hạnh phúc.
`);
SH('a2', 'Điện thoại và tôi', 'My phone and me', `
I use my phone for many things.|Mình dùng điện thoại cho rất nhiều việc.
In the morning, it wakes me up with an alarm.|Buổi sáng, nó đánh thức mình bằng chuông báo.
On the bus, I read the news and learn English with an app.|Trên xe buýt, mình đọc tin tức và học tiếng Anh bằng ứng dụng.
I also use it to pay in shops and to check the train times.|Mình cũng dùng nó để trả tiền ở cửa hàng và xem giờ tàu.
Every evening, I call my parents in Vietnam.|Tối nào mình cũng gọi cho bố mẹ ở Việt Nam.
But sometimes I spend too much time on social media.|Nhưng đôi khi mình dành quá nhiều thời gian cho mạng xã hội.
So now I don't use my phone after ten o'clock at night.|Vì vậy bây giờ mình không dùng điện thoại sau mười giờ tối.
I sleep better and I read more books.|Mình ngủ ngon hơn và đọc sách nhiều hơn.
`);
SH('a2', 'Một ngày Chủ nhật', 'A typical Sunday', `
On Sundays, I don't set an alarm.|Chủ nhật, mình không đặt chuông báo thức.
I usually wake up at about nine.|Mình thường dậy vào khoảng chín giờ.
I make pancakes and drink a big cup of tea.|Mình làm bánh kếp và uống một cốc trà lớn.
Then I clean the apartment and do the laundry.|Sau đó mình dọn nhà và giặt đồ.
In the afternoon, I often ride my bike to the beach.|Buổi chiều, mình hay đạp xe ra biển.
I sit on the sand, listen to music and watch the waves.|Mình ngồi trên cát, nghe nhạc và ngắm sóng.
In the evening, I prepare food for the next week.|Buổi tối, mình chuẩn bị đồ ăn cho tuần sau.
It is a simple day, but it makes me feel calm.|Đó là một ngày đơn giản, nhưng khiến mình thấy bình yên.
`);
SH('a2', 'Đi khám bác sĩ', 'A visit to the doctor', `
Last month, I had a bad cold.|Tháng trước, mình bị cảm nặng.
I had a sore throat and a high fever.|Mình bị đau họng và sốt cao.
I didn't want to go to the doctor because my Japanese is not very good.|Mình không muốn đi bác sĩ vì tiếng Nhật của mình không giỏi lắm.
But my coworker said the clinic near the station has an English-speaking doctor.|Nhưng đồng nghiệp bảo phòng khám gần ga có bác sĩ nói tiếng Anh.
The doctor was very kind and explained everything slowly.|Bác sĩ rất tốt và giải thích mọi thứ thật chậm.
She gave me some medicine and told me to rest for three days.|Bác sĩ cho mình thuốc và dặn nghỉ ngơi ba ngày.
I drank a lot of water and slept a lot.|Mình uống nhiều nước và ngủ rất nhiều.
After a week, I felt much better.|Sau một tuần, mình thấy khoẻ hơn nhiều.
`);
