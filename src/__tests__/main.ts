const TODO = null;

namespace Root{
  export namespace Common{ 
    export namespace Tanggal{
      export type Core = [Tahun, Bulan, Tanggal];
      type Tahun = number;
      type Bulan = number;
      type Tanggal = number;
    };
    export namespace Pagination{ 
      export namespace Impl { export type Core<TState> = {
        button_next: { input_click: (x: TState)=>TState },
        button_prev: { input_click: (x: TState)=>TState }
      }};
      export namespace State { export type Core = {
        index: number,
        max: number
      }};
    };
  }
  export namespace N1{ export type Core = {
    background: (
      |  {type: "tester/features/core/background/pengujian/tanggalMulai", value: [number, number, number]}
      |  {type: "tester/features/core/background/user/adanya", value: {id: string, nama: string}[],}
      |  {type: "tester/features/core/background/user/peran", value: {id: string, pembuatSuratTugas: boolean}[]}
      |  {type: "tester/features/core/background/user/lajur", value: string[]}
      |  {type: "tester/features/core/background/suratTugas/tanggal", value: [number, number, number]}
      |  {type: "tester/features/core/background/suratTugas/durasi", value: number}
      |  {type: "tester/features/core/background/suratTugas/menugaskan", value: Root.N1.Core["sut"]["state"]["core"]["server"]["users"]["list"]}
    )[],
    steps: (()=>(
      |  {type: "tester/features/core/steps/Jika Buat Surat Tugas"}
      |  {type: "tester/features/core/steps/Jika Otorisasi"}
      |  {type: "tester/features/core/steps/Jika Beberapa hari berikutnya, hanya 1 user yang melapor"}
      |  {type: "tester/features/core/steps/Maka Beberapa hari berikutnya, surat tugas merah"}
      |  {type: "tester/features/core/steps/Jika User lain ikut melapor"}
      |  {type: "tester/features/core/steps/Maka Surat tugas kuning"}
      |  {type: "tester/features/core/steps/Jika Otorisasi laporan"}
      |  {type: "tester/features/core/steps/Maka Surat tugas hijau"}
    ))[],
    sut: {
      state: {
        test: {
          tanggalMulai: Root.Common.Tanggal.Core,
          user: Root.N1.Core["sut"]["state"]["core"]["server"]["users"] & {lajur: Root.N1.Core["sut"]["state"]["core"]["server"]["st"]["lajur"]},
          st: {
            menugaskan: Root.N1.Core["sut"]["state"]["core"]["server"]["users"]["list"],
            tanggal: Root.Common.Tanggal.Core,
            durasi: number
          },
        },
        core: {
          server: Root.N6.Core["serverConnection"]["core"],
          clients: {
            id: string,
            sessionId: string,
            val: Root.N6.Core["core"]
          }[]
        },
      },
      handlers: {
        background: {
          pengujian: {
            tanggalMulai: (x: Root.N1.Core["sut"]["state"], val: Root.Common.Tanggal.Core)=>Root.N1.Core["sut"]["state"],
          },
          user: {
            adanya: (x: Root.N1.Core["sut"]["state"], val: {id: string, nama: string}[])=>Root.N1.Core["sut"]["state"],
            peran: (x: Root.N1.Core["sut"]["state"], val: {id: string, pembuatSuratTugas: boolean}[])=>Root.N1.Core["sut"]["state"],
            lajur: (x: Root.N1.Core["sut"]["state"], val: string[])=>Root.N1.Core["sut"]["state"],
          },
          suratTugas: {
            tanggal: (x: Root.N1.Core["sut"]["state"], val: Root.Common.Tanggal.Core)=>Root.N1.Core["sut"]["state"],
            durasi: (x: Root.N1.Core["sut"]["state"], val: number)=>Root.N1.Core["sut"]["state"],
            menugaskan: (x: Root.N1.Core["sut"]["state"], val: Root.N1.Core["sut"]["state"]["core"]["server"]["users"]["list"])=>Root.N1.Core["sut"]["state"],
          },
        },
        steps: {
          jikaBuatSuratTugas: (x: Root.N1.Core["sut"]["state"])=>Root.N1.Core["sut"]["state"],
          jikaOtorisasi: (x: Root.N1.Core["sut"]["state"])=>Root.N1.Core["sut"]["state"],
          jikaBeberapaHariBerikutnyaHanya1UserYangMelapor: (x: Root.N1.Core["sut"]["state"])=>Root.N1.Core["sut"]["state"],
          makaBeberapaHariBerikutnyaSuratTugasMerah: (x: Root.N1.Core["sut"]["state"])=>Root.N1.Core["sut"]["state"],
          jikaUserLainIkutMelapor: (x: Root.N1.Core["sut"]["state"])=>Root.N1.Core["sut"]["state"],
          makaSuratTugasKuning: (x: Root.N1.Core["sut"]["state"])=>Root.N1.Core["sut"]["state"],
          jikaOtorisasiLaporan: (x: Root.N1.Core["sut"]["state"])=>Root.N1.Core["sut"]["state"],
          makaSuratTugasHijau: (x: Root.N1.Core["sut"]["state"])=>Root.N1.Core["sut"]["state"],
        },
      },
    },
  }}
  export namespace N2{ export type Core = {
    jalankanDalamKonteks: (
      (
        x: Root.N1.Core["sut"]["state"],
        context: (
            ["Pembuat Surat Tugas"]
          | ["Otorisasi"]
          | ["User Pertama yang Ditugaskan"]
          | ["Semua yang Terlibat"]
          | ["Yang Ditugaskan (Selain yang Pertama)"]
          | ["User", string]
        ),
        fn: (x: Root.N1.Core["sut"]["state"], impl: Root.N5.Core<Root.N1.Core["sut"]["state"]>)=>Root.N1.Core["sut"]["state"],
      )=>Root.N1.Core["sut"]["state"]
    ),
    beberapaHariKemudian: {
      saatHariPertamaPelaksanaan: (x: Root.N1.Core["sut"]["state"])=>Root.N1.Core["sut"]["state"],
      saatHariPertamaKeterlambatan: (x: Root.N1.Core["sut"]["state"])=>Root.N1.Core["sut"]["state"],
    },
  }}
  export namespace N3{ export type Core = {
    selaku: {
      pembuatSuratTugas: (
        (
          x: Root.N1.Core["sut"]["state"], 
          user_id: string, 
          fn: (
            x: Root.N1.Core["sut"]["state"],
            impl: Root.N5.Core<Root.N1.Core["sut"]["state"]>,
          )=>Root.N1.Core["sut"]["state"]
        )=>Root.N1.Core["sut"]["state"]
      ),
      otorisasi: Root.N3.Core["selaku"]["pembuatSuratTugas"],
      ditugaskan: Root.N3.Core["selaku"]["pembuatSuratTugas"],
      user: Root.N3.Core["selaku"]["pembuatSuratTugas"],
    }
  }}
  export namespace N4{ export type Core = {
    specificallyAtClient: Root.N3.Core["selaku"]["pembuatSuratTugas"]
  }}
  export namespace N5{ export type Core<TState> = {
    core: {
      login: {
        textbox_username: { input_isi: (x: TState, val: string)=>TState },
        textbox_password: { input_isi: (x: TState, val: string)=>TState },
        button_login: { input_click: (x: TState)=>TState },
      },
      index: {
        visit: (x: TState)=>TState,
        button_st: { input_click: (x: TState)=>TState }
      },
      index_st: {
        table: { isi: {
          read: (x: TState)=>[TState, {id: string, warna: "PUTIH"|"MERAH"|"KUNING"|"HIJAU", kolom_menugaskan: {id: string, nama: string}[], kolom_tanggal: Root.Common.Tanggal.Core, kolom_durasi: number}[]],
          baris: { kolom_tindakan: { 
            button_otorisasi: { input_click: (x: TState, index: number)=>TState },
            button_lapor: { input_click: (x: TState, index: number)=>TState },
            button_otorisasiLaporan: { input_click: (x: TState, index: number)=>TState },
          }}
        } }
        button_buat:{ input_click: (x: TState)=>TState }
      },
      index_st_buat: {
        bagian_tanggal: {
          bagian_tanggal: { input_isi: (x: TState, isi: number)=>TState },
          bagian_bulan: { input_isi: (x: TState, isi: number)=>TState },
          bagian_tahun: { input_isi: (x: TState, isi: number)=>TState },
        },
        bagian_menugaskan: {
          button_tambah:{ input_click: (x: TState)=>TState }
        },
        bagian_durasi: { input_isi: (x: TState, isi: number)=>TState },
        button_ok:{ input_click: (x: TState)=>TState }
      },
      index_st_buat_menugaskan_tambah: {
        visit: (x: TState)=>TState,
        table: { isi: {
          read: (x: TState)=>[TState, {id: string, nama: string}[]],
          pagination: Root.Common.Pagination.Impl.Core<TState>,
          baris: { kolom_tindakan: { 
            button_tambah: { input_click: (x: TState, index: number)=>TState },
          }}
        } }
      },
      index_st_buat_konfirmasi: {
        button_ok:{ input_click: (x: TState)=>TState }
      },
      index_st_buat_informasi: {
        button_ok:{ input_click: (x: TState)=>TState }
      },
      index_st_otorisasi: {
        bagian_status: {
          pilihan_setujui: { input_centang:(x: TState)=>TState }
        },
        button_ok: { input_click:(x: TState)=>TState }
      },
      index_st_otorisasi_konfirmasi: { button_ok: { input_click:(x: TState)=>TState } },
      index_st_otorisasi_informasi: { button_ok: { input_click:(x: TState)=>TState } },
      index_st_lapor: {
        bagian_dokumen: { input_isi: (x: TState, isi: string)=>TState },
        button_ok: { input_click:(x: TState)=>TState },
      },
      index_st_lapor_konfirmasi: {
        button_ok: { input_click:(x: TState)=>TState }
      },
      index_st_lapor_informasi: {
        button_ok: { input_click:(x: TState)=>TState }
      },
      index_st_otorisasiLaporan: {
        bagian_status: {
          pilihan_setujui: { input_centang:(x: TState)=>TState }
        },
        button_ok: { input_click:(x: TState)=>TState }
      },
      index_st_otorisasiLaporan_konfirmasi: { button_ok: { input_click:(x: TState)=>TState } },
      index_st_otorisasiLaporan_informasi: { button_ok: { input_click:(x: TState)=>TState } },
    },
    helpers: {
      index_st: {
        target: {
          lapor: (x: TState)=>TState,
          otorisasi: (x: TState)=>TState,
          otorisasiLaporan: (x: TState)=>TState,
          cekWarna: (x: TState, warna: "PUTIH"|"MERAH"|"KUNING"|"HIJAU")=>[TState, boolean],
        }
      },
      index_st_baru: { isiPenugasan: (x: TState)=>TState },
      index_st_lapor: {
        bagian_dokumen: { input_isi: (x: TState)=>TState },
      }
    },
  }}
  export namespace N6{ export type Core = {
    serverConnection: {
      sessionId: string,
      core: {
        tanggal: Root.Common.Tanggal.Core,
        users: { 
          list: {id: string, nama: string}[],
          peran: {id: string, pembuatSuratTugas: boolean}[],
        },
        sessions: {userId: string, sessionId: string}[],
        st: {
          lajur: string[],
          list : {id: string, menugaskan: {id: string, nama: string}[], tanggal: Root.Common.Tanggal.Core, durasi: number, otorisasi: string[], laporan: {dokumen: {userId: string, val: string}[], otorisasi: string[]}[]}[],
        }
      }
    },
    core: {
      address: (
        | "/login"
        |  "/"
        |  "/st"
        |  "/st/buat"
        |  "/st/buat/menugaskan/tambah"
        |  "/st/buat/konfirmasi"
        |  "/st/buat/informasi"
        |  "/st/otorisasi"
        |  "/st/otorisasi/konfirmasi"
        |  "/st/otorisasi/informasi"
        |  "/st/lapor"
        |  "/st/lapor/konfirmasi"
        |  "/st/lapor/informasi"
        |  "/st/otorisasi_laporan"
        |  "/st/otorisasi_laporan/konfirmasi"
        |  "/st/otorisasi_laporan/informasi"
      ),
      page: {
        login: { username: string, password: string },
        index_st: {
          table:{ isi: {
            pagination: Root.Common.Pagination.State.Core,
            baris: ({
              id: string,
              warna: "PUTIH" | "MERAH" | "KUNING" | "HIJAU", 
              kolom_menugaskan: { id: string; nama: string; }[],
              kolom_tanggal: Root.Common.Tanggal.Core, 
              kolom_durasi: number,
            }[]) 
          }}
        },
        index_st_buat: {
          tanggal: Root.Common.Tanggal.Core,
          durasi: number,
          menugaskan: {id: string, nama: string}[]
        },
        index_st_buat_menugaskan_tambah: {
          table: {isi: {
            pagination: Root.Common.Pagination.State.Core,
            baris: ({
              id: string,
              nama: string
            })[]
          }}
        },
        index_st_otorisasi: { id: string, status: boolean, },
        index_st_lapor: { id: string, dokumen: string, }
        index_st_otorisasiLaporan: { id: string, status: boolean, },
      }
    }
  }}
  export namespace N7{ export type Core<TState> = {
    user: {
      login: (x: TState, username: string, password: string)=>TState,
      read: (x: TState, index: number)=>[TState, number, Root.N6.Core["core"]["page"]["index_st_buat_menugaskan_tambah"]["table"]["isi"]["baris"]],
    },
    st: {
      read: (x: TState, index: number)=>[TState, number, Root.N6.Core["core"]["page"]["index_st"]["table"]["isi"]["baris"]],
      buat: (x: TState, val: Root.N6.Core["core"]["page"]["index_st_buat"])=>TState,
      otorisasi: (x: TState, val: Root.N6.Core["core"]["page"]["index_st_otorisasi"])=>TState,
      lapor: (x: TState, val: Root.N6.Core["core"]["page"]["index_st_lapor"])=>TState,
      otorisasiLaporan: (x: TState, val: Root.N6.Core["core"]["page"]["index_st_otorisasi"])=>TState,
    }
  }}
};

[null]
.map((v):Root.N7.Core<Root.N6.Core["serverConnection"]>=>(
  [null]
  .map((v0):((x: Root.N6.Core["serverConnection"])=>string)=>((x)=>(
    x.core.sessions.find((v1)=>v1.sessionId==x.sessionId).userId
  )))
  .map((v0):Root.N7.Core<Root.N6.Core["serverConnection"]>=>({
    user: {
      login: (x, username, password)=>(
        [null]
        .map((_v1)=>x)
        .map((v1)=>{
          let sessionId = "SESSION"+username;
          v1.core.sessions.push({userId: username, sessionId: sessionId});
          v1.sessionId = sessionId;
          return v1;
        })
        .reduce((_p1, v1)=>v1)
      ),
      read: (x, index)=>(
        [x, x.core.users.list.length, x.core.users.list.slice(index, index+11)]
      ),
    },
    st: {
      read: (x, index)=>(
        [x, x.core.st.list.length, x.core.st.list.slice(index, index+11).map((v1)=>({
          id: v1.id, 
          warna: (()=>{
            let otorisasi = v1.otorisasi.length == x.core.st.lajur.length;
            let epochSekarang = new Date(x.core.tanggal[0], x.core.tanggal[1], x.core.tanggal[2]).getTime();
            let epochTerlambat = (()=>{
              let ret = new Date(v1.tanggal[0], v1.tanggal[1], v1.tanggal[2]);
              ret.setDate(v1.tanggal[2] + v1.durasi + 1);
              return ret.getTime();
            })();
            let laporanSudahAdaSatu = v1.laporan.length > 0;
            let laporanSudahSelesai = laporanSudahAdaSatu && v1.laporan[v1.laporan.length-1].dokumen.length == v1.menugaskan.length;
            let lewatDurasi = epochSekarang >= epochTerlambat;
            let laporanDiotorisasi = laporanSudahAdaSatu && v1.laporan[v1.laporan.length-1].otorisasi.length == x.core.st.lajur.length;
            let merah = otorisasi && !laporanSudahSelesai && lewatDurasi;
            let kuning = laporanSudahSelesai && !laporanDiotorisasi;
            let hijau = laporanSudahSelesai && laporanDiotorisasi;
            if(merah) return "MERAH";
            else if(kuning) return "KUNING";
            else if(hijau) return "HIJAU";
            else return "PUTIH";
          })(), 
          kolom_menugaskan: v1.menugaskan, 
          kolom_tanggal: v1.tanggal,  
          kolom_durasi: v1.durasi,
        }))]
      ),
      buat: (x, val)=>{
        x.core.st.list.push({...val, id: "ST"+x.core.st.list.length, otorisasi: [], laporan: [],});
        return x;
      },
      otorisasi: (x, val)=>(
        [v0(x)]
        .map((v1)=>{
          x.core.st.list = x.core.st.list.map((v2)=>(
            v2.id==val.id
            ?
            {...v2, otorisasi: v2.otorisasi.concat([v1]),}
            :
            v2
          ));
          return x;
        })
        .reduce((_p1, v1)=>v1)
      ),
      lapor: (x, val)=>(
        [v0(x)]
        .map((v1)=>{
          x.core.st.list = x.core.st.list.map((v2)=>(
            v2.id==val.id
            ?
            {
              ...v2,
              laporan: (
                v2.laporan.length>0
                ?
                (
                  v2.laporan.map((v3, k3)=>(
                    k3==v2.laporan.length-1
                    ?
                    {...v3, dokumen: v3.dokumen.concat([{userId: v1, val: val.dokumen}]),}
                    :
                    v3
                  ))
                )
                :
                [{dokumen: [{userId: v1, val: val.dokumen}], otorisasi: []}]
              ),
            }
            :
            v2
          ));
          return x;
        })
        .reduce((_p1, v1)=>v1)
      ),
      otorisasiLaporan: (x, val)=>(
        [v0(x)]
        .map((v1)=>{
          x.core.st.list = x.core.st.list.map((v2)=>(
            v2.id==val.id
            ?
            {
              ...v2,
              laporan: (
                v2.laporan.map((v3, k3)=>(
                  k3==v2.laporan.length-1
                  ?
                  {...v3, otorisasi: v3.otorisasi.concat([v1]),}
                  :
                  v3
                ))
              ),
            }
            :
            v2
          ));
          return x;
        })
        .reduce((_p1, v1)=>v1)
      ),
    }
  }))
  .reduce((_p0, v0)=>v0)
))
.map((v):Root.N5.Core<Root.N6.Core>["core"]=>(
  [null]
  .map((_v0)=>({
    index: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/";
      return x;
    } },
    index_st: { visit: (x:Root.N6.Core):Root.N6.Core=>(
      [null]
      .map((_v1)=>x)
      .map((v2)=>{
        v2.core.page.index_st.table.isi.pagination.index = 0;
        return v2;
      })
      .map((v2)=>(
        [null]
        .map((_v3)=>v.st.read(v2.serverConnection, v2.core.page.index_st.table.isi.pagination.index))
        .map((v3):Root.N6.Core=>(
          [null]
          .map((_v4):Root.N6.Core=>({...v2, serverConnection: v3[0],}))
          .map((v4):Root.N6.Core=>{
            v4.core.page.index_st.table.isi.pagination.max = v3[1];
            v4.core.page.index_st.table.isi.baris = v3[2];
            return v4;
          })
          .reduce((_p4, v4)=>v4)
        ))
        .reduce((_p3, v3)=>v3)
      ))
      .map((v2)=>{
        v2.core.address = "/st";
        return v2
      })
      .reduce((_p2, v2)=>v2)
    ) },
    index_st_buat: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/buat";
      return x;
    } },
    index_st_buat_menugaskan_tambah: { visit: (x:Root.N6.Core):Root.N6.Core=>(
      [null]
      .map((_v1)=>x)
      .map((v2)=>{
        v2.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.index = 0;
        return v2;
      })
      .map((v2)=>(
        [null]
        .map((_v3)=>v.user.read(v2.serverConnection, v2.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.index))
        .map((v3):Root.N6.Core=>(
          [null]
          .map((_v4):Root.N6.Core=>({...v2, serverConnection: v3[0]}))
          .map((v4):Root.N6.Core=>{
            v4.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.max = v3[1];
            v4.core.page.index_st_buat_menugaskan_tambah.table.isi.baris = v3[2];
            return v4;
          })
          .reduce((_p4, v4)=>v4)
        ))
        .reduce((_p3, v3)=>v3)
      ))
      .map((v2)=>{
        v2.core.address = "/st/buat/menugaskan/tambah";
        return v2
      })
      .reduce((_p2, v2)=>v2)
    ) },
    index_st_buat_konfirmasi: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/buat/konfirmasi";
      return x;
    } },
    index_st_buat_informasi: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/buat/informasi";
      return x;
    } },
    index_st_otorisasi: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/otorisasi";
      return x;
    } },
    index_st_otorisasi_konfirmasi: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/otorisasi/konfirmasi";
      return x;
    } },
    index_st_otorisasi_informasi: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/otorisasi/informasi";
      return x;
    } },
    index_st_lapor: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/lapor";
      return x;
    } },
    index_st_lapor_konfirmasi: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/lapor/konfirmasi";
      return x;
    } },
    index_st_lapor_informasi: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/lapor/informasi";
      return x;
    } },
    index_st_otorisasiLaporan: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/otorisasi_laporan";
      return x;
    } },
    index_st_otorisasiLaporan_konfirmasi: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/otorisasi_laporan/konfirmasi";
      return x;
    } },
    index_st_otorisasiLaporan_informasi: { visit: (x:Root.N6.Core):Root.N6.Core=>{
      x.core.address = "/st/otorisasi_laporan/informasi";
      return x;
    } },
  }))
  .map((v0):Root.N5.Core<Root.N6.Core>["core"]=>({
    login: {
      textbox_username: { input_isi: (x, val)=>{
        x.core.page.login.username = val;
        return x;
      } },
      textbox_password: { input_isi: (x, val)=>{
        x.core.page.login.password = val;
        return x;
      } },
      button_login: { input_click: (x)=>(
        [null]
        .map((_v1)=>x)
        .map((v1)=>(
          [null]
          .map((_v2)=>v1.serverConnection)
          .map((v2)=>v.user.login(v2, v1.core.page.login.username, v1.core.page.login.password))
          .map((v2):Root.N6.Core=>({...v1, serverConnection: v2,}))
          .reduce((_p2, v2)=>v2)
        ))
        .reduce((_p1, v1)=>v1)
      ) },
    },
    index: {
      visit: v0.index.visit,
      button_st: { input_click: v0.index_st.visit }
    },
    index_st: {
      table: { isi: {
        read: (x)=>([x, x.core.page.index_st.table.isi.baris]),
        baris: { kolom_tindakan: { 
          button_otorisasi: { input_click: (x, index)=>{
            x.core.page.index_st_otorisasi.id = x.core.page.index_st.table.isi.baris[index].id;
            return v0.index_st_otorisasi.visit(x);
          } },
          button_lapor: { input_click: (x, index)=>{
            x.core.page.index_st_lapor.id = x.core.page.index_st.table.isi.baris[index].id;
            return v0.index_st_lapor.visit(x);
          } },
          button_otorisasiLaporan: { input_click: (x, index)=>{
            x.core.page.index_st_otorisasiLaporan.id = x.core.page.index_st.table.isi.baris[index].id;
            return v0.index_st_otorisasiLaporan.visit(x);
          } },
        }}
      } },
      button_buat:{ input_click: v0.index_st_buat.visit },
    },
    index_st_buat: {
      bagian_tanggal: {
        bagian_tanggal: { input_isi: (x, isi)=>{
          x.core.page.index_st_buat.tanggal[2] = isi;
          return x;
        } },
        bagian_bulan: { input_isi: (x, isi)=>{
          x.core.page.index_st_buat.tanggal[1] = isi;
          return x;
        } },
        bagian_tahun: { input_isi: (x, isi)=>{
          x.core.page.index_st_buat.tanggal[0] = isi;
          return x;
        } },
      },
      bagian_menugaskan: {
        button_tambah:{ input_click: v0.index_st_buat_menugaskan_tambah.visit }
      },
      bagian_durasi: { input_isi: (x, isi)=>{
        x.core.page.index_st_buat.durasi = isi;
        return x;
      } },
      button_ok:{ input_click: v0.index_st_buat_konfirmasi.visit }
    },
    index_st_buat_menugaskan_tambah: {
      visit: v0.index_st_buat_menugaskan_tambah.visit,
      table: { isi: {
        read: (x)=>[x, x.core.page.index_st_buat_menugaskan_tambah.table.isi.baris],
        baris: { kolom_tindakan: { 
          button_tambah: { input_click: (x, index)=>{
            x.core.page.index_st_buat.menugaskan.push(
              [null]
              .map((v1)=>x.core.page.index_st_buat_menugaskan_tambah.table.isi.baris[index])
              .map((v1)=>({
                id: v1.id,
                nama: v1.nama
              }))
              .reduce((_p1, v1)=>v1)
            );
            return x;
          } },
        }},
        pagination: {
          button_next: { input_click: (x)=>(
            [null]
            .map((_v1)=>x)
            .map((v1)=>(
              (v1.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.index + 1) < v1.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.max
              ?
              [null]
              .map((_v2)=>v1)
              .map((v2)=>{
                v2.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.index = v2.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.index + 1;
                return v2;
              })
              .map((v2)=>(
                [null]
                .map((_v3)=>v.user.read(v2.serverConnection, v2.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.index))
                .map((v3):Root.N6.Core=>(
                  [null]
                  .map((_v4):Root.N6.Core=>({...v2, serverConnection: v3[0],}))
                  .map((v4):Root.N6.Core=>{
                    v4.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.max = v3[1];
                    v4.core.page.index_st_buat_menugaskan_tambah.table.isi.baris = v3[2];
                    return v4;
                  })
                  .reduce((_p4, v4)=>v4)
                ))
                .reduce((_p3, v3)=>v3)
              ))
              .reduce((_p2, v2)=>v2)
              :
              v1
            ))
            .reduce((_p2, v2)=>v2)
          ) },
          button_prev: { input_click: (x)=>(
            [null]
            .map((_v1)=>x)
            .map((v1)=>(
              (v1.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.index - 1) > 0
              ?
              [null]
              .map((_v2)=>v1)
              .map((v2)=>{
                v2.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.index = v2.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.index - 1;
                return v2;
              })
              .map((v2)=>(
                [null]
                .map((_v3)=>v.user.read(v2.serverConnection, v2.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.index))
                .map((v3):Root.N6.Core=>(
                  [null]
                  .map((_v4):Root.N6.Core=>({...v2, serverConnection: v3[0],}))
                  .map((v4):Root.N6.Core=>{
                    v4.core.page.index_st_buat_menugaskan_tambah.table.isi.pagination.max = v3[1];
                    v4.core.page.index_st_buat_menugaskan_tambah.table.isi.baris = v3[2];
                    return v4;
                  })
                  .reduce((_p4, v4)=>v4)
                ))
                .reduce((_p3, v3)=>v3)
              ))
              .reduce((_p2, v2)=>v2)
              :
              v1
            ))
            .reduce((_p2, v2)=>v2)
          ) },
        }
      }}
    },
    index_st_buat_konfirmasi: {
      button_ok:{ input_click: (x)=>(
        [null]
        .map((_v1)=>v.st.buat(x.serverConnection, x.core.page.index_st_buat))
        .map((v1)=>({serverConnection: v1, core: x.core}))
        .map((v1)=>v0.index_st_buat_informasi.visit(v1))
        .reduce((_p1, v1)=>v1)
      ) }
    },
    index_st_buat_informasi: {
      button_ok:{ input_click: v0.index_st.visit }
    },
    index_st_otorisasi: {
      bagian_status: {
        pilihan_setujui: { input_centang: (x)=>{
          x.core.page.index_st_otorisasi.status = true;
          return x;
        } }
      },
      button_ok: { input_click: v0.index_st_otorisasi_konfirmasi.visit }
    },
    index_st_otorisasi_konfirmasi: { button_ok: { input_click: (x)=>(
      [null]
      .map((_v1)=>v.st.otorisasi(x.serverConnection, x.core.page.index_st_otorisasi))
      .map((v1)=>({serverConnection: v1, core: x.core}))
      .map((v1)=>v0.index_st_otorisasi_informasi.visit(v1))
      .reduce((_p1, v1)=>v1)
    ) } },
    index_st_otorisasi_informasi: { button_ok: { input_click: v0.index_st.visit } },
    index_st_lapor: {
      bagian_dokumen: { input_isi: (x, isi)=>{
        x.core.page.index_st_lapor.dokumen = isi;
        return x;
      } },
      button_ok: { input_click: v0.index_st_lapor_konfirmasi.visit },
    },
    index_st_lapor_konfirmasi: {
      button_ok: { input_click: (x)=>(
        [null]
        .map((_v1)=>v.st.lapor(x.serverConnection, x.core.page.index_st_lapor))
        .map((v1)=>({serverConnection: v1, core: x.core}))
        .map((v1)=>v0.index_st_lapor_informasi.visit(v1))
        .reduce((_p1, v1)=>v1)
      ) }
    },
    index_st_lapor_informasi: {
      button_ok: { input_click: v0.index_st.visit }
    },
    index_st_otorisasiLaporan: {
      bagian_status: {
        pilihan_setujui: { input_centang: (x)=>{
          x.core.page.index_st_otorisasiLaporan.status = true;
          return x;
        } }
      },
      button_ok: { input_click: v0.index_st_otorisasiLaporan_konfirmasi.visit }
    },
    index_st_otorisasiLaporan_konfirmasi: { button_ok: { input_click: (x)=>(
      [null]
      .map((_v1)=>v.st.otorisasiLaporan(x.serverConnection, x.core.page.index_st_otorisasiLaporan))
      .map((v1)=>({serverConnection: v1, core: x.core}))
      .map((v1)=>v0.index_st_otorisasiLaporan_informasi.visit(v1))
      .reduce((_p1, v1)=>v1)
    ) } },
    index_st_otorisasiLaporan_informasi: { button_ok: { input_click: v0.index_st.visit } }
  }))
  .reduce((_p0, v0)=>v0)
))
.map((v):((userId: string)=>Root.N5.Core<Root.N1.Core["sut"]["state"]>)=>(userId)=>(
  [null]
  .map((v0)=>({
    from: (x: Root.N1.Core["sut"]["state"]):Root.N6.Core=>(
      [null]
      .map((_v1)=>x.core.clients.find((v2)=>v2.id==userId))
      .map((v1):Root.N6.Core=>({
        core: v1.val,
        serverConnection: {sessionId: v1.sessionId, core: x.core.server}
      }))
      .reduce((_p1, v1)=>v1)
    ),
    to: (x: Root.N1.Core["sut"]["state"], x0: Root.N6.Core):Root.N1.Core["sut"]["state"]=>(
      [null]
      .map((_v1):Root.N1.Core["sut"]["state"]=>({
        ...x,
        core: {
          server: x0.serverConnection.core,
          clients: x.core.clients.map((v2):Root.N1.Core["sut"]["state"]["core"]["clients"][-1]=>{
            if(v2.id == userId) {return {...v2, sessionId: x0.serverConnection.sessionId, val: x0.core}}
            else {return v2};
          })
        },        
      }))
      .reduce((_p1, v1)=>v1)
    )
  }))
  .map((v0)=>({
    ...v0,
    fromTo: (x: Root.N1.Core["sut"]["state"], fn: (x: Root.N6.Core, impl: Root.N5.Core<Root.N6.Core>["core"])=>Root.N6.Core)=>(
      [null]
      .map((v1)=>v0.from(x))
      .map((v1)=>fn(v1, v))
      .map((v1)=>v0.to(x, v1))
      .reduce((_p1, v1)=>v1)
    ),
  }))
  .map((v0):(Root.N5.Core<Root.N1.Core["sut"]["state"]>)=>(
    [null]
    .map((_v1):(Root.N5.Core<Root.N1.Core["sut"]["state"]>["core"])=>({
      login: {
        textbox_username: { input_isi: (x, val)=>v0.fromTo(x, (x, impl)=>impl.login.textbox_username.input_isi(x, val)) },
        textbox_password: { input_isi: (x, val)=>v0.fromTo(x, (x, impl)=>impl.login.textbox_password.input_isi(x, val)) },
        button_login: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.login.button_login.input_click(x)) },
      },
      index: {
        visit: (x)=>v0.fromTo(x, (x, impl)=>impl.index.visit(x)),
        button_st: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index.button_st.input_click(x)) },
      },
      index_st: {
        table: { isi: {
          read: (x)=>(
            [null]
            .map((_v2)=>x)
            .map((v2)=>v0.from(v2))
            .map((v2)=>v.index_st.table.isi.read(v2))
            .map((v2)=>(
              [null]
              .map((_v3)=>v0.to(x, v2[0]))
              .map((v3)=>[v3, v2[1]] as [typeof v3, typeof v2[1]])
              .reduce((_p3, v3)=>v3)
            ))
            .reduce((_p2, v2)=>v2)
          ),
          baris: { kolom_tindakan: { 
            button_otorisasi: { input_click: (x, index)=>v0.fromTo(x, (x, impl)=>impl.index_st.table.isi.baris.kolom_tindakan.button_otorisasi.input_click(x, index)) },
            button_lapor: { input_click: (x, index)=>v0.fromTo(x, (x, impl)=>impl.index_st.table.isi.baris.kolom_tindakan.button_lapor.input_click(x, index)) },
            button_otorisasiLaporan: { input_click: (x, index)=>v0.fromTo(x, (x, impl)=>impl.index_st.table.isi.baris.kolom_tindakan.button_otorisasiLaporan.input_click(x, index)) },
          }}
        }},
        button_buat:{ input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st.button_buat.input_click(x)) }
      },
      index_st_buat: {
        bagian_tanggal: {
          bagian_tanggal: { input_isi: (x, isi)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat.bagian_tanggal.bagian_tanggal.input_isi(x, isi)) },
          bagian_bulan: { input_isi: (x, isi)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat.bagian_tanggal.bagian_bulan.input_isi(x, isi)) },
          bagian_tahun: { input_isi: (x, isi)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat.bagian_tanggal.bagian_tahun.input_isi(x, isi)) },
        },
        bagian_menugaskan: {
          button_tambah:{ input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat.bagian_menugaskan.button_tambah.input_click(x)) }
        },
        bagian_durasi: { input_isi: (x, isi)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat.bagian_durasi.input_isi(x, isi)) },
        button_ok:{ input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat.button_ok.input_click(x)) }
      },
      index_st_buat_menugaskan_tambah: {
        visit: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat_menugaskan_tambah.visit(x)),
        table: { isi: {
          read: (x)=>(
            [null]
            .map((_v2)=>x)
            .map((v2)=>v0.from(v2))
            .map((v2)=>v.index_st_buat_menugaskan_tambah.table.isi.read(v2))
            .map((v2)=>(
              [null]
              .map((_v3)=>v0.to(x, v2[0]))
              .map((v3)=>[v3, v2[1]] as [typeof v3, typeof v2[1]])
              .reduce((_p3, v3)=>v3)
            ))
            .reduce((_p2, v2)=>v2)
          ),
          pagination: {
            button_prev: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat_menugaskan_tambah.table.isi.pagination.button_prev.input_click(x)) },
            button_next: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat_menugaskan_tambah.table.isi.pagination.button_next.input_click(x)) },
          },
          baris: { kolom_tindakan: { 
            button_tambah: { input_click: (x, index)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat_menugaskan_tambah.table.isi.baris.kolom_tindakan.button_tambah.input_click(x, index)) },
          }}
        } }
      },
      index_st_buat_konfirmasi: {
        button_ok:{ input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat_konfirmasi.button_ok.input_click(x)) }
      },
      index_st_buat_informasi: {
        button_ok:{ input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_buat_informasi.button_ok.input_click(x)) }
      },
      index_st_otorisasi: {
        bagian_status: {
          pilihan_setujui: { input_centang: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_otorisasi.bagian_status.pilihan_setujui.input_centang(x)) }
        },
        button_ok: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_otorisasi.button_ok.input_click(x)) }
      },
      index_st_otorisasi_konfirmasi: { button_ok: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_otorisasi_konfirmasi.button_ok.input_click(x)) } },
      index_st_otorisasi_informasi: { button_ok: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_otorisasi_informasi.button_ok.input_click(x)) } },
      index_st_lapor: {
        bagian_dokumen: { input_isi: (x, isi)=>v0.fromTo(x, (x, impl)=>impl.index_st_lapor.bagian_dokumen.input_isi(x, isi)) },
        button_ok: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_lapor.button_ok.input_click(x)) },
      },
      index_st_lapor_konfirmasi: {
        button_ok: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_lapor_konfirmasi.button_ok.input_click(x)) }
      },
      index_st_lapor_informasi: {
        button_ok: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_lapor_informasi.button_ok.input_click(x)) }
      },
      index_st_otorisasiLaporan: {
        bagian_status: {
          pilihan_setujui: { input_centang: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_otorisasiLaporan.bagian_status.pilihan_setujui.input_centang(x)) }
        },
        button_ok: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_otorisasiLaporan.button_ok.input_click(x)) }
      },
      index_st_otorisasiLaporan_konfirmasi: { button_ok: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_otorisasiLaporan_konfirmasi.button_ok.input_click(x)) } },
      index_st_otorisasiLaporan_informasi: { button_ok: { input_click: (x)=>v0.fromTo(x, (x, impl)=>impl.index_st_otorisasiLaporan_informasi.button_ok.input_click(x)) } },
    }))
    .map((v1):(Root.N5.Core<Root.N1.Core["sut"]["state"]>)=>({
      core: v1,
      helpers: {
        index_st: {
          target: (
            [null]
            .map((_v2):((x: Root.N1.Core["sut"]["state"])=>[Root.N1.Core["sut"]["state"], number])=>((x)=>(
              [null]
              .map((_v3)=>x)
              .map((v3)=>v1.index_st.table.isi.read(v3))
              .map((v3)=>(
                [null]
                .map((_v5)=>v3[1].reverse().findIndex((v6)=>(
                     v6.kolom_durasi == v3[0].test.st.durasi
                  && v6.kolom_tanggal.every((v7, k7)=>v3[0].test.st.tanggal[k7]==v7)
                  && v6.kolom_menugaskan.every((v7, k7)=>v3[0].test.st.menugaskan[k7].id==v7.id)
                )))
                .map((v5)=>(
                  [v3[0], v5] as [typeof v3[0], typeof v5]
                ))
                .reduce((_p4, v4)=>v4)
              ))
              .reduce((_p3, v3)=>v3)
            )))
            .map((v2):Root.N5.Core<Root.N1.Core["sut"]["state"]>["helpers"]["index_st"]["target"]=>({
              lapor: (x)=>(
                [null]
                .map((_v3)=>v2(x))
                .map((v3)=>v1.index_st.table.isi.baris.kolom_tindakan.button_lapor.input_click(v3[0], v3[1]))
                .reduce((_p3, v3)=>v3)
              ),
              otorisasi: (x)=>(
                [null]
                .map((_v3)=>v2(x))
                .map((v3)=>v1.index_st.table.isi.baris.kolom_tindakan.button_otorisasi.input_click(v3[0], v3[1]))
                .reduce((_p3, v3)=>v3)
              ),
              otorisasiLaporan: (x)=>(
                [null]
                .map((_v3)=>v2(x))
                .map((v3)=>v1.index_st.table.isi.baris.kolom_tindakan.button_otorisasiLaporan.input_click(v3[0], v3[1]))
                .reduce((_p3, v3)=>v3)
              ),
              cekWarna: (x, warna)=>(
                [null]
                .map((_v3)=>v2(x))
                .map((v3)=>(
                  [null]
                  .map((_v4)=>v0.from(v3[0]))
                  .map((v4)=>(
                    [v4, v3[1]] as [typeof v4, typeof v3[1]]
                  ))
                  .reduce((_p4, v4)=>v4)
                ))
                .map((v3)=>(
                  [null]
                  .map((_v4)=>v3[0].core.page.index_st.table.isi.baris[v3[1]].warna==warna)
                  .map((v4)=>(
                    [v3[0], v4] as [typeof v3[0], typeof v4]
                  ))
                  .reduce((_p4, v4)=>v4)
                ))
                .map((v3)=>{
                  if(!v3[1]) throw new Error;
                  return v3;
                })
                .map((v3)=>(
                  [null]
                  .map((v4)=>v0.to(x, v3[0]))
                  .map((v4)=>(
                    [null]
                    .map((_v5)=>v3[1])
                    .map((v5)=>(
                      [v4, v5] as [typeof v4, typeof v5]
                    ))
                    .reduce((_p5, v5)=>v5)
                  ))
                  .reduce((_p4, v4)=>v4)
                ))
                .reduce((_p3, v3)=>v3)
              ),
            }))
            .reduce((_p2, v2)=>v2)
          )
        },
        index_st_baru: { isiPenugasan: (x)=>(
          [null]
          .map((_v2)=>x)
          .map((v2)=>v2.test.st.menugaskan.reduce((p3, v3)=>(
            [null]
            .map((v4)=>p3)
            .map((v4)=>v1.index_st_buat.bagian_menugaskan.button_tambah.input_click(v4))
            .map((v4)=>{
              function recurse(p: typeof p3):typeof p3{
                return (
                  [null]
                  .map((_v5)=>p)
                  .map((v5)=>v1.index_st_buat_menugaskan_tambah.table.isi.read(v5))
                  .map((v5)=>(
                    [null]
                    .map((_v6)=>v5[1].findIndex((v7)=>v7.id==v3.id))
                    .map((v6)=>[v5[0], v6] as [typeof v5[0], typeof v6])
                    .reduce((_p6, v6)=>v6)
                  ))
                  .map((v5)=>(
                    v5[1]==-1
                    ?
                    [null]
                    .map((_v6)=>v5[0])
                    .map((v6)=>v1.index_st_buat_menugaskan_tambah.table.isi.pagination.button_next.input_click(v6))
                    .map((v6)=>recurse(v6))
                    .reduce((_p6, v6)=>v6)
                    :
                    v1.index_st_buat_menugaskan_tambah.table.isi.baris.kolom_tindakan.button_tambah.input_click(v5[0], v5[1])
                  ))
                  .reduce((_p5, v5)=>v5)
                );
              }
              return recurse;
            })
            .map((v4)=>(v4(p3)))
            .reduce((_p5, v5)=>v5)
          ), v2))
          .reduce((_p2, v2)=>v2)
        ) },
        index_st_lapor: { bagian_dokumen: { input_isi: (x)=>v1.index_st_lapor.bagian_dokumen.input_isi(x, "TEST") } }
      }
    }))
    .reduce((_p1, v1)=>v1)
  ))
  .reduce((_p0, v0)=>v0)
))
.map((v):Root.N4.Core=>({
  specificallyAtClient: (x, user_id, fn)=>fn(x, v(user_id))
}))
.map((v):Root.N3.Core=>({
  selaku: {
    pembuatSuratTugas: v.specificallyAtClient,
    otorisasi: v.specificallyAtClient,
    ditugaskan: v.specificallyAtClient,
    user: v.specificallyAtClient,
  }
}))
.map((v):Root.N2.Core=>({
  jalankanDalamKonteks: (
    [null]
    .map((_v0)=>({
      pembuatSuratTugas: (x: Root.N1.Core["sut"]["state"], fn: Parameters<Root.N2.Core["jalankanDalamKonteks"]>[2])=>(
        [null]
        .map((_v1)=>x)
        .map((v1)=>(
          [null]
          .map((_v2)=>v1.test.user.peran.find((v3)=>v3.pembuatSuratTugas).id)
          .map((v2)=>(
            [v1, v2] as [typeof v1, typeof v2]
          ))
          .reduce((_p2, v2)=>v2)
        ))
        .map((v1)=>(v.selaku.pembuatSuratTugas(v1[0], v1[1], fn)))
        .reduce((_p1, v1)=>v1)
      ),
      otorisasi: (x: Root.N1.Core["sut"]["state"], fn: Parameters<Root.N2.Core["jalankanDalamKonteks"]>[2])=>(
        [null]
        .map((_v1)=>x)
        .map((v1)=>(
          [null]
          .map((_v2)=>v1.core.server.st.lajur)
          .map((v2)=>(
            [v1, v2] as [typeof v1, typeof v2]
          ))
          .reduce((_p2, v2)=>v2)
        ))
        .map((v1)=>(v1[1].reduce((p2, v2)=>v.selaku.otorisasi(p2, v2, fn), v1[0])))
        .reduce((_p1, v1)=>v1)
      )
    }))
    .map((v0):Root.N2.Core["jalankanDalamKonteks"]=>(x, context, fn)=>{
      switch(context[0]){
        case "Pembuat Surat Tugas": return v0.pembuatSuratTugas(x, fn)
        case "Otorisasi": return v0.otorisasi(x, fn)
        case "User Pertama yang Ditugaskan": return (
          [null]
          .map((_v1)=>x)
          .map((v1)=>(
            [null]
            .map((_v2)=>v1.test.st.menugaskan[0].id)
            .map((v2)=>(
              [v1, v2] as [typeof v1, typeof v2]
            ))
            .reduce((_p2, v2)=>v2)
          ))
          .map((v1)=>v.selaku.ditugaskan(v1[0], v1[1], fn))
          .reduce((_p1, v1)=>v1)
        )
        case "Semua yang Terlibat": return (
          [null]
          .map((_v1)=>x)
          .map((v1)=>v0.pembuatSuratTugas(v1, fn))
          .map((v1)=>v0.otorisasi(v1, fn))
          .map((v1)=>(
            [null]
            .map((_v2)=>v1)
            .map((v2)=>(
              [null]
              .map((_v3)=>v2.test.st.menugaskan.map((v4)=>v4.id))
              .map((v3)=>(
                [v2, v3] as [typeof v2, typeof v3]
              ))
              .reduce((_p3, v3)=>v3)
            ))
            .reduce((_p2, v2)=>v2)
          ))
          .map((v1)=>(v1[1].reduce((p2, v2)=>v.selaku.ditugaskan(p2, v2, fn), v1[0])))
          .reduce((_p0, v0)=>v0)
        )
        case "Yang Ditugaskan (Selain yang Pertama)": return (
          [null]
          .map((_v1)=>x)
          .map((v1)=>(
            [null]
            .map((_v2)=>v1.test.st.menugaskan.filter((_v2, k2)=>k2!=0).map((v2)=>v2.id))
            .map((v2)=>(
              [v1, v2] as [typeof v1, typeof v2]
            ))
            .reduce((_p2, v2)=>v2)
          ))
          .map((v1)=>v1[1].reduce((p2, v2)=>v.selaku.ditugaskan(p2, v2, fn), v1[0]))
          .reduce((_p0, v0)=>v0)
        )
        case "User": return (
          [null]
          .map((_v1)=>x)
          .map((v1)=>v.selaku.user(v1, context[1], fn))
          .reduce((_p0, v0)=>v0)
        )
      }(((x: never)=>{throw new Error;})(context))
    })
    .reduce((_p0, v0)=>v0)
  ),
  beberapaHariKemudian: {
    saatHariPertamaPelaksanaan: (x)=>{
      x.core.server.tanggal = x.test.st.tanggal;
      return x;
    },
    saatHariPertamaKeterlambatan: (x)=>{
      let ret = new Date(x.test.st.tanggal[0], x.test.st.tanggal[1], x.test.st.tanggal[2]);
      ret.setDate(ret.getDate() + x.test.st.durasi + 1);
      x.core.server.tanggal = [ret.getFullYear(), ret.getMonth(), ret.getDate()];
      return x;
    },
  }
}))
.map((v):Root.N1.Core=>({
  background: (
    [null]
    .map((v0)=>new Array(9).fill(0).map((_v1, k1)=>({id: "USER"+(k1+1), nama: "User "+(k1+1)})))
    .map((v0):Root.N1.Core["background"]=>([
      {type: "tester/features/core/background/pengujian/tanggalMulai", value: [2021, 1, 1]},
      {type: "tester/features/core/background/user/adanya", value: v0},
      {type: "tester/features/core/background/user/peran", value: [{id: "USER1", pembuatSuratTugas: true}]},
      {type: "tester/features/core/background/user/lajur", value: ["USER2", "USER3"]},
      {type: "tester/features/core/background/suratTugas/tanggal", value: [2021, 1, 4]},
      {type: "tester/features/core/background/suratTugas/durasi", value: 4},
      {type: "tester/features/core/background/suratTugas/menugaskan", value: v0.filter((_v1, k1)=>k1==1||k1==2||k1==3)},
    ]))
    .reduce((_p0, v0)=>v0)
  ),
  steps: [
    ()=>({type: "tester/features/core/steps/Jika Buat Surat Tugas"}),
    ()=>({type: "tester/features/core/steps/Jika Otorisasi"}),
    ()=>({type: "tester/features/core/steps/Jika Beberapa hari berikutnya, hanya 1 user yang melapor"}),
    ()=>({type: "tester/features/core/steps/Maka Beberapa hari berikutnya, surat tugas merah"}),
    ()=>({type: "tester/features/core/steps/Jika User lain ikut melapor"}),
    ()=>({type: "tester/features/core/steps/Maka Surat tugas kuning"}),
    ()=>({type: "tester/features/core/steps/Jika Otorisasi laporan"}),
    ()=>({type: "tester/features/core/steps/Maka Surat tugas hijau"}),
  ],
  sut: {
    state: {
      test: {
        tanggalMulai: [2021, 1, 1],
        st: {
          menugaskan: [],
          tanggal: [2021, 1, 1],
          durasi: 0
        },
        user: {
          list: [],
          peran: [],
          lajur: [],
        }
      },
      core: {
        server: {
          tanggal: [2021, 1, 1],
          sessions: [],
          users: {
            list: [],
            peran: []
          },
          st: {
            lajur: [],
            list: [],
          }
        },
        clients: []
      }
    },
    handlers: {
      background: {
        pengujian: {
          tanggalMulai: (x, val)=>{
            x.test.tanggalMulai = val;
            x.core.server.tanggal = val;
            return x;
          },
        },
        user: {
          adanya: (x, val)=>{
            x.core.server.users.list = val.map((v0)=>({id: v0.id, nama: v0.nama}));
            x.core.clients = val.map((v0)=>({id: v0.id, sessionId: null, val: {
              address: "/login",
              page: {
                login: { username: "", password: "" },
                index_st: {
                  table:{ isi: {
                    pagination: {index: 0, max: 0},
                    baris: []
                  }}
                },
                index_st_buat: {
                  tanggal: [2021, 1, 1],
                  durasi: 0,
                  menugaskan: [],
                },
                index_st_buat_menugaskan_tambah: {
                  table: {isi: {
                    pagination: {index: 0, max: 0},
                    baris: []
                  }}
                },
                index_st_otorisasi: { id: null, status: null, },
                index_st_lapor: { id: null, dokumen: null, },
                index_st_otorisasiLaporan: { id: null, status: null, },
              }
            }}));
            x = val.reduce((p0, v0)=>(
              [null]
              .map((_v1)=>p0)
              .map((v1)=>(v.jalankanDalamKonteks(v1, ["User", v0.id], (x, impl)=>impl.core.login.textbox_username.input_isi(x, v0.id))))
              .map((v1)=>(v.jalankanDalamKonteks(v1, ["User", v0.id], (x, impl)=>impl.core.login.textbox_password.input_isi(x, "test1234"))))
              .map((v1)=>(v.jalankanDalamKonteks(v1, ["User", v0.id], (x, impl)=>impl.core.login.button_login.input_click(x))))
              .reduce((_p1, v1)=>v1)
            ), x)
            x.test.user.list = val;
            return x;
          },
          peran: (x, val)=>{
            x.core.server.users.peran = val;
            x.test.user.peran = val;
            return x;
          },
          lajur: (x, val)=>{
            x.core.server.st.lajur = val;
            x.test.user.lajur = val;
            return x;
          },
        },
        suratTugas: {
          tanggal: (x, val)=>{
            x.test.st.tanggal = val;
            return x;
          },
          durasi: (x, val)=>{
            x.test.st.durasi = val;
            return x;
          },
          menugaskan: (x, val)=>{
            x.test.st.menugaskan = val;
            return x;
          },
        }
      },
      steps: {
        jikaBuatSuratTugas: (x)=>(
          [null]
          .map((_v0)=>x)
          .map((v0)=>v.jalankanDalamKonteks(v0, ["Pembuat Surat Tugas"], (x, impl)=>(
            [null]
            .map((_v1)=>x)
            .map((v1)=>impl.core.index.visit(v1))
            .map((v1)=>impl.core.index.button_st.input_click(v1))
            .map((v1)=>impl.core.index_st.button_buat.input_click(v1))
            .map((v1)=>impl.helpers.index_st_baru.isiPenugasan(v1))
            .map((v1)=>impl.core.index_st_buat.bagian_tanggal.bagian_tanggal.input_isi(v1, v1.test.st.tanggal[2]))
            .map((v1)=>impl.core.index_st_buat.bagian_tanggal.bagian_bulan.input_isi(v1, v1.test.st.tanggal[1]))
            .map((v1)=>impl.core.index_st_buat.bagian_tanggal.bagian_tahun.input_isi(v1, v1.test.st.tanggal[0]))
            .map((v1)=>impl.core.index_st_buat.bagian_durasi.input_isi(v1, v1.test.st.durasi))
            .map((v1)=>impl.core.index_st_buat.button_ok.input_click(v1))
            .map((v1)=>impl.core.index_st_buat_konfirmasi.button_ok.input_click(v1))
            .map((v1)=>impl.core.index_st_buat_informasi.button_ok.input_click(v1))
            .reduce((_p1, v1)=>v1)
          )))
          .reduce((_p, v)=>v)
        ),
        jikaOtorisasi: (x)=>(
          [null]
          .map((_v0)=>x)
          .map((v0)=>v.jalankanDalamKonteks(v0, ["Otorisasi"], (x, impl)=>(
            [null]
            .map((_v1)=>x)
            .map((v1)=>impl.core.index.visit(v1))
            .map((v1)=>impl.core.index.button_st.input_click(v1))
            .map((v1)=>impl.helpers.index_st.target.otorisasi(v1))
            .map((v1)=>impl.core.index_st_otorisasi.bagian_status.pilihan_setujui.input_centang(v1))
            .map((v1)=>impl.core.index_st_otorisasi.button_ok.input_click(v1))
            .map((v1)=>impl.core.index_st_otorisasi_konfirmasi.button_ok.input_click(v1))
            .map((v1)=>impl.core.index_st_otorisasi_informasi.button_ok.input_click(v1))
            .reduce((_p1, v1)=>v1)
          )))
          .reduce((_p, v)=>v)
        ),
        jikaBeberapaHariBerikutnyaHanya1UserYangMelapor: (x)=>(
          [null]
          .map((_v0)=>x)
          .map((v0)=>v.beberapaHariKemudian.saatHariPertamaPelaksanaan(v0))
          .map((v0)=>v.jalankanDalamKonteks(v0, ["User Pertama yang Ditugaskan"], (x, impl)=>(
            [null]
            .map((_v1)=>x)
            .map((v1)=>impl.core.index.visit(v1))
            .map((v1)=>impl.core.index.button_st.input_click(v1))
            .map((v1)=>impl.helpers.index_st.target.lapor(v1))
            .map((v1)=>impl.helpers.index_st_lapor.bagian_dokumen.input_isi(v1))
            .map((v1)=>impl.core.index_st_lapor.button_ok.input_click(v1))
            .map((v1)=>impl.core.index_st_lapor_konfirmasi.button_ok.input_click(v1))
            .map((v1)=>impl.core.index_st_lapor_informasi.button_ok.input_click(v1))
            .reduce((_p1, v1)=>v1)
          )))
          .reduce((_p, v)=>v)
        ),
        makaBeberapaHariBerikutnyaSuratTugasMerah: (x)=>(
          [null]
          .map((_v0)=>x)
          .map((v0)=>v.beberapaHariKemudian.saatHariPertamaKeterlambatan(v0))
          .map((v0)=>v.jalankanDalamKonteks(v0, ["Semua yang Terlibat"], (x, impl)=>(
            [null]
            .map((_v1)=>x)
            .map((v1)=>impl.core.index.visit(v1))
            .map((v1)=>impl.core.index.button_st.input_click(v1))
            .map((v1)=>impl.helpers.index_st.target.cekWarna(v1, "MERAH"))
            .map((v1)=>(
              v1[1] ? v1[0] : (()=>{throw new Error; return v1[0]})()
            ))
            .reduce((_p1, v1)=>v1)
          )))
          .reduce((_p, v)=>v)
        ),
        jikaUserLainIkutMelapor: (x)=>(
          [null]
          .map((_v0)=>x)
          .map((v0)=>v.jalankanDalamKonteks(v0, ["Yang Ditugaskan (Selain yang Pertama)"], (x, impl)=>(
            [null]
            .map((_v1)=>x)
            .map((v1)=>impl.core.index.visit(v1))
            .map((v1)=>impl.core.index.button_st.input_click(v1))
            .map((v1)=>impl.helpers.index_st.target.lapor(v1))
            .map((v1)=>impl.helpers.index_st_lapor.bagian_dokumen.input_isi(v1))
            .map((v1)=>impl.core.index_st_lapor.button_ok.input_click(v1))
            .map((v1)=>impl.core.index_st_lapor_konfirmasi.button_ok.input_click(v1))
            .map((v1)=>impl.core.index_st_lapor_informasi.button_ok.input_click(v1))
            .reduce((_p1, v1)=>v1)
          )))
          .reduce((_p, v)=>v)
        ),
        makaSuratTugasKuning: (x)=>(
          [null]
          .map((_v0)=>x)
          .map((v0)=>v.beberapaHariKemudian.saatHariPertamaKeterlambatan(v0))
          .map((v0)=>v.jalankanDalamKonteks(v0, ["Semua yang Terlibat"], (x, impl)=>(
            [null]
            .map((_v1)=>x)
            .map((v1)=>impl.core.index.visit(v1))
            .map((v1)=>impl.core.index.button_st.input_click(v1))
            .map((v1)=>impl.helpers.index_st.target.cekWarna(v1, "KUNING"))
            .map((v1)=>(
              v1[1] ? v1[0] : (()=>{throw new Error; return v1[0]})()
            ))
            .reduce((_p1, v1)=>v1)
          )))
          .reduce((_p, v)=>v)
        ),
        jikaOtorisasiLaporan: (x)=>(
          [null]
          .map((_v0)=>x)
          .map((v0)=>v.jalankanDalamKonteks(v0, ["Otorisasi"], (x, impl)=>(
            [null]
            .map((_v1)=>x)
            .map((v1)=>impl.core.index.visit(v1))
            .map((v1)=>impl.core.index.button_st.input_click(v1))
            .map((v1)=>impl.helpers.index_st.target.otorisasiLaporan(v1))
            .map((v1)=>impl.core.index_st_otorisasiLaporan.bagian_status.pilihan_setujui.input_centang(v1))
            .map((v1)=>impl.core.index_st_otorisasiLaporan.button_ok.input_click(v1))
            .map((v1)=>impl.core.index_st_otorisasiLaporan_konfirmasi.button_ok.input_click(v1))
            .map((v1)=>impl.core.index_st_otorisasiLaporan_informasi.button_ok.input_click(v1))
            .reduce((_p1, v1)=>v1)
          )))
          .reduce((_p, v)=>v)
        ),
        makaSuratTugasHijau: (x)=>(
          [null]
          .map((_v0)=>x)
          .map((v0)=>v.beberapaHariKemudian.saatHariPertamaKeterlambatan(v0))
          .map((v0)=>v.jalankanDalamKonteks(v0, ["Semua yang Terlibat"], (x, impl)=>(
            [null]
            .map((_v1)=>x)
            .map((v1)=>impl.core.index.visit(v1))
            .map((v1)=>impl.core.index.button_st.input_click(v1))
            .map((v1)=>impl.helpers.index_st.target.cekWarna(v1, "HIJAU"))
            .map((v1)=>(
              v1[1] ? v1[0] : (()=>{throw new Error; return v1[0]})()
            ))
            .reduce((_p1, v1)=>v1)
          )))
          .reduce((_p, v)=>v)
        ),
      }
    }
  }
}))
.map((v, k)=>(
  [null]
  .map((v0)=>v.sut.state)
  .map((v0, k0)=>(
    v.background.reduce((p1, v1, k1, a1)=>{
      switch(v1.type){
        case "tester/features/core/background/pengujian/tanggalMulai":{
          return v.sut.handlers.background.pengujian.tanggalMulai(p1, v1.value);
        }
        case "tester/features/core/background/user/adanya":{
          return v.sut.handlers.background.user.adanya(p1, v1.value);
        }
        case "tester/features/core/background/user/peran":{
          return v.sut.handlers.background.user.peran(p1, v1.value);
        }
        case "tester/features/core/background/user/lajur":{
          return v.sut.handlers.background.user.lajur(p1, v1.value);
        }
        case "tester/features/core/background/suratTugas/tanggal":{
          return v.sut.handlers.background.suratTugas.tanggal(p1, v1.value);
        }
        case "tester/features/core/background/suratTugas/durasi":{
          return v.sut.handlers.background.suratTugas.durasi(p1, v1.value);
        }
        case "tester/features/core/background/suratTugas/menugaskan":{
          return v.sut.handlers.background.suratTugas.menugaskan(p1, v1.value);
        }
      }(((x: never)=>{throw new Error;})(v1))
    }, v0)
  ))
  .map((v0, k0)=>(
    v.steps.reduce((p1, v1, k1, a1)=>{
      let v1_0 = v1();
      switch(v1_0.type){
        case "tester/features/core/steps/Jika Buat Surat Tugas": {
          return v.sut.handlers.steps.jikaBuatSuratTugas(p1);
        }
        case "tester/features/core/steps/Jika Otorisasi": {
          return v.sut.handlers.steps.jikaOtorisasi(p1);
        }
        case "tester/features/core/steps/Jika Beberapa hari berikutnya, hanya 1 user yang melapor": {
          return v.sut.handlers.steps.jikaBeberapaHariBerikutnyaHanya1UserYangMelapor(p1);
        }
        case "tester/features/core/steps/Maka Beberapa hari berikutnya, surat tugas merah": {
          return v.sut.handlers.steps.makaBeberapaHariBerikutnyaSuratTugasMerah(p1);
        }
        case "tester/features/core/steps/Jika User lain ikut melapor": {
          return v.sut.handlers.steps.jikaUserLainIkutMelapor(p1);
        }
        case "tester/features/core/steps/Maka Surat tugas kuning": {
          return v.sut.handlers.steps.makaSuratTugasKuning(p1);
        }
        case "tester/features/core/steps/Jika Otorisasi laporan": {
          return v.sut.handlers.steps.jikaOtorisasiLaporan(p1);
        }
        case "tester/features/core/steps/Maka Surat tugas hijau": {
          return v.sut.handlers.steps.makaSuratTugasHijau(p1);
        }
      }(((x: never)=>{throw new Error;})(v1_0))
    }, v0)
  ))
  .reduce((_p0, v0)=>v0)
))
.map((v, k)=>{
  console.log(JSON.stringify(v, null, 2));
  return v;
})
.reduce((p, v)=>v)
