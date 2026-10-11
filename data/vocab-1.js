/*! © 2026 Sumi English — Từ vựng theo chủ đề (phần 1) */
// Mỗi dòng: từ | nghĩa | câu ví dụ | nghĩa câu ví dụ
window.SE_VOCAB_TOPICS = window.SE_VOCAB_TOPICS || [];
window.VT = function (id, t, en, kind, txt) {
  window.SE_VOCAB_TOPICS.push({ id, t, en, kind, w: txt.trim().split('\n').map(x => x.trim().split('|').map(y => y.trim())) });
};

VT('abc', 'Bảng chữ cái', 'The alphabet', 'abc', `
A|ây|A is for apple.|A là quả táo (apple).
B|bi|B is for ball.|B là quả bóng (ball).
C|xi|C is for cat.|C là con mèo (cat).
D|đi|D is for dog.|D là con chó (dog).
E|i|E is for egg.|E là quả trứng (egg).
F|ép|F is for fish.|F là con cá (fish).
G|di|G is for girl.|G là cô bé (girl).
H|ếch|H is for house.|H là ngôi nhà (house).
I|ai|I is for ice cream.|I là kem (ice cream).
J|giây|J is for juice.|J là nước ép (juice).
K|cây|K is for key.|K là chìa khoá (key).
L|eo|L is for lion.|L là sư tử (lion).
M|em|M is for moon.|M là mặt trăng (moon).
N|en|N is for nose.|N là cái mũi (nose).
O|âu|O is for orange.|O là quả cam (orange).
P|pi|P is for pen.|P là cây bút (pen).
Q|kiu|Q is for queen.|Q là nữ hoàng (queen).
R|a|R is for rain.|R là mưa (rain).
S|ét|S is for sun.|S là mặt trời (sun).
T|ti|T is for tree.|T là cái cây (tree).
U|diu|U is for umbrella.|U là cái ô (umbrella).
V|vi|V is for van.|V là xe tải nhỏ (van).
W|đắp-bồ-diu|W is for water.|W là nước (water).
X|ếch|X is for x-ray.|X là tia X (x-ray).
Y|goai|Y is for yellow.|Y là màu vàng (yellow).
Z|di (Mỹ) / zed (Anh)|Z is for zoo.|Z là sở thú (zoo).`);

VT('num', 'Chữ số', 'Numbers', 'num', `
0|zero|I have zero messages.|Tôi có không tin nhắn nào.
1|one|I have one brother.|Tôi có một anh trai.
2|two|Two coffees, please.|Cho hai ly cà phê.
3|three|We have three cats.|Chúng tôi có ba con mèo.
4|four|The table has four legs.|Cái bàn có bốn chân.
5|five|I work five days a week.|Tôi làm năm ngày một tuần.
6|six|I wake up at six.|Tôi dậy lúc sáu giờ.
7|seven|There are seven days in a week.|Một tuần có bảy ngày.
8|eight|The shop opens at eight.|Cửa hàng mở lúc tám giờ.
9|nine|My son is nine years old.|Con trai tôi chín tuổi.
10|ten|Count to ten.|Đếm đến mười.
11|eleven|I go to bed at eleven.|Tôi đi ngủ lúc mười một giờ.
12|twelve|A year has twelve months.|Một năm có mười hai tháng.
13|thirteen|She is thirteen.|Cô bé mười ba tuổi.
14|fourteen|It costs fourteen dollars.|Nó giá mười bốn đô.
15|fifteen|Wait fifteen minutes.|Đợi mười lăm phút.
16|sixteen|Room sixteen is upstairs.|Phòng mười sáu ở tầng trên.
17|seventeen|He is seventeen.|Cậu ấy mười bảy tuổi.
18|eighteen|You must be eighteen to drive.|Bạn phải đủ mười tám tuổi mới được lái xe.
19|nineteen|Bus nineteen goes downtown.|Xe buýt số mười chín đi vào trung tâm.
20|twenty|I have twenty dollars.|Tôi có hai mươi đô.
30|thirty|There are thirty students.|Có ba mươi học sinh.
40|forty|It takes forty minutes.|Mất bốn mươi phút.
50|fifty|My father is fifty.|Bố tôi năm mươi tuổi.
60|sixty|An hour has sixty minutes.|Một giờ có sáu mươi phút.
70|seventy|My grandmother is seventy.|Bà tôi bảy mươi tuổi.
80|eighty|The book has eighty pages.|Cuốn sách có tám mươi trang.
90|ninety|It's ninety kilometers away.|Nơi đó cách chín mươi cây số.
100|one hundred|I got one hundred points.|Tôi được một trăm điểm.
1000|one thousand|It costs one thousand yen.|Nó giá một nghìn yên.
1000000|one million|One million people live here.|Một triệu người sống ở đây.`);

VT('time', 'Ngày, tháng và giờ', 'Days, months and time', 'time', `
Monday|thứ Hai|I have class on Monday.|Tôi có lớp vào thứ Hai.
Tuesday|thứ Ba|The meeting is on Tuesday.|Cuộc họp vào thứ Ba.
Wednesday|thứ Tư|See you on Wednesday.|Hẹn gặp thứ Tư.
Thursday|thứ Năm|I play tennis on Thursday.|Tôi chơi quần vợt vào thứ Năm.
Friday|thứ Sáu|Friday is my favorite day.|Thứ Sáu là ngày tôi thích nhất.
Saturday|thứ Bảy|We go shopping on Saturday.|Chúng tôi đi mua sắm vào thứ Bảy.
Sunday|Chủ nhật|I rest on Sunday.|Tôi nghỉ ngơi vào Chủ nhật.
January|tháng Một|My birthday is in January.|Sinh nhật tôi vào tháng Một.
February|tháng Hai|February is short.|Tháng Hai ngắn.
March|tháng Ba|Spring starts in March.|Mùa xuân bắt đầu vào tháng Ba.
April|tháng Tư|It rains a lot in April.|Tháng Tư mưa nhiều.
May|tháng Năm|The flowers bloom in May.|Hoa nở vào tháng Năm.
June|tháng Sáu|School ends in June.|Năm học kết thúc vào tháng Sáu.
July|tháng Bảy|July is very hot.|Tháng Bảy rất nóng.
August|tháng Tám|We go to the beach in August.|Chúng tôi đi biển vào tháng Tám.
September|tháng Chín|School starts in September.|Năm học bắt đầu vào tháng Chín.
October|tháng Mười|The leaves turn red in October.|Lá chuyển đỏ vào tháng Mười.
November|tháng Mười Một|It gets cold in November.|Tháng Mười Một trời trở lạnh.
December|tháng Mười Hai|Christmas is in December.|Giáng sinh vào tháng Mười Hai.
morning|buổi sáng|I drink coffee in the morning.|Tôi uống cà phê vào buổi sáng.
afternoon|buổi chiều|I take a nap in the afternoon.|Tôi ngủ trưa vào buổi chiều.
evening|buổi tối|We eat dinner in the evening.|Chúng tôi ăn tối vào buổi tối.
night|đêm|I sleep at night.|Tôi ngủ vào ban đêm.
today|hôm nay|Today is Monday.|Hôm nay là thứ Hai.
tomorrow|ngày mai|See you tomorrow.|Hẹn gặp ngày mai.
yesterday|hôm qua|I was tired yesterday.|Hôm qua tôi mệt.
o'clock|giờ đúng|It's three o'clock.|Bây giờ là ba giờ đúng.
half past|rưỡi (30 phút)|It's half past seven.|Bây giờ là bảy giờ rưỡi.
quarter past|… giờ mười lăm|It's quarter past nine.|Bây giờ là chín giờ mười lăm.
quarter to|… giờ kém mười lăm|It's quarter to five.|Bây giờ là năm giờ kém mười lăm.`);

VT('colors', 'Màu sắc', 'Colors', 'word', `
red|màu đỏ|The apple is red.|Quả táo màu đỏ.
blue|màu xanh dương|The sky is blue.|Bầu trời màu xanh.
green|màu xanh lá|The grass is green.|Cỏ màu xanh lá.
yellow|màu vàng|The banana is yellow.|Quả chuối màu vàng.
orange|màu cam|I have an orange bag.|Tôi có một cái túi màu cam.
purple|màu tím|She likes purple flowers.|Cô ấy thích hoa màu tím.
pink|màu hồng|The baby's dress is pink.|Váy của em bé màu hồng.
brown|màu nâu|The dog is brown.|Con chó màu nâu.
black|màu đen|I have black hair.|Tôi có tóc đen.
white|màu trắng|Snow is white.|Tuyết màu trắng.
gray|màu xám|The clouds are gray.|Mây màu xám.
gold|màu vàng kim|She wears a gold ring.|Cô ấy đeo nhẫn vàng.
silver|màu bạc|My car is silver.|Xe tôi màu bạc.
light blue|xanh nhạt|I like light blue shirts.|Tôi thích áo sơ mi xanh nhạt.
dark green|xanh đậm|The forest is dark green.|Khu rừng màu xanh đậm.`);

VT('animals', 'Động vật', 'Animals', 'word', `
dog|con chó|The dog is barking.|Con chó đang sủa.
cat|con mèo|The cat is sleeping on the sofa.|Con mèo đang ngủ trên ghế sofa.
bird|con chim|A bird is singing.|Một con chim đang hót.
fish|con cá|The fish swims fast.|Con cá bơi nhanh.
rabbit|con thỏ|The rabbit eats carrots.|Con thỏ ăn cà rốt.
mouse|con chuột|A mouse is in the kitchen.|Có một con chuột trong bếp.
cow|con bò|The cow gives us milk.|Con bò cho chúng ta sữa.
pig|con lợn|The pig is very fat.|Con lợn rất béo.
chicken|con gà|The chicken lays eggs.|Con gà đẻ trứng.
duck|con vịt|The duck is in the pond.|Con vịt ở trong ao.
horse|con ngựa|He rides a horse.|Anh ấy cưỡi ngựa.
sheep|con cừu|The sheep has white wool.|Con cừu có lông trắng.
goat|con dê|The goat climbs the rocks.|Con dê leo lên những tảng đá.
buffalo|con trâu|The buffalo works in the rice field.|Con trâu làm việc trên ruộng lúa.
elephant|con voi|The elephant is huge.|Con voi rất to.
tiger|con hổ|The tiger has stripes.|Con hổ có sọc.
lion|con sư tử|The lion is the king of the jungle.|Sư tử là chúa sơn lâm.
bear|con gấu|The bear loves honey.|Con gấu thích mật ong.
monkey|con khỉ|The monkey is eating a banana.|Con khỉ đang ăn chuối.
giraffe|con hươu cao cổ|The giraffe has a long neck.|Hươu cao cổ có cái cổ dài.
zebra|con ngựa vằn|The zebra is black and white.|Ngựa vằn có màu đen và trắng.
snake|con rắn|Be careful, there's a snake!|Cẩn thận, có con rắn!
frog|con ếch|The frog jumps into the water.|Con ếch nhảy xuống nước.
turtle|con rùa|The turtle walks slowly.|Con rùa đi chậm.
crocodile|con cá sấu|The crocodile has sharp teeth.|Cá sấu có răng sắc.
deer|con hươu|We saw a deer in the forest.|Chúng tôi thấy một con hươu trong rừng.
fox|con cáo|The fox is very clever.|Con cáo rất thông minh.
wolf|con sói|The wolf howls at night.|Con sói hú vào ban đêm.
kangaroo|con chuột túi|Kangaroos live in Australia.|Chuột túi sống ở Úc.
penguin|chim cánh cụt|Penguins can't fly.|Chim cánh cụt không biết bay.`);

VT('sea', 'Côn trùng và sinh vật biển', 'Insects and sea animals', 'word', `
ant|con kiến|An ant is very small.|Con kiến rất nhỏ.
bee|con ong|The bee makes honey.|Con ong làm ra mật.
butterfly|con bướm|A butterfly is on the flower.|Có con bướm trên bông hoa.
mosquito|con muỗi|A mosquito bit me.|Con muỗi đốt tôi.
fly|con ruồi|There's a fly on the cake.|Có con ruồi trên bánh.
spider|con nhện|The spider makes a web.|Con nhện giăng tơ.
cockroach|con gián|I hate cockroaches.|Tôi ghét gián.
dragonfly|con chuồn chuồn|A dragonfly flies over the lake.|Con chuồn chuồn bay trên hồ.
snail|con ốc sên|The snail is very slow.|Con ốc sên rất chậm.
worm|con giun|The bird caught a worm.|Con chim bắt được con giun.
shark|cá mập|The shark is dangerous.|Cá mập rất nguy hiểm.
whale|cá voi|The whale is the biggest animal.|Cá voi là loài vật to nhất.
dolphin|cá heo|Dolphins are smart.|Cá heo rất thông minh.
octopus|con bạch tuộc|An octopus has eight arms.|Bạch tuộc có tám xúc tu.
crab|con cua|The crab walks sideways.|Con cua bò ngang.
shrimp|con tôm|I love fried shrimp.|Tôi rất thích tôm chiên.
squid|con mực|We had grilled squid.|Chúng tôi đã ăn mực nướng.
jellyfish|con sứa|Don't touch the jellyfish.|Đừng chạm vào con sứa.
starfish|sao biển|I found a starfish on the beach.|Tôi tìm thấy một con sao biển trên bãi biển.
seahorse|cá ngựa|The seahorse is tiny.|Con cá ngựa rất nhỏ.`);

VT('plants', 'Cây cối và hoa', 'Trees and flowers', 'word', `
tree|cái cây|The tree is very tall.|Cái cây rất cao.
flower|bông hoa|She picked a flower.|Cô ấy hái một bông hoa.
leaf|chiếc lá|The leaf is falling.|Chiếc lá đang rơi.
branch|cành cây|A bird sits on the branch.|Một con chim đậu trên cành.
root|rễ cây|The roots are under the ground.|Rễ cây ở dưới đất.
grass|cỏ|Don't walk on the grass.|Đừng giẫm lên cỏ.
seed|hạt giống|Plant the seed in the soil.|Gieo hạt giống xuống đất.
rose|hoa hồng|He gave her a red rose.|Anh ấy tặng cô ấy một bông hồng đỏ.
lotus|hoa sen|The lotus is Vietnam's national flower.|Hoa sen là quốc hoa của Việt Nam.
sunflower|hoa hướng dương|Sunflowers follow the sun.|Hoa hướng dương hướng theo mặt trời.
cherry blossom|hoa anh đào|Cherry blossoms bloom in spring.|Hoa anh đào nở vào mùa xuân.
orchid|hoa lan|This orchid is very expensive.|Cây hoa lan này rất đắt.
lily|hoa ly|Lilies smell sweet.|Hoa ly có mùi thơm ngọt.
tulip|hoa tulip|Tulips come in many colors.|Hoa tulip có nhiều màu.
bamboo|cây tre|Pandas eat bamboo.|Gấu trúc ăn tre.
pine tree|cây thông|We decorate a pine tree at Christmas.|Chúng tôi trang trí cây thông vào Giáng sinh.
palm tree|cây cọ, cây dừa|There are palm trees on the beach.|Có những cây dừa trên bãi biển.
cactus|cây xương rồng|A cactus needs little water.|Cây xương rồng cần ít nước.
bush|bụi cây|The cat is hiding in the bush.|Con mèo đang trốn trong bụi cây.
mushroom|cây nấm|Some mushrooms are poisonous.|Một số loại nấm có độc.`);

VT('vehicles', 'Xe cộ và giao thông', 'Vehicles and transport', 'word', `
car|xe hơi|My car is in the garage.|Xe hơi của tôi ở trong ga-ra.
bus|xe buýt|I take the bus to school.|Tôi đi xe buýt đến trường.
taxi|xe taxi|Let's take a taxi.|Mình đi taxi đi.
bicycle|xe đạp|I ride my bicycle to work.|Tôi đạp xe đi làm.
motorbike|xe máy|Many people ride motorbikes in Vietnam.|Nhiều người đi xe máy ở Việt Nam.
truck|xe tải|The truck is carrying boxes.|Chiếc xe tải đang chở những thùng hàng.
van|xe tải nhỏ|The van delivers packages.|Chiếc xe tải nhỏ giao bưu kiện.
train|tàu hoả|The train is late.|Tàu hoả bị trễ.
subway|tàu điện ngầm|The subway is fast.|Tàu điện ngầm rất nhanh.
plane|máy bay|The plane is taking off.|Máy bay đang cất cánh.
helicopter|trực thăng|A helicopter is flying over the city.|Một chiếc trực thăng đang bay trên thành phố.
boat|thuyền|We took a boat on the river.|Chúng tôi đi thuyền trên sông.
ship|tàu thuỷ|The ship is very big.|Con tàu rất lớn.
ambulance|xe cứu thương|Call an ambulance!|Gọi xe cứu thương!
fire engine|xe cứu hoả|The fire engine is red.|Xe cứu hoả màu đỏ.
police car|xe cảnh sát|A police car is coming.|Một chiếc xe cảnh sát đang đến.
scooter|xe trượt, xe tay ga|My son has a scooter.|Con trai tôi có một chiếc xe trượt.
traffic light|đèn giao thông|Stop at the red traffic light.|Dừng lại ở đèn đỏ.
road|con đường|This road is very busy.|Con đường này rất đông.
bridge|cây cầu|Walk across the bridge.|Đi bộ qua cầu.
station|nhà ga|Meet me at the station.|Gặp tôi ở nhà ga.
airport|sân bay|The airport is far from here.|Sân bay ở xa đây.
parking lot|bãi đỗ xe|The parking lot is full.|Bãi đỗ xe đã đầy.
seat belt|dây an toàn|Fasten your seat belt.|Thắt dây an toàn vào.
ticket|vé|I need a train ticket.|Tôi cần một vé tàu.`);
