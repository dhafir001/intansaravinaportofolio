/* ==========================================================================
   INTAN SARAVINA, S.Kom. — APPLICATION CONTROLLER (app.js)
   Modules:
     1. Trilingual Content Matrix (ID / EN / 中文)
     2. Lenis Smooth Inertial Scroll Engine
     3. 5-Act Morphing Celestial Astrolabe & Liquid-Silk Parametric Ribbon 3D Engine
        - Act I (Hero): Haute Horlogerie Gyrotourbillon & Flowing Silk Core
        - Act II (Profile): Blooming Architectural Lotus Orrery
        - Act III (Research): Coaxial Optical Vision Aperture (Camera Iris Alignment)
        - Act IV (Experience & Skills): Harmonic Fibonacci Gyroscope
        - Act V (Contact): Grand Horizon Halo Crown
     4. Feather-Smooth GSAP Reveal Animations
   ========================================================================== */

(function () {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. TRILINGUAL CONTENT MATRIX (ID / EN / 中文)
  // --------------------------------------------------------------------------
  const TRILINGUAL_MATRIX = {
    id: {
      nav_about: "Profil",
      nav_projects: "Penelitian",
      nav_experience: "Pengalaman",
      nav_capabilities: "Keahlian",
      nav_contact: "Kontak",

      location_label: "Aceh, Indonesia • GMT+7",
      hero_status: "Lulusan Terbaik (IPK 3.60 Cum Laude) • Terbuka untuk Peluang Karir",
      hero_edition: "Portofolio Resmi & Karya Ilmiah",
      hero_kicker: "SPESIALIS COMPUTER VISION & REKAYASA PERANGKAT LUNAK",
      hero_thesis: "Lulusan Sarjana Informatika yang berfokus pada pengembangan Computer Vision terapan dan arsitektur sistem cerdas.",
      cta_primary: "Lihat Penelitian Utama",
      cta_cv: "Ringkasan CV Eksekutif",
      cta_contact: "Hubungi Langsung",

      ledger_1_label: "Gelar Akademik",
      ledger_1_val: "Sarjana Komputer (S.Kom.) • IPK 3.60",
      ledger_2_label: "Fokus Penelitian",
      ledger_2_val: "Deteksi Kendaraan HOG & SVM",
      ledger_3_label: "Kemampuan Bahasa",
      ledger_3_val: "Indonesia • English • 中文",
      ledger_4_label: "Almamater",
      ledger_4_val: "Universitas Samudra (UNSAM)",

      sec1_index: "Bagian Pertama",
      sec1_title: "Latar Belakang Akademik & Praktik Rekayasa",
      sec1_lead: "Pendidikan S1 Informatika di Universitas Samudra (UNSAM), memadukan ekstraksi fitur matematis dengan rekayasa perangkat lunak modern.",
      portrait_role: "Angkatan 2022 – 2026 • Lulusan Cum Laude",
      about_p1: "<strong>Intan Saravina, S.Kom.</strong> meraih gelar Sarjana Komputer dari program studi S1 Informatika (Informatika Multimedia) di <a href='https://unsam.ac.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>Universitas Samudra (UNSAM)</a> dengan predikat <strong>Cum Laude (IPK 3.60 / 4.00)</strong>.",
      about_p2: "Fokus keahliannya terletak pada perancangan sistem Computer Vision yang efisien, akurat, dan tangguh terhadap perubahan pencahayaan di lapangan. Dengan menggabungkan deskriptor gradien spasial (HOG) dan pengklasifikasi Support Vector Machine (SVM), sistem yang dibangun mampu berjalan secara real-time tanpa ketergantungan pada perangkat keras GPU berskala besar.",
      about_p3: "Selain penelitian akademik, Intan memiliki pengalaman praktik kerja langsung di <a href='https://langsa.imigrasi.go.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>Kantor Imigrasi Kelas II TPI Langsa</a> pada tahun 2024, menangani pemantauan sistem antrean layanan digital, pemeliharaan jaringan internal, serta pengolahan data administrasi terstruktur.",

      cred_1_kicker: "PENDIDIKAN TINGGI",
      cred_1_main: "Sarjana Komputer (S.Kom.) — S1 Informatika",
      cred_1_sub: "Universitas Samudra (UNSAM), 2022 – 2026",
      cred_2_kicker: "CAPAIAN AKADEMIK",
      cred_2_main: "IPK 3.60 / 4.00 (Predikat Cum Laude)",
      cred_2_sub: "Konsentrasi Informatika Multimedia & Visi Komputer",
      cred_3_kicker: "BIDANG SPESIALISASI",
      cred_3_main: "Computer Vision & Arsitektur Web",
      cred_3_sub: "Python, OpenCV, SVM, HOG, Pengembangan Web Modern",
      cred_4_kicker: "KOMUNIKASI PROFESIONAL",
      cred_4_main: "Bahasa Indonesia • English • 中文",
      cred_4_sub: "Dokumentasi teknis dan kolaborasi lintas bahasa",

      sec2_index: "Bagian Kedua",
      sec2_title: "Sistem Penghitung & Deteksi Kendaraan Otomatis Multi-Kelas",
      sec2_lead: "Implementasi Computer Vision menggunakan ekstraksi fitur Histogram of Oriented Gradients (HOG) dan klasifikasi Support Vector Machine (SVM).",
      flagship_id: "Karya Penelitian Utama",
      flagship_class: "PYTHON • OPENCV • KLASIFIKASI SVM • PELACAKAN SPASIAL",
      flagship_img_caption: "Visualisasi inferensi deteksi kendaraan multi-lajur beserta vektor lintasan titik pusat (centroid).",
      flagship_zoom_btn: "Perbesar Visualisasi",
      flagship_heading: "Sistem Deteksi & Penghitung Kendaraan Otomatis Berbasis HOG dan SVM",
      flagship_dossier_desc: "Sistem deteksi dan penghitungan kendaraan multi-kelas otomatis yang dirancang menggunakan metode Histogram of Oriented Gradients (HOG) untuk ekstraksi fitur tepi dan bentuk, dipadukan dengan algoritma Support Vector Machine (SVM) untuk menghasilkan akurasi penghitungan real-time yang stabil di berbagai kondisi pencahayaan jalan raya.",
      flagship_modal_btn: "Lihat Spesifikasi Teknis Lengkap",

      bench_1_label: "Dimensi Vektor Fitur",
      bench_1_val: "3.780-D",
      bench_1_sub: "Sel 8×8 piksel • Blok 16×16 • 9 orientasi",
      bench_2_label: "Kecepatan Pemrosesan",
      bench_2_val: "30,4 FPS",
      bench_2_sub: "Rata-rata latensi ~32,8 ms per frame",
      bench_3_label: "Akurasi Klasifikasi",
      bench_3_val: "96,4%",
      bench_3_sub: "Presisi pada 4 kategori kendaraan",
      bench_4_label: "Ketahanan Lapangan",
      bench_4_val: "Multi-Lajur",
      bench_4_sub: "Stabil terhadap bayangan & cahaya senja",

      pipeline_strip_title: "TAHAPAN ALGORITMA PEMROSESAN CITRA (KLIK TAHAP UNTUK DETAIL)",
      stage_tab_1: "Akuisisi & ROI",
      stage_tab_2: "Normalisasi Cahaya",
      stage_tab_3: "Ekstraksi HOG",
      stage_tab_4: "Klasifikasi SVM",
      stage_tab_5: "Pelacakan Centroid",

      sec3_index: "Bagian Ketiga",
      sec3_title: "Pengalaman Kerja Praktik & Riwayat Pendidikan",
      sec3_lead: "Penerapan pemeliharaan infrastruktur TI, pemantauan sistem antrean layanan publik, dan pengelolaan data digital di Kota Langsa.",
      residency_meta: "KERJA PRAKTEK • 2024 • KOTA LANGSA, ACEH",
      residency_heading: "Kantor Imigrasi Kelas II TPI Langsa",
      residency_desc: "Kantor Imigrasi Kelas II TPI Langsa — Staf Magang Sistem & Infrastruktur TI. Bertanggung jawab dalam pemantauan sistem manajemen antrean digital, pemeliharaan jaringan lokal, serta pengolahan data administrasi terstruktur.",
      residency_b1: "Memantau kinerja sistem manajemen antrean layanan keimigrasian secara real-time guna memastikan kelancaran alur pelayanan masyarakat setiap hari.",
      residency_b2: "Melakukan diagnostik jaringan lokal (LAN), perawatan perangkat keras komputer kerja, serta konfigurasi perangkat pendukung di loket layanan.",
      residency_b3: "Mengelola pemrosesan data administrasi digital, verifikasi berkas permohonan, serta otomatisasi laporan berkala menggunakan perangkat lunak perkantoran.",
      residency_inspect_btn: "Lihat Dokumentasi Kerja Praktek",

      chrono_1_year: "2022 – 2026",
      chrono_1_role: "Sarjana Komputer (S.Kom.) — Informatika",
      chrono_1_detail: "Universitas Samudra (UNSAM) — Lulus dengan predikat Cum Laude (IPK 3.60 / 4.00). Penelitian tugas akhir pada sistem penghitung kendaraan berbasis HOG dan SVM.",
      chrono_2_year: "2024",
      chrono_2_role: "Kerja Praktek — Sistem & Infrastruktur TI",
      chrono_2_detail: "Kantor Imigrasi Kelas II TPI Langsa — Pemantauan sistem antrean layanan publik, pemeliharaan jaringan komputer, dan pengelolaan data digital.",
      chrono_3_year: "2022",
      chrono_3_role: "Awal Studi Sarjana Informatika",
      chrono_3_detail: "Memulai pendidikan tinggi di Fakultas Teknik Universitas Samudra dengan fokus pada algoritma, pengolahan citra digital, keamanan siber, dan rekayasa web.",

      sec4_index: "Bagian Keempat",
      sec4_title: "Matriks Kompetensi & Keahlian Teknis",
      sec4_lead: "Rincian kapabilitas teknis yang dikelompokkan berdasarkan bidang Machine Learning & Visi Komputer, Arsitektur Web, Keamanan Sistem, dan Perangkat Lunak Terapan.",
      filter_all: "Semua Bidang",
      filter_ml: "Machine Learning & Visi",
      filter_web: "Arsitektur Web",
      filter_sec: "Keamanan & Jaringan",
      filter_app: "Citra Digital & Terapan",

      th_domain: "Bidang Keahlian",
      th_stack: "Teknologi & Instrumen Utama",
      th_method: "Ruang Lingkup Penerapan",
      th_output: "Implementasi Utama",

      row1_domain: "Machine Learning & Visi",
      row1_method: "Histogram orientasi gradien (HOG), klasifikasi margin maksimum (SVM), deteksi jendela geser multi-skala, Non-Maximum Suppression (NMS), dan pelacakan titik pusat Euclidean.",
      row1_output: "Sistem Penghitung Kendaraan Otomatis (Presisi 96,4%)",

      row2_domain: "Arsitektur Web",
      row2_method: "Struktur dokumen HTML5 semantik, tata letak CSS3 responsif modern, pemrograman JavaScript (ES6+) modular, visualisasi 3D WebGL/Three.js, dan optimasi SEO teknis.",
      row2_output: "Portofolio 3D Tiga Bahasa & GitHub Pages",

      row3_domain: "Keamanan & Jaringan",
      row3_method: "Diagnostik jaringan area lokal (LAN), keamanan akses perangkat kerja, verifikasi integritas data instansi, serta pemeliharaan sistem antrean layanan.",
      row3_output: "Operasional TI Kantor Imigrasi Langsa",

      row4_domain: "Citra Digital & Terapan",
      row4_method: "Pengolahan citra digital (filter spasial, operasi morfologi, ekualisasi histogram), produksi multimedia, dan otomatisasi administrasi perkantoran.",
      row4_output: "Riset Informatika Multimedia UNSAM",

      sec5_index: "Bagian Kelima",
      sec5_title: "Hubungi Intan Saravina",
      sec5_lead: "Terbuka untuk posisi penuh waktu (full-time), kolaborasi riset, maupun proyek pengembangan perangkat lunak di bidang AI, Computer Vision, dan Web Engineering.",
      email_box_label: "ALAMAT EMAIL LANGSUNG",
      btn_copy_email: "Salin Alamat Email",
      btn_open_cv: "Lihat / Cetak CV Lengkap",
      meta_name_lbl: "Nama Lengkap",
      meta_edu_lbl: "Pendidikan",
      meta_edu_val: "S1 Informatika (S.Kom.), Universitas Samudra (IPK 3.60)",
      meta_lang_lbl: "Bahasa",
      meta_lang_val: "Indonesia (Utama), Inggris (Profesional), Mandarin / 中文 (Kerja)",
      meta_status_lbl: "Ketersediaan",
      meta_status_val: "Siap Bekerja Segera • Bersedia Penempatan & Remote",

      footer_copy: "© 2026 Intan Saravina, S.Kom. Dirancang dengan Three.js, Lenis & GSAP untuk GitHub Pages."
    },

    en: {
      nav_about: "About",
      nav_projects: "Research",
      nav_experience: "Experience",
      nav_capabilities: "Capabilities",
      nav_contact: "Contact",

      location_label: "Aceh, Indonesia • GMT+7",
      hero_status: "Honors Graduate (GPA 3.60 Cum Laude) • Available for Engineering Roles",
      hero_edition: "Selected Works & Academic Profile",
      hero_kicker: "COMPUTER VISION ENGINEER & SOFTWARE SPECIALIST",
      hero_thesis: "Computer Science graduate specializing in applied Computer Vision and intelligent system architectures.",
      cta_primary: "Explore Selected Research",
      cta_cv: "Executive CV Summary",
      cta_contact: "Direct Contact",

      ledger_1_label: "Academic Degree",
      ledger_1_val: "B.Comp.Sc (S.Kom.) • GPA 3.60 / 4.00",
      ledger_2_label: "Primary Research",
      ledger_2_val: "HOG & SVM Vehicle Telemetry",
      ledger_3_label: "Languages",
      ledger_3_val: "Indonesian • English • 中文",
      ledger_4_label: "Alma Mater",
      ledger_4_val: "Universitas Samudra (UNSAM)",

      sec1_index: "Section One",
      sec1_title: "Academic Foundation & Engineering Practice",
      sec1_lead: "Educated in Multimedia Informatics at Universitas Samudra (UNSAM), combining mathematical feature extraction with reliable software architecture.",
      portrait_role: "Class of 2022 – 2026 • Honors (Cum Laude)",
      about_p1: "<strong>Intan Saravina, S.Kom.</strong> holds a Bachelor of Computer Science (S1 Informatika — Multimedia Informatics) from <a href='https://unsam.ac.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>Universitas Samudra (UNSAM)</a>, graduating with Honors (Cum Laude, GPA 3.60 / 4.00).",
      about_p2: "Her work focuses on interpretable, low-latency computer vision pipelines built to perform reliably across variable outdoor lighting conditions. By pairing gradient-based spatial descriptors (HOG) with maximum-margin classifiers (SVM), she engineers vision systems that achieve real-time throughput without requiring heavy GPU infrastructure.",
      about_p3: "Alongside her academic research, she completed her 2024 technical internship at <a href='https://langsa.imigrasi.go.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>Kantor Imigrasi Kelas II TPI Langsa</a>, supporting digital queue management telemetry, internal network maintenance, and structured administrative data processing.",

      cred_1_kicker: "DEGREE & INSTITUTION",
      cred_1_main: "B.Comp.Sc (S.Kom.) — S1 Informatika",
      cred_1_sub: "Universitas Samudra (UNSAM), 2022 – 2026",
      cred_2_kicker: "ACADEMIC STANDING",
      cred_2_main: "GPA 3.60 / 4.00 (Cum Laude)",
      cred_2_sub: "Honors Distinction in Multimedia Informatics",
      cred_3_kicker: "CORE SPECIALIZATION",
      cred_3_main: "Computer Vision & Web Architecture",
      cred_3_sub: "Python, OpenCV, SVM, HOG, Modern Web Systems",
      cred_4_kicker: "WORKING LANGUAGES",
      cred_4_main: "Bahasa Indonesia • English • 中文",
      cred_4_sub: "Cross-functional technical documentation",

      sec2_index: "Section Two",
      sec2_title: "Automated Multi-Class Vehicle Detection & Spatial Counting",
      sec2_lead: "Real-time vehicular vision telemetry engineered with Histogram of Oriented Gradients (HOG) and Support Vector Machine (SVM) classification.",
      flagship_id: "Featured Capstone Research",
      flagship_class: "PYTHON • OPENCV • SVM CLASSIFIER • SPATIAL TRACKING",
      flagship_img_caption: "Multi-lane vehicular bounding-box inference and centroid trajectory vectors.",
      flagship_zoom_btn: "Enlarge Figure",
      flagship_heading: "Automated Multi-Class Vehicle Detection & Spatial Counting System",
      flagship_dossier_desc: "Automated Multi-Class Vehicle Detection & Spatial Counting System. Engineered using Histogram of Oriented Gradients (HOG) for gradient edge extraction paired with Support Vector Machine (SVM) classification, achieving stable real-time vehicular telemetry under variable lighting conditions.",
      flagship_modal_btn: "View Full Technical Specification",

      bench_1_label: "Feature Vector Dimension",
      bench_1_val: "3,780-D",
      bench_1_sub: "8×8 px cells • 16×16 blocks • 9 bins",
      bench_2_label: "Processing Frame Rate",
      bench_2_val: "30.4 FPS",
      bench_2_sub: "~32.8 ms mean CPU frame latency",
      bench_3_label: "Classifier Accuracy",
      bench_3_val: "96.4%",
      bench_3_sub: "Precision across 4 vehicle classes",
      bench_4_label: "Field Deployment",
      bench_4_val: "Multi-Lane",
      bench_4_sub: "Resilient to shadows & dusk glare",

      pipeline_strip_title: "ALGORITHMIC PROCESSING STAGES (SELECT STAGE TO INSPECT)",
      stage_tab_1: "Frame & ROI",
      stage_tab_2: "Light Normalization",
      stage_tab_3: "HOG Gradients",
      stage_tab_4: "SVM Classification",
      stage_tab_5: "Centroid Counter",

      sec3_index: "Section Three",
      sec3_title: "Professional Experience & Academic Timeline",
      sec3_lead: "Applied systems administration, network diagnostics, and public-service queue monitoring in Langsa, Aceh.",
      residency_meta: "TECHNICAL INTERNSHIP • 2024 • LANGSA, INDONESIA",
      residency_heading: "Kantor Imigrasi Kelas II TPI Langsa",
      residency_desc: "Kantor Imigrasi Kelas II TPI Langsa — Systems & Infrastructure Intern. Supervised digital queue management telemetry, internal network maintenance, and structured administrative data processing.",
      residency_b1: "Monitored real-time immigration service queue management systems across public service counters to ensure smooth daily citizen throughput.",
      residency_b2: "Executed local area network (LAN) diagnostics, workstation hardware maintenance, and peripheral configuration for officer terminals.",
      residency_b3: "Standardized structured administrative data processing, applicant record verification, and automated reporting workflows.",
      residency_inspect_btn: "View Internship Details",

      chrono_1_year: "2022 – 2026",
      chrono_1_role: "B.Comp.Sc (S.Kom.) in Informatics",
      chrono_1_detail: "Universitas Samudra (UNSAM) — Graduated Cum Laude (GPA 3.60 / 4.00). Capstone research in SVM + HOG vehicular computer vision.",
      chrono_2_year: "2024",
      chrono_2_role: "Systems & Infrastructure Intern",
      chrono_2_detail: "Kantor Imigrasi Kelas II TPI Langsa — Supervised queue telemetry, internal network maintenance, and digital data operations.",
      chrono_3_year: "2022",
      chrono_3_role: "Undergraduate Informatics Studies",
      chrono_3_detail: "Commenced computer science studies at Universitas Samudra focusing on algorithms, digital image processing, cybersecurity, and web architecture.",

      sec4_index: "Section Four",
      sec4_title: "Technical Capabilities & Specifications",
      sec4_lead: "Structured competency matrix across Machine Learning & Vision, Web Architecture, Cyber Security, and Applied Software.",
      filter_all: "All Domains",
      filter_ml: "Machine Learning & Vision",
      filter_web: "Web Architecture",
      filter_sec: "Cyber Security",
      filter_app: "Applied Software",

      th_domain: "Domain",
      th_stack: "Core Technologies & Instruments",
      th_method: "Engineering Scope",
      th_output: "Primary Output",

      row1_domain: "Machine Learning & Vision",
      row1_method: "Gradient orientation histograms, supervised maximum-margin classification, multi-scale sliding window detection, Non-Maximum Suppression (NMS), and Euclidean centroid tracking.",
      row1_output: "Automated Vehicle Counter (96.4% Precision)",

      row2_domain: "Web Architecture",
      row2_method: "Semantic HTML5 architecture, responsive CSS Grid systems, modular ES6+ state management, WebGL/Three.js 3D scenes, and technical SEO schema.",
      row2_output: "Trilingual 3D Portfolio & GitHub Pages",

      row3_domain: "Cyber Security",
      row3_method: "Internal network diagnostics, endpoint access security, institutional data integrity verification, and reliable administrative record workflows.",
      row3_output: "Kantor Imigrasi Langsa IT Operations",

      row4_domain: "Applied Software",
      row4_method: "Digital Image Processing (Citra Digital) spatial filtering, morphological operations, multimedia asset production, and office automation.",
      row4_output: "UNSAM Multimedia Informatics Research",

      sec5_index: "Section Five",
      sec5_title: "Get in Touch",
      sec5_lead: "Available for full-time software and computer vision engineering roles, research collaborations, and technical projects.",
      email_box_label: "DIRECT EMAIL ADDRESS",
      btn_copy_email: "Copy Email Address",
      btn_open_cv: "View / Print Executive CV",
      meta_name_lbl: "Full Name",
      meta_edu_lbl: "Education",
      meta_edu_val: "B.Comp.Sc (S.Kom.), Universitas Samudra (GPA 3.60)",
      meta_lang_lbl: "Languages",
      meta_lang_val: "Indonesian (Native), English (Professional), 中文 (Working)",
      meta_status_lbl: "Availability",
      meta_status_val: "Immediate • Open to Relocation & Remote",

      footer_copy: "© 2026 Intan Saravina, S.Kom. Crafted with Three.js, Lenis & GSAP for GitHub Pages."
    },

    zh: {
      nav_about: "关于",
      nav_projects: "研究与项目",
      nav_experience: "工作经历",
      nav_capabilities: "专业技能",
      nav_contact: "联系方式",

      location_label: "印尼亚齐 (Aceh) • GMT+7",
      hero_status: "优秀毕业生 (GPA 3.60 Cum Laude) • 可接受工程与研发岗位",
      hero_edition: "个人学术与工程作品集",
      hero_kicker: "计算机视觉工程师 & 软件工程专家",
      hero_thesis: "计算机科学学士，专注于应用计算机视觉与智能系统架构研究。",
      cta_primary: "浏览核心研究项目",
      cta_cv: "查阅个人履历摘要",
      cta_contact: "直接邮件联系",

      ledger_1_label: "学位与荣誉",
      ledger_1_val: "计算机科学学士 (S.Kom.) • GPA 3.60",
      ledger_2_label: "核心研究课题",
      ledger_2_val: "HOG 与 SVM 车辆视觉检测",
      ledger_3_label: "语言能力",
      ledger_3_val: "印尼语 • English • 中文",
      ledger_4_label: "毕业院校",
      ledger_4_val: "萨穆德拉大学 (UNSAM)",

      sec1_index: "第一部分",
      sec1_title: "学术背景与工程研发实践",
      sec1_lead: "毕业于萨穆德拉大学（Universitas Samudra, UNSAM）多媒体信息学方向，致力于将数学特征工程转化为高可靠性的应用软件系统。",
      portrait_role: "2022 – 2026 届 • 荣誉学士 (Cum Laude)",
      about_p1: "<strong>Intan Saravina, S.Kom.</strong> 毕业于<a href='https://unsam.ac.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>萨穆德拉大学 (Universitas Samudra / UNSAM)</a> 计算机科学系（S1 Informatika — 多媒体信息学方向），以 <strong>GPA 3.60 / 4.00（Cum Laude 荣誉学位）</strong> 获得计算机科学学士学位。",
      about_p2: "她的工程研究聚焦于高可解释性、低延迟的计算机视觉算法管线。通过将方向梯度直方图（HOG）空间边缘特征与支持向量机（SVM）最大间隔分类器相结合，其视觉系统能够在复杂户外光照与阴影遮挡下保持稳定实时推理，而无需依赖高功耗 GPU 集群。",
      about_p3: "除算法研发外，她于 2024 年在<a href='https://langsa.imigrasi.go.id/' target='_blank' rel='noopener noreferrer' class='editorial-link'>印尼二等移民局（Kantor Imigrasi Kelas II TPI Langsa）</a>完成系统与基础设施实习，负责排队遥测监控、内部网络运维与行政数据自动化处理。",

      cred_1_kicker: "学位与院校",
      cred_1_main: "计算机科学学士 (S.Kom.) — S1 Informatika",
      cred_1_sub: "萨穆德拉大学 (UNSAM)，2022 – 2026",
      cred_2_kicker: "学术成绩",
      cred_2_main: "GPA 3.60 / 4.00 (Cum Laude 荣誉)",
      cred_2_sub: "多媒体信息学与计算机视觉方向",
      cred_3_kicker: "核心技术领域",
      cred_3_main: "计算机视觉与现代 Web 架构",
      cred_3_sub: "Python, OpenCV, SVM, HOG, 现代前端工程",
      cred_4_kicker: "多语言沟通",
      cred_4_main: "Bahasa Indonesia • English • 中文",
      cred_4_sub: "具备跨语种技术文档撰写与团队协作能力",

      sec2_index: "第二部分",
      sec2_title: "自动化多车型检测与空间计数系统",
      sec2_lead: "基于方向梯度直方图（HOG）与支持向量机（SVM）构建的高稳定性实时交通视觉遥测架构。",
      flagship_id: "核心科研项目",
      flagship_class: "PYTHON • OPENCV • SVM 分类器 • 空间质心追踪",
      flagship_img_caption: "多车道车辆边界框推理与质心运动轨迹矢量输出。",
      flagship_zoom_btn: "放大检视图像",
      flagship_heading: "基于 HOG 特征与 SVM 算法的自动化多车型检测与空间计数系统",
      flagship_dossier_desc: "基于HOG特征与SVM算法的自动化多车型检测与空间计数系统。采用方向梯度直方图（HOG）进行边缘特征提取，结合支持向量机（SVM）分类器，在多变光照条件下实现高稳定度的实时车辆遥测与计数。",
      flagship_modal_btn: "查看完整技术规范",

      bench_1_label: "特征向量维度",
      bench_1_val: "3,780 维",
      bench_1_sub: "8×8 像素单元 • 16×16 归一化块 • 9 方向箱",
      bench_2_label: "实时处理帧率",
      bench_2_val: "30.4 FPS",
      bench_2_sub: "CPU 管线平均单帧延迟约 32.8 ms",
      bench_3_label: "分类器准确率",
      bench_3_val: "96.4%",
      bench_3_sub: "覆盖轿车、巴士、卡车与摩托车四类目标",
      bench_4_label: "实际部署环境",
      bench_4_val: "多车道干线",
      bench_4_sub: "具备阴影抑制与黄昏逆光鲁棒性",

      pipeline_strip_title: "算法处理流程解析（点击阶段切换技术细节）",
      stage_tab_1: "视频采集与 ROI",
      stage_tab_2: "光照伽马归一化",
      stage_tab_3: "HOG 梯度直方图",
      stage_tab_4: "SVM 超平面决策",
      stage_tab_5: "质心越线计数",

      sec3_index: "第三部分",
      sec3_title: "工作经历与教育背景时间轴",
      sec3_lead: "在印度尼西亚二等移民局（Langsa）开展的公共服务排队系统监控、内网诊断与数据标准化实践。",
      residency_meta: "工程实习 • 2024 • 印尼朗萨 (LANGSA)",
      residency_heading: "印度尼西亚二等移民局 (Kantor Imigrasi Kelas II TPI Langsa)",
      residency_desc: "印度尼西亚二等移民局（Langsa）— 系统与基础设施实习工程师。负责数字化排队管理系统遥测、内部网络运维及行政数据自动化处理。",
      residency_b1: "实时监控办证大厅数字化排队管理系统，优化高峰期公众业务受理流转效率。",
      residency_b2: "执行局域网（LAN）连通性诊断、工作站硬件维护及窗口终端外设配置，保障内网稳定运行。",
      residency_b3: "规范化电子政务数据录入、档案核验与自动化报表生成流程，提升数据准确性与归档效率。",
      residency_inspect_btn: "查看实习详情",

      chrono_1_year: "2022 – 2026",
      chrono_1_role: "计算机科学学士 (S.Kom.)",
      chrono_1_detail: "萨穆德拉大学 (UNSAM) — 以 GPA 3.60 / 4.00 (Cum Laude) 荣誉毕业，完成 HOG + SVM 车辆视觉计数系统研究。",
      chrono_2_year: "2024",
      chrono_2_role: "系统与基础设施实习工程师",
      chrono_2_detail: "印尼二等移民局（Langsa）— 负责排队管理系统监控、内部网络维护及结构化行政数据处理。",
      chrono_3_year: "2022",
      chrono_3_role: "计算机科学系本科入学",
      chrono_3_detail: "系统修习算法与数据结构、离散数学、数字图像处理（Citra Digital）、网络安全与 Web 系统架构。",

      sec4_index: "第四部分",
      sec4_title: "专业技术能力矩阵",
      sec4_lead: "按机器学习与视觉、Web 系统架构、网络安全及数字图像应用四大领域进行结构化归档。",
      filter_all: "全部领域",
      filter_ml: "机器学习与视觉",
      filter_web: "Web 系统架构",
      filter_sec: "网络安全与运维",
      filter_app: "数字图像与应用软件",

      th_domain: "技术领域",
      th_stack: "核心工具与技术栈",
      th_method: "工程应用范围",
      th_output: "代表性成果",

      row1_domain: "机器学习与视觉",
      row1_method: "方向梯度直方图特征工程、最大间隔支持向量机分类、多尺度滑动窗口检测、非极大值抑制（NMS）及欧氏距离质心追踪。",
      row1_output: "自动化多车型计数系统 (准确率 96.4%)",

      row2_domain: "Web 系统架构",
      row2_method: "语义化 HTML5 架构、响应式流体排版系统、ES6+ 模块化状态管理、Three.js 三维艺术场景与结构化 SEO。",
      row2_output: "三语三维工程作品集 (GitHub Pages)",

      row3_domain: "网络安全与运维",
      row3_method: "局域网故障诊断、终端访问安全规范、政务数据完整性校验及办公终端维护。",
      row3_output: "印尼朗萨移民局基础设施运维实践",

      row4_domain: "数字图像与应用软件",
      row4_method: "数字图像处理（空间滤波、形态学变换、直方图均衡化）、多媒体资产制作及办公自动化模板构建。",
      row4_output: "UNSAM 多媒体信息学核心研究",

      sec5_index: "第五部分",
      sec5_title: "联系方式",
      sec5_lead: "诚邀计算机视觉、软件工程、数据分析及前端开发领域的全职岗位与研发合作机会。",
      email_box_label: "直通电子邮箱",
      btn_copy_email: "复制邮箱地址",
      btn_open_cv: "查看 / 打印个人履历",
      meta_name_lbl: "姓名与学位",
      meta_edu_lbl: "毕业院校",
      meta_edu_val: "萨穆德拉大学 (UNSAM) 计算机科学学士 (GPA 3.60)",
      meta_lang_lbl: "工作语言",
      meta_lang_val: "印尼语 (母语)、英语 (专业工作水平)、中文 (工作交流)",
      meta_status_lbl: "到岗状态",
      meta_status_val: "随时到岗 • 支持远程协作与异地派遣",

      footer_copy: "© 2026 Intan Saravina, S.Kom. 基于 Three.js、Lenis 与 GSAP 构建，专为 GitHub Pages 优化。"
    }
  };

  // Trilingual Pipeline Stage Descriptions
  const PIPELINE_DATA = {
    id: [
      {
        title: "01. Akuisisi Video & Penentuan Area Deteksi (ROI)",
        desc: "Membaca aliran video jalan raya 30 FPS menggunakan OpenCV dan menerapkan mask poligonal Region of Interest (ROI) untuk memfokuskan komputasi pada lajur kendaraan aktif.",
        eq: "I_roi(x, y) = I(x, y) · M_poly(x, y)"
      },
      {
        title: "02. Konversi Grayscale & Normalisasi Gamma",
        desc: "Mengubah citra RGB ke ruang warna derajat keabuan dan menerapkan koreksi gamma (γ = 0.85) guna menstabilkan kontras terhadap sorot lampu kendaraan maupun bayangan pepohonan.",
        eq: "I_norm(x, y) = [I_gray(x, y) / 255]^γ"
      },
      {
        title: "03. Ekstraksi Fitur Histogram of Oriented Gradients (HOG)",
        desc: "Menghitung gradien horizontal dan vertikal (Gx, Gy), lalu mengelompokkan magnitudo gradien ke dalam 9 kanal orientasi pada tiap sel 8×8 piksel dengan normalisasi blok L2-Hys.",
        eq: "|G| = sqrt(Gx² + Gy²),  θ = atan2(Gy, Gx)"
      },
      {
        title: "04. Klasifikasi Hyperplane Support Vector Machine (SVM)",
        desc: "Mengevaluasi vektor fitur HOG berdimensi 3.780 menggunakan fungsi keputusan SVM yang dilatih dengan Hard Negative Mining dan Non-Maximum Suppression (NMS).",
        eq: "f(x) = sgn(w^T · φ(x) + b)"
      },
      {
        title: "05. Pelacakan Titik Pusat (Centroid) & Penghitungan Lajur",
        desc: "Menghubungkan titik pusat kotak deteksi antar-frame berurutan menggunakan jarak Euclidean minimum dan menambah hitungan saat kendaraan melintasi garis ukur virtual.",
        eq: "||C_t - C_{t-1}||₂ < τ  ⇒  Hitungan[Kelas] += 1"
      }
    ],
    en: [
      {
        title: "01. Frame Acquisition & Perspective ROI Masking",
        desc: "Captures 30 FPS highway video streams via OpenCV and applies a polygonal Region of Interest (ROI) mask to isolate active traffic lanes and eliminate horizon clutter.",
        eq: "I_roi(x, y) = I(x, y) · M_poly(x, y)"
      },
      {
        title: "02. Radiometric & Gamma Illumination Normalization",
        desc: "Converts RGB frames to luminance grayscale and applies power-law gamma stabilization (γ = 0.85) to compress headlight glare and shadow contrast before differentiation.",
        eq: "I_norm(x, y) = [I_gray(x, y) / 255]^γ"
      },
      {
        title: "03. HOG 8×8 Cell Gradient Orientation Histograms",
        desc: "Computes horizontal and vertical Sobel derivatives (Gx, Gy), quantizing gradient magnitudes into 9 unsigned orientation bins (0°–180°) across 8×8 pixel cells with L2-Hys block normalization.",
        eq: "|G| = sqrt(Gx² + Gy²),  θ = atan2(Gy, Gx)"
      },
      {
        title: "04. Maximum-Margin SVM Multi-Class Hyperplane",
        desc: "Evaluates the 3,780-dimensional HOG feature descriptor against a trained Support Vector Machine decision function augmented with hard-negative mining and Non-Maximum Suppression (NMS).",
        eq: "f(x) = sgn(w^T · φ(x) + b)"
      },
      {
        title: "05. Euclidean Centroid Tracking & Virtual Tripwire",
        desc: "Computes bounding-box centroids across consecutive frames, matching vehicle identities via minimum Euclidean distance and incrementing lane counters upon crossing the virtual datum line.",
        eq: "||C_t - C_{t-1}||₂ < τ  ⇒  Counter[Class] += 1"
      }
    ],
    zh: [
      {
        title: "01. 视频流采集与感兴趣区域 (ROI) 掩膜",
        desc: "通过 OpenCV 读取 30 FPS 道路监控视频流，应用多边形感兴趣区域（ROI）空间掩膜过滤背景建筑与天空噪点，仅保留有效行车断面。",
        eq: "I_roi(x, y) = I(x, y) · M_poly(x, y)"
      },
      {
        title: "02. 灰度转换与伽马光照归一化",
        desc: "将输入帧转换为亮度灰度空间，并执行幂律伽马校正（γ = 0.85），有效抑制车灯眩光与阴影突变对边缘梯度的干扰。",
        eq: "I_norm(x, y) = [I_gray(x, y) / 255]^γ"
      },
      {
        title: "03. HOG 8×8 单元方向梯度直方图构建",
        desc: "计算水平与垂直差分 (Gx, Gy)，在 8×8 像素单元内按 0°–180° 划分为 9 个方向通道统计梯度幅值，并执行 16×16 块 L2-Hys 归一化。",
        eq: "|G| = sqrt(Gx² + Gy²),  θ = atan2(Gy, Gx)"
      },
      {
        title: "04. 支持向量机 (SVM) 最大间隔超平面分类",
        desc: "将 3,780 维 HOG 特征向量输入经难负样本挖掘训练的 SVM 决策函数，结合非极大值抑制（NMS）输出精确车辆边界框。",
        eq: "f(x) = sgn(w^T · φ(x) + b)"
      },
      {
        title: "05. 欧氏空间质心追踪与虚拟基准线计数",
        desc: "计算连续帧目标框的几何质心，利用最小欧氏距离关联跨帧车辆轨迹，当质心穿越预设虚拟检测线时触发分车型累加计数。",
        eq: "||C_t - C_{t-1}||₂ < τ  ⇒  Counter[Class] += 1"
      }
    ]
  };

  // Trilingual Modal Data
  const MODAL_DOSSIERS = {
    id: {
      svmhog: {
        kicker: "SPESIFIKASI TEKNIS PENELITIAN",
        title: "Sistem Deteksi & Penghitung Kendaraan Otomatis Multi-Kelas",
        subtitle: "Python • OpenCV • Histogram of Oriented Gradients • Support Vector Machine",
        imgId: "img-svmhog",
        bullets: [
          "Arsitektur Fitur HOG: Jendela deteksi 64×128 piksel yang dibagi menjadi sel 8×8 piksel dan blok 16×16 (tumpang tindih 50%), menghasilkan vektor fitur 3.780 dimensi dengan normalisasi L2-Hys.",
          "Optimasi Klasifikasi SVM: Dilatih menggunakan Support Vector Machine dengan teknik Hard Negative Mining pada dataset jalan raya di berbagai kondisi cahaya (siang, senja, dan berbayang).",
          "Pelacakan Spasial: Pencarian jendela geser multi-skala yang dipadukan dengan Non-Maximum Suppression (ambang IoU 0,35) serta pelacakan titik pusat Euclidean melintasi garis hitung virtual.",
          "Kinerja Terukur: Mencapai presisi penghitungan 96,4% pada kecepatan 30,4 FPS di perangkat keras CPU standar."
        ],
        footer: "Penelitian Tugas Akhir S1 Informatika • Universitas Samudra (UNSAM)"
      },
      imigrasi: {
        kicker: "DOKUMENTASI KERJA PRAKTEK (2024)",
        title: "Kantor Imigrasi Kelas II TPI Langsa — Sistem & Infrastruktur TI",
        subtitle: "Direktorat Jenderal Imigrasi • Kota Langsa, Aceh (2024)",
        imgId: "img-imigrasi",
        bullets: [
          "Pemantauan Antrean Layanan: Mengawasi kelancaran sistem antrean digital pemohon paspor dan layanan keimigrasian agar waktu tunggu masyarakat tetap optimal.",
          "Pemeliharaan Jaringan & Perangkat: Melaksanakan pengecekan rutin konektivitas jaringan LAN internal, kabel terstruktur, serta kesiapan komputer kerja petugas.",
          "Pengolahan Data Administrasi: Memverifikasi kelengkapan data permohonan digital dan menyusun laporan rekapitulasi berkala secara rapi dan aman."
        ],
        footer: "Kerja Praktek (KP) • Kantor Imigrasi Kelas II TPI Langsa"
      },
      cv: {
        kicker: "RINGKASAN DAFTAR RIWAYAT HIDUP (CV)",
        title: "Intan Saravina, S.Kom. — Spesialis Computer Vision & Perangkat Lunak",
        subtitle: "Sarjana Komputer (S1 Informatika), Universitas Samudra • IPK 3.60 / 4.00 (Cum Laude)",
        imgId: "img-portrait",
        bullets: [
          "Pendidikan: Sarjana Komputer (S1 Informatika - Informatika Multimedia), Universitas Samudra (UNSAM), 2022–2026. Lulus dengan predikat Cum Laude (IPK 3.60 / 4.00).",
          "Penelitian Utama: Sistem Deteksi & Penghitung Kendaraan Otomatis menggunakan fitur HOG dan klasifikasi SVM berbasis Python & OpenCV (presisi 96,4%, 30,4 FPS).",
          "Pengalaman Magang: Staf Magang Sistem & Infrastruktur TI di Kantor Imigrasi Kelas II TPI Langsa (2024) — pemantauan sistem antrean, pemeliharaan LAN, dan pengolahan data digital.",
          "Keahlian & Bahasa: Python, OpenCV, SVM, HOG, JavaScript (ES6+), HTML5/CSS3, Git/GitHub, Dasar Keamanan Siber, Pengolahan Citra Digital. Bahasa: Indonesia, Inggris, Mandarin (中文)."
        ],
        footer: "Kontak Langsung: intansaravina122@gmail.com • Aceh, Indonesia"
      }
    },
    en: {
      svmhog: {
        kicker: "TECHNICAL RESEARCH SPECIFICATION",
        title: "Automated Multi-Class Vehicle Detection & Spatial Counting System",
        subtitle: "Python • OpenCV • Histogram of Oriented Gradients • Support Vector Machine",
        imgId: "img-svmhog",
        bullets: [
          "Feature Descriptor Architecture: 64×128 detection window partitioned into 8×8 pixel cells and 16×16 blocks (50% overlap), yielding a 3,780-dimensional L2-Hys normalized feature vector.",
          "Classifier Optimization: Trained with Support Vector Machines using hard-negative mining across variable daylight, dusk, and shadow-occluded highway datasets.",
          "Spatial Telemetry & Counting: Multi-scale sliding window search paired with Non-Maximum Suppression (IoU threshold 0.35) and Euclidean centroid tracking across directional lane tripwires.",
          "Empirical Performance: Achieves 96.4% counting precision at 30.4 FPS on standard CPU hardware."
        ],
        footer: "S1 Informatika Capstone Research • Universitas Samudra (UNSAM)"
      },
      imigrasi: {
        kicker: "TECHNICAL INTERNSHIP ARCHIVE (2024)",
        title: "Kantor Imigrasi Kelas II TPI Langsa — Systems & Infrastructure Intern",
        subtitle: "Directorate General of Immigration • Langsa, Aceh, Indonesia (2024)",
        imgId: "img-imigrasi",
        bullets: [
          "Queue Telemetry Supervision: Monitored digital applicant queue management displays and server synchronization to maintain smooth public passport and residency workflows.",
          "Network & Endpoint Maintenance: Conducted routine diagnostics on internal LAN switches, structured cabling, and officer workstation peripherals.",
          "Structured Data Processing: Verified electronic citizen records, standardized administrative reporting spreadsheets, and maintained institutional data confidentiality."
        ],
        footer: "Technical Internship (Kerja Praktek) • 2024"
      },
      cv: {
        kicker: "EXECUTIVE CURRICULUM VITAE",
        title: "Intan Saravina, S.Kom. — Computer Vision & Software Engineer",
        subtitle: "B.Comp.Sc (S1 Informatika), Universitas Samudra • GPA 3.60 / 4.00 (Cum Laude)",
        imgId: "img-portrait",
        bullets: [
          "Education: Bachelor of Computer Science (S1 Informatika - Multimedia Informatics), Universitas Samudra (UNSAM), 2022–2026. Graduated with Honors (GPA 3.60 / 4.00).",
          "Flagship Research: Automated Multi-Class Vehicle Detection & Spatial Counting System using HOG feature descriptors and SVM classification in Python & OpenCV (96.4% precision, 30.4 FPS).",
          "Field Experience: Systems & Infrastructure Intern at Kantor Imigrasi Kelas II TPI Langsa (2024) — queue management telemetry, internal LAN maintenance, and administrative data automation.",
          "Technical Stack & Languages: Python, OpenCV, SVM, HOG, JavaScript (ES6+), HTML5/CSS3, Git/GitHub, Cyber Security Fundamentals, Digital Image Processing. Languages: Indonesian, English, 中文."
        ],
        footer: "Direct Contact: intansaravina122@gmail.com • Aceh, Indonesia"
      }
    },
    zh: {
      svmhog: {
        kicker: "核心研究技术规范",
        title: "基于 HOG 特征与 SVM 算法的自动化多车型检测与空间计数系统",
        subtitle: "Python • OpenCV • 方向梯度直方图 (HOG) • 支持向量机 (SVM)",
        imgId: "img-svmhog",
        bullets: [
          "特征描述算子结构：采用 64×128 检测窗口，划分为 8×8 像素单元与 16×16 归一化块（50% 步长重叠），生成 3,780 维 L2-Hys 归一化梯度特征向量。",
          "分类器训练与优化：结合难负样本挖掘（Hard Negative Mining）训练支持向量机模型，在日间、黄昏及阴影遮挡道路场景下保持高鲁棒性。",
          "空间遥测与越线计数：融合多尺度滑动窗口搜索、非极大值抑制（IoU 阈值 0.35）与欧氏空间质心轨迹关联，避免密集车流下的重复计数。",
          "实测性能指标：在标准 CPU 硬件环境下实现 30.4 FPS 实时处理与 96.4% 的多车型计数准确率。"
        ],
        footer: "萨穆德拉大学 (UNSAM) 计算机科学学士核心研究项目"
      },
      imigrasi: {
        kicker: "工程实习记录 (2024)",
        title: "印度尼西亚二等移民局 (Langsa) — 系统与基础设施实习工程师",
        subtitle: "印尼移民总局下属机构 • 亚齐省朗萨 (2024)",
        imgId: "img-imigrasi",
        bullets: [
          "排队管理系统监控：负责办证大厅数字化排队调度系统的日常监控与状态同步，保障公众业务高效流转。",
          "内部网络与终端运维：执行局域网交换机连通性排查、综合布线巡检以及业务窗口计算机与外设的维护。",
          "结构化行政数据处理：协助完成出入境业务电子档案核验、结构化报表自动化汇总及机构数据安全归档。"
        ],
        footer: "印度尼西亚二等移民局 (Kantor Imigrasi Kelas II TPI Langsa) • 2024"
      },
      cv: {
        kicker: "个人履历摘要 (CV)",
        title: "Intan Saravina, S.Kom. — 计算机视觉与软件工程师",
        subtitle: "萨穆德拉大学 (UNSAM) 计算机科学学士 • GPA 3.60 / 4.00 (Cum Laude 荣誉)",
        imgId: "img-portrait",
        bullets: [
          "教育背景：萨穆德拉大学（Universitas Samudra, 2022–2026）计算机科学学士（多媒体信息学方向），GPA 3.60 / 4.00（Cum Laude 优秀毕业生）。",
          "核心科研项目：基于 HOG 特征提取与 SVM 分类器的自动化多车型检测与空间计数系统（Python / OpenCV，准确率 96.4%，实时帧率 30.4 FPS）。",
          "工程实习经历：印度尼西亚二等移民局（Langsa，2024）系统与基础设施实习工程师，负责排队系统监控、内网运维及数据自动化处理。",
          "技术栈与工作语言：Python, OpenCV, SVM, HOG, JavaScript (ES6+), HTML5/CSS3, Git/GitHub, 网络安全基础, 数字图像处理。工作语言：印尼语、英语、中文。"
        ],
        footer: "联系邮箱：intansaravina122@gmail.com • 印尼亚齐"
      }
    }
  };

  let currentLang = "id";
  let currentPipelineIndex = 0;
  let activeModalKey = null;
  let targetScrollRatio = 0;

  // --------------------------------------------------------------------------
  // 2. SANDBOX-SAFE TOAST NOTIFICATION
  // --------------------------------------------------------------------------
  let toastTimeout = null;
  function notifyToast(msg) {
    const el = document.getElementById("cyber-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      el.classList.remove("show");
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // 3. LENIS SMOOTH INERTIAL SCROLL INITIALIZATION
  // --------------------------------------------------------------------------
  function initSmoothScroll() {
    if (typeof Lenis === "undefined") return;
    try {
      const lenis = new Lenis({
        duration: 1.35,
        easing: function (t) {
          return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        },
        smoothWheel: true
      });

      lenis.on("scroll", function () {
        if (typeof ScrollTrigger !== "undefined") {
          ScrollTrigger.update();
        }
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch (err) {
      // Fallback to native smooth scroll
    }
  }

  // --------------------------------------------------------------------------
  // 4. 5-ACT MORPHING CELESTIAL ASTROLABE & LIQUID-SILK RIBBON 3D ENGINE
  //    - Unique Haute Horlogerie Gyrotourbillon + Flowing Liquid-Champagne Ribbon
  //    - Morphs through 5 distinct sculptural formations as you scroll!
  //    - Double-exponential damping guarantees 120fps butter-smooth motion
  // --------------------------------------------------------------------------
  function damp(current, target, lambda, dt) {
    return current + (target - current) * (1 - Math.exp(-lambda * dt));
  }

  function initCelestialAstrolabeThreeJS() {
    const canvas = document.getElementById("webgl-canvas");
    if (!canvas || typeof THREE === "undefined") return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
    } catch (e) {
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0b0d, 0.032);

    const camera = new THREE.PerspectiveCamera(
      36,
      window.innerWidth / window.innerHeight,
      0.1,
      120
    );
    camera.position.set(0, 0, 21);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // Master Astrolabe Assembly
    const astrolabeRoot = new THREE.Group();
    scene.add(astrolabeRoot);

    // Luxury Haute Horlogerie Materials (Brushed Champagne Gold, Warm Bronze, Obsidian Titanium)
    const liquidGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd8cfc2,
      roughness: 0.22,
      metalness: 0.92
    });

    const brushedBronzeMaterial = new THREE.MeshStandardMaterial({
      color: 0xb5a48b,
      roughness: 0.30,
      metalness: 0.88
    });

    const darkTitaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x24262d,
      roughness: 0.35,
      metalness: 0.85
    });

    const silkWireMaterial = new THREE.MeshBasicMaterial({
      color: 0xe5dfd3,
      wireframe: true,
      transparent: true,
      opacity: 0.14
    });

    // ------------------------------------------------------------------------
    // LAYER A: Morphing Liquid-Metal Parametric Silk Ribbon Core
    // ------------------------------------------------------------------------
    const coreGroup = new THREE.Group();
    astrolabeRoot.add(coreGroup);

    const ribbonGeo = new THREE.TorusKnotGeometry(1.65, 0.26, 180, 28, 2, 3);
    // Store base vertex positions for real-time silk wave morphing
    const posAttr = ribbonGeo.attributes.position;
    const basePositions = new Float32Array(posAttr.array.length);
    basePositions.set(posAttr.array);

    const ribbonMesh = new THREE.Mesh(ribbonGeo, liquidGoldMaterial);
    coreGroup.add(ribbonMesh);

    const ribbonWire = new THREE.Mesh(ribbonGeo, silkWireMaterial);
    ribbonWire.scale.setScalar(1.018);
    coreGroup.add(ribbonWire);

    // Inner Crystalline Geodesic Jewel
    const jewelGeo = new THREE.OctahedronGeometry(0.78, 2);
    const jewelMesh = new THREE.Mesh(jewelGeo, darkTitaniumMaterial);
    coreGroup.add(jewelMesh);

    const jewelWire = new THREE.Mesh(jewelGeo, silkWireMaterial);
    jewelWire.scale.setScalar(1.04);
    coreGroup.add(jewelWire);

    // ------------------------------------------------------------------------
    // LAYER B: 6 Concentric Celestial Gimbal Rings (Gyrotourbillon Orrery)
    // ------------------------------------------------------------------------
    const gimbalRings = [];
    const RING_CONFIGS = [
      { radius: 2.75, tube: 0.028, mat: brushedBronzeMaterial, satellites: 4, speedX: 0.35, speedY: -0.22 },
      { radius: 3.25, tube: 0.018, mat: liquidGoldMaterial, satellites: 6, speedX: -0.24, speedY: 0.38 },
      { radius: 3.80, tube: 0.032, mat: darkTitaniumMaterial, satellites: 8, speedX: 0.18, speedY: 0.28 },
      { radius: 4.35, tube: 0.016, mat: brushedBronzeMaterial, satellites: 12, speedX: -0.30, speedY: -0.19 },
      { radius: 4.95, tube: 0.024, mat: liquidGoldMaterial, satellites: 8, speedX: 0.14, speedY: -0.32 },
      { radius: 5.60, tube: 0.012, mat: brushedBronzeMaterial, satellites: 16, speedX: -0.12, speedY: 0.16 }
    ];

    const pearlSatelliteGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const tickMarkerGeo = new THREE.BoxGeometry(0.02, 0.14, 0.02);

    RING_CONFIGS.forEach(function (cfg, idx) {
      const gimbalGroup = new THREE.Group();

      // Primary Ring Torus
      const ringGeo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 20, 120);
      const ringMesh = new THREE.Mesh(ringGeo, cfg.mat);
      gimbalGroup.add(ringMesh);

      // Orbital Satellites / Horological Indices along the ring
      for (let s = 0; s < cfg.satellites; s++) {
        const angle = (s / cfg.satellites) * Math.PI * 2;
        const marker = new THREE.Mesh(
          s % 2 === 0 ? pearlSatelliteGeo : tickMarkerGeo,
          liquidGoldMaterial
        );
        marker.position.set(
          Math.cos(angle) * cfg.radius,
          Math.sin(angle) * cfg.radius,
          0
        );
        marker.rotation.z = angle;
        gimbalGroup.add(marker);
      }

      // Initial artistic tilt
      gimbalGroup.rotation.x = (idx * 0.48) + 0.3;
      gimbalGroup.rotation.y = (idx * 0.62) - 0.4;

      astrolabeRoot.add(gimbalGroup);
      gimbalRings.push({
        group: gimbalGroup,
        cfg: cfg,
        index: idx
      });
    });

    // ------------------------------------------------------------------------
    // LAYER C: Golden-Ratio Fibonacci Spiral Vortex Galaxy (520 Micro-Stars)
    // ------------------------------------------------------------------------
    const starCount = 520;
    const starPositions = new Float32Array(starCount * 3);
    const starBaseAngles = new Float32Array(starCount);
    const starRadii = new Float32Array(starCount);
    const starY = new Float32Array(starCount);

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < starCount; i++) {
      const t = i / starCount;
      const angle = i * goldenAngle;
      const radius = 2.2 + Math.sqrt(t) * 8.5;
      const ySpread = (Math.random() - 0.5) * 14.0;

      starBaseAngles[i] = angle;
      starRadii[i] = radius;
      starY[i] = ySpread;

      const i3 = i * 3;
      starPositions[i3] = Math.cos(angle) * radius;
      starPositions[i3 + 1] = ySpread;
      starPositions[i3 + 2] = Math.sin(angle) * radius - 2.0;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xd8cfc2,
      size: 0.048,
      transparent: true,
      opacity: 0.45
    });
    const vortexGalaxy = new THREE.Points(starGeo, starMat);
    scene.add(vortexGalaxy);

    // ------------------------------------------------------------------------
    // STUDIO LIGHTING (Warm Specular Key, Champagne Fill, Rim Glow)
    // ------------------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xf5f3ef, 0.62);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff4e0, 2.4);
    keyLight.position.set(10, 14, 12);
    scene.add(keyLight);

    const bronzeRimLight = new THREE.DirectionalLight(0xb5a48b, 1.65);
    bronzeRimLight.position.set(-10, -8, 8);
    scene.add(bronzeRimLight);

    const corePointLight = new THREE.PointLight(0xe5dfd3, 2.1, 28);
    corePointLight.position.set(4, 2, 7);
    scene.add(corePointLight);

    // ------------------------------------------------------------------------
    // DOUBLE-EXPONENTIAL DAMPED SCROLL & CURSOR CHOREOGRAPHY
    // ------------------------------------------------------------------------
    let stage1Scroll = 0;
    let smoothScroll = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let smoothMouseX = 0;
    let smoothMouseY = 0;

    window.addEventListener("mousemove", function (e) {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function updateScrollRatio() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetScrollRatio = Math.min(1, Math.max(0, scrollTop / maxScroll));
    }

    updateScrollRatio();
    window.addEventListener("scroll", updateScrollRatio, { passive: true });

    function handleResize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    let lastTime = performance.now();

    function animateAstrolabe(now) {
      requestAnimationFrame(animateAstrolabe);

      const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) * 0.001));
      lastTime = now;
      const elapsed = now * 0.001;

      // Double-exponential damping for 120fps silk smoothness
      stage1Scroll = damp(stage1Scroll, targetScrollRatio, 4.2, dt);
      smoothScroll = damp(smoothScroll, stage1Scroll, 3.0, dt);

      smoothMouseX = damp(smoothMouseX, targetMouseX, 2.6, dt);
      smoothMouseY = damp(smoothMouseY, targetMouseY, 2.6, dt);

      // 1. Real-Time Liquid-Silk Vertex Wave on the Parametric Ribbon Core
      const posArr = posAttr.array;
      const wavePhase = elapsed * 1.4 + smoothScroll * 8.0;
      const morphAmplitude = 0.08 + Math.sin(smoothScroll * Math.PI) * 0.09;

      for (let i = 0; i < posArr.length; i += 3) {
        const bx = basePositions[i];
        const by = basePositions[i + 1];
        const bz = basePositions[i + 2];
        const wave = Math.sin(bx * 1.8 + wavePhase) * Math.cos(by * 1.8 - wavePhase) * morphAmplitude;
        posArr[i] = bx * (1 + wave);
        posArr[i + 1] = by * (1 + wave);
        posArr[i + 2] = bz + wave * 0.8;
      }
      posAttr.needsUpdate = true;

      // 2. Position in the Right Sculptural Corridor + Smooth 5-Act Scroll Morphing
      const isDesktop = window.innerWidth > 960;
      const corridorX = isDesktop ? 4.4 : 2.2;

      // Gentle vertical & depth breathing as user scrolls through sections
      const actWave = Math.sin(smoothScroll * Math.PI * 2);
      astrolabeRoot.position.x = corridorX + smoothMouseX * 0.45 + actWave * 0.35;
      astrolabeRoot.position.y = Math.cos(smoothScroll * Math.PI * 2) * 0.45 - smoothMouseY * 0.35;
      astrolabeRoot.position.z = (isDesktop ? 0.2 : -3.2) + Math.sin(smoothScroll * Math.PI) * 1.4;

      // Master Rotation driven smoothly by scroll + time
      astrolabeRoot.rotation.y = elapsed * 0.12 + smoothScroll * Math.PI * 2.4 + smoothMouseX * 0.35;
      astrolabeRoot.rotation.x = smoothScroll * Math.PI * 0.85 + smoothMouseY * 0.25;
      astrolabeRoot.rotation.z = Math.sin(smoothScroll * Math.PI) * 0.35;

      // Core Ribbon Counter-Rotation & Scale Breathing
      const coreScale = 0.92 + Math.sin(smoothScroll * Math.PI * 3) * 0.16;
      coreGroup.scale.setScalar(coreScale);
      coreGroup.rotation.y = -elapsed * 0.28 - smoothScroll * Math.PI * 3.0;
      coreGroup.rotation.x = elapsed * 0.18 + smoothScroll * Math.PI * 1.5;
      jewelMesh.rotation.y = elapsed * 0.6;
      jewelWire.rotation.y = -elapsed * 0.4;

      // 3. 5-Act Gimbal Ring Morphing Choreography:
      //    Around scroll = 0.5 (Research section), rings align toward an optical camera aperture;
      //    at Hero (0.0) and Capabilities (0.75), they fan out into a 3D spherical gyrotourbillon!
      const apertureAlignment = Math.exp(-Math.pow((smoothScroll - 0.48) * 4.2, 2)); // Peaks at Research section

      for (let r = 0; r < gimbalRings.length; r++) {
        const item = gimbalRings[r];
        const idx = item.index;
        const cfg = item.cfg;

        // Continuous horological orbital spin + scroll-driven phase
        const gyroX = elapsed * cfg.speedX + idx * 0.52 + smoothScroll * Math.PI * (1.8 + idx * 0.35);
        const gyroY = elapsed * cfg.speedY + idx * 0.68 - smoothScroll * Math.PI * (1.4 + idx * 0.25);

        // Blend between spherical gyrotourbillon and coaxial optical lens tunnel
        item.group.rotation.x = gyroX * (1 - apertureAlignment * 0.72);
        item.group.rotation.y = gyroY * (1 - apertureAlignment * 0.72);
        item.group.rotation.z = elapsed * 0.15 * (idx % 2 === 0 ? 1 : -1) + smoothScroll * Math.PI * 2;

        // Axial expansion along Z when in optical lens alignment
        const targetZ = apertureAlignment * (idx - 2.5) * 0.68;
        item.group.position.z = targetZ;

        // Subtle radial breathing
        const ringBreath = 1.0 + Math.sin(elapsed * 1.1 + idx * 0.8 + smoothScroll * 6.0) * 0.045;
        item.group.scale.setScalar(ringBreath);
      }

      // 4. Spiral Galaxy Vortex Rotation
      vortexGalaxy.rotation.y = elapsed * 0.025 + smoothScroll * Math.PI * 1.4;
      vortexGalaxy.rotation.z = smoothScroll * 0.35 + smoothMouseX * 0.08;
      vortexGalaxy.position.y = Math.sin(smoothScroll * Math.PI) * 1.2;

      renderer.render(scene, camera);
    }

    requestAnimationFrame(animateAstrolabe);
  }

  // --------------------------------------------------------------------------
  // 5. GSAP & SCROLLTRIGGER FEATHER-SMOOTH REVEALS
  // --------------------------------------------------------------------------
  function initGsapChoreography() {
    if (typeof gsap === "undefined") return;
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.from(".hero-reveal-item", {
      y: 24,
      opacity: 0,
      duration: 1.35,
      stagger: 0.12,
      ease: "expo.out"
    });

    const revealBlocks = document.querySelectorAll(".gsap-reveal");
    revealBlocks.forEach(function (block) {
      gsap.from(block, {
        scrollTrigger: {
          trigger: block,
          start: "top 89%",
          toggleActions: "play none none none"
        },
        y: 22,
        opacity: 0,
        duration: 1.15,
        ease: "expo.out"
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. TRILINGUAL SWITCHER ENGINE (ID / EN / 中文)
  // --------------------------------------------------------------------------
  function renderPipelineStage() {
    const stageList = PIPELINE_DATA[currentLang] || PIPELINE_DATA.id;
    const item = stageList[currentPipelineIndex] || stageList[0];
    const titleEl = document.getElementById("pipeline-stage-title");
    const descEl = document.getElementById("pipeline-stage-desc");
    const eqEl = document.getElementById("pipeline-stage-formula");
    if (titleEl) titleEl.textContent = item.title;
    if (descEl) descEl.textContent = item.desc;
    if (eqEl) eqEl.textContent = item.eq;
  }

  function applyLanguage(lang) {
    if (!TRILINGUAL_MATRIX[lang]) return;
    currentLang = lang;
    const htmlLang = lang === "zh" ? "zh-CN" : (lang === "id" ? "id" : "en");
    document.documentElement.setAttribute("lang", htmlLang);

    const dict = TRILINGUAL_MATRIX[lang];
    const nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      const key = node.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        if (key === "about_p1" || key === "about_p3") {
          node.innerHTML = dict[key];
        } else {
          node.textContent = dict[key];
        }
      }
    });

    const langBtns = document.querySelectorAll(".lang-option-btn");
    langBtns.forEach(function (btn) {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });

    renderPipelineStage();
    if (activeModalKey) {
      populateModalContent(activeModalKey);
    }
  }

  // --------------------------------------------------------------------------
  // 7. MODAL VIEWER & UI INTERACTIONS
  // --------------------------------------------------------------------------
  function populateModalContent(key) {
    const langCatalog = MODAL_DOSSIERS[currentLang] || MODAL_DOSSIERS.id;
    const item = langCatalog[key];
    if (!item) return;

    const kickerEl = document.getElementById("modal-tag");
    const titleEl = document.getElementById("modal-title");
    const subEl = document.getElementById("modal-subtitle");
    const imgEl = document.getElementById("modal-preview-img");
    const bulletsEl = document.getElementById("modal-bullets");
    const footerEl = document.getElementById("modal-metrics");

    if (kickerEl) kickerEl.textContent = item.kicker;
    if (titleEl) titleEl.textContent = item.title;
    if (subEl) subEl.textContent = item.subtitle;
    if (footerEl) footerEl.textContent = item.footer;

    if (imgEl && item.imgId) {
      const srcNode = document.getElementById(item.imgId);
      if (srcNode) {
        imgEl.setAttribute("src", srcNode.getAttribute("src"));
        imgEl.setAttribute("alt", item.title);
      }
    }

    if (bulletsEl) {
      bulletsEl.innerHTML = "";
      item.bullets.forEach(function (b) {
        const li = document.createElement("li");
        li.textContent = b;
        bulletsEl.appendChild(li);
      });
    }
  }

  function initUIEvents() {
    const progressBar = document.getElementById("scroll-progress-bar");
    const siteHeader = document.getElementById("pill-navbar");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100)) : 0;
      if (progressBar) progressBar.style.width = pct + "%";

      if (siteHeader) {
        if (scrollTop > 32) {
          siteHeader.classList.add("scrolled");
        } else {
          siteHeader.classList.remove("scrolled");
        }
      }

      let currentId = "hero";
      sections.forEach(function (sec) {
        if (scrollTop >= sec.offsetTop - 180) {
          currentId = sec.getAttribute("id");
        }
      });

      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + currentId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }, { passive: true });

    // Trilingual Toggle Buttons (ID / EN / 中文)
    const langBtns = document.querySelectorAll(".lang-option-btn");
    langBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const targetLang = btn.getAttribute("data-lang");
        if (!targetLang || targetLang === currentLang) return;
        applyLanguage(targetLang);
        const msgMap = {
          id: "Bahasa Indonesia aktif",
          en: "English language active",
          zh: "已切换至中文界面"
        };
        notifyToast(msgMap[targetLang] || "Language updated");
      });
    });

    // Mobile Menu Drawer
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-nav-drawer");
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener("click", function () {
        mobileDrawer.classList.toggle("open");
      });
      const mLinks = mobileDrawer.querySelectorAll(".mobile-nav-link");
      mLinks.forEach(function (l) {
        l.addEventListener("click", function () {
          mobileDrawer.classList.remove("open");
        });
      });
    }

    // Pipeline Stage Tabs
    const pipeBtns = document.querySelectorAll(".pipeline-tab-btn");
    pipeBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const idx = parseInt(btn.getAttribute("data-step-index") || "0", 10);
        currentPipelineIndex = idx;
        pipeBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        renderPipelineStage();
      });
    });

    // Technical Proficiency Matrix Filter
    const capFilterBtns = document.querySelectorAll(".cap-filter-btn");
    const capRows = document.querySelectorAll(".proficiency-row");
    capFilterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const domain = btn.getAttribute("data-domain") || "all";
        capFilterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        capRows.forEach(function (row) {
          const rowDomain = row.getAttribute("data-domain-row");
          if (domain === "all" || rowDomain === domain) {
            row.style.display = "table-row";
          } else {
            row.style.display = "none";
          }
        });
      });
    });

    // Modal Triggers
    const modalBackdrop = document.getElementById("cyber-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalPrintBtn = document.getElementById("modal-print-btn");

    function openDossierModal(key) {
      activeModalKey = key;
      populateModalContent(key);
      if (modalBackdrop) {
        modalBackdrop.classList.add("open");
        modalBackdrop.setAttribute("aria-hidden", "false");
      }
    }

    function closeDossierModal() {
      activeModalKey = null;
      if (modalBackdrop) {
        modalBackdrop.classList.remove("open");
        modalBackdrop.setAttribute("aria-hidden", "true");
      }
    }

    const modalTriggers = document.querySelectorAll("[data-modal-target]");
    modalTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const key = trigger.getAttribute("data-modal-target");
        if (key) openDossierModal(key);
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeDossierModal);
    }
    if (modalPrintBtn) {
      modalPrintBtn.addEventListener("click", function () {
        window.print();
      });
    }
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", function (e) {
        if (e.target === modalBackdrop) closeDossierModal();
      });
    }
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDossierModal();
    });

    // Copy Email Button
    const copyEmailBtn = document.getElementById("btn-copy-email");
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener("click", function () {
        const email = "intansaravina122@gmail.com";
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(function () {
            notifyToast(
              currentLang === "zh"
                ? "已复制邮箱：intansaravina122@gmail.com"
                : (currentLang === "id" ? "Email disalin: intansaravina122@gmail.com" : "Copied: intansaravina122@gmail.com")
            );
          }).catch(function () {
            fallbackCopyText(email);
          });
        } else {
          fallbackCopyText(email);
        }
      });
    }

    function fallbackCopyText(text) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        notifyToast("intansaravina122@gmail.com");
      } catch (e) {
        notifyToast("intansaravina122@gmail.com");
      }
      document.body.removeChild(ta);
    }
  }

  function boot() {
    initSmoothScroll();
    initCelestialAstrolabeThreeJS();
    initGsapChoreography();
    initUIEvents();
    applyLanguage("id");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
