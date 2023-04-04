import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

import YellowButton1 from '@src/components/Button/YellowButton1'
import birukananbawah from '@src/assets/images/biru-kanan-bawah.svg'
import Birukiribawah from '@src/assets/images/biru-kiri-bawah.svg'
import ularkuning from '@src/assets/images/ular-kuning.svg'
import ta17018025 from '@src/assets/images/TAFair/TA/ta17018025.jpg'
import ta12318010 from '@src/assets/images/TAFair/TA/ta12318010.jpg'
import ta15817014 from '@src/assets/images/TAFair/TA/ta15817014.png'
import ta12318031 from '@src/assets/images/TAFair/TA/ta12318031.png'
import ta10518099 from '@src/assets/images/TAFair/TA/ta10518099.png'
import ta17018009 from '@src/assets/images/TAFair/TA/ta17018009.png'

// import tanim from '@src/assets/images/TAFair/TA/tanim.jpg'

const ViewMore2 = (): JSX.Element => {

  const router = useRouter()
  
  type Data = {
    [key: number]: {
      title: string
      nim: string
      prodi: string
      desc: string
      image?: string
    }
  }
  
  const data: Data = {
    10218053 : {
      title: 'PEMODELAN KE DEPAN SEISMIK REFRAKSI UNTUK KAWASAN CIBEBER DENGAN METODE BEDA HINGGA DOMAIN WAKTU',
      nim: '10218053',
      prodi: 'Fisika',
      image: '',
      desc: 'Metode seismik merupakan metode geofisika aktif yang memanfaatkan sumber penjalaran gelombang seismik (seperti palu atau ledakan) ke dalam permukaan bumi yang digunakan untuk mengetahui kondisi di bawah permukaan bumi. Penelitian ini dilakukan dengan menggunakan metode numerik yaitu metode beda hingga untuk mendapatkan model interpretasi yang sesuai dengan data seismik lapangan. Berdasarkan kondisi tersebut, dilakukan pemodelan ke depan untuk mendapatkan kecepatan seismik dan kedalaman tiap lapisan bawah permukaan Cibeber. Diskritisasi dari domain permodelan ini menggunakan ukuran grid 160 × 160. Setelah itu, memasukkan parameter-parameter model yang dibutuhkan ke dalam MATLAB. Kemudian dilakukan proses trial and error pada parameter tersebut untuk mendapatkan pemodelan yang cocok dengan data lapangan Kawasan Cibeber. Setelah mengubah-ubah parameter model dan menemukan model yang cocok, didapatkanlah kedalaman tiap lapisan dan kecepatan seismik Kawasan X, Cibeber. Didapatkan hasil interpretasi bawah permukaan Kawasan X, Cibeber terbagi menjadi dua lapisan, yaitu 3 lapisan dan 4 lapisan. Kecepatan pada tiga lapisan sebesar 250 m/s, 535 m/s, 1000 m/s dengan ketebalan lapisan hingga 3 m ke bawah. Sedangkan pada empat lapisan sebesar 250 m/s, 435 m/s, 710 m/s, 1000 m/s dengan ketebalan lapisan hingga 13 m ke bawah. Kemudian, program MATLAB dengan metode beda hingga berhasil dimodifikasi untuk interpretasi bawah permukaan Kawasan X, Cibeber. ',
    },
    15418214 :{
      title: 'Analisis Keterlibatan Perempuan dalam Perencanaan Pembangunan Desa (Studi Kasus: Desa Cikadut dan Desa Mandalamekar, Kabupaten Bandung)',
      nim: '15418214',
      prodi: 'Perencanaan Wilayah dan Kota',
      image: '',
      desc: 'Dewasa ini, kesetaraan gender sebagai perwujudan inklusivitas bagi perempuan sering diglorifikasi dalam slogan „no one left behind‟ yang berarti perlu melibatkan segala lini perempuan. Di Indonesia, isu ketidaksetaraan gender di desa lebih sering ditemui dibandingkan di kota. Terlebih, desa merupakan lingkup yang paling dekat dengan masyarakat. Adapun isu kesetaraan gender dalam pembangunan dan pemerintahan desa yang seringkali tertinggal oleh peran perempuan salah satunya yaitu pengambilan keputusan. Peran perempuan dalam pengambilan keputusan termasuk perencanaan pembangunan desa. Kesetaraan gender dapat diukur dari Indeks Pembangunan Gender (IPG) dan Indeks Pemberdayaan Gender (IDG), dimana Provinsi Jawa Barat yang memiliki jumlah penduduk paling tinggi dan Indeks Pembangunan Manusia (IPM) yang tinggi pula, namun memiliki IPG dan IDG yang rendah, sehingga perlu mendapat perhatian khusus. Desa di Jawa Barat yang memiliki Kepala Desa perempuan yaitu Desa Cikadut, Kabupaten Bandung, yang dapat mengindikasikan pembangunan desa lebih berperspektif gender. Namun, penelitian ini juga ingin meninjau desa dengan karakteristik serupa dan memiliki Kepala Desa laki-laki yaitu Desa Mandalamekar yang secara administratif bersebelahan dengan Desa Cikadut. Dengan demikian, penelitian ini meninjau keterlibatan perempuan dalam perencanaan pembangunan desa, dengan studi kasus Desa Cikadut dan Desa Mandalamekar. Penelitian ini menggunakan metode analisis konten, kuantitatif, dan kualitatif. Analisis konten dilakukan untuk mengidentifikasi variabel dan indikator keterlibatan perempuan dalam perencanaan pembangunan desa serta komparasi dengan ketercapaiannya sesuai kondisi eksisting di lokasi studi kasus. Sedangkan tinjauan kondisi di Desa Cikadut dan Desa Mandalamekar menggunakan metode pengumpulan data sekunder, wawancara, dan kuesioner yang kemudian dianalisis secara kuantitatif dan kualitatif. Identifikasi variabel dan indikator dilakukan dengan studi literatur yang pada akhirnya meninjau secara top-down dari upaya stakeholders desa dan secara bottom-up dari keterlibatan perempuan pada Pemerintahan Desa, organisasi perempuan desa, Tim Penyusun Perencanaan Pembangunan Desa, survei, dan keterlibatan dalam Musrenbangdes seperti kehadiran maupun keaktifan. Hasil penelitian menunjukkan bahwa indikator tercapai dalam hal keterlibatan perempuan pada Perangkat Desa dan Tim Penyusun Perencanaan Pembangunan Desa, baik di Desa Cikadut maupun Desa Mandalamekar. Kemudian, indikator juga terpenuhi dalam hal keterlibatan perempuan pada Musrenbangdes, kecuali pada agenda Musrenbang RKPDes Cikadut 2022. Pemenuhan indikator dalam hal keaktifan perempuan pada Musrenbangdes hanya terpenuhi dalam penyampaian pendapat perempuan di Musrenbang RKPDes Cikadut. Disamping itu, Desa Cikadut lebih unggul dari Desa Mandalamekar pada semua variabel kecuali terkait keterlibatan perempuan dalam BPD dan PKK Desa.'
    },
    20320015 :{
      title: 'Deteksi Awal Fajar Menggunakan Kamera Ponsel',
      nim: '20320015',
      prodi: 'Astronomi',
      image: '',
      desc: 'Pedoman waktu shalat lima kali dalam sehari telah disebutkan secara rinci dalam Al Qur’an dan Hadits berkaitan dengan fenomena astronomis sehari-hari, shalat saat siang hari menggunakan panjang bayangan dan ketika malam hari berdasarkan fenomena fajar dan senja. Kamera ponsel yang menghasilkan gambar digital dapat digunakan sebagai instrumen pengamatan awal fajar. Pilihan ini dapat dimanfaatkan bagi kalangan amatir yang ingin melakukan pengamatan tanpa peralatan yang rumit. Fokus permasalahan yang sering dibicarakan adalah pada angka sudut depresi berapa fajar sejati dimulai. Padahal bagian yang lebih krusial adalah pada cara pengamatan dan analisa citra pengamatan. Prosedur pengamatan awal fajar menggunakan kamera ponsel hingga analisa gambar digital akan dibahas pada tesis ini. Citra hasil pengamatan langit fajar dianalisis kecerlangannya dan dihubungkan dengan ketinggian Matahari menggunakan metode substract image pada software AstroImageJ. Hasil nilai yang didapat selanjutnya diplot menjadi grafik dan melakukan proses fitting linier.'
    },
    10217001 :{
      title: 'Pemanfaatan Artificial Neural Network untuk Inversi 1D Data Magnetotellurik',
      nim: '10217001',
      prodi: 'Fisika',
      image: '',
      desc: 'Dengan munculnya Artificial Intelligence (AI) atau kecerdasan buatan yang mewakili peningkatan signifikan di banyak bidang, Artificial Neural Network (ANN) atau jaringan saraf tiruan dengan cepat menjadi teknik pemodelan yang paling kuat di hampir semua bidang teknik, sains, dan masalah ekonomi. Magnetotelurik sebagai metode eksplorasi geofisika pasif yang menggunakan medan elektromagnetik alami, dapat digunakan untuk tujuan eksplorasi sumber daya alam seperti mineral, minyak dan gas, panas bumi, serta untuk tujuan mempelajari masalah lingkungan. Inversi 1D Data Magnetotelurik sebagai masalah inversi nonlinier memerlukan solusi yang lebih baik untuk dapat menghindari minima lokal. Menjadi bagian dari AI, ANN dapat menyelesaikan permasalahan yang kompleks tanpa persamaan matematis dengan memprediksi pola pada data. Penggunaan ANN dalam inversi magnetotelurik diharapkan dapat menjadi sebuah alternatif solusi permasalahan inversi nonlinier. Pada penelitian ini, data yang digunakan adalah data sintesis berupa 20 set data frekuensi, resistivitas semu, dan fasa. Pengolahan data dilakukan dengan inversi magnetotelurik yang menghasilkan nilai resistivitas dari dua lapisan bawah bumi beserta ketebalan lapisan pertamanya. Arsitektur ANN dibuat menggunakan bahasa pemrograman Python sebagai bahasa pemrograman yang mudah dimengerti. Model ANN dibuat dengan library Scikit-Learn pada Python menggunakan fungsi MLPRegressor sebagai model ANN dengan multiple layers. Model ini menggunakan beberapa hyperparameter yaitu Rectified Linear Unit (ReLU) sebagai  fungsi aktivasi dan Limited-memory Broyden-Fletcher-Goldfarb-Shanno (LBFGS) sebagai fungsi optimasi. Variasi dilakukan pada  hyperparameter jumlah hidden layers dan jumlah iterasi maksimum masing-masing sebanyak 3 variasi.'
    },
    17018025 :{
      title: 'Seni Grafis sebagai Representasi Sosial Penelantaran Kucing di Masjid Salman ITB',
      nim: '17018025',
      prodi: 'Seni Rupa',
      image: ta17018025.src,
      desc: 'Terciptanya makhluk hidup yang terdiri dari manusia, flora, fauna, dan lingkungan membentuk sebuah sistem ekologi yang disebut dengan ekosistem. Ekosistem bekerja dengan sendirinya dan memiliki keteraturan yang berdampak pada satu sama lain sehingga dapat menjaga keseimbangan di dalamnya. Kucing merupakan salah satu hewan yang sudah akrab dan familiar dengan manusia. Keberadaannya telah membantu kehidupan manusia sejak praktik awal pertanian pada 10.000 hingga 12.000 tahun yang lalu. Hingga saat ini kucing yang telah didomestifikasi oleh manusia, keberadaannya berubah menjadi teman dan pendamping. Kucing domestik dapat ditemui di seluruh tempat di permukaan bumi ini namun untuk tempat umum seperti Masjid Salman ITB, keberadaannya dapat merusak keseimbangan ekosistem karena meningkatnya jumlah populasi kucing. Kehadiran kucing-kucing di Indonesia dapat ditemukan dengan mudah dan peningkatan populasi kucing berdampak pada lingkungan Masjid Salman ITB seperti polusi udara, terganggunya aktivitas manusia, dan lingkungan yang menjadi kotor. Hal tersebut terjadi karena banyaknya kucing yang ditelantarkan oleh manusia di lokasi tersebut secara terus menerus. Kasus penelantaran kucing di Masjid Salman ITB menjadi masalah serius dalam penanganan populasi kucing karena akan mencapai overpopulasi jika tidak diselesaikan. Titik permasalahan ini terletak pada masalah sosial akan ketidaktahuan tentang prinsip kesejahteraan kucing. Sehingga dibutuhkannya sebuah wawasan dan penyadaran agar hubungan manusia dengan kucing tetap terjaga dalam keseimbangan ekosistem. Berangkat dari gagasan tersebut, seni grafis menjadi sebuah medium artistik seniman dan solusi untuk merepresentasikan isu sosial. Melalui pendekatan seni sebagai representasi dapat menampilkan suatu gagasan yang memiliki makna di baliknya. Hal tersebut didepiksi dengan visualisasi kasus penelantaran kucing di Masjid Salman ITB dan karya tugas akhir ini menjadi peluang dalam mengangkat isu penelantaran kucing sehingga peluang yang diberikan dapat mengedepankan prinsip kesejahteraan kucing dalam disiplin ilmu seni rupa. Karya seni dapat menjadi sebuah medium yang dapat dimaknai tentang kandungan di dalamnya.'
    },
    12318010 :{
      title: 'Penerapan metode dekonvolusi Euler dan pemodelan sistem panas bumi menggunakan data gravitasi di daerah Pariangan, Sumatera Barat',
      nim: '12318010',
      prodi: 'Teknik Geofisika',
      image: ta12318010.src,
      desc: 'Indonesia memiliki potensi sumber daya panas bumi yang tinggi, tetapi belum dimanfaatkan seluruhnya, sehingga perlu dilakukan penelitian di daerah berpotensi panas bumi. Salah satunya adalah daerah panas bumi Pariangan di Kabupaten Tanah Datar, Provinsi Sumatera Barat yang merupakan objek penelitian ini. Untuk mengidentifikasi struktur dan model geologi bawah permukaan daerah panas bumi Pariangan, digunakan data topografi dan gravitasi hasil penelitian oleh PSDG pada tahun 2014 serta data pendukung lainnya seperti data geologi, geokimia, dan geofisika. Pada penelitian ini dilakukan perhitungan anomali Bouguer lengkap yang dibuat menjadi peta anomali Bouguer lengkap, selanjutnya dibuat peta anomali regional dan residual menggunakan filter moving average lebar jendela 7 dan trend surface analysis polinomial orde 3. Lokasi dan kedalaman struktur geologi Pariangan diestimasi menggunakan metode dekonvolusi Euler. Berdasarkan peta anomali residual, dapat diidentifikasi pola anomali berarah barat laut–tenggara yang merepresentasikan sesar-sesar. Berdasarkan solusi dekonvolusi Euler, dapat diidentifikasi struktur geologi sesar- sesar yang dominan berada di kedalaman <900 m. Model bawah permukaan Pariangan terdiri dari batuan andesit, sisipan serpentin dalam sesar, dan batu sabak sebagai batuan dasar. Model konseptual sistem panas bumi Pariangan terdiri dari sumber panas dari aktivitas vulkanik Gunung Marapi, reservoir yang diduga sebagai batuan andesit tua, batuan penudung yang diduga sebagai batuan andesit muda yang mengalami alterasi argilik, daerah recharge di sekitar puncak Gunung Marapi, dan daerah discharge di kaki Gunung Marapi berupa Air Panas Pariangan akibat upflow dan Air Hangat Sopan Didih akibat outflow.  '
    },
    15817014 :{
      title: 'Perencanaan Pengendalian Banjir di Kecamatan Tembilahan Hulu, Kabupaten Indragiri Hilir, Provinsi Riau',
      nim: '15817014',
      prodi: 'Teknik dan Pengelolaan Sumber Daya Air',
      image: ta15817014.src,
      desc: 'Kecamatan Tembilahan Hulu merupakan daerah dengan banyak parit yang berlokasi di Kabupaten Indragiri Hilir, Provinsi Riau. Di daerah ini mengalir sungai yang merupakan bagian hilir Sungai Indragiri yang menjadi salah satu penyebab utama bencana banjir yang terjadi akibat pengaruh pasang surut air laut. Bencana ini menyebabkan kerugian baik dari segi sosial dan ekonomi. Penelitian ini dimaksudkan untuk merencanakan sistem pengendalian banjir yang paling sesuai untuk diimplementasikan di Sungai Indragiri dari penanganan sungai beserta parit, dalam rangka menahan air pasang untuk masuk ke parit supaya tidak menyebabkan banjir. Struktur yang direncanakan adalah tanggul artau sheetpile di ruas kiri Sungai Indragiri dan pintu air di muara parit. Pemodelan hidraulika dilakukan dengan menggunakan perangkat lunak HEC-HMS dan HEC-RAS. Fitur yang digunakan dalam pemodelan menggunakan HEC-RAS adalah 1D (satu dimensi) dan 2D (dua dimensi yang meninjau perbandingan antara tinggi muka air banjir dengan elevasi tepi sungai. Berdasarkan hasil pemodelan, didapatkan lokasi ruas sungai yang melimpas dan perencanaan tanggul/sheetpile yang disesuaikan berdasarkan kondisi ruang sempadan di lapangan.'
    },
    11618034 :{
      title: 'Identifikasi Gelatin sapi dan Gelatin Babi Menggunakan Spektroskopi Attenuated Total Reflectance-Fourier Transform Infrared (ATR-FTIR)',
      nim: '11618034',
      prodi: 'Farmasi Klinik dan Komunitas',
      image: '',
      desc: 'Gelatin merupakan senyawa protein yang berasal dari proses ekstraksi tulang atau kulit hewan, seperti sapi, babi, ikan atau unggas. Gelatin banyak digunakan dalam sektor industri, baik di bidang makanan maupun obat-obatan. Banyaknya manfaat yang didapatkan dari gelatin maka semakin meningkatkan minat masyarakat untuk menggunakannya. Namun, semakin tinggi juga kekhawatiran terkait jenis hewan asalnya, khususnya babi yang tidak halal bagi umat muslim. Dengan demikian, penelitian ini bertujuan untuk mengidentifikasi gelatin babi dan sapi dalam dalam sampel bahan baku gelatin dan cangkang kapsul yang beredar dipasaran. Identifikasi dilakukan dengan menggunakan spektroskopi ATR-FTIR pada rentang bilangan gelombang 4000-600 cm-1  , pada rentang bilangan gelombang 1700- 1000 cm-1 menggunakan metode principle component analysis(PCA) (ATR-FTIR/PCA) dan spektroskopi derivatif (ATR-FTIR/derivatif). Spektrum IR yang dihasilkan dibandingkan terhadap spektrum IR baku pembanding gelatin sapi dan gelatin babi. Analisis gelatin sapi dan babi dalam bahan baku gelatin menggunakan PCA menghasilkan grafik score plot yang menunjukkan area kecenderungan berkelompok yang berbeda. Analisis menggunakan spektroskopi ATR-FTIR derivatif menghasilkan pola gradien yang berbeda pada bilangan gelombang zero-crossing: 1405,85 cm-1  , 1410,11 cm-1 , 1134,74  cm-1 dan 1143,29 cm-1  . Hasil analisis sampel bahan baku gelatin menunjukkan jenis gelatin sapi. Dengan demikian, metode ATR-FTIR/PCA dan ATR-FTIR/derivatif dapat digunakan untuk identifikasi gelatin sapi dan babi dalam sampel bahan baku.  '
    },
    13618115 :{
      title: 'DEVELOPMENT OF AN RTM FILLING STRATEGY FOR AEROSPACE PARTS USING ANSYS FLUENT',
      nim: '13618115',
      prodi: 'Teknik Dirgantara',
      image: '',
      desc: 'Resin Transfer Moulding (RTM) adalah metode untuk memproduksi komponen komposit dirgantara. Pada tahap pengembangan, simulasi proses pengisian RTM penting dilakukan untuk meminimalkan trial and error dalam produksi. Simulasi dapat dilakukan untuk mengetahui pengaruh posisi inlet dan outlet, tekanan injeksi, serta permeabilitas terhadap pola pengisian selama proses RTM. Dalam pekerjaan ini, simulasi pengisian dilakukan untuk menyelidiki berbagai skenario pengisian pada edge member pintu pesawat, dengan memvariasikan beberapa parameter. Posisi dan tekanan inlet divariasikan untuk mengetahui tekanan injeksi yang paling efektif untuk bagian tepi. Permeabilitas pelacakan balapan juga bervariasi untuk menyelidiki berbagai skenario proses pengisian. Divergensi yang terjadi selama simulasi juga dibahas. Ada beberapa hal yang dapat menyebabkan divergensi pada saat simulasi edge member. Simulasi dari variasi tekanan inlet menghasilkan beberapa hasil yang bagus. Namun, tidak satupun dari mereka menghasilkan bagian yang terisi penuh, karena celah udara masih terjadi pada hasil akhir. Variasi pada permeabilitas rounded race tracking juga tidak dapat menghasilkan komponen yang terisi penuh. Sebaliknya, variasi permeabilitas pada rounded race tracking sering menyebabkan divergensi. Solusi muncul ketika permeabilitas dari rounded race tracking dan pinch-off race tracking divariasikan. Menggunakan nilai permeabilitas dari rounded dan pinch-off race tracking dua kali dari permeabilitas preform, dan tekanan injeksi 501325 Pa pada kedua inlet, hasil simulasi menunjukkan komponen dapat terisi penuh. Hasil yang terisi penuh juga dapat ditingkatkan dengan menaikkan tekanan injeksi pada Inlet-1 menjadi 801325 Pa. Komponen yang terisi penuh dihasilkan menggunakan pengaturan tekanan, dengan nilai permeabilitas rounded dan pinch-off race tracking adalah dua kali dan 10 kali permeabilitas preform.'
    },
    13118131 :{
      title: 'PEMODELAN AKTIVITAS OTOT GERAKAN JONGKOK-BERDIRI MENGGUNAKAN OPENSIM',
      nim: '13118131',
      prodi: 'Teknik Mesin',
      image: '',
      desc: 'Kesehatan merupakan sebuah hal yang penting bagi umat manusia dalam keberlangsungan hidup. Kesehatan pun berkaitan dengan tubuh manusia yang terdiri dari banyak bagian yang perlu dijaga salah satunya otot. Kesehatan otot dapat dinilai dari hasil simulasi gaya otot dari perangkat lunak OpenSIM. OpenSIM adalah platform open-source yang digunakan pada model, simulasi, dan analisis sistem neuromusculoskeletal. Untuk memvalidasi hasil simulasi gaya otot dari perangkat lunak OpenSIM, dilakukan pengambilan data aktivitas otot menggunakan surface electromyography. Langkah penelitian dimulai dengan mengkaji studi pustaka dan memilih subjek penelitian. Setelah itu, dilakukan pengambilan data dengan menggunakan surface EMG dan optical motion capture dan forceplate dari gerakan jongkok-berdiri OpenSIM. Data hasil dari optical motion capture dan forceplate akan digunakan sebagai input untuk software OpenSIM. Keluaran dari OpenSIM adalah grafik gaya otot yang bekerja dan akan dibandingkan dengan hasil pembacaan sensor surface electromyography. Kedua grafik tersebut akan dibandingkan dan dianalisis. Berdasarkan hasil analisis, grafik gaya otot yang bekerja keluaran software OpenSIM sudah menunjukkan tren yang serupa dengan grafik aktivitas otot yang dihasilkan dari pembacaan sensor surface electromyography. Oleh karena itu, grafik gaya otot yang bekerja keluaran software OpenSIM sudah tervalidasi. Adapun beberapa saran untuk menunjang penelitian berikutnya adalah, merakit perangkat sensor nirkabel, menggunakan perekat yang kuat, dan mempelajari lebih dalam tentang OpenSIM.'
    },
    12318031 :{
      title: 'PENERAPAN METODE UPWARD CONTINUATION PADA PERHITUNGAN VERTICAL DERIVATIVE UNTUK MENGIDENTIFIKASI BATAS STRUKTUR MENGGUNAKAN DATA GRAVITASI',
      nim: '12318031',
      prodi: 'Teknik Geofisika',
      image: ta12318031.src,
      desc: 'Teknik vertical derivative dapat digunakan untuk meningkatkan persepsi sumber anomali yang berada pada kedalaman dangkal dan menjelaskan batas-batasnya. Vertical derivative dapat dihitung melalui dua acara, yaitu dengan memanfaatkan persamaan Laplace apabila hanya memiliki peta CBA saja, dan menurunkannya secara langsung apabila memiliki data gravitasi 3-D. Untuk mendapatkan data gravitasi 3-D tersebut kita dapat melakukannya dengan mengukur respon gravitasinya secara langsung pada ketinggian yang berbeda di stasiun yang sama atau dengan menggunakan metode upward continuation dari data CBA. Pengukuran data gravitasi 3-D secara langsung membutuhkan waktu dan biaya yang jauh lebih mahal dibandingkan dengan menggunakan metode upward continuation. Pada penelitian ini kami membandingkan hasil vertical derivative dari kedua jenis data 3-D tersebut. Analisis dilakukan pada beberapa model sintetik yang memiliki variasi posisi horizontal, kedalaman, dan kontras densitas. Hasil yang diperoleh memperlihatkan bahwa dari data 3-D upward continuation didapatkan peta vertical derivative yang hampir setara dengan data 3-D pengukuran langsung. Oleh karena itu metode upward continuation dapat digunakan sebagai alternatif yang efektif. Namun dalam pengimplementasian teknik ini, perlu diperhatikan spasi data pengukuran, dimana semakin besar spasi datanya, maka semakin tinggi nilai error dalam mengidentifikasi keberadaan body anomali. Hal ini berdasarkan pada beberapa model sintetik yang menunjukkan bahwa peningkatan spasi data sebesar 4 kali lipat memberikan peningkatan error sebesar 67% dari sebelumnya. Error tersebut dihitung berdasarkan jumlah body anomaliyang teridentifikasi terhadap jumlah body anomali yang semestinya. Penelitian yang kami lakukan juga memperoleh hasil bahwa teknik vertical derivative dari data upward continuation dapat mengatasi tambahan noise pada rentang 0-0.02 mGal dengan cukup baik. Meskipun penambahan noise pada data tersebut mengakibatkan peningkatan error sebesar 30%, namun batas-batas dari sumber anomali masih dapat terlihat dengan baik.'
    },
    10518099 :{
      title: 'Adsorpsi Metilen Biru Menggunakan Komposit Magnetit-Alginat Terikat Silang Asam Borat (MAB)',
      nim: '10518099',
      prodi: 'Kimia',
      image: ta10518099.src,
      desc: 'Metilen biru merupakan zat warna kationik yang banyak dimanfaatkan sebagai bahan pewarna dalam industri tekstil. Metilen biru tidak mudah terdegradasi di alam karena merupakan zat warna yang cukup stabil. Kontaminasi limbah metilen biru dapat menjadi penyebab pencemaran air dan masalah kesehatan. Salah satu metode yang dapat digunakan untuk menghilangkan metilen biru adalah adsorpsi. Metode adsorpsi memiliki beberapa keunggulan seperti ramah lingkungan, biaya relatif rendah, pengoperasian sederhana dan efisien, serta adsorben yang dapat digunakan kembali. Alginat merupakan biosorben yang dapat digunakan sebagai alternatif untuk menghilangkan limbah zat warna, namun penggunaannya kurang efektif karena pemisahan adsorben setelah proses adsorpsi sulit untuk dilakukan, sehingga diperlukan material pendukung agar dapat mempermudah proses pemisahan adorben. Pada penelitian ini, komposit Magnetit-Alginat dengan pengikat silang asam borat (MAB) telah berhasil disintesis dan dikarakterisasi menggunakan FTIR, XRD, SEM-EDS, dan PSA. Adsorpsi metilen biru menggunakan 0,05 gram MAB mencapai kondisi optimum pada pH 4 dan waktu kontak 4 jam. Adsorpsi metilen biru oleh MAB mengikuti model kinetika adsorpsi orde dua semu dan model isoterm Langmuir dengan kapasitas adsorpsi maksimum 261,19 mg/g. Parameter termodinamika menghasilkan nilai ΔH = 7,45 kJ/mol dan ΔS = 0,117 kJ/mol.K yang menunjukkan reaksi bersifat endoterm dan ketidakteraturan sistem meningkat serta nilai ΔG negatif yang menunjukkan reaksi berlangsung spontan.'
    },
    13718048 :{
      title: 'Analisis Sifat Mekanik dan Fisik Blending High Density Polyethylene (HDPE)/Getah Damar Sebagai Matriks Komposit Serat Rami',
      nim: '13718048',
      prodi: 'Teknik Material',
      image: '',
      desc: 'Penggunaan serat alam pada material komposit menjadi alternatif dari serat sintetis yang memiliki kelemahan pada masalah lingkungan dan bahaya kesehatan pada manusia. Akan tetapi, serat alam yang digabungkan dengan matriks polyolefin seperti HDPE memiliki kompatibilitas yang rendah karena perbedaan polaritas. Hal ini menghasilkan komposit dengan kualitas antarmuka serat-matriks yang buruk dan menyebabkan sifat mekanik tidak optimum. Penelitian ini bertujuan untuk mempelajari pengaruh penambahan getah damar sebagai compatibilizer agent pada matriks HDPE terhadap sifat mekanik dan fisik komposit serat rami. Getah damar ditambahkan ke dalam material HDPE melalui proses blending dengan ekstrusi untuk digunakan sebagai matriks komposit. Penambahan getah damar dalam berbagai konsentrasi pada material HDPE dievaluasi densitasnya menurut ASTM D792, kekuatan tarik menurut ASTM D882, dan melt flow rate menurut ASTM D1238. Selain itu, kekuatan geser antarmuka antara matriks HDPE/getah damar dan serat rami dianalisis menggunakan uji single fiber pull out. Kekuatan tarik komposit serat rami/HDPE diuji berdasarkan ASTM D3039 dan densitasnya berdasarkan ASTM D792. Hasil penelitian menunjukkan bahwa penambahan getah damar pada HDPE meningkatkan densitas dan nilai melt flow rate matriks polimer. Di sisi lain, hal itu menurunkan kekuatan tarik matriks polimer. Penambahan resin damar berhasil meningkatkan kekuatan geser antarmuka komposit termoplastik. Pada komposit serat rami, penambahan getah damar mampu meningkatkan kekuatan tarik dan densitas komposit. '
    },
    17018014 :{
      title: 'HARIMAU SEBAGAI SIMBOLISASI PERSONIFIKASI DIRI',
      nim: '17018014',
      prodi: 'Seni Rupa',
      image: '',
      desc: 'Representasi sosok harimau pada banyak karya seni seringkali digambarkan secara simbolik melalui berbagai bentuk, karakter, dan komposisi yang menyatu, bertahan, serta menghadapi tantangan perubahan lingkungan secara alami. Penulis tertarik mengamati, menggali, dan memahami bahwa konfigurasi figure harimau dapat mewakili pengalaman batin manusia secara personal. Manusia memiliki dorongan dari dalam untuk melawan jiwa hewaniah, artinya memahami ada konflik batin yang beriringan dengan sisi hewaniah yang tumbuh dan tak dapat dihindari dalam diri penulis ketika bersosialisasi di tengah masyarakat. Visualisasi Gagasan ini diwujudkan melalui metode simbolisme menggunakan teknik cat air di atas kertas sebagai salah satu pilihan estetik sebagai karya drawing yang mewakili kesadaran penulis. Eksplorasi drawing simbolik melalui konfigurasi bentuk tubuh harimau dengan objek; serabut, ranting, dan kupu-kupu dapat mengasosiasikan proses adaptasi terhadap konflik diri di dalam ambiguitas ruang-waktu, menunggu diri dan menghadapi diri sendiri. Proyek Tugas akhir ini menghasilkan 5 karya drawing dengan ukuran, format, dan variasi komposisi objek tubuh harimau di dalam satu kesatuan tema. Melalui karya ini, penulis mendapatkan pengalaman personal untuk memahami diri sendiri menjadi lebih baik. '
    },
    10318003 :{
      title: 'STUDI SCALING RELATIONSHIP MENGGUNAKAN MODEL BULK MOTION COMPTONIZATION SEBAGAI METODE PENENTUAN MASSA LUBANG HITAM SUPER MASIF DAN PENERAPANNYA PADA BLAZAR 3C 273',
      nim: '10318003',
      prodi: 'Astronomi',
      image: '',
      desc: 'Eksplorasi Active Galactic Nucleus (AGN) pada pengamatan multi-panjang gelombang menunjukkan adanya mekanisme pembangkitan energi khusus yang memungkinkan dihasilkannya energi yang sangat besar pada daerah berdimensi kecil, yaitu mekanisme piringan akresi pada supermassive black hole (SMBH). Kompleksitas lingkungan AGN dan orientasi pengamat menyebabkan karakteristik AGN yang teramati sangat beragam, sehingga kajian fisis yang lebih detail sangat diperlukan, yang salah satunya bergantung pada massa lubang hitam. Penentuan massa lubang hitam pada AGN dapat dilakukan dengan mempelajari efek gravitasi lubang hitam pada materi di sekitarnya dengan metode reverberation mapping. Akan tetapi, kompleksitas lingkungan AGN membatasi aplikasi metode ini, sehingga berbagai metode penentuan massa lubang hitam pada AGN terus dikembangkan. Salah satunya adalah scaling relationship yang menghubungkan parameter-parameter pengamatan AGN untuk memperoleh nilai massa lubang hitam. Kajian mengenai scaling relationship sebagai metode penentuan massa lubang hitam banyak menggunakan model Bulk Motion Comptonization (BMC), model yang merepresentasikan radiasi yang dihasilkan dari interaksi piringan akresi dan korona pada AGN. Pada penelitian Tugas Akhir ini, metode penentuan massa scaling relationship dibahas dan dipergunakan untuk menentukan massa lubang hitam pada salah satu blazar yaitu 3C 273 dengan memanfaatkan data pengamatan sinar-X dari misi NuSTAR. Terdapat tujuh data ID pengamatan objek 3C 273 yang diolah dan dianalisis untuk memperoleh parameter scaling relationship, yaitu indeks foton Γ dan nilai normalisasi BMC yang diperoleh dari analisis spektrum menggunakan modul xspec pada perangkat lunak HEAsoft. Hasil yang diperoleh menunjukkan nilai massa lubang hitam 3C 273 memiliki rerata sebesar 8,0714 × 109M⨀, dengan selang nilai massa minimum dan maksimum yang mencakup nilai massa yang diperoleh melalui reverberation mapping. '
    },
    17018009 :{
      title: 'Interpretasi Sejarah Kolonialisme Indonesia Dalam Alegori Visual',
      nim: '17018009',
      prodi: 'Seni rupa',
      image: ta17018009.src,
      desc: 'Sejarah merupakan rekaman masa lalu yang tidak terlepaskan dalam riwayat kehidupan. Secara teori, kajian akademik terhadap sejarah harus selalu berbasis atas fakta, terlepas akan bias atau kecenderungan yang diproyeksikan oleh pengkaji. Meskipun begitu, akan selalu terdapat celah di mana sejarah akan menemui tafsir yang bersifat ambigu atau subjektif, bergantung pada latar belakang masing-masing individu pengkaji, kesimpulan yang didapat tentu akan bervariasi. Lantas bagaimana dengan peran seniman dalam merespon persoalan tersebut? Dalam hal ini, sesungguhnya seniman memiliki keistimewaan untuk tidak terikat akan tanggung jawab dalam menyampaikan fakta yang sebenar-benarnya menyangkut sejarah. Karya-karya seni seperti musik, literatur, seni rupa, dan sebagainya merupakan medium-medium yang dapat digunakan untuk menyampaikan kebebasan interpretas sejarah dari seniman tersebut. Seniman dapat menggunakan bias interpretasi berbasis identitas budaya, latar belakang, atau ideologi yang dapat menggiring narasi sejarah dalam karya ciptaannya menjadi sejalur dengan intensi apa yang ingin disampaikan atau diekspresikan. Sebagai perupa dengan ketertarikan terhadap sejarah kolonial, penulis ingin menggunakan kesempatan dalam tugas akhir ini untuk menciptakan interpretasi pribadi penulis terkait topik sejarah kolonialisme Indonesiea menggunakan bahasa visual. Oleh karena itu, rangkaian karya tugas akhir ini dibuat sebagai wahana untuk memberikan kesempatan demikian pada penulis. '
    },
    15318061 :{
      title: 'Pengelolaan Sampah Tekstil Pasca Konsumsi serta Dampaknya terhadap Lingkungan dan Ekonomi di Kota Bandung',
      nim: '15318061',
      prodi: 'Teknik Lingkungan',
      image: '',
      desc: 'Industri tekstil memiliki peran strategis mulai dari penyerapan tenaga kerja sampai nilai ekspor yang tinggi, dengan Kota Bandung sebagai salah satu ikonnya. Komoditas ekspor di kota Bandung selama 2018-2021 mencapai $82,3 juta, yang mana berdampak buruk juga ke lingkungan. Dari total sampah tekstil, 88% berakhir di TPA dan insinerator, serta diproyeksikan meningkat 68% pada tahun 2030 jika tetap mempertahankan business as usual. Timbulan sampah tekstil pasca konsumsi di Kota Bandung berdasarkan penelitian ini mencapai 19,87 Gg/tahun dan diprediksi mencapai 21,75 Gg/tahun pada tahun 2030. Pengelolaannya saat ini bertumpu pada pengelolaan individual dalam ranah reuse & recycle (69,27%) dan sisanya (30,73%) dibuang ke TPA, sungai, serta dibakar. Untuk mencapai target NDC Indonesia 2030, Kota Bandung bisa menerapkan solusi, yakni mencegah kegiatan membakar dan membuang ke sungai, meningkatkan pemilahan sampai 20% untuk diolah menjadi produk tekstil baru, dan penambahan insinerator dengan target mengolah 12% sampah dari Kota Bandung. Alternatif tersebut juga berdampak pada penghematan 144,5 miliar liter air, 9,256 ribu ton bahan kimia, 314,21 ton pewarna dan 355,6 m2  lahan TPA per tahunnya. Selain itu, peningkatan reduce dan reuse, serta pemakaian bahan baku ramah lingkungan dari sampah tekstil pasca konsumsi mampu menghemat 1,273 triliun rupiah per tahun dari biaya produksi tekstil. '
    },
    15018020 :{
      title: 'Perencanaan Bagian Perairan Pelabuhan Ikan Kampung Bahari Tambak Lorok',
      nim: '15018020',
      prodi: 'Teknik Sipil',
      image: '',
      desc: 'Pada saat ini, kondisi Pelabuhan Ikan Tambak Lorok ini masih sangat sederhana dan belum dilengkapi fasilitas pelabuhan seperti pemecah gelombang. Ketenangan kondisi perairan di pelabuhan menjadi faktor yang sangat penting untuk kapal nelayan melakukan aktivitas tambat dan bongkar muat hasil tangkapan ikan. Dikarenakan belum dilengkapi oleh struktur pemecah gelombang maka akibatnya tinggi gelombang di dalam pelabuhan belum sesuai syarat yang telah ditentukan yang dapat berpotensi menganggu aktivitas kapal di sekitar pelabuhan. Kemudian akan direncanakan juga alur pelayaran dan kolam pelabuhan untuk mengakomodasi pergerakan kapal sehingga dapat beroperasi dengan baik dan aman. Kriteria desain yang digunakan meliputi data Batimetri lokasi studi, data hidro-oseanografi, data kapal, dan analisa kebutuhan fasilitas perairan di lokasi studi. Perencanaan struktur pemecah gelombang akan digunakan perangkat lunak Delft3D untuk permodelan gelombang pada layout eksisting dan rencana. Perencanaan alur pelayaran akan direncanakan lebar, kedalaman , dan trase alur pelayaran. Perencanaan kolam pelabuhan akan direncanakan jari-jari kolam putar dan kedalaman kolam pelabuhan.  Berdasarkan hasil perencanaan, pemecah gelombang di sisi Utara dan Barat Laut dari Pelabuhan Tambak Lorok efektif untuk melindungi Pelabuhan Tambak Lorok. Pemecah gelombang direncanakan menggunakan tipe bangunan sisi miring (rubblemound) dengan kemiringan struktur 1:2 untuk sisi yang menghadap ke pelabuhan dan laut. Material penyusun yang digunakan berupa tetrapod dan batu alam. Struktur pemecah gelombang pada sisi Barat Laut memiliki panjang 650 m, lebar puncak 2 m, tinggi struktur 5,66 m, dan elevasi puncak +2,66 m. Struktur pemecah gelombang pada sisi Utara memiliki panjang 300 m, lebar puncah 3 m, tinggi struktur 5,75 m, dan elevasi puncak +2,75 m. Alur pelayaran direncanakan memiliki dua lajur dengan lebar 30 m dan kedalaman 3 m. Kolam pelabuhan direncanakan memiliki kedalaman 3 m dan dilengkapi kolam putar dengan jari-jari 20,25 m. '
    },
    12318063 :{
      title: 'Pembuatan Program Perhitungan Anomali Derivatif serta Pemisahan Anomali Data Gravitasi dengan Teknik Moving Average dan Trend Surface Analysis ',
      nim: '12318063',
      prodi: 'Teknik Geofisika',
      image: '',
      desc: 'Terdapat banyak teknik pengolahan data anomali gravitasi yang dapat digunakan untuk mengidentifikasi kondisi struktur geologi bawah permukaan berdasarkan parameter kontras densitas batuan. Pada penelitian ini, dilakukan pembuatan program perhitungan anomali derivatif dengan menggunakan teknik First Horizontal Derivative (FHD) dan Second Vertical Derivative (SVD) 2D, pembuatan program pemisahan anomali regional dan residual dengan menggunakan teknik Moving Average (MA) dan Trend Surface Analysis (TSA), serta program visualisasi untuk menampilkan data hasil perhitungan dalam bentuk peta anomali agar didapatkan pemahaman mengenai teknik pengolahan data dengan metode gravitasi. Program yang dibuat menggunakan bahasa pemrograman Matlab R2021 a. Sebelum diterapkan pada daerah penelitian, program yang dibuat diuji dengan melakukan perhitungan terhadap beberapa model sintetik yang hasilnya dibandingkan dengan perangkat lunak komersial. Hasil pengujian tersebut menunjukkan adanya kesesuaian pola sebaran anomali serta nilai root mean square error <0,01 µGal untuk teknik pemisahan anomali, <0,01 µGal/m untuk teknik FHD, dan <0,01 µGal/m- untuk teknik SVD. Selanjutnya, dilakukan penerapan program yang dibuat pada daerah panas bumi Malingping. Hasil perhitungan anomali regional menggunakan TSA berkisar 100 mGal hingga 135 mGal, sedangkan nilai anomali regional menggunakan MA berkisar 100 mGal hingga 125 mGal. Untuk nilai anomali residual hasil TSA memiliki rentang nilai dari - 6 mGal hingga 6 mGal, sedangkan hasil MA berkisar -8 mGal hingga 8 mGal. Hasil perhitungan derivatif menunjukkan nilai anomali FHD adalah 1 mGal/m hingga 8 mGal/m dan anomali SVD adalah -2 mGal/m2 hingga 1,5 mGal/m2. Berdasarkan analisis peta sebaran anomali residual TSA serta hasil perhitungan anomali FHD dan SVD yang didukung informasi geologi dapat diidentifikasi beberapa struktur sesar dengan arah barat laut-tenggara dan arah barat daya-timur laut. '
    },
    15018046 :{
      title: 'KAJIAN MENGENAI POTENSI PENGGUNAAN BIM DENGAN DRONES DAN PHOTOGRAMMETRY DALAM MONITORING PROJECT KONSTRUKSI DI INDONESIA BERDASARKAN SUDUT PANDANG PRAKTISI',
      nim: '15018046',
      prodi: 'Teknik Sipil',
      image: '',
      desc: 'Perkembangan dalam dunia konstruksi sangat dipengaruhi dengan berkembangnya teknologi internet yang dapat membantu dan mempermudah berbagai macam pekerjaan yang tak terbatas pada jarak dan waktu, termasuk dalam membantu proses monitoring pembangunan berlangsung. Penerapan dari berbagai aplikasi software konstruksi telah menunjukkan dampak yang signifikan dalam membantu proses monitoring konstruksi di Indonesia. Adapun proses monitoring progress konstruksi memiliki tujuan akhir agar infrastruktur yang sedang dalam tahap konstruksi sesuai dengan perencanaan yang telah dibuat untuk memenuhi aspek waktu, biaya, dan mutu. Demi mencapai hal tersebut, diperlukan suatu teknologi yang dapat memantau pekerjaan lapangan sehingga semakin efektif dan efisien, secara khusus pada praktisi pihak kontraktor dan konsultan yang terlibat dalam monitoring progress di lapangan. Salah satu penerapan teknologi dalam monitoring progress di lapangan, yakni BIM dengan drone dan photogrammetry. Penelitian ini akan berfokus pada potensi dari penerapan BIM dengan drone dan photogrammetry dalam monitoring progress konstruksi di Indonesia melalui proses surveying kepada 2 kelompok responden, yakni kontraktor dan konsultan. Hasil penelitian yang didapat ialah penerapan BIM dengan drone dan photogrammetry dalam monitoring progress konstruksi di Indonesia menjadi alternatif terakhir dari teknologi lainnya namun memiliki potensi besar serta respon positif agar bisa segera diterapkan di masa depan. '
    },
  }
  const id = router.query.id as string
  const idNumber = parseInt(id as string)
  const selectedData = data[idNumber]

  const [isImgHidden] = useState(selectedData?.image == '' ? 'hidden' : '')
  
  return (
    <div className="relative h-auto overflow-hidden">
      <div className="sm:ml-16 mt-10 ml-[20px]">
        <YellowButton1 />
      </div>
      <div className="sm:ml-60 mt-7 w-8 h-5 ml-[200px]">
        <Image src={ularkuning} alt="image" />
      </div>
      <div className="font-[Excalibur-Nouveau] text-center text-white text-5xl mt-20 mb-1 tracking-widest" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>
        {selectedData?.title}
      </div>

      <div className="font-[Excalibur-Nouveau] text-center text-white text-2xl tracking-widest mb-[300px] sm:mb-[500px]" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>
        oleh {selectedData?.nim} - {selectedData?.prodi}
        <div className='h-[50px]'></div>
        <div className={`${isImgHidden} mx-[50px]`}>
          <img src={selectedData?.image} style={{ margin: '0 auto', filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}/>
        </div>
        <div
          className="flex font-[Market-Deco] text-white mt-20
            xl:mx-[300px] lg:mx-[150px] md:mx-[50px] mx-[20px] xl:text-base lg:text-sm md:text-xs
           text-base overflow-y-auto text-justify p-5" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>
          {selectedData?.desc}
        </div>
      </div>
      <div className=" absolute left-0 bottom-0 w-1/2 mb-[10px]">
        <Image src={Birukiribawah} />
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 mb-[10px]">
        <Image src={birukananbawah} />
      </div>
    </div>
  )
}

export default ViewMore2
