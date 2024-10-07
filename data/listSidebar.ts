export default [{
    name : "Dashboard",
    icon : "ic:baseline-dashboard",
    sub :[
      {
        name : "Historical Penugasan",
        path : "/dashboard/historical-penugasan"
      }, {
        name : "Monitoring Rekomendasi",
        path : "/dashboard/monitoring-rekomendasi"
      }, {
        name : "Monitoring PDP",
        path : "/dashboard/monitoring-pdp"
      }  
    ]
  }, {
    name : "Perencanaan",
    icon : "ic:baseline-stacked-bar-chart",
    sub :[
      {
        name : "Risk Assessment",
        path : "/perencanaan/risk-assessment"
      }, {
        name : "PKPT",
        path : "/perencanaan/pkpt"
      }, {
        name : "Anggaran Audit",
        path : "/perencanaan/anggaran-audit"
      }  
    ]
  }, {
    name : "Pelaksanaan",
    icon : "ic:baseline-card-travel",
    sub :[
      {
        name : "Project Audit",
        path : "/pelaksanaan/project-audit"
      }, {
        name : "Perencanaan Audit",
        path : "/pelaksanaan/perencanaan-audit"
      }, {
        name : "Pelaksanaan Audit",
        path : "/pelaksanaan/pelaksanaan-audit"
      }  
    ]
  }, {
    name : "Approval",
    icon : "mingcute:check-circle-line",
    sub :[
      {
        name : "PKPT",
        path : "/approval/pkpt"
      }, {
        name : "Anggaran Audit",
        path : "/approval/anggaran-audit"
      }, {
        name : "Surat Tugas Audit",
        path : "/approval/surat-tugas-audit"
      }  
    ]
  }
]