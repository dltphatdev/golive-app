import Header from "@/components/Header";
import NewsItem from "@/components/NewsItem";
import SlideCarousel from "@/components/SlideCarousel";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

interface NewsData {
	id: number;
	title: string;
	image: any;
	content: string;
}

export const newsData: NewsData[] = [
	{
		id: 1,
		title: "Đường chạy phong trào dẫn vào kinh tế",
		image: require("@/assets/images/news1.jpg"),
		content: `<div class="content-main content-text w-clear content-text animate__zoomIn wow" data-wow-iteration="1" data-wow-duration="0.8s" id="toc-content" style="visibility: visible; animation-duration: 0.8s; animation-iteration-count: 1; animation-name: zoomIn;"><h2 id="giai-chay-bo-thang-012025"><strong>Giải chạy bộ tháng 01/2025</strong></h2>
<h3 id="1-vietnam-trail-marathon-2025"><strong>1. Vietnam Trail Marathon 2025</strong></h3>
<p>Giải chạy VTM diễn ra tại Mộc Châu, nổi tiếng với những vườn hoa rực rỡ, thiên nhiên hoang sơ tuyệt đẹp, đồi chè xanh mướt và sự hiếu khách nồng hậu của người dân địa phương. Đây là một phần của chuỗi giải chạy Vietnam Trail Series, được khởi xướng từ năm 2013 với giải ultra marathon đầu tiên tại Việt Nam – VMM. VTM không chỉ là thử thách thể lực mà còn là cơ hội trải nghiệm vẻ đẹp độc đáo của vùng cao nguyên thơ mộng.</p>

<figure><img alt="Vietnam Trail Marathon 2025" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/VTM2020-70km-1-1-2048x1365-1-2000x1333.jpeg"></figure>

<ul>
	<li><strong>Địa điểm</strong>: Mộc Châu, Sơn La</li>
	<li><strong>Thời gian</strong>: 11/01/2025</li>
	<li><strong>Cự ly chạy</strong>: 10km , 21km , 42km , 70km</li>
	<li><strong>Thông tin chi tiết</strong>: https://vietnamtrailseries.com/vi/trail-marathon/vtm-dang-ky/</li>
</ul>

<h3 id="2-hcmc-marathon-2025"><strong>2. HCMC Marathon 2025</strong></h3>

<p>HCMC Marathon 2025 sẽ diễn ra vào ngày 12/01/2025, đánh dấu 30 năm kể từ giải marathon đầu tiên của Thành phố Hồ Chí Minh vào năm 1992. Sự kiện không chỉ là hành trình chinh phục thử thách mà còn là cơ hội hòa mình vào không khí sôi động, tận hưởng cảnh sắc độc đáo và nhịp sống sôi nổi của thành phố. Với cung đường chạy đẹp và ý nghĩa lịch sử sâu sắc, HCMC Marathon 2025 hứa hẹn mang đến những trải nghiệm đáng nhớ cho tất cả người tham gia.</p>

<figure><img alt="giải chạy HCMC" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/thong-tin-co-ban-ve-giai-chay-giai-chay-hcmc-marathon-2024-e1734430917239.png">
<figcaption><em>Giải chạy bộ HCMC 2023 diễn ra cực khí thế và nhiệt huyết (nguồn: sưu tầm)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm:</strong>&nbsp;Công viên 30/4, TP. Hồ Chí Minh</li>
	<li><strong>Thời gian</strong>: 12/01/2025</li>
	<li><strong>Cự ly chạy</strong>: 10km, 21km, 42km</li>
	<li><strong>Thông tin chi tiết</strong>: https://www.hcmcmarathon.com/vi/dang-ky/</li>
</ul>

<p>Và các giải chạy khác trong tháng 1:</p>

<ul>
	<li>Giải chạy TẾT RUN MIỀN NAM 2025 – 19/01/2025</li>
</ul>

<h2 id="giai-chay-bo-thang-022025"><strong>Giải chạy bộ tháng 02/2025</strong></h2>

<h3 id="3-mang-den-ultra-trail"><strong>3. Măng Đen Ultra Trail</strong></h3>

<p>Măng Đen Ultra Trail, giải chạy địa hình cự ly siêu dài đầu tiên tại Măng Đen, sẽ diễn ra từ ngày 14 đến 16/02/2025. Đây là cơ hội để bạn trải nghiệm cảm giác mát lạnh khi chạy xuyên sương mù, len lỏi qua những rừng thông và rừng nguyên sinh bạt ngàn. Tầm mắt sẽ được mở rộng trước vẻ đẹp hùng vĩ của vùng đất rộng lớn, bằng phẳng T’Mang Deeng, mang đến một hành trình vừa thử thách vừa đầy cảm xúc.</p>

<figure><img alt="Măng Đen Ultra Trail" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/van-dong-vien-chay-tai-cac-tuyen-duong-xuyen-rung-doi-nui-mang-den-voi-nhieu-canh-sac-hap-dan.jpg">
<figcaption>Giải chạy bộ Măng Đen Ultra Trail</figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Thị trấn Măng Đen, huyện Kon Plông, tỉnh Kon Tum</li>
	<li><strong>Thời gian</strong>: 14/02/2025 – 16/02/2025</li>
	<li><strong>Cự ly chạy</strong>: 5km, 15km, 25km, 50km, 75km</li>
	<li><strong>Thông tin chi tiết</strong>: https://ticket.irace.vn/mang-den-ultra-trail-2025</li>
</ul>

<h3 id="4-ha-giang-discovery-marathon"><strong>4. Ha Giang Discovery Marathon</strong></h3>

<p>Ha Giang Discovery Marathon, tổ chức vào tháng 2, mang đến cơ hội khám phá vẻ đẹp hùng vĩ của cao nguyên đá và sắc tím hoa tam giác mạch. Với cung đường qua đèo Mã Pì Lèng, giải chạy là thử thách đáng nhớ giữa thiên nhiên tuyệt đẹp.</p>

<figure><img alt="Ha GIang Discovery" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/ha-giang-discover.png">
<figcaption>Hình ảnh từ giải chạy Ha GIang Discovery (nguồn: sưu tầm)</figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Mèo Vạc, Hà Giang, Việt Nam.</li>
	<li><strong>Thời gian</strong>: 22/02/2025 – 23/02/2025</li>
	<li><strong>Cự ly chạy</strong>: 6km, 12km, 21km, 42km, 50km Trail, 70km Trail</li>
	<li><strong>Thông tin chi tiết</strong>: https://www.facebook.com/hagiangdiscoverymarathon</li>
</ul>

<p>Và các giải chạy khác trong tháng 2:</p>

<ul>
	<li>Giải chạy Mẫu Sơn Mount Paths – 15-16/02/2025 – Lạng Sơn</li>
	<li>Giải chạy Minh Đạm Discovery Marathon 2025 – 16/02/2025</li>
	<li>Giải chạy InterPetFest Dogathon 2025 – 22/02/2025</li>
	<li>Giải chạy VPBank VnExpress Marathon Ho Chi Minh City Midnight 2025 – 23/02/2025</li>
	<li>Giải chạy Ha Giang Discovery Marathon 2025- 03:00 22/02 – 12:00 23/02/2025</li>
</ul>

<h2 id="giai-chay-bo-thang-032025"><strong>Giải chạy bộ tháng 03/2025</strong></h2>

<h3 id="5-vietnam-ultra-marathon"><strong>5. Vietnam Ultra Marathon</strong></h3>

<p>Vietnam Ultra Marathon (VUM) là một phần của chuỗi giải Topas Vietnam Trail Series, bên cạnh Vietnam Mountain Marathon, Vietnam Trail Marathon và Vietnam Jungle Marathon. Chuỗi giải chạy này khởi nguồn từ giải siêu marathon đầu tiên tại Việt Nam vào năm 2013, mang đến những thử thách địa hình đầy cảm hứng cho các vận động viên yêu thích khám phá và chinh phục.\</p>

<figure><img alt="VUM" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/VUM.webp">
<figcaption><em>Hình ảnh từ giải chạy VUM 2023 (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Mai Châu, Hà Nội</li>
	<li><strong>Thời gian</strong>: 08/03/2025</li>
	<li><strong>Cự ly chạy</strong>: 5km, 15km, 25km, 50km, 75km</li>
	<li><strong>Thông tin chi tiết</strong>: https://vietnamtrailseries.com/vi/ultra-marathon/</li>
</ul>

<h3 id="6-quang-binh-discovery-marathon-2025"><strong>6. Quang Binh Discovery Marathon 2025</strong></h3>

<p>Quang Binh Discovery Marathon 2025 trở lại với mùa giải thứ 5, sẽ đưa các vận động viên vào không gian thiên nhiên hoang sơ với không khí trong lành và cảnh sắc tuyệt đẹp của rừng nguyên sinh và các dòng sông xanh ngọc. Giải đấu có 4 cự ly: 42KM, 25KM, 10KM và 6KM, mang đến cung đường mới, cho phép các vận động viên khám phá vẻ đẹp kỳ vĩ của Quảng Bình với những tầng mây đại ngàn, hứa hẹn mang lại những trải nghiệm và góc nhìn độc đáo về vùng đất này.</p>

<figure><img alt="Quảng bình marathon" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/quang-binh-marathon-2273.jpg">
<figcaption><em>Giải chạy bộ Quảng Bình marathon 2023 (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Phong Nha – Kẻ Bàng, Quảng Bình</li>
	<li><strong>Thời gian</strong>: 09/03/2025</li>
	<li><strong>Cự ly chạy</strong>: 6km, 10km, 25km, 42km</li>
	<li><strong>Thông tin chi tiết</strong>: https://www.facebook.com/QuangBinhDiscoveryMarathon/</li>
</ul>

<h3 id="7-danang-international-marathon-2025"><strong>7. Danang International Marathon 2025</strong></h3>

<p>Danang International Marathon 2025 là sự kiện chạy bộ quốc tế nổi bật, thu hút hàng ngàn vận động viên từ khắp nơi trên thế giới. Với đường chạy dọc bờ biển thơ mộng và những cây cầu biểu tượng của thành phố, giải đấu mang đến cơ hội khám phá vẻ đẹp hiện đại và năng động của Đà Nẵng. Các cự ly đa dạng phù hợp cho mọi trình độ, hứa hẹn mang lại trải nghiệm đáng nhớ trong không khí sôi động và tràn đầy cảm hứng.</p>

<ul>
	<li><strong>Địa điểm:</strong>&nbsp;Đà Nẵng</li>
	<li><strong>Thời gian:</strong>&nbsp;23/03/ 2025</li>
	<li><strong>Cự ly chạy</strong>: 42.195km, 21.097km, 5km, 1.5km</li>
	<li><strong>Link đăng ký</strong>:&nbsp;<a href="https://www.rundanang.com/en/about-the-race/" rel="noopener" target="_blank">https://www.rundanang.com/en/about-the-race/</a></li>
</ul>

<h3 id="8-con-chim-half-marathon-2025"><strong>8. Cồn Chim Half Marathon 2025</strong></h3>

<p>Diễn ra vào đầu tháng 3/2025, giải đấu gồm các cự ly 5km, 10km và 21km, mang đến cơ hội chạy trên những cung đường quê yên bình, lắng nghe tiếng chim hót và tận hưởng không khí trong lành. Các vận động viên sẽ được hòa mình vào khung cảnh đồng xanh bát ngát, không chỉ vượt qua thử thách thể lực mà còn tận hưởng những phút giây thư giãn và trải nghiệm thiên nhiên tuyệt vời.&nbsp;</p>

<figure><img alt="giải chạy bộ cồn chim" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/con-chim.jpg"></figure>

<ul>
	<li><strong>Địa điểm</strong>: Cồn Chim, Bình Định</li>
	<li><strong>Thời gian</strong>: 09/03/2025</li>
	<li><strong>Cự ly chạy</strong>: 5km, 10km, 21km</li>
	<li><strong>Link đăng ký</strong>:&nbsp;<a href="https://conchimmarathon.stopandsports.com/" rel="noopener" target="_blank">https://conchimmarathon.stopandsports.com/</a></li>
</ul>

<h3 id="9-dalat-ultra-trail-2025"><strong>9. Dalat Ultra Trail 2025</strong></h3>

<p>Dalat Ultra Trail 2025 là sự kiện chạy địa hình nổi bật, diễn ra giữa khung cảnh thơ mộng của cao nguyên Đà Lạt. Với các cung đường chạy len lỏi qua rừng thông xanh mướt, những con dốc đầy thách thức và không khí trong lành, giải đấu mang đến trải nghiệm khó quên cho các vận động viên. Đây không chỉ là hành trình thử thách bản thân mà còn là cơ hội hòa mình vào thiên nhiên tuyệt đẹp, chinh phục giới hạn và tận hưởng từng khoảnh khắc trên đường chạy.</p>

<figure><img alt="Dalat Ultra Trail 2023" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/01/7c72122333e298bcc1f3-1024x682.jpg">
<figcaption><em>Hình ảnh từ giải chạy Đà Lạt Ultra Trail 2023 (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Thung Lũng Tình Yêu, Lâm Đồng</li>
	<li><strong>Thời gian</strong>: 28/03/2025 – 30/03/2025</li>
	<li><strong>Cự ly chạy</strong>: 5km, 10km, 21km, 50km, 70km, 100km</li>
	<li><strong>Link đăng ký</strong>:&nbsp;<a href="https://vietnammtbseries.vn/events/dalat-ultra-trail/intro" rel="noopener" target="_blank">https://vietnammtbseries.vn/events/dalat-ultra-trail/intro</a></li>
</ul>

<p>Và các giải chạy khác trong tháng 3:</p>

<ul>
	<li>Giải chạy Fleur de Lys Bù Gia Mập Jungle Paths 2025 – 02/03/2025</li>
	<li>Giải chạy Tam Kỳ Marathon 2025- 15-16/03/2025</li>
	<li>Giải chạy Biên Hòa Half Marathon – 15/03/2025 – Đồng Nai</li>
</ul>

<h2 id="giai-chay-bo-thang-042025"><strong>Giải chạy bộ tháng 04/2025</strong></h2>

<h3 id="10-aqua-warriors-halong-bay-2025"><strong>10. Aqua Warriors Halong Bay 2025</strong></h3>

<p>Giải Aqua Warriors Hạ Long 2025 là sự kiện thể thao kết hợp Bơi và Chạy (Aquathlon), diễn ra tại thành phố Hạ Long, Quảng Ninh. Điểm nhấn đặc biệt của mùa giải năm nay là lần đầu ra mắt cự ly Olympic Triathlon – Bơi, Đạp, Chạy theo chuẩn Olympic, với đường đua xe đạp tuyệt đẹp, một bên là dãy núi hùng vĩ, bên kia là Vịnh Hạ Long – kỳ quan thiên nhiên thế giới. Diễn ra vào đầu mùa hè, sự kiện không chỉ quảng bá cảnh quan và kích cầu du lịch địa phương mà còn mang đến cơ hội rèn luyện thể chất và giáo dục kỹ năng phòng chống đuối nước cho trẻ em. Đây là điểm đến lý tưởng kết hợp giữa thể thao, nghỉ dưỡng và khám phá di sản thiên nhiên thế giới.</p>

<figure><img alt="Danang International Marathon 2025" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/Danang-International-Marathon-2025.jpg">
<figcaption><em>Giải chạy Đà Nẵng International Marathon 2025 dự kiến diễn ra tại thành phố Hạ Long, Quảng Ninh (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Vịnh Hạ Long, Quảng Ninh</li>
	<li><strong>Thời gian</strong>: 12/04/2025 – 13/04/2025</li>
	<li><strong>Cự ly chạy</strong>: Ultra Aqua, Full Aqua, Olympic Triathlon, Kid Aqua, Sprint Aqua</li>
	<li><strong>Link đăng ký</strong>:&nbsp;<a href="https://aquawarriors.com.vn/ha-long/" rel="noopener" target="_blank">https://aquawarriors.com.vn/ha-long/</a></li>
</ul>

<h3 id="11-vnexpress-marathon-hue&nbsp;"><strong>11. VnExpress Marathon Huế&nbsp;</strong></h3>

<p>VnExpress Marathon Huế là sự kiện thể thao hấp dẫn, diễn ra tại cố đô Huế – thành phố di sản và văn hóa của Việt Nam. Với cung đường chạy len lỏi qua những địa danh lịch sử, những cây cầu thơ mộng và dòng sông Hương yên bình, giải đấu mang đến trải nghiệm đầy cảm xúc cho các vận động viên. Đây không chỉ là cơ hội để thử thách bản thân mà còn để khám phá vẻ đẹp dịu dàng, cổ kính của Huế, nơi lưu giữ tinh hoa văn hóa Việt Nam.</p>

<figure><img alt="Giải chạy Imperial" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/imperial-Hue.jpg">
<figcaption><em>VnExpress Marathon Huế là cơ hội để khám phá vẻ đẹp dịu dàng, cổ kính của Huế (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Cố đô Huế</li>
	<li><strong>Thời gian</strong>: 6/4/2025</li>
	<li><strong>Cự ly chạy</strong>: 5km, 10km, 21km, 42km</li>
	<li><strong>Thông tin thêm</strong>: https://www.facebook.com/VnExpressMarathonHue</li>
</ul>

<h3 id="12-tay-ho-half-marathon-2025"><strong>12. Tay Ho Half Marathon 2025</strong></h3>

<p>Tây Hồ Half Marathon đã ghi dấu ấn qua bốn mùa giải với những câu chuyện đầy cảm hứng, khắc họa giá trị văn hóa và lịch sử của Hồ Tây. Năm 2025, giải đấu trở lại với trải nghiệm bùng nổ hơn, đưa vận động viên khám phá những địa danh độc đáo như Đền Quán Thánh, Chùa Trấn Quốc, Phủ Tây Hồ và nhiều điểm đến nổi tiếng khác của Hà Nội.</p>

<figure><img alt="Giải chạy bộ Tây Hồ 2025" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/tay-ho.png">
<figcaption><em>Hình ảnh từ giải chạy Tây Hồ Marathon 2024 đầy sôi động (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Vịnh Hạ Long, Quảng Ninh</li>
	<li><strong>Thời gian</strong>: 13/04/2025</li>
	<li><strong>Cự ly chạy</strong>: 5km, 10km, 21km</li>
	<li><strong>Link đăng ký</strong>: https://actiup.net/event/tay-ho-half-marathon-2025</li>
</ul>

<p>Và các giải chạy khác trong tháng 4:</p>

<ul>
	<li>Cúc Phương Jungle Paths – 06/04/2025 – Ninh Bình.</li>
	<li>Bình Dương New City Half Marathon – 27/04/2025 – Bình Dương.</li>
	<li>Phù Đổng Marathon – 27/04/2025 – Hà Nội.</li>
	<li>Trị An Ultra Marathon – 29/04/2025 – Đồng Nai.</li>
</ul>

<h2 id="giai-chay-bo-thang-052025"><strong>Giải chạy bộ tháng 05/2025</strong></h2>

<h3 id="13-ta-nang-trail-challenge-2025"><strong>13. Tà Năng Trail Challenge 2025</strong></h3>

<p>“Hành trình vạn dặm bắt đầu từ một bước chân” – nhưng tại Tà Năng Trail Challenge 2025, đó là bước khởi đầu cho một hành trình đầy thách thức và cảm hứng. Đây không chỉ là một cuộc đua, mà còn là cơ hội đối mặt với khó khăn, vượt qua nỗi sợ hãi và khẳng định bản thân. Mỗi bước chạy là một câu chuyện, mỗi cung đường là một hành trình đáng nhớ.</p>

<figure><img alt="Tà năng trail 2025" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/ta-nang-2025.jpg">
<figcaption><em>Cùng tham gia Tà Năng trail 2025 để bứt phá giới hạn của bản thân (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Huyện Đức Trọng, Lâm Đồng</li>
	<li><strong>Thời gian</strong>: 02/05/2025</li>
	<li><strong>Cự ly chạy</strong>: 10km, 25km, 55km, 85km</li>
	<li><strong>Link đăng ký</strong>: https://tanangtrailchallenge.com/</li>
</ul>

<h3 id="14-ho-chi-minh-city-night-run-eximbank-2025"><strong>14. Ho Chi Minh City Night Run Eximbank 2025</strong></h3>

<p>Ho Chi Minh City Night Run Eximbank 2025 là giải chạy đêm đầu tiên tại Thành phố Hồ Chí Minh đã nhanh chóng trở thành sự kiện thường niên hấp dẫn, thu hút hàng ngàn vận động viên trong nước và quốc tế. Đây là cơ hội tuyệt vời để mọi người cùng nhau tạo ra những kỷ niệm đáng nhớ, giao lưu với các vận động viên tài năng và truyền cảm hứng cho nhau trong không khí sôi động của thành phố về đêm.</p>

<figure><img alt="Giải chạy Eximbank" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/eximbank-2000x1125.jpeg">
<figcaption><em>HCMC Night Run Eximbank là cơ hôi tận hưởng không khí sôi động của thành phố về đêm (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: TP. Hồ Chí Minh</li>
	<li><strong>Thời gian</strong>: 17/05/2025</li>
	<li><strong>Cự ly chạy</strong>: 5km, 10km, 21km</li>
	<li><strong>Link đăng ký</strong>: https://hcmcitynightrun.vn/</li>
</ul>

<h3 id="15-vnexpress-marathon-quy-nhon-2025"><strong>15. VnExpress Marathon Quy Nhon 2025</strong></h3>

<p>VnExpress Marathon Quy Nhơn 2025 là sự kiện thể thao đặc sắc, diễn ra tại thành phố biển Quy Nhơn, Bình Định. Với cung đường chạy dọc bãi biển tuyệt đẹp, qua những con đường ven biển mát mẻ và phong cảnh hùng vĩ của núi non, giải đấu mang đến một trải nghiệm thể thao đầy cảm hứng. Các vận động viên sẽ được tận hưởng không khí trong lành, cùng lúc khám phá vẻ đẹp hoang sơ và văn hóa đặc trưng của vùng đất miền Trung.</p>

<figure><img alt="Giai chay marathon VnExpress Quy Nhon" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/Giai-chay-marathon-VnExpress-Quy-Nhon.jpg">
<figcaption><em>VnExpress Marathon Quy Nhơn 2025 là sự kiện thể thao diễn ra tại thành phố biển Quy Nhơn, Bình Định</em>&nbsp;<em>(nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Quy Nhơn, Bình Định</li>
	<li><strong>Thời gian</strong>: đang cập nhật</li>
	<li><strong>Cự ly chạy</strong>: 5km, 10km, 21km, 42km</li>
	<li><strong>Thông tin thêm</strong>: https://www.finishers.com/en/event/vnexpress-marathon-quy-nhon</li>
</ul>

<p>Và các giải chạy khác trong tháng 5:</p>

<ul>
	<li>Giải chạy An Lão Trail – Lạc Giữa Mây Ngàn – 03/05/2025</li>
</ul>

<h2 id="giai-chay-bo-thang-062025"><strong>Giải chạy bộ tháng 06/2025</strong></h2>

<h3 id="16-con-dao-run-challenge-2025"><strong>16. Côn Đảo Run Challenge 2025</strong></h3>

<p>Côn Đảo Run Challenge là giải chạy đa địa hình độc đáo, diễn ra tại Côn Đảo – một thiên đường hoang sơ đầy sức sống của Việt Nam. Giải đấu đưa các vận động viên qua những cung đường huyền bí, khám phá khung cảnh thiên nhiên kỳ vĩ và di sản lịch sử của quần đảo, cùng hệ sinh thái biển phong phú, đặc biệt là các rạn san hô màu sắc. Với chủ đề “Bản Giao Hưởng của Hải Đảo”, giải chạy mong muốn mỗi bước chân hòa nhịp cùng sóng biển, gió trời, tạo nên một bản hòa ca kỳ diệu giữa con người và thiên nhiên Côn Đảo.</p>

<figure><img alt="Con Dao Run Challenge" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/con-dao-run-challenge.jpg">
<figcaption><em>Côn Đảo Run Challenge sẽ đưa các vận động viên khám phá khung cảnh thiên nhiên kỳ vĩ của đất nước (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Vườn Quốc Gia Côn Đảo</li>
	<li><strong>Thời gian</strong>: 07/06/2025</li>
	<li><strong>Cự ly chạy</strong>: 10km, 25km, 50km, 70km</li>
	<li><strong>Link đăng ký</strong>: https://ticket.irace.vn/con-dao-run-challenge-2025?ref=happyrun</li>
</ul>

<h3 id="17-vnexpress-marathon-amazing-halong-2025"><strong>17. VnExpress Marathon Amazing Halong 2025</strong></h3>

<p>VnExpress Marathon Amazing Halong 2025 là sự kiện thể thao đặc biệt diễn ra tại Vịnh Hạ Long, một trong những kỳ quan thiên nhiên thế giới. Giải đấu mang đến cơ hội chạy qua những cung đường tuyệt đẹp dọc bờ vịnh, với cảnh quan hùng vĩ của các đảo đá vôi và nước biển trong xanh. Các vận động viên sẽ được thách thức về thể lực mà còn hòa mình vào thiên nhiên kỳ diệu của Hạ Long. Đây là dịp lý tưởng để vừa tham gia thể thao, vừa khám phá vẻ đẹp thiên nhiên và văn hóa của một trong những điểm đến nổi bật nhất Việt Nam.</p>

<figure><img alt="VNE Marathon Ha Long" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/VNE-Marathon-Ha-Long.jpg">
<figcaption><em>Hình ảnh huy chương cực lạ mắt dành cho Finisher các cự ly tại VnExpress Marathon Amazing Halong 2023 (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Hạ Long, Quảng Ninh</li>
	<li><strong>Thời gian</strong>: đang cập nhật</li>
	<li><strong>Cự ly chạy</strong>: 42 km</li>
	<li><strong>Link đăng ký</strong>: đang cập nhật</li>
</ul>

<h2 id="giai-chay-bo-thang-072025"><strong>Giải chạy bộ tháng 07/2025</strong></h2>

<h3 id="18-district-1-midnight-run"><strong>18. District 1 Midnight Run</strong></h3>

<p><strong>District 1 Midnight Run 2024</strong>&nbsp;– Giải chạy đêm độc đáo tại trung tâm Sài Gòn sẽ chính thức trở lại mùa thứ 2, mang đến trải nghiệm bùng nổ chưa từng có! Trên những cung đường rực rỡ ánh đèn của phố đi bộ Lê Lợi – Nguyễn Huệ, runner sẽ được đắm chìm trong bầu không khí sôi động với âm nhạc, lễ hội và cơ hội check-in cùng&nbsp;<em>Glambot</em>&nbsp;– cánh tay robot hiện đại ghi lại từng khoảnh khắc như ở thảm đỏ Hollywood. Không chỉ là cuộc đua về thể lực, đây còn là hành trình sống động đưa bạn băng qua những địa danh trăm năm tuổi, cảm nhận vẻ đẹp hoa lệ và chiều sâu văn hóa của Quận 1 – trái tim Sài Gòn.</p>

<p>District 1 Midnight Run không chỉ là một sự kiện thể thao, mà còn là hành động thiết thực vì cộng đồng, với hoạt động gây quỹ “Vì người nghèo Quận 1”. Đây là dịp để mỗi bước chân chạy không chỉ tiếp thêm năng lượng cho bản thân mà còn lan tỏa yêu thương đến những hoàn cảnh khó khăn.</p>

<ul>
	<li><strong>Địa điểm:</strong>&nbsp;Lê Lợi – Nguyễn Huệ, Quận 1, TP.HCM</li>
	<li><strong>Thời gian:</strong>&nbsp;13/10/2024</li>
	<li><strong>Cự ly chạy:</strong>&nbsp;(Thông tin chưa được cung cấp, bạn có thể bổ sung sau)</li>
</ul>

<p>Và các giải chạy khác trong tháng 7:</p>

<ul>
	<li>Mekong Delta Marathon Hậu Giang – 07/07/2025 – Hậu Giang.</li>
	<li>VM Danang Midnight – 14/07/2025 – Đà Nẵng.</li>
	<li>Trail Marathon Sơn Đào – 28/07/2025 – Hải Phòng</li>
</ul>

<h2 id="giai-chay-bo-thang-082025"><strong>Giải chạy bộ tháng 08/2025</strong></h2>

<h3 id="19-giai-chay-quoc-te-nui-ba-den"><strong>19. Giải chạy Quốc tế Núi Bà Đen</strong></h3>

<p><strong>Ba Den Mountain International Marathon 2025</strong>&nbsp;– Hành trình chạy bộ chinh phục “nóc nhà Nam Bộ” chính thức trở lại, hứa hẹn là điểm đến không thể bỏ lỡ của mọi runner yêu thích thiên nhiên và những thử thách vượt giới hạn bản thân. Trên cung đường chạy quanh núi Bà Đen – biểu tượng hùng vĩ của Tây Ninh, các vận động viên sẽ được đắm mình trong cảnh sắc thiên nhiên ngoạn mục, không khí trong lành cùng những trải nghiệm văn hóa đặc sắc của miền đất phía Nam.</p>

<p>Là một trong những giải marathon quốc tế nổi bật tại Việt Nam, Ba Den Mountain International Marathon 2025 được tổ chức với tiêu chuẩn quốc tế, hệ thống giải thưởng đa dạng và khâu tổ chức chuyên nghiệp. Dù bạn là người mới bước chân vào thế giới chạy bộ hay đã là một runner kỳ cựu, giải đấu có đủ các cự ly từ 5KM đến 42KM để ai cũng có thể tìm thấy thử thách của riêng mình.</p>

<ul>
	<li><strong>Địa điểm:</strong>&nbsp;Quảng trường KLD – Sun World Bà Đen, Tây Ninh</li>
	<li><strong>Thời gian:</strong>&nbsp;02 – 03/08/2025</li>
	<li><strong>Cự ly chạy:</strong>&nbsp;5KM, 10KM, 21KM, 42KM</li>
</ul>

<p>Và các giải chạy khác trong tháng 8:</p>

<ul>
	<li>Mekong Delta Marathon Hậu Giang – 07/07/2025 – Hậu Giang.</li>
	<li>VM Danang Midnight – 14/07/2025 – Đà Nẵng.</li>
	<li>Trail Marathon Sơn Đào – 28/07/2025 – Hải Phòng</li>
</ul>

<h2 id="giai-chay-bo-thang-092025"><strong>Giải chạy bộ tháng 09/2025</strong></h2>

<h3 id="20-vietnam-mountain-marathon-2025"><strong>20. Vietnam Mountain Marathon 2025</strong></h3>

<p>Việt Nam Mountain Marathon 2025 là một trong những giải chạy địa hình nổi bật nhất tại Việt Nam, diễn ra tại Sapa, Lào Cai, giữa khung cảnh thiên nhiên hùng vĩ của dãy núi Hoàng Liên Sơn. Với các cự ly đa dạng từ 10km đến 100km, giải đấu mang đến thử thách cho mọi vận động viên, từ người mới bắt đầu đến các chuyên gia.</p>

<figure><img alt="Giải chạy VMM" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/VMM-2025.jpg">
<figcaption><em>Việt Nam Mountain Marathon là một trong những giải chạy địa hình nổi bật nhất tại Việt Nam (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Sapa, Lào Cai</li>
	<li><strong>Thời gian</strong>: đang cập nhật</li>
	<li><strong>Cự ly chạy</strong>: 10&thinsp;km, 15&thinsp;km, 21&thinsp;km, 50&thinsp;km, 70&thinsp;km, 100&thinsp;km, 160&thinsp;km</li>
	<li><strong>Link đăng ký</strong>: đang cập nhật</li>
</ul>

<h2 id="giai-chay-bo-thang-102025"><strong>Giải chạy bộ tháng 10/2025</strong></h2>

<h3 id="21-vietnam-airlines-–-run-for-love-2025"><strong>21. Vietnam Airlines – Run For Love 2025</strong></h3>

<p>Vietnam Airlines – Run For Love 2025 là một sự kiện chạy từ thiện đầy ý nghĩa, được tổ chức bởi Vietnam Airlines. Giải đấu không chỉ là cơ hội để vận động viên thử thách bản thân qua các cự ly chạy, mà còn mang đến cơ hội góp phần vào các hoạt động cộng đồng, giúp đỡ những hoàn cảnh khó khăn. Với các cung đường đẹp, đi qua những địa danh nổi bật, sự kiện này khuyến khích người tham gia vừa chăm sóc sức khỏe, vừa đóng góp cho các chương trình từ thiện, lan tỏa tinh thần yêu thương và sẻ chia.</p>

<figure><img alt="Giải chạy Vietnam Airline " src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/vietnam-airline.jpg">
<figcaption>Giải chạy đầy ý nghĩa của Vietnam Airline mang đến cơ hội góp sức trong hoạt động cộng đồng và giúp đỡ những hoàn cảnh khó khăn (nguồn: internet)</figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Hà Nội, Việt Nam</li>
	<li><strong>Thời gian</strong>: Tháng 10, 2025</li>
	<li><strong>Cự ly chạy</strong>: 5 km, 10&thinsp;km, 21&thinsp;km</li>
	<li><strong>Link đăng ký</strong>: đang cập nhật</li>
</ul>

<h3 id="22-vietnam-jungle-marathon-2025"><strong>22. Vietnam Jungle Marathon 2025</strong></h3>

<p>Vietnam Jungle Marathon 2025 là một giải chạy địa hình đầy thử thách, diễn ra tại vùng rừng sâu nguyên sinh ở Việt Nam. Các vận động viên sẽ phải vượt qua những cung đường đầy cam go, qua rừng nhiệt đới dày đặc, suối, và đồi núi hiểm trở, mang đến một trải nghiệm tuyệt vời cho những ai yêu thích thử thách thiên nhiên. Với các cự ly đa dạng, từ 10km đến 100km, giải đấu không chỉ kiểm tra sức bền mà còn là cơ hội để khám phá vẻ đẹp hoang sơ của rừng núi Việt Nam.&nbsp;</p>

<figure><img alt="GoLive - Đi bộ tích điểm đổi quà" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/VJM-10k-beautiful-2-681x454-1.jpeg">
<figcaption><em>Hình ảnh trong lành và hùng vỹ từ cự ly 10K trong Vietnam Jungle Marathon (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Pù Luông, Thanh Hóa</li>
	<li><strong>Thời gian</strong>: Tháng 10, 2025</li>
	<li><strong>Cự ly chạy</strong>: 5 km, 10&thinsp;km, 21&thinsp;km</li>
	<li><strong>Link đăng ký</strong>: đang cập nhật</li>
</ul>

<p>Và các giải chạy khác trong tháng 10:</p>

<ul>
	<li>Marathon Quốc tế Hà Nội Techcombank – 05/10/2025 – Hà Nội.</li>
	<li>Long Biên Marathon – 26/10/2025 – Hà Nội.</li>
</ul>

<h2 id="giai-chay-bo-thang-112025"><strong>Giải chạy bộ tháng 11/2025</strong></h2>

<h3 id="23-hanoi-marathon-2025"><strong>23. Hanoi Marathon 2025</strong></h3>

<p>Hanoi Marathon 2025 là một giải chạy đặc sắc diễn ra tại thủ đô Hà Nội, nơi các vận động viên sẽ được chạy qua những con đường lịch sử và các địa danh nổi bật của thành phố. Với các cự ly đa dạng từ 5km đến marathon 42km, sự kiện này không chỉ là thử thách thể lực mà còn là cơ hội để khám phá vẻ đẹp của Hà Nội – một thành phố hòa quyện giữa nét cổ kính và hiện đại.</p>

<figure><img alt="GoLive - Đi bộ tích điểm đổi quà" src="https://www.decathlon.vn/blog/wp-content/uploads/2024/12/Ha-noi-marathon.jpg">
<figcaption><em>Giải chạy đường trường tại thành phố Hà Nội – một thành phố hòa quyện giữa nét cổ kính và hiện đại (nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Hà Nội, Việt Nam</li>
	<li><strong>Thời gian</strong>: Tháng 11, 2025</li>
	<li><strong>Cự ly chạy</strong>: 5 km, 10&thinsp;km, 21&thinsp;km, 42km</li>
	<li><strong>Link đăng ký</strong>: https://marathonhn.com/</li>
</ul>

<h3 id="24-halong-bay-heritage-marathon-2025"><strong>24. Halong Bay Heritage Marathon 2025</strong></h3>

<p>Halong Bay Heritage Marathon 2025 là một giải chạy đặc biệt diễn ra tại Vịnh Hạ Long, một trong những kỳ quan thiên nhiên thế giới. Các vận động viên sẽ được trải nghiệm cung đường chạy tuyệt đẹp dọc theo bờ biển, với cảnh quan hùng vĩ của những hòn đảo đá vôi và làn nước trong xanh. Với các cự ly từ 5km đến marathon 42km, sự kiện này không chỉ là thử thách thể lực mà còn là cơ hội để khám phá vẻ đẹp thiên nhiên và di sản văn hóa của Hạ Long.&nbsp;</p>

<figure><img alt="Giải chạy Amazing Hạ Long" src="http://loadbalancer.dktvnblog.com/blog/wp-content/uploads/2024/12/Ha-long.webp">
<figcaption><em>Tham gia giải chạy Halong Bay Heritage Marathon 2025 để hòa mình vào thiên nhiên kỳ diệu của Hạ Long (Nguồn: internet)</em></figcaption>
</figure>

<ul>
	<li><strong>Địa điểm</strong>: Hà Nội, Việt Nam</li>
	<li><strong>Thời gian:</strong>&nbsp;Tháng 11, 2025</li>
	<li><strong>Cự ly chạy</strong>: 5 km, 10&thinsp;km, 21&thinsp;km, 42km</li>
	<li><strong>Link đăng ký</strong>: https://halong.vietnamheritagemarathon.com/vi/</li>
</ul>

<p>Và các giải chạy khác trong tháng 11:</p>

<ul>
	<li>Giải chạy Trang An Marathon 2025 – 09/11/2025</li>
	<li>Giải chạy Yên Tử Heritage Marathon 2025&nbsp; – 15-16/11/2025</li>
	<li>Giải chạy Ultra Trail Cao Bang 2025&nbsp; – 28-29-30/11/2025</li>
	<li>Giải chạy Marathon Quốc tế Di sản Hạ Long 2025&nbsp; – 23/11/2025</li>
</ul>

<h2 id="giai-chay-bo-thang-122025"><strong>Giải chạy bộ tháng 12/2025</strong></h2>

<p><strong>25.&nbsp;<strong>Giải Marathon Quốc tế Di sản Cần Thơ</strong></strong></p>

<p><strong>Giải Marathon Quốc tế Di sản Cần Thơ</strong>&nbsp;– Sự kiện thể thao đẳng cấp quốc tế giữa lòng miền Tây Nam Bộ, nơi bạn không chỉ chinh phục đường chạy phẳng tiêu chuẩn mà còn đắm mình trong văn hóa đặc trưng sông nước. Diễn ra thường niên tại Cần Thơ – trung tâm của Đồng bằng sông Cửu Long, giải chạy là dịp để hàng ngàn vận động viên từ khắp nơi trên thế giới thử sức giữa khí hậu nhiệt đới dễ chịu, hòa mình vào không gian đầy màu sắc của chợ nổi, bến Ninh Kiều, Cái Răng hay Lộ Vòng Cung.</p>

<p>Giải được tổ chức chuyên nghiệp với hệ thống cự ly đa dạng, đường chạy bằng rải nhựa qua các địa danh nổi tiếng cùng điều kiện thời tiết lý tưởng đầu mùa khô. Không chỉ là cơ hội thể hiện bản lĩnh, đây còn là dịp lan tỏa tinh thần thể thao đến cộng đồng, kết nối bạn bè quốc tế và quảng bá hình ảnh đất nước, con người Việt Nam nói chung và vùng đất Tây Đô nói riêng.</p>

<p>Và các giải chạy khác trong tháng 12:</p>

<ul>
	<li>Marathon Quốc tế TP. Hồ Chí Minh Techcombank – 07/12/2025 – TP. Hồ Chí Minh.</li>
</ul>

<p>Bài viết đã tổng hợp tất cả&nbsp;<strong>giải chạy bộ 2025</strong>&nbsp;và sẽ được cập nhật liên tục. Theo dõi Decathlon Blog để nhận được các thông tin cập nhật mới nhất và tham khảo các lời khuyên chạy bộ hữu ích từ Decathlon. Mong bạn sẽ đạt được những thành tích cao trong giải chạy sắp tới!</p>
    </div><style>
        body {
          margin: 0;
          padding: 16px;
          overflow-x: hidden;  /* ✅ Tắt scroll ngang */
        }
        img, table {
          max-width: 100%;
        }
      </style>`,
	},
	{
		id: 2,
		title: "Tổng hợp các giải chạy bộ 2025",
		image: require("@/assets/images/news2.jpeg"),
		content: `<div class="content-main content-text w-clear content-text animate__zoomIn wow" data-wow-iteration="1" data-wow-duration="0.8s" id="toc-content" style="visibility: visible; animation-duration: 0.8s; animation-iteration-count: 1; animation-name: zoomIn;"><p><strong>(KTSG Online) – Dù chưa bước vào thời điểm bùng nổ các hoạt động thể thao phong trào (mùa hè), thế nhưng tần suất các giải chạy bộ được tổ chức ngày một dày hơn. Thời gian qua, cộng đồng chạy bộ chứng kiến nhiều sự thay đổi về số lượng và chất lượng giải chạy ở các tỉnh thành khác nhau. Các hoạt động du lịch cũng đón sóng, nương theo các giải chạy góp phần kích cầu kinh tế thể thao tại địa phương.</strong></p>

<p><strong>Nhiều cơ hội từ du lịch thể thao</strong></p>

<p>Vài tháng đầu năm 2024, TPHCM đã có liên tiếp các giải chạy ở trung tâm “mở bát” như giải VPBank VnExpress Marathon Ho Chi Minh City Midnight 2024, giải Marathon Thành phố Hồ Chí Minh (HCMC Marathon) lần thứ 11, làm nóng đường chạy với sự tham gia hơn tổng 20.000 vận động viên.</p>

<p>Theo thống kê số liệu từ Outbox, trong năm 2023, Việt Nam có hơn 35 giải chạy marathon quy mô với sự tham gia khoảng 200.000 người tham dự (tính từ 8-2022 đến 8-2023) rải rác khắp các tỉnh thành. Với nhóm tuổi từ 25-35, khảo sát chỉ ra đây là đối tượng runner (người chạy bộ) góp mặt chính cho các giải.</p>

<p>Bên cạnh động cơ chính là yếu tố sức khoẻ thể chất, chinh phục mục tiêu của bản thân, việc tham gia các giải chạy như một cách giải toả căng thẳng, cũng như kết hợp du lịch ở một điểm đến, cũng là lý do hàng đầu lý giải cho làn sóng lan rộng xu hướng tham gia sự kiện thể thao trong cộng đồng marathon Việt Nam.</p>

<p>Đại diện Outbox chỉ ra chi phí tham gia một giải chạy phổ biến trong mức 5 – 10 triệu đồng, với độ dài lưu trú 2-3 đêm khi kết hợp du lịch trong 2 ngày nếu chỉ đến chạy rồi về. “Lưu trú là hạng mục được chi tiêu nhiều nhất, người tham gia thường thuê khách sạn gần nơi diễn ra sự kiện thể thao hoặc có thể ở với bạn bè, người quen để tiết kiệm chi phí”, vị này nói thêm.</p>

<p>Ông Nguyễn Tử Anh, dại diện Nexus Sport Events, đơn vị tổ chức sự kiện thể thao, giải trí, đang xây dựng hệ thống giải chạy Việt Nam Nexus Marathon Series (VNMS) cho biết, năm 2023 đơn vị đã phối hợp tổ chức 11 sự kiện/giải chạy với tổng 65.000 lượt người tham gia. Trong đó có khoảng 9.500 lượt người đăng kí từ 2 giải trở lên, khoảng 26.000 gương mặt mới.</p>

<p>Một số giải của công ty tổ chức ở miền Nam Việt Nam như giải Quốc tế Mekong Delta Marathon Hậu Giang (mùa thứ 4), DaLat Music Night Run, Bến Tre Marathon, Đất Sen Hồng Marathon, Cà Mau Marathon…</p>

<p><img alt="GoLive - Đi bộ tích điểm đổi quà" src="https://vietrace365.vn/uploads/f_5ce61e1be601fa1e66398287/904389b6a3c936c1f2d024073.jpg"></p>

<p><em>Giải marathon ở Hậu Giang đã qua mùa thứ tư. Ảnh: DNCC</em></p>

<p>Một đơn vị khác đã có hơn 11 lần đồng tổ chức mùa giải marathon tạo nên thương hiệu của TPHCM, ông Bady Phạm, giám đốc của Pulse Active nhìn nhận, từ những mùa đầu tiên năm 2013, phong trào chạy bộ ở Việt Nam nói chung và TPHCM nói riêng ngày càng thu hút người dân khắp nơi và khách quốc tế quan tâm.</p>

<p>Được biết, số lượng vận động viên tham gia ở 2 cự ly ngắn 5km và 10km qua các năm luôn chiếm khoảng 50-60% trên tổng số người tham gia mỗi giải (tương ứng khoảng 5.000 – 6.000 người). Phần lớn các runner tham gia 2 cự ly này là người mới làm quen với chạy bộ.</p>

<p>Số lượng người chạy tham gia hai cự ly dài là 21km và 42km cũng tăng thêm 200% so với năm 2017<strong>.&nbsp;</strong>Đây là một tín hiệu mừng khi càng có nhiều người dân quan tâm đến chạy bộ và ngày càng cải thiện khả năng.</p>

<p>Với số lượng hơn 11.000 người tham gia giải HCMC Marathon lần thứ 11, ông Bady Phạm cho biết vận động viên tăng khoảng 16% so với năm 2023. Riêng giải Danang International Marathon – Cuộc thi Marathon Quốc tế Đà Nẵng sắp tới ước tính có khoảng 25-30% vận động viên quốc tế đến từ 57 quốc gia và vùng lãnh thổ, tăng 46% so với năm 2023.</p>

<p><em><img alt="GoLive - Đi bộ tích điểm đổi quà" src="https://vietrace365.vn/uploads/f_5ce61e1be601fa1e66398287/904389b6a3c936c1f2d024074.jpg"></em></p>

<p><em>Tháng 1-2024 diễn ra giải HCMC Marathon lần thứ 11 với khoảng 11.000 vận động viên tham gia. Ảnh: DNCC</em></p>

<p>Ông nói thêm “Các doanh nghiệp cũng không nằm ngoài xu hướng này khi rất nhiều công ty tham gia đồng hành cùng các sự kiện marathon với những vai trò khác nhau như nhà tài trợ, đối tác, người tham gia. Các doanh nghiệp khuyến khích nhân viên chạy bộ như một hoạt động xây dựng tinh thần nhóm, cải thiện sức khỏe và chất lượng công việc”.</p>

<p><strong>Nhân rộng còn khó nhưng nhiều dư địa</strong></p>

<p>Với VietRace365, đơn vị tổ chức rất nhiều giải chạy online từ năm 2018 đến nay nhìn nhận, thể thao phong trào phát triển không chỉ ở số lượng giải, runner tham gia mà còn thấy sự nhân rộng các câu lạc bộ, đội nhóm phong trào ở mỗi tỉnh thành.</p>

<p>Giai đoạn dịch bệnh 2020, 2021 từng là hai năm phát triển đột biến các hình thức chạy online. Đến 2023, thống kê của VietRace365 cho thấy có khoảng 200.000 lượt người tham gia với tổng 170 sự kiện giải online, trong đó khối doanh nghiệp tổ chức cho nội bộ hơn 100 giải, tăng trưởng so với 2022 khoảng 20%. Năm 2023, đơn vị cũng đã lấn sân làm giải chạy offline, phối hợp, tham gia làm 29 giải, thu hút hơn 28.000 vận động viên tham dự.</p>

<p>Ông Lê Văn Dương, nhà sáng lập VietRace365, chỉ ra những khó khăn song song với cơ hội giãn nở thị trường kinh tế chạy bộ hiện nay ở công tác vận hành giải chuyên nghiệp, chi phí tổ chức.</p>

<p>Nhu cầu chăm sóc sức khỏe, tham gia chạy bộ như hoạt động lễ hội, vui chơi, giải trí tăng lên, đơn vị tổ chức nương theo mở ra rất nhiều nhưng không phải dễ làm giải hay ai có tiền đều có thể làm được. Ban tổ chức sẽ đối diện với rủi ro tài chính lớn hoặc có đủ chi phí nhưng không đủ năng lực làm giải chuẩn chỉnh.</p>

<p><img alt="GoLive - Đi bộ tích điểm đổi quà" src="https://vietrace365.vn/uploads/f_5ce61e1be601fa1e66398287/904389b6a3c936c1f2d024075.jpg"></p>

<p><em>Hoạt động sôi nổi từ các câu lạc bộ đội nhóm, runner phong trào ở địa phương. Ảnh: DNCC</em></p>

<p>Thực tế, qua một năm 2023 kinh tế khó khăn, không ít nhà làm giải không kêu được gọi tài trợ, gói hỗ trợ tốt từ doanh nghiệp như những năm khác. Thậm chí có những giải không có nhà tài trợ hiện kim, phải thay bằng hiện vật, quà tặng… có ban tổ chức chấp nhận hoãn hủy giải, hoặc chịu lỗ vẫn làm để giữ uy tín với vận động viên.</p>

<p>Cụ thể, doanh thu từ việc bán vé chạy chỉ chiếm khoảng 30% chi phí tổ chức. Những ai về địa phương mới để thúc đẩy các giải marathon, nhà làm giải cũng chưa có nguồn kinh phí hỗ trợ của chính quyền mà từ nguồn xã hội hóa hoặc tự trang trải là chính.</p>

<p>Bài toán đặt ra cho các đơn vị làm giải phải kêu gọi tài trợ phù hợp, cân đo cho mọi công tác vận hành. Còn ở địa phương, hệ thống cơ sở hạ tầng, đường sá phải đạt chuẩn đường chạy. Bên cạnh đó số lượng phòng nghỉ, điểm lưu trú, cơ sở vật chất, địa phương phải đáp ứng được lượng lớn vận động viên đổ dồn về một lúc.</p>

<p>“Những yếu tố này phát triển chắc chắn sẽ thúc đẩy được chuyện kinh tế, du lịch của địa phương cũng như thu hút các nhà làm giải chạy đổ về khai thác. Song tốc độ hoàn thiện cơ sở hạ tầng, chỗ lưu trú không theo kịp với tốc độ nhân rộng của runner cũng là một thực tế hiện nay”, ông Dương nói.</p>

<p>Nhìn chung, số lượng giải hiện nay tuy nhiều nhưng chỉ chiếm khoảng 1/3 các tỉnh thành Việt Nam. Các thành phố có nhiều giải vẫn có thể khai thác thêm ở khía cạnh khác. Thị trường cạnh tranh nhưng không quá khốc liệt, mỗi runner sẽ có một nhu cầu chạy ở nhiều thời điểm, nhiều điểm đến khác nhau nên cơ hội đa dạng sản phẩm trong tương lai vẫn còn rộng mở.</p>

<p>Ở nhà tổ chức chuỗi giải chạy VNMS, ông Tử Anh đánh giá thị trường khả quan hơn trong năm 2024 khi nhìn thấy nhiều doanh nghiệp, thương hiệu giải chạy lớn đầu tư, xuất hiện ở Việt Nam làm vị thế sự kiện thể thao được nâng tầm.</p>

<p>Cụ thể từ đơn vị của mình, ông Nguyễn Tử Anh bộc bạch thời gian trước đây khi đi tìm tài trợ phải mất nhiều thời gian, công sức hơn. Còn hiện nay, việc quảng bá sản phẩm giải chạy đã được các bên đầu tư chào đón một cách nghiêm túc. Đối tác xem giải chạy cũng là một kênh quảng bá hiệu quả bởi sản phẩm được thúc đẩy theo xu thế nên cũng chung tay một cách tích cực hơn cùng đơn vị tổ chức giải.</p>

<p>Giải chạy bùng nổ cũng đưa đến nhiều cơ hội kinh doanh cho các ngành hàng tiêu dùng nhanh, thời trang và phụ kiện thể thao, thực phẩm chức năng hỗ trợ vận động… Do đó các giải chạy kích thích nhu cầu chi tiêu cho sức khỏe ngày một nhiều hơn.</p>

<p><img alt="GoLive - Đi bộ tích điểm đổi quà" src="https://vietrace365.vn/uploads/f_5ce61e1be601fa1e66398287/904389b6a3c936c1f2d024076.jpg"></p>

<p><em>Đường chạy marathon ở vùng đất sen Hồng Đồng Tháp. Ảnh: DNCC</em></p>

<p>Đại diện Nexus nhấn mạnh, trong thời gian tới ban tổ chức sẽ nâng cấp thêm sản phẩm đường chạy, thêm trải nghiệm thể thao hấp dẫn, hoạt động phục vụ vận động viên. Quan trong nhất là kết hợp sáng tạo cùng địa phương tạo ra nhiều gói du lịch giữ chân khách đến đường đua như một mùa lễ hội thể thao, tăng sự hiện diện của các thương hiệu khắp nơi.</p>

<p>“Chúng tôi thấy được sự ủng hộ từ chính quyền các địa phương ngày một nhiều. Họ hợp tác đẩy mạnh truyền thông cả giải chạy và sản phẩm du lịch riêng của điểm đến. Tôi nghĩ có càng nhiều ban tổ chức làm giải, sản phẩm phân hóa rõ vào nhu cầu của runner thì cộng đồng càng có nhiều lựa chọn phù hợp với mong muốn rèn luyện, khám phá, thăm thú… Thị trường vẫn còn nhiều dư địa từ các thành phố lớn và tỉnh thành có sản phẩm đặc trưng”, ông Tử Anh nói.</p>

<p><em><strong>Hoàng An&nbsp;</strong></em></p>

<p><em><strong>Link bài gốc:&nbsp;<a href="https://thesaigontimes.vn/duong-chay-phong-trao-dan-vao-kinh-te/">https://thesaigontimes.vn/duong-chay-phong-trao-dan-vao-kinh-te/</a>&nbsp;</strong></em></p>
    </div><style>
        body {
          margin: 0;
          padding: 16px;
          overflow-x: hidden;  /* ✅ Tắt scroll ngang */
        }
        img, table {
          max-width: 100%;
        }
      </style>`,
	},
	{
		id: 3,
		title: "Bước chạy vì một Việt Nam vượt trội",
		image: require("@/assets/images/news3.jpg"),
		content: `<div class="content-main content-text w-clear content-text animate__zoomIn wow" data-wow-iteration="1" data-wow-duration="0.8s" id="toc-content" style="visibility: visible; animation-duration: 0.8s; animation-iteration-count: 1; animation-name: zoomIn;"><h2 data-role="sapo" id="tat-ca-van-dong-vien-giai-chay-bo-marathon-quoc-te-tphcm-techcombank-moi-nguoi-deu-co-mot-cau-chuyen-rieng-ve-y-chi-su-kien-dinh-khat-vong-chien-thang">Tất cả vận động viên Giải chạy bộ Marathon Quốc tế TP.HCM Techcombank, mỗi người đều có một câu chuyện riêng về ý chí, sự kiên định, khát vọng chiến thắng.</h2>

<figure type="Photo">
<p><a data-caption="Chạy bộ lan tỏa tích cực về sức khỏe và tinh thần - Ảnh: TCB" data-fancybox="content" href="https://cdn2.tuoitre.vn/471584752817336320/2023/12/1/tech-1-17014282325131812924633.jpg" rel="nofollow" target="_blank"><img alt="Chạy bộ lan tỏa tích cực về sức khỏe và tinh thần - Ảnh: TCB" data-author="" data-original="https://cdn2.tuoitre.vn/471584752817336320/2023/12/1/tech-1-17014282325131812924633.jpg" fetchpriority="high" h="533" height="533" id="img_655000267694026752" photoid="655000267694026752" rel="lightbox" sizes="(max-width: 767px) 100vw, (max-width: 1023px) 800px, 1024px" src="https://cdn2.tuoitre.vn/thumb_w/730/471584752817336320/2023/12/1/tech-1-17014282325131812924633.jpg" srcset="https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2023/12/1/tech-1-17014282325131812924633.jpg  480w,https://cdn2.tuoitre.vn/thumb_w/800/471584752817336320/2023/12/1/tech-1-17014282325131812924633.jpg 800w,https://cdn2.tuoitre.vn/thumb_w/1200/471584752817336320/2023/12/1/tech-1-17014282325131812924633.jpg 1200w" title="Chạy bộ lan tỏa tích cực về sức khỏe và tinh thần- Ảnh 1." type="photo" w="800" width="800"></a></p>

<figcaption>
<p data-placeholder="Nhập chú thích ảnh">Chạy bộ lan tỏa tích cực về sức khỏe và tinh thần - Ảnh: TCB</p>
</figcaption>
</figure>

<p>Từ những người nổi tiếng tới những chân chạy chuyên nghiệp đã gắn bó cùng Giải Marathon Quốc tế TP.HCM&nbsp;<a data-rel="follow" href="https://tuoitre.vn/techcombank.html" title="Techcombank">Techcombank</a>&nbsp;từ những mùa trước, mỗi người đều có một câu chuyện riêng về ý chí, sự kiên định hay khát vọng chiến thắng. Tuy nhiên, tất cả họ đều cùng nhau lan tỏa tinh thần "Bước chạy vì một Việt Nam vượt trội".</p>

<h2 id="luon-no-luc-de-vuot-troi-hon-moi-ngay"><b>Luôn nỗ lực để "Vượt trội hơn mỗi ngày"</b></h2>

<p>Những giá trị, ý nghĩa tích cực của marathon đã đi vào đời sống người Việt những năm gần đây, khi phong trào&nbsp;<a data-rel="follow" href="https://tuoitre.vn/chay-bo.html" title="chạy bộ">chạy bộ</a>&nbsp;ngày càng trở thành món ăn tinh thần không thể thiếu của cộng đồng.</p>

<p>Người ta thường ví von cuộc sống cũng giống như một "chặng đua marathon". Cuộc đua không dành cho ai chạy nước rút nhanh nhất, mà dành cho những người không bỏ cuộc. Đó là một cuộc đua đòi hỏi sự kiên trì, nghị lực và ý chí bền bỉ, cùng tinh thần "Vượt trội hơn mỗi ngày".</p>

<p>Không phải ai sinh ra cũng có thể chạy Full Marathon (42 KM). Đa số chúng ta sẽ cần chinh phục từng cung đường, từng bước nâng dần cự ly chạy: 5 km - 10 km - 21 km - 42 km... Từ đó, mỗi người tìm được sự nhịp điệu của chính mình trong con đường chinh phục những cột mốc mới, hay cũng chính là hình ảnh ẩn dụ của những mục tiêu cuộc sống.</p>

<p>Đó là câu chuyện chung của nhiều runner khi trải lòng sau những bước chạy nhiều nỗ lực. Sau lần đầu bén duyên với Giải Marathon Quốc tế TP.HCM Techcombank từ 2017, Lâm Túc Ngân đã dần tìm thấy bản thân mình và trở thành một trong những VĐV bán chuyên tham gia nhiều giải thi đấu thể thao 3 môn phối hợp nhiều nhất tại Việt Nam.</p>

<p>Cô cũng là nữ runner Việt Nam duy nhất hai lần tranh tài Ironman vô địch thế giới. Cùng lan tỏa những ý nghĩa tích cực từ giải chạy Techcombank, Lâm Túc Ngân chia sẻ: "Từ mỗi sự nỗ lực để hoàn thành các cuộc đua, Ngân thấy mình trở thành một phiên bản tốt hơn của chính mình".</p>

<figure type="Photo">
<p><a data-caption="Cuộc đua không dành cho ai chạy nước rút nhanh nhất, mà dành cho những người không bỏ cuộc - Ảnh: TCB" data-fancybox="content" href="https://cdn2.tuoitre.vn/471584752817336320/2023/12/1/tech-2-17014283017891253743985.jpg" rel="nofollow" target="_blank"><img alt="Cuộc đua không dành cho ai chạy nước rút nhanh nhất, mà dành cho những người không bỏ cuộc - Ảnh: TCB" data-author="" data-original="https://cdn2.tuoitre.vn/471584752817336320/2023/12/1/tech-2-17014283017891253743985.jpg" h="539" height="539" id="img_655000559737561088" loading="lazy" photoid="655000559737561088" rel="lightbox" sizes="(max-width: 767px) 100vw, (max-width: 1023px) 800px, 1024px" src="https://cdn2.tuoitre.vn/thumb_w/730/471584752817336320/2023/12/1/tech-2-17014283017891253743985.jpg" srcset="https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2023/12/1/tech-2-17014283017891253743985.jpg  480w,https://cdn2.tuoitre.vn/thumb_w/800/471584752817336320/2023/12/1/tech-2-17014283017891253743985.jpg 800w,https://cdn2.tuoitre.vn/thumb_w/1200/471584752817336320/2023/12/1/tech-2-17014283017891253743985.jpg 1200w" title="Chạy bộ lan tỏa tích cực về sức khỏe và tinh thần- Ảnh 2." type="photo" w="898" width="898"></a></p>

<figcaption>
<p data-placeholder="Nhập chú thích ảnh">Cuộc đua không dành cho ai chạy nước rút nhanh nhất, mà dành cho những người không bỏ cuộc - Ảnh: TCB</p>
</figcaption>
</figure>

<p>Chi Nguyễn - runner hoàn thành 6 giải danh giá World Marathon Majors khẳng định: "đồng hành từ những ngày đầu đến nay Giải Marathon Quốc tế TP.HCM Techcombank đã trở thành một trong những lựa chọn quan trọng của những người yêu thích chạy bộ.</p>

<p>Bởi ngoài những điều kiện chuyên môn khắt khe, đảm bảo theo tiêu chuẩn Quốc tế, đây là giải chạy lớn nhất lịch sử marathon tại Việt Nam và đặc biệt, BTC nói chung và Techcombank luôn cố gắng mang đến những trải nghiệm tốt nhất cho người chạy, tạo điều kiện để các vận động viên có thể hoàn thành tốt nhất.</p>

<h2 id="thay-doi-chinh-minh-tu-moi-buoc-chay"><b>Thay đổi chính mình từ mỗi bước chạy</b></h2>

<p>Một thử thách trên mạng xã hội với chủ đề "Bạn chạy vì điều gì?" do Techcombank khởi xướng đang thu hút hàng ngàn người tham gia. Tất cả đã tạo nên một làn sóng chia sẻ đầy ý nghĩa. Có hàng ngàn lý do để mỗi người đến với chạy bộ. Có thể đó là sự đam mê thể thao và sự yêu thích bộ môn chạy bộ; có thể đó là sự hòa nhịp cùng cộng đồng trong niềm vui cùng nhau vượt thử thách.</p>

<p>Có thể đó là niềm vui khi chiến thắng chính mình trong mỗi bước chạy, cũng có thể vì sự yêu cầu tất yếu của cơ thể khi phải rèn luyện để khỏe hơn mỗi ngày, hay có thể chỉ là niềm vui cả gia đình được tập luyên cùng nhau… Nhưng tất cả đều có điểm chung về sự rèn luyện không chỉ sức khỏe mà ở ý chí, nghị lực, sự kiên định của bản thân trong từng bước chạy.</p>

<p>Chị Bích Vân, một nhân viên Techcombank (Techcomer) đã có những sự thay đổi ngoạn mục về sức khỏe cùng với chạy bộ. Không từ bỏ đam mê chạy bộ sau chấn thương, chị Bích Vân đã phục hồi ngoạn mục cùng bộ môn này và trở thành một câu chuyện truyền cảm hứng cho cộng đồng. Chính bác sĩ điều trị cho chị cũng bất ngờ vì sự trị liệu và chữa lành kỳ diệu từ sự nỗ lực và ý chí của Bích Vân với đam mê chạy bộ.</p>

<ul>
	<li data-avatar="https://cdn2.tuoitre.vn/471584752817336320/2023/9/27/hinh-khai-truong-le-duan-16958178236631759113372-104-0-904-1280-crop-1695817838847888500068.png" data-date="27/09/2023 19:00" data-id="20230927193832182" data-title="Techcombank khai trương trụ sở mới tại Hà Nội và TP.HCM" data-url="/techcombank-khai-truong-tru-so-moi-tai-ha-noi-va-tp-hcm-20230927193832182.htm"><a href="https://tuoitre.vn/techcombank-khai-truong-tru-so-moi-tai-ha-noi-va-tp-hcm-20230927193832182.htm" target="_blank"><img alt="Techcombank khai trương trụ sở mới tại Hà Nội và TP.HCM" height="auto" loading="lazy" src="https://cdn2.tuoitre.vn/thumb_w/730/471584752817336320/2023/9/27/hinh-khai-truong-le-duan-16958178236631759113372-104-0-904-1280-crop-1695817838847888500068.png" title="Chạy bộ lan tỏa tích cực về sức khỏe và tinh thần- Ảnh 3."></a>

	<h4 id="techcombank-khai-truong-tru-so-moi-tai-ha-noi-va-tphcmdoc-ngay"><a href="https://tuoitre.vn/techcombank-khai-truong-tru-so-moi-tai-ha-noi-va-tp-hcm-20230927193832182.htm" target="_blank">Techcombank khai trương trụ sở mới tại Hà Nội và TP.HCM</a><a href="https://tuoitre.vn/techcombank-khai-truong-tru-so-moi-tai-ha-noi-va-tp-hcm-20230927193832182.htm" target="_blank">ĐỌC NGAY</a></h4>
	</li>
</ul>

<p>Không muốn mọi người nhớ đến mình qua những thành tích hay những điều phi thường, Bích Vân đơn giản chỉ muốn truyền cảm hứng cho phái nữ trên đường chạy. Thời gian rảnh rỗi, cô cũng giống như nhiều người phụ nữ khác, thích làm bánh, nấu ăn, đọc sách và chơi với con cái. Và với Bích Vân, lan tỏa những điều tích cực cùng tổ chức mình, cùng đam mê chạy bộ để "vượt trội hơn mỗi ngày" trở nên hòa nhịp hơn bao giờ hết.</p>

<p>Là một người trẻ, năng động, Tiktoker Thế Anh Chạy Bộ - một trong những tiktoker truyền cảm hứng nhất làng chạy bộ với hơn 640.000 follower, luôn mong chia sẻ đam mê và truyền cảm hứng để càng ngày càng có nhiều người tham gia bộ môn chạy bộ này hơn. Thế Anh chia sẻ rằng bạn mong muốn chạy thật nhiều để có những "Trải nghiệm vượt trội", để có thể cảm nhận và chia sẻ những trải nghiệm này tới followers của mình, giúp lan tỏa đam mê và tinh thần chạy bộ.</p>

<p>Thế Anh cũng chính là một trong những đại diện cho những người trẻ, yêu thích bộ môn chạy bộ, dám nghĩ, dám làm và dám chia sẻ những câu chuyện truyền chạy bộ đời thường của mình trên Tiktok.</p>

<p>Hoa hậu Hòa bình Thế giới Thùy Tiên cũng đang luyện tập tích cực chuẩn bị cho Giải marathon Quốc tế TP.HCM Techcombank mùa thứ 6: "tôi bắt đầu chạy và hiểu được lý do tại sao chạy bộ lại trở thành một trong những bộ môn được xem là trend hiện nay. Sức hút của nó không dừng ở lứa tuổi, giới tính hay ngành nghề, hay địa lý. Chạy bộ mang tới cho tôi một sức khỏe tốt hơn và một tinh thần luôn sảng khoái.</p>

<p>Rõ ràng, chạy bộ không phải chỉ là một trào lưu mà là một món ăn tinh thần không thể thiếu với cộng đồng yêu thể thao tại Việt Nam. Một trong những giải thi đấu cũng như phong trào được mong đợi nhất trong năm là Giải marathon Quốc tế TP.HCM Techcombank đã "cháy vé" trước hơn 1 tháng trước khi giải bắt đầu chính thức vào ngày 10-12-2023. Điều này càng khẳng định những giá trị từ phong trào chạy bộ và những đóng góp tích cực từ</p>

<p>Bà Thái Minh Diễm Tú, Giám đốc Khối Tiếp thị Techcombank, chia sẻ: "Năm 2023 đánh dấu cột mốc 30 năm của Techcombank trên chặng đường hình thành và phát triển, không ngừng tạo ra giá trị cho khách hàng.</p>

<figure type="Photo">
<p><a data-caption="Thay đổi chính mình từ mỗi bước chạy - Ảnh: TCB" data-fancybox="content" href="https://cdn2.tuoitre.vn/471584752817336320/2023/12/1/tech-3-17014283164001187535795.jpg" rel="nofollow" target="_blank"><img alt="Thay đổi chính mình từ mỗi bước chạy - Ảnh: TCB" data-author="" data-original="https://cdn2.tuoitre.vn/471584752817336320/2023/12/1/tech-3-17014283164001187535795.jpg" h="1920" height="1920" id="img_655000622894948352" loading="lazy" photoid="655000622894948352" rel="lightbox" sizes="(max-width: 767px) 100vw, (max-width: 1023px) 800px, 1024px" src="https://cdn2.tuoitre.vn/thumb_w/730/471584752817336320/2023/12/1/tech-3-17014283164001187535795.jpg" srcset="https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2023/12/1/tech-3-17014283164001187535795.jpg  480w,https://cdn2.tuoitre.vn/thumb_w/800/471584752817336320/2023/12/1/tech-3-17014283164001187535795.jpg 800w,https://cdn2.tuoitre.vn/thumb_w/1200/471584752817336320/2023/12/1/tech-3-17014283164001187535795.jpg 1200w" title="Chạy bộ lan tỏa tích cực về sức khỏe và tinh thần- Ảnh 4." type="photo" w="1920" width="1920"></a></p>

<figcaption>
<p data-placeholder="Nhập chú thích ảnh">Thay đổi chính mình từ mỗi bước chạy - Ảnh: TCB</p>
</figcaption>
</figure>

<p>Qua 5 mùa tổ chức, giải chạy Marathon Quốc tế TP.HCM Techcombank đã ngày càng khẳng định được quy mô và vị thế của một giải chạy chuyên nghiệp, ngang tầm khu vực và quốc tế.</p>

<p>Thông qua giải chạy, Techcombank mong muốn chung tay cùng cộng đồng lan tỏa tinh thần "Vượt trội hơn mỗi ngày", truyền cảm hứng về một lối sống tích cực và chủ động. Chúng tôi rất vui được đồng hành cùng Sở Du lịch TP.HCM mang tới một giải chạy quốc tế, đại diện cho TP.HCM nói riêng và cả nước nói chung trong việc lan tỏa hình ảnh về một Việt Nam năng động và phát triển. Đó cũng chính là hình ảnh của Ngân hàng Techcombank trong suốt hành trình 30 năm đồng hành và phát triển của mình".</p>

<p>Đặc biệt, mùa giải năm nay cũng đánh dấu đúng kỉ niệm 30 năm thành lập Techcombank. Cùng với sự tham gia của 30 người nổi tiếng có ảnh hưởng trong cộng đồng, giải chạy đang này một nóng hơn với tinh thần bền bỉ, thành công và lan tỏa tinh thần sống khỏe "Bước chạy vì một Việt Nam vượt trội."</p>

<p>Ngoài ra, đây cũng là giải chạy quy tụ nhiều vận động viên thành tích cao như Hoàng Nguyên Thanh, Nguyễn Văn Lai, Phạm Thị Hồng Lệ, Lê Tiến Long, Nguyễn Trung Cường... cùng sự tham gia của các vận động viên chuyên nghiệp nước ngoài cùng lan tỏa tinh thần "Vượt trội hơn mỗi ngày" như Shadrack Kipkemboi (Kenya) với thành tích "khủng" là hoàn thành Full Marathon (42km) trong vòng 2 giờ 8 phút...</p>

<p>Câu chuyện về tinh thần "Vượt trội hơn mỗi ngày" bắt đầu từ chính mỗi người mỗi nỗ lực, ý chí của mỗi người. Không dừng lại của những vận động viên chuyên nghiệp, người nổi tiếng mà còn là của tất cả những ai đang nỗ lực để trở thành phiên bản tốt hơn của chính mình, từ đó, truyền động lực để cùng nhau tạo nên một cộng đồng vượt trội, cùng nhau có những "Bước chạy vì một Việt Nam vượt trội".</p>
    </div><style>
        body {
          margin: 0;
          padding: 16px;
          overflow-x: hidden;  /* ✅ Tắt scroll ngang */
        }
        img, table {
          max-width: 100%;
        }
      </style>`,
	},
	{
		id: 4,
		title: "Chạy bộ lan tỏa tích cực về sức khỏe và tinh thần",
		image: require("@/assets/images/news4.jpg"),
		content: `<div class="content-main content-text w-clear content-text animate__zoomIn wow" data-wow-iteration="1" data-wow-duration="0.8s" id="toc-content" style="visibility: visible; animation-duration: 0.8s; animation-iteration-count: 1; animation-name: zoomIn;"><h2 data-role="sapo" id="buoc-chay-vi-mot-viet-nam-vuot-troi-do-cung-la-dong-luc-cho-tat-ca-moi-nguoi-hon-12000-nguoi-da-tham-gia-va-hoan-thanh-cac-cu-ly-cua-mua-giai-marathon-quoc-te-ho-chi-minh-techcombank-lan-5">"Bước chạy vì một Việt Nam vượt trội", đó cũng là động lực cho tất cả mọi người, hơn 12.000 người đã tham gia và hoàn thành các cự ly của mùa giải marathon Quốc tế Hồ Chí Minh Techcombank lần 5.</h2>

<p>Với quy mô hàng đầu lịch sử marathon Việt Nam, giải marathon Quốc tế Hồ Chí Minh Techcombank là điểm đến không chỉ của những cá nhân yêu thể thao mà cả các doanh nghiệp trong hành trình xây dựng văn hóa doanh nghiệp sống khỏe gắn kết và cùng nhau Vượt trội hơn mỗi ngày.</p>

<table align="center">
	<tbody>
		<tr>
			<td><img alt="GoLive - Đi bộ tích điểm đổi quà" data-height="1365" data-image-id="4093103" data-width="2048" loading="lazy" src="https://image.thanhnien.vn/Uploaded/quochungqc/2022_12_26/mar3-300.jpg"></td>
		</tr>
		<tr>
		</tr>
		<tr>
		</tr>
	</tbody>
</table>

<p>Giải Marathon Quốc tế Hồ Chí Minh Techcombank lần 5 là một sự kiện lớn thường niên nhằm quảng bá vẻ đẹp và sự năng động của TP.HCM đến với người dân và du khách. Lộ trình giải đấu bắt đầu từ những con đường tuyệt đẹp tại trung tâm thành phố: Vạch xuất phát là trục đường Lê Duẩn, ngay khu vực trước Thảo cầm viên, sau đó các vận động viên trải nghiệm cung đường chạy qua 5 quận và về đích tại TP.Thủ Đức. Trên cung đường chạy marathon 42 km, các vận động viên sẽ có cơ hội chiêm ngưỡng các danh thắng nổi tiếng của thành phố như: Nhà thờ Đức Bà, Bưu điện thành phố, UBND Thành phố, Nhà hát Thành phố, Bến cảng Nhà Rồng, cầu Thủ Thiêm 2 (cầu Ba Son), đường Võ Văn Kiệt...</p>

<p>Giải chạy khép lại mùa thứ 5 nhưng cảm xúc tích cực vẫn lan tỏa trong cộng đồng. Từ những vận động viên chuyên nghiệp với những nỗ lực để đạt thành tích tốt nhất cho đến những người tham gia chạy để cộng hưởng cùng tinh thần vượt trội hơn mỗi ngày.</p>

<p>Advertisements</p>

<p><button title="Play/Pause" type="button"></button><button id="uplayer-control-bar-mute-toggle" title="mute toggle" type="button"></button><button title="Fullscreen" type="button"></button></p>

<p><input max="100" min="1" type="range" value="0"></p>

<p><button type="button">X</button></p>

<p>Đoàn Thị Hiền, vô địch chung cuộc toàn nhóm tuổi cự ly marathon của nữ chia sẻ: “Là người Việt Nam chiến thắng vị trí cao nhất trong cuộc đua cam go với các vận động viên, đây thực sự là một cơ hội rất tốt cho tôi và các đồng nghiệp cọ xát và cạnh tranh với các đồng nghiệp khác trong khu vực để đánh giá khả năng của mình”.</p>

<p>Quiamco Bryan, vận động viên vô địch chung cuộc toàn nhóm tuổi hạng mục nam cự ly marathon cho biết: “Tôi biết đây là một trong những giải nổi bật ở đất nước của các bạn nên đã quyết định tham gia. Cuộc đua khá an toàn và dễ chịu nên các vận động viên có thể tập trung vào việc thể hiện tốt nhất khả năng mà mình có. Tôi muốn gửi lời cảm ơn tới Ban tổ chức và chắc chắn sẽ quay lại thi trong các năm tới”.</p>

<p>Thức dậy từ sáng sớm để có mặt cùng nhiều người yêu thể thao tại Thảo cầm viên Sài Gòn, người đẹp Bùi Linh Chi cho hay: “Mình thấy rất vui khi một lần nữa lại có thêm trải nghiệm hoàn toàn mới. Thử thách sẽ chẳng còn khó nếu chúng ta chịu hành động. Sẽ luôn giữ tinh thần tập luyện mỗi ngày để giải Marathon Quốc tế HCM Techcombank lần thứ 6 có kết quả tốt hơn”.</p>

<p>Florian Deichmann, một chân chạy cừ khôi người Đức đã sinh sống 13 năm tại Việt Nam hào hứng nói: “Tôi đã tham gia tất cả các giải chạy của các bạn đây là giải Marathon đầu tiên trong nước mà tôi cảm thấy được tổ chức theo các tiêu chuẩn quốc tế và đã truyền cảm hứng về việc phát triển phong trào chạy bộ rộng khắp. Tôi rất ấn tượng với khả năng vận hành và sự tiến bộ qua từng năm của Ban tổ chức. Tôi mong chờ tới năm sau để tham gia sự kiện của các bạn”.</p>

<p>Vượt lên chính mình dường như là điểm đến của rất nhiều người tham gia giải chạy năm nay. Trên các chặng đường với các cự ly khác nhau, người ta có thể dễ dàng nhìn thấy những nỗ lực bền bỉ, vượt trội của những cụ già rất chậm rãi chắc chắn với từng bước, những người mẹ mang đầy yêu thương chạy bên cạnh con để động viên cho mỗi bước chạy tự lực kiên trì, những đôi vợ chồng trẻ đã mang cả em bé trên xe đẩy với hành trình thể thao và kết nối yêu thương. Tất cả đã cùng viết nên câu chuyện về sự liên tục, bền bỉ của bản thân hình thành nên một phong cách, lối sống khỏe mạnh, có ích cho cộng đồng.</p>

<p><iframe id="adnzone_sponsor_529215" scrolling="no"></iframe></p>

<table align="center">
	<tbody>
		<tr>
			<td><img alt="GoLive - Đi bộ tích điểm đổi quà" data-height="1365" data-image-id="4093102" data-width="2048" loading="lazy" src="https://image.thanhnien.vn/Uploaded/quochungqc/2022_12_26/hinh-marathon-1-6091.jpg"></td>
		</tr>
		<tr>
		</tr>
		<tr>
		</tr>
	</tbody>
</table>

<p><iframe data-ready="1" frameborder="0" height="274" name="dableframe-0.3758058610611492" scrolling="no" src="https://api.dable.io/widgets/id/QXedqQel/users/77210997.1751191696470?from=https%3A%2F%2Fthanhnien.vn%2Fnhung-cam-xuc-vuot-troi-kho-quen-cung-giai-chay-marathon-quoc-te-hcm-techcombank-lan-5-1851535851.htm%3Fgidzl%3DvYylK90dwIdaE2TMb3Zf9-0_BrwBQxOchMXm2DzWk2N-C7OEZZczVgfjTm_TFUrrgsuY2695CVz8aIlbA0&amp;url=https%3A%2F%2Fthanhnien.vn%2Fnhung-cam-xuc-vuot-troi-kho-quen-cung-giai-chay-marathon-quoc-te-hcm-techcombank-lan-5-1851535851.htm%3Fgidzl%3DvYylK90dwIdaE2TMb3Zf9-0_BrwBQxOchMXm2DzWk2N-C7OEZZczVgfjTm_TFUrrgsuY2695CVz8aIlbA0&amp;ref=&amp;cid=77210997.1751191696470&amp;uid=77210997.1751191696470&amp;site=thanhnien.vn&amp;gdpr=0&amp;service_id=5937&amp;service_type=news&amp;country=VN&amp;client_id=1736&amp;lazyload_widget_ids=x7yEvG76&amp;lazyload_widget_ids=1oVpGklP&amp;randomStr=2fc00690-3138-4b8b-99b8-d1982091c761&amp;id=dablewidget_QXedqQel&amp;category1=Kinh%20t%E1%BA%BF&amp;author=Kh%C3%A1nh%20Qu%E1%BB%B3nh&amp;item_id=1851535851&amp;item_pub_date=2022-12-26T17%3A58%3A42%2B07%3A00&amp;pixel_ratio=1&amp;ua=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F137.0.7151.120%20Safari%2F537.36&amp;client_width=640&amp;network=non-wifi&amp;lang=en&amp;is_top_win=1&amp;top_win_accessible=1&amp;is_lazyload=0&amp;inarticle_init=1" title="Dành cho bạn" width="100%"></iframe></p>

<p>Tiếp lửa cho tinh thần vượt trội, giải marathon Quốc tế Hồ Chí Minh Techcombank tiếp tục ghi dấu mùa 5 với những dấu ấn vượt trội. Nhưng hơn hết đó không chỉ là nơi gặp nhau của tinh thần thể thao mà là sự cộng hưởng của ý chí, tinh thần cộng đồng và một tình yêu với chính thành phố nơi mình đang sống. Đúng như ai đó đã từng nói, muốn yêu thương một thành phố hãy chạy bộ qua tất cả các con đường của thành phố ấy. Đó cũng là mạch nối để luôn sống tốt hơn, luôn nỗ lực thành công hơn như chính tinh thần thương hiệu Techcombank khi gắn kết, đồng hành cùng cộng đồng.</p>

<p>Theo bà Thái Minh Diễm Tú - Giám đốc Khối tiếp thị Techcombank: “Đồng hành và hợp tác chặt chẽ với các cơ quan ban ngành của TP.HCM ngay từ những mùa đầu tiên diễn ra giải chạy, chúng tôi luôn mong muốn phát triển tầm nhìn dài hạn cho cuộc thi, biến sự kiện thể thao này trở thành hoạt động thường niên tại thành phố. Với tinh thần “Vượt trội hơn mỗi ngày”, thông qua sự kiện thể thao này, Techcombank hướng đến trong nhiều năm đồng kiến tạo nên những nền tảng thể thao, sống khỏe mỗi ngày, lan tỏa niềm tin rằng thành quả hôm nay là khởi đầu cho hành trình vượt trội xa hơn tạo ra những thay đổi ý nghĩa cho cộng đồng và chính bản thân”.</p>
</div><style>
        body {
          margin: 0;
          padding: 16px;
          overflow-x: hidden;  /* ✅ Tắt scroll ngang */
        }
        img, table {
          max-width: 100%;
        }
      </style>`,
	},
];

export default function NewsScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				colors={["rgba(33, 124, 197, 1)", "rgba(30, 105, 134, 1)"]}
				style={[styles.gradient, StyleSheet.absoluteFill]}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
			>
				<ScrollView
					style={styles.content}
					contentContainerStyle={{ paddingBottom: 60 }}
				>
					{/* Header */}
					<View style={styles.wrapContent}>
						<Header />
					</View>

					{/* Slide */}
					<View style={styles.slideWp}>
						<SlideCarousel />
					</View>

					<View style={[styles.wrapContent, { marginTop: 20 }]}>
						<View style={styles.news}>
							{newsData.map((item) => {
								return <NewsItem newsItem={item} key={item.id} />;
							})}
						</View>
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	wrapContent: { paddingInline: 10 },
	container: { flex: 1 },
	gradient: { flex: 1 },
	content: { flex: 1, paddingVertical: 40 },
	slideWp: {
		marginTop: 16,
	},
	news: {
		gap: 12,
		flexDirection: "row",
		flexWrap: "wrap",
		flex: 1,
		justifyContent: "space-between",
	},
});
