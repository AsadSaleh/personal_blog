import type { IApplication } from "~/model/application-model";

export const applicationList: IApplication[] = [
  {
    appName: "Website",
    shortDesc: "Website utama IDN",
    longDesc:
      "Website utama yang menjadi acuan bagi siapapun yang mau berkenalan dengan Infradigital Nusantara. Di dalamnya ada profil singkat dan data lengkap mengenai fitur-fitur yang kita sediakan. Di website ini juga ada fitur pengecekan & cara bayar tagihan pendidikan.",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/website/src/master/",
    techStacks: ["NodeJS", "ExpressJS", "HTML", "SCSS", "jQuery", "UIKit"],
    deployment: "Heroku",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://idn-website-test.herokuapp.com/",
        healthCheckUrl: "https://idn-website-test.herokuapp.com/",
      },
      {
        name: "Production Instance",
        appUrl: "https://infradigital.io",
        healthCheckUrl: "https://www.infradigital.io",
      },
    ],
  },
  {
    appName: "Kasflow",
    shortDesc:
      "Website untuk mengatur tagihan siswa. Digunakan oleh Staff Keuangan.",
    longDesc:
      "Website ini digunakan oleh Staff Keuangan sekolah untuk mengatur tagihan siswa, meliputi membuat, mengedit, menghapus, dan lain-lain. Di sini Staff Keuangan juga bisa mengatur rekening penampungan dana sekolah.",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/idn-dashboard/src/master/",
    techStacks: ["Go", "HTML", "SCSS", "jQuery", "UIKit"],
    deployment: "Heroku",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://dashboard.infradigital.net",
        healthCheckUrl: "https://dashboard.infradigital.net/pre-login",
      },
      {
        name: "Production Instance",
        appUrl: "https://dashboard.infradigital.io",
        healthCheckUrl: "https://dashboard.infradigital.io/pre-login",
      },
    ],
  },
  {
    appName: "Portal Digital (PorDi)",
    shortDesc:
      "Website untuk mengatur data sekolah, siswa, kelas, dan guru. Digunakan oleh Staff TU.",
    longDesc:
      "Website Portal Digital adalah one stop solution untuk pengaturan seluruh data sekolah (kecuali tagihan).",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/next-portal-digital/src/master/",
    techStacks: ["NextJS", "TailwindCSS"],
    deployment: "AWS",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://pordi.infradigital.net",
        healthCheckUrl: "https://pordi.infradigital.net",
      },
      {
        name: "Production Instance",
        appUrl: "https://pordi.infradigital.io",
        healthCheckUrl: "https://pordi.infradigital.io",
      },
    ],
  },
  {
    appName: "Pelajar Mobile App",
    shortDesc: "Mobile application utama IDN. Digunakan oleh Orang Tua Siswa.",
    longDesc:
      "Aplikasi Pelajar merupakan penghubung antara IDN, sekolah, dan orang tua murid. Diatara fitur nya adalah pengecekan tagihan, informasi newsfeed, pengisian data peserta didik secara online, dan melihat absensi siswa.",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/portal_mobile_app/src/master/",
    techStacks: ["Flutter", "Firebase"],
    deployment: "Google Play Store",
    instances: [
      {
        name: "Android App",
        appUrl:
          "https://play.google.com/store/apps/details?id=io.infradigital.app.pelajar&hl=in&gl=US",
        healthCheckUrl:
          "https://play.google.com/store/apps/details?id=io.infradigital.app.pelajar&hl=in&gl=US",
      },
    ],
  },
  {
    appName: "Webcraft",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/webcraft/src/master/",
    shortDesc: "Website backoffice khusus untuk anak IDN",
    longDesc:
      "Di website ini anak IDN bisa mengatur konfigurasi yang nantinya akan muncul pada aplikasi yang digunakan oleh user external. Salah satu contohnya bisa untuk menyalakan/mematikan fitur di sekolah tertentu.",
    techStacks: ["Go", "Gin", "HTML", "CSS", "Bootstrap CSS", "jQuery"],
    deployment: "AWS",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://webcraft.infradigital.net",
        healthCheckUrl: "https://webcraft.infradigital.net/ping",
      },
      {
        name: "Production Instance",
        appUrl: "https://webcraft.infradigital.io",
        healthCheckUrl: "https://webcraft.infradigital.io/ping",
      },
    ],
  },
  {
    appName: "Kepsek Report",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/kepsek-report/src/master/",
    shortDesc: "Website untuk eagle view Kepala Sekolah",
    longDesc:
      "Di website ini Kepala Sekolah akan mendapatkan gambaran jelas progres adopsi fitur IDN di sekolah tersebut. Selain itu, ada juga fitur poin yang nantinya bisa digunakan untuk fitur-fitur lain.",
    techStacks: ["NodeJS", "ExpressJS", "SCSS", "Tailwind CSS", "AlpineJS"],
    deployment: "Heroku",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://pordi-evaluasi-stg.herokuapp.com",
        healthCheckUrl: "https://pordi-evaluasi-stg.herokuapp.com",
      },
      {
        name: "Production Instance",
        appUrl: "https://pordi-evaluasi.herokuapp.com/",
        healthCheckUrl: "https://pordi-evaluasi.herokuapp.com/",
      },
    ],
  },
  {
    appName: "Merchant Dashboard",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/shikamaru/src/master/",
    shortDesc:
      "[Shikamaru] Website untuk merchant melihat transaksi dan riwayat saldo",
    longDesc:
      "Website diperuntukan bagi merchant yang tergabung dengan IDN untuk melihat daftar transaksi dan saldo tersisa. Diantara merchant kita adalah Gopay, Tokopedia, Ayopop.",
    techStacks: ["RemixRun", "Tailwind CSS"],
    deployment: "Heroku",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://testadmin.infradigital.io",
        healthCheckUrl: "https://testadmin.infradigital.io/ping",
      },
      {
        name: "Production Instance",
        appUrl: "https://admin.infradigital.io",
        healthCheckUrl: "https://admin.infradigital.io/title"
      }
    ],
  },
  {
    appName: "Proxy Service",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/pordi-backend/src/master/",
    shortDesc: "Service penghubung antara server app & client facing app",
    longDesc: "",
    techStacks: ["Go", "Gin"],
    deployment: "AWS",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://sg.infradigital.net/pordi-proxy-mr",
        healthCheckUrl: "https://sg.infradigital.net/pordi-proxy-mr/ping",
      },
      {
        name: "Production Instance",
        appUrl: "https://sg.infradigital.io/pordi-proxy-mr",
        healthCheckUrl: "https://sg.infradigital.io/pordi-proxy-mr/ping",
      },
    ],
  },
  {
    appName: "Core Financial Service (CFS)",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/cfs/src/master/",
    shortDesc:
      "Service utama pengaturan data tagihan, pembayaran, settlement, dsb.",
    longDesc: "",
    techStacks: ["Go", "Gin"],
    deployment: "Heroku",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://testapi.infradigital.io",
        healthCheckUrl: "https://testapi.infradigital.io/ping",
      },
      {
        name: "Production Instance",
        appUrl: "https://api.infradigital.io",
        healthCheckUrl: "https://api.infradigital.io/ping",
      },
    ],
  },
  {
    appName: "User Management Service (UMS)",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/ums/src/master/",
    shortDesc: "Service pengatur user authorization",
    longDesc: "",
    techStacks: ["Go", "Gin"],
    deployment: "Heroku",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://ums-staging-idn.herokuapp.com",
        healthCheckUrl: "https://ums-staging-idn.herokuapp.com/ping",
      },
      {
        name: "Production Instance",
        appUrl: "https://ums-production-idn.herokuapp.com",
        healthCheckUrl: "https://ums-production-idn.herokuapp.com/ping",
      },
    ],
  },
  {
    appName: "School's Data Management System (SDMS)",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/pordi-backend/src/master/",
    shortDesc:
      "Service utama pengaturan data sekolah, siswa, kelas, guru, absensi, newsfeed, dsb.",
    longDesc: "",
    techStacks: ["Go", "Gin"],
    deployment: "AWS",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://sg.infradigital.net/sdms-mr",
        healthCheckUrl: "https://sg.infradigital.net/sdms-mr/ping",
      },
      {
        name: "Production Instance",
        appUrl: "https://sg.infradigital.io/sdms-mr",
        healthCheckUrl: "https://sg.infradigital.io/sdms-mr/ping",
      },
    ],
  },
  {
    appName: "Fund Disbursement Service (FDS)",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/fds/src/master/",
    shortDesc: "Service untuk pendistribusian uang",
    longDesc:
      "Service yang dibuat untuk keperluan sertifikasi Penyelenggara Transfer Dana (PTD) Bank Indonesia. As a Penyelenggara Transfer Dana, IDN will have the permission to send (disburse) money from their system to any bank accounts. To accomplish this IDN will need to have partnership with other institutions that provide such services. Those institutions for example Flip, direct connection with banks API, Doku etc. Stack : Go",
    techStacks: ["Go", "Gin", "Redis", "Flip API"],
    deployment: "",
    instances: [],
  },
  {
    appName: "Pelajar Shop Service (PSS)",
    sourceCodeUrl:
      "https://bitbucket.org/infradigitalnusantara/pss/src/master/",
    shortDesc: "Service untuk mengatur ecommerce IDN",
    longDesc: "",
    techStacks: ["Go"],
    deployment: "AWS",
    instances: [
      {
        name: "Staging Instance",
        appUrl: "https://testapi.infradigital.io",
        healthCheckUrl: "https://testapi.infradigital.io/ping",
      },
      {
        name: "Production Instance",
        appUrl: "https://api.infradigital.io",
        healthCheckUrl: "https://api.infradigital.io/ping",
      },
    ],
  },
  {
    appName: "This website",
    sourceCodeUrl: "https://github.com/AsadSaleh/madara",
    shortDesc: "[Madara] Service listing & monitoring",
    longDesc:
      "Karena As'ad sedih gak punya akses ke AWS, akhirnya dia bikin sendiri service listing dan monitoring ala-ala.",
    techStacks: ["RemixRun", "TailwindCSS"],
    deployment: "Netlify",
    instances: [],
  },
];
