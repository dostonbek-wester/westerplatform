import React, { useEffect } from 'react'
import './BirinchiDars.css'
import ReactPlayer from 'react-player';
import LaptopMacTwoToneIcon from '@mui/icons-material/LaptopMacTwoTone';
import EastIcon from '@mui/icons-material/East';
import { useLocation } from 'react-router-dom';



function BirinchiDars() {

  const location = useLocation();

  useEffect(()=>{
    console.log(location)
  },[location])

  return (
    <div className='BirinchiDars'>
      <div className='left'>
        <h1><LaptopMacTwoToneIcon /> {location?.state?.title ? location?.state?.title : "Dasturlash asoslari"}</h1>
        <p>Assalom alaykum hurmatli do'stlar. Bu yerda siz dasturlash asoslarini o'rganasiz.</p>
        <ReactPlayer className='ytp-cued-thumbnail-overlay' url={location?.state?.video_link ? location?.state?.video_link : "https://youtu.be/ZqFjXM8k-PY"} controls />
        <h1>MAQSADIMIZ</h1>
        <p>Darsimizning asl maqsadi tinglovchilarga dasturlash asoslarini va eng muhimi turli muammolarga yechim bo'luvchi dasturlar yozishni o'rgatish. </p>
        <p>Buning uchun biz Python tilidan foydalansakda, dars davomida olingan bilimlar barcha dasturlar tili uchun umumiydir.</p>
        <p>Darslarni boshlashdan avval, keling...</p>
        <div className='meet'>
          <h1>TANISHAMIZ</h1>
          <div className='rasm'><img src="https://3133615152-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MGbkqs1tROquIT6oqUs%2F-MKdNnGkZ8HimrY0oUTs%2F-MKdqlwOIjNTUfff1L2l%2Fanvar200px.png?alt=media&token=b6e3307b-0473-4d8f-ae1b-0731f2807067" alt="" /></div>
          <div className='name'><p>Ismim</p><h3> Anvar Narzullaev.</h3></div>
        </div>
        <div className='uni-n'>
          <p><a href="https://www.usim.edu.my/" target='blen'>Universiti Sains Islam Malaysia </a>oliygohining Axborot Texnologiyalari kafedrasida yetakchi mutaxassis lavozimida ishlayman. Raqamli Texnologiyalar, Kompyuter Arxitekturasi, Axborot Xavfsizligi fanlaridan dars beraman. </p>
          <p>2004 yilda Toshkent Axborot Texnologiyalar Universitetini Telekommunikatsiya yo'nalishini bitirganman. </p>
          <p>2006 yilda Janubiy Koreyaning Yeungnam Universitetida Axborot Texnologiyalari Muhandisi yo'nalishida Magistrlik, 2012 yilda esa shu oliygohda Doktorlik (PhD) unvonini himoya qilganman.</p>
          <p>2013 yildan beri Malayziyaning turli oliy o'quv yurtlarida Computer Science va Axborot Texnologiyalari yo'nalishlarida dars berib kelaman.</p>
          <p>Birinchi professional dasturimni 13 yoshda yozganman. Turli yillar davomida C, C++, Delphi, Matlab, Java va Python tillaridan foydalanib kelganman. </p>
          <p>Oxirgi yillarda asosan ikki yo'nalishda ilmiy izlanishlar qilaman: IoT (Internet of things) va AI (Artificial Intelligence). </p>
          <p>Asosiy dasturlash qurollarim C++, Matlab va Python.</p>
        </div>
        <div className='only-m'>
          <h1>ONLAYNDAGI MANZILLARIMIZ</h1>
          <p>SariqDev telegram kanali: <a href="https://t.me/sariqdev" target='blen'>https://t.me/sariqdev</a></p>
          <p>SariqDevYoutube kanali: <a href="https://www.youtube.com/sariqdev" target='blen'>https://www.youtube.com/sariqdev</a></p>
          <div className='img-s'><img src="https://3133615152-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MGbkqs1tROquIT6oqUs%2F-Mc-5yGQPZTBaGoehQdL%2F-Mc-7xpq4Puu3KEjmT0R%2FSD_YT_TG_logo_mini.png?alt=media&token=929fe67b-ec12-4f63-b33e-e9c5e3d8ad09" alt="" /></div>
        </div>
        <div className='dars-u'>
          <h1>DARSLARIMIZ KIM UCHUN?</h1>
          <p>Darsimizning maqsadi sizni tez va samarali yo'llar bilan Python dasturlash tiliga va eng muhimi dasturchilik olamiga olib kirish. Darsimiz, umrida biror marta Python yoki umuman boshqa tillarda dastur yozmagan barcha yoshdagi insonlarga mo'ljallangan. </p>
          <h3>
            Dars davomida siz barcha tillar uchun umumiy bo'lgan dasturlash asoslarini puxta o'zlashtirib olasiz, bu esa o'z navbatida sizning kelajakdagi faoliyatingiz uchun muhim poydevor bo'ladi.
          </h3>

          <p>Umid qilamizki, darslarimiz boshqa o'qituvchilar va dasturchilar uchun ham foydali manba bo'lib xizmat qiladi.</p>
        </div>
        <div className='dars-s'>
          <h1>DARSLARIMIZ SIZGA NIMA BERADI?</h1>

          <p>Darslarimiz yakunida siz nafaqat Python tilini, balki barcha dasturlash tillari uchun umumiy bo'lgan tushunchalar va asoslarni ham puxta o'zlashtirib olasiz.</p>

          <p>
            Kursni muvaffaqiyatli tamomlagan tinglovchilar, kelajakda dasturlashning tor va murakkab yo'nalishlarini ham, mutlaqo yangi dasturlash tilini ham yengillik bilan o'zlashtira oladilar.
          </p>

          <p>Darslarimizning birinchi qismida siz Python dasturlarini yozish uchun muhim bo'lgan asosiy tushunchalarni o'rganasiz. Ushbu tushunchalar xar qanday dasturlash tillari uchun bir xildir. Jumladan ushbu qism quyidagi mavzularni o'z ichiga oladi:</p>

          <ul>
            <li>Ma'lumotlar turlari va ularni saqlash usullari</li>
            <li>Ma'lumotlar to'plamini yaratish, ular ustida samarali ishlash usullari</li>
            <li>While, if  tsikllari yordamida shartlarni tekshirish va kodni tarmoqlash</li>
            <li>Interaktiv dasturlar yaratish orqali foydalanuvchilar bilan ikki tomonlama "muloqot" o'rnatish, ulardan ma'lumot qabul qilish</li>
            <li>Kodning ma'lum qismlarini qayta-qayta ishlatish uchun funktsiyalar yozish</li>
            <li>Yozgan dasturingizni tekshirish uchun testlar yozish, va kelajakdagi xatolarning oldini olish</li>
          </ul>
          <p>Kursimizning ikkinchi qismida esa o'zlashtirgan bilimlaringizni puxtalash uchun bir nechta loyihalar ustida ishlaysiz. </p>

          <div className='nma-p'>
            <h1>NIMA UCHUN AYNAN PYTHON?</h1>
            <p><span style={{ color: 'black', fontWeight: '700' }}>Python —</span> o'rganish uchun oson, foydalanish uchun qulay, ko'p qirrali dasturlash tili bo'lib, dasturlashga yangi kirganlar uchun ham, soha mutaxassislari uchun ham zo'r tanlov.</p>
          </div>
          <div className='py-s'>
            <h1>Python o'rganish uchun 5 sabab:</h1>
            <ul>
              <li>Python dasturlash tiliga bo'lgan talab yildan yilga oshib kelmoqda. CodingDojo portalining tadqiqotlariga ko'ra, 2020 yilda aynan Python tilida dasturlovchi mutaxassislarga eng ko'p talab bo'lgan</li>
            </ul>
            <img className='qwe' src="https://3133615152-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MGbkqs1tROquIT6oqUs%2F-MLDPzPQw_oO_jl8Nbnv%2F-MLDV3bWQe4Mw_NP8WV0%2FHow-do-our-usual-languages-fare__Worldwide-jobs-on-indeed.com-2.png?alt=media&token=a412213a-3962-43d9-a3e2-70b6505a85f4" alt="" />
            <ul>
              <li>Python Artificial Intelligence (Sun'iy intellekt) va Data Science (Ulkan ma'lumotlar bilan ishlash) sohalarining tili hisoblanadi. Bugungi kunda keng ommalashib borayotgan sun'iy intellekt asosida ishlovchi dasturlarning aksari Pythonda yozilgan. Bu sohalardagi mutaxassislar bugungi kunda eng noyob va qimmatbaho kadrlar hisoblanadi.</li>
              <li>Keng qamrovli va universal til. Python dasturlari deyarli barcha operativ tizimlarda va platformalarda ishlaydi.</li>
              <li>O'rganish uchun ham, tushunish uchun ham juda qulay va sodda kod. Quyidagi ikki tilda yozilgan kodlargaga e'tibor bering, va ulardan qay biri tushunarliroq ekanini ko'ring (ikkisi ham bir vazifani bajaradi):</li>
              <li>Moslashuvchanlik —Python dasturlash tili ma'lum bir masalalarni yechish bilan chegaralanmagan. Bu til dasturchilarga yangi va yangi yo'nalishlarga ki'rish imkonini beradi. Python quyidagi sohalarda qo'llaniladi: Web va Internet dasturlash, kompyuter o'yinlarini yaratish, ma'lumotlar bazasi bilan ishlash (DB), computer vision, foydalanuvchilar uchun grafik interfeys (GUI), juda tez rivojlanayotgan buyumlar interneti (IoT) texnologiyasi va hokazo.</li>
              <img className='web' src="https://3133615152-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MGbkqs1tROquIT6oqUs%2F-MKd4RP2w816MlwVECqq%2F-MKdJ157V-sspSKBMOzx%2Fimage.png?alt=media&token=cd490350-f527-4ad7-82d2-4d74f3cd7ab4" alt="" />
            </ul>
          </div>
          <div className='manba'>
            <h1>MANBALAR</h1>
            <p>Ushbu kursni tayyorlashda quyidagi kitoblar va resurslardan foydalanildi:</p>
            <p><span style={{ marginRight: '5px', fontSize: '20px' }}>1. </span> Eric Matthes, Python Crash Course. A Hands-On, Project-Based Introduction to Programming, 2nd edition, No Starch Press, 2019</p>
            <p><span style={{ marginRight: '5px', fontSize: '20px' }}>2.</span> <a href="https://www.learnpython.org/">https://www.learnpython.org/</a></p>
            <p><span style={{ marginRight: '5px', fontSize: '20px' }}>3.</span>John V. Guttag, Introduction to Computation and Programming Using Python, Second Edition With Application to Understanding Data, MIT Press, 2016</p>
          </div>
          <div className='box'>
            <a href="https://python.sariq.dev/howto">
              <div className="next">
                <h4>Next</h4>
                <h2>DARSLARNI QANDAY O'ZLASHTIRAMIZ</h2>
              </div>
              <EastIcon />
            </a>
          </div>
        </div>

      </div>
      <div className="right">
        <h3>ON THIS PAGE</h3>
        <p>MAQSADIMIZ</p>
        <p>TANISHAMIZ</p>
        <p>ONLAYNDAGI MANZILLARIMIZ</p>
        <p>DARSLARIMIZ KIM UCHUN?</p>
        <p>DARSLARIMIZ SIZGA NIMA BERADI?</p>
        <p>NIMA UCHUN AYNAN PYTHON?</p>
        <p>Python o'rganish uchun 5 sabab:</p>
        <p>MANBALAR</p>

      </div>
    </div>
  )
}

export default BirinchiDars