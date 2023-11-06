import React from "react";
import {
  RegionButtons,
  ThemeButtons,
  AllTlogPostContents,
  AllTlogPostWrap,
} from "../../styles/AllTlogPostStyle";

interface Data {
  uid: number;
  title: string;
  img: string;
}

const data: Data[] = [
  {
    uid: 1,
    title:
      "첫 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMzBfMzYg%2FMDAxNjc1MDM4ODgxOTU1.9OXlfjlnJr8kdI5dGgecxLlFp-D6D6XA6d_3RhzrZNwg.3yEheaEhouo7v8xeCEUCTKaFJzqPPxtWTuYFuix8kjcg.JPEG.minjae320%2FIMG_1395.JPG&type=sc960_832",
  },
  {
    uid: 2,
    title:
      "두 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDRfMjQg%2FMDAxNjI1MzgzMTA1ODgx.uo-hwxDtcApRiwTZT9fHQCv6gAb_hzbF9isbMcghfZ4g.9a4-5DfimtLRZq-rlFQeDFIHs-aNkzOaQJvdJSPeIb8g.JPEG.yhm4082%2FDSC07131.jpg&type=sc960_832",
  },
  {
    uid: 3,
    title:
      "세 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjRfMjk0%2FMDAxNTY5MzEyNTk4NzQ1.vQWehySDNlXIKlCaqZ9j9BeW6m-ZJpH463eNbQweaUcg.DCdEbNaVkm_ktkIJfiBCI1UDuAJJca_rBxZQ_ks25Jgg.JPEG.tak2chef%2FKakaoTalk_20190922_182039384_27.jpg&type=sc960_832",
  },
  {
    uid: 4,
    title:
      "네 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA3MTNfMTY1%2FMDAxNDk5OTMxMTExNzQ2.KbfUEjTUPblhCRMGtholEC57LjhkI_O4N6L16dpOp1og.c7-IzxeQYkV0He8i7EyDSgmaO3ufY4G_MPfQatd1zD4g.JPEG.lovelyse80%2F%25BF%25A9%25B8%25A7%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25BD%25C9%25C7%25C3%25B9%25D9%25B4%25D9%25B0%25A8%25BC%25BA%25BB%25E7%25C1%25F8%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD-1.jpg&type=sc960_832",
  },
  {
    uid: 5,
    title:
      "다섯 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MDJfMiAg%2FMDAxNTIyNjc3NzEwMTc3.Xt6CT4GWRBlmsyqME8sUiGkWzhR_yu3AfMK23smu3Owg.GeWWx6pJiSQhchbXTeC0IOt1jlzwoKtVWaNjnl-3MrUg.PNG.park092525%2F%25BF%25AC%25BF%25B9%25C0%25CE%25B9%25DF%25B8%25AE%25BF%25A9%25C7%25E0001.png&type=sc960_832",
  },
  {
    uid: 6,
    title:
      "여섯 번째 힝목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMzBfMzYg%2FMDAxNjc1MDM4ODgxOTU1.9OXlfjlnJr8kdI5dGgecxLlFp-D6D6XA6d_3RhzrZNwg.3yEheaEhouo7v8xeCEUCTKaFJzqPPxtWTuYFuix8kjcg.JPEG.minjae320%2FIMG_1395.JPG&type=sc960_832",
  },
  {
    uid: 7,
    title:
      "일곱 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDRfMjQg%2FMDAxNjI1MzgzMTA1ODgx.uo-hwxDtcApRiwTZT9fHQCv6gAb_hzbF9isbMcghfZ4g.9a4-5DfimtLRZq-rlFQeDFIHs-aNkzOaQJvdJSPeIb8g.JPEG.yhm4082%2FDSC07131.jpg&type=sc960_832",
  },
  {
    uid: 8,
    title:
      "여덟 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjRfMjk0%2FMDAxNTY5MzEyNTk4NzQ1.vQWehySDNlXIKlCaqZ9j9BeW6m-ZJpH463eNbQweaUcg.DCdEbNaVkm_ktkIJfiBCI1UDuAJJca_rBxZQ_ks25Jgg.JPEG.tak2chef%2FKakaoTalk_20190922_182039384_27.jpg&type=sc960_832",
  },
  {
    uid: 9,
    title:
      "아홉 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA3MTNfMTY1%2FMDAxNDk5OTMxMTExNzQ2.KbfUEjTUPblhCRMGtholEC57LjhkI_O4N6L16dpOp1og.c7-IzxeQYkV0He8i7EyDSgmaO3ufY4G_MPfQatd1zD4g.JPEG.lovelyse80%2F%25BF%25A9%25B8%25A7%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25BD%25C9%25C7%25C3%25B9%25D9%25B4%25D9%25B0%25A8%25BC%25BA%25BB%25E7%25C1%25F8%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD-1.jpg&type=sc960_832",
  },
  {
    uid: 10,
    title:
      "열 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MDJfMiAg%2FMDAxNTIyNjc3NzEwMTc3.Xt6CT4GWRBlmsyqME8sUiGkWzhR_yu3AfMK23smu3Owg.GeWWx6pJiSQhchbXTeC0IOt1jlzwoKtVWaNjnl-3MrUg.PNG.park092525%2F%25BF%25AC%25BF%25B9%25C0%25CE%25B9%25DF%25B8%25AE%25BF%25A9%25C7%25E0001.png&type=sc960_832",
  },
  {
    uid: 11,
    title:
      "열한 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMzBfMzYg%2FMDAxNjc1MDM4ODgxOTU1.9OXlfjlnJr8kdI5dGgecxLlFp-D6D6XA6d_3RhzrZNwg.3yEheaEhouo7v8xeCEUCTKaFJzqPPxtWTuYFuix8kjcg.JPEG.minjae320%2FIMG_1395.JPG&type=sc960_832",
  },
  {
    uid: 12,
    title:
      "열두 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MDJfMiAg%2FMDAxNTIyNjc3NzEwMTc3.Xt6CT4GWRBlmsyqME8sUiGkWzhR_yu3AfMK23smu3Owg.GeWWx6pJiSQhchbXTeC0IOt1jlzwoKtVWaNjnl-3MrUg.PNG.park092525%2F%25BF%25AC%25BF%25B9%25C0%25CE%25B9%25DF%25B8%25AE%25BF%25A9%25C7%25E0001.png&type=sc960_832",
  },
  {
    uid: 13,
    title:
      "열세 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA3MTNfMTY1%2FMDAxNDk5OTMxMTExNzQ2.KbfUEjTUPblhCRMGtholEC57LjhkI_O4N6L16dpOp1og.c7-IzxeQYkV0He8i7EyDSgmaO3ufY4G_MPfQatd1zD4g.JPEG.lovelyse80%2F%25BF%25A9%25B8%25A7%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25BD%25C9%25C7%25C3%25B9%25D9%25B4%25D9%25B0%25A8%25BC%25BA%25BB%25E7%25C1%25F8%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD-1.jpg&type=sc960_832",
  },
  {
    uid: 14,
    title:
      "열네 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDRfMjQg%2FMDAxNjI1MzgzMTA1ODgx.uo-hwxDtcApRiwTZT9fHQCv6gAb_hzbF9isbMcghfZ4g.9a4-5DfimtLRZq-rlFQeDFIHs-aNkzOaQJvdJSPeIb8g.JPEG.yhm4082%2FDSC07131.jpg&type=sc960_832",
  },
  {
    uid: 15,
    title:
      "열다섯 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjRfMjk0%2FMDAxNTY5MzEyNTk4NzQ1.vQWehySDNlXIKlCaqZ9j9BeW6m-ZJpH463eNbQweaUcg.DCdEbNaVkm_ktkIJfiBCI1UDuAJJca_rBxZQ_ks25Jgg.JPEG.tak2chef%2FKakaoTalk_20190922_182039384_27.jpg&type=sc960_832",
  },
  {
    uid: 16,
    title:
      "열여섯 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA3MTNfMTY1%2FMDAxNDk5OTMxMTExNzQ2.KbfUEjTUPblhCRMGtholEC57LjhkI_O4N6L16dpOp1og.c7-IzxeQYkV0He8i7EyDSgmaO3ufY4G_MPfQatd1zD4g.JPEG.lovelyse80%2F%25BF%25A9%25B8%25A7%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25BD%25C9%25C7%25C3%25B9%25D9%25B4%25D9%25B0%25A8%25BC%25BA%25BB%25E7%25C1%25F8%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD-1.jpg&type=sc960_832",
  },
  {
    uid: 17,
    title:
      "열일곱 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA3MTNfMTY1%2FMDAxNDk5OTMxMTExNzQ2.KbfUEjTUPblhCRMGtholEC57LjhkI_O4N6L16dpOp1og.c7-IzxeQYkV0He8i7EyDSgmaO3ufY4G_MPfQatd1zD4g.JPEG.lovelyse80%2F%25BF%25A9%25B8%25A7%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25BD%25C9%25C7%25C3%25B9%25D9%25B4%25D9%25B0%25A8%25BC%25BA%25BB%25E7%25C1%25F8%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD-1.jpg&type=sc960_832",
  },
  {
    uid: 18,
    title:
      "열여덟 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDRfMjQg%2FMDAxNjI1MzgzMTA1ODgx.uo-hwxDtcApRiwTZT9fHQCv6gAb_hzbF9isbMcghfZ4g.9a4-5DfimtLRZq-rlFQeDFIHs-aNkzOaQJvdJSPeIb8g.JPEG.yhm4082%2FDSC07131.jpg&type=sc960_832",
  },
  {
    uid: 19,
    title:
      "열아홉 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MDJfMiAg%2FMDAxNTIyNjc3NzEwMTc3.Xt6CT4GWRBlmsyqME8sUiGkWzhR_yu3AfMK23smu3Owg.GeWWx6pJiSQhchbXTeC0IOt1jlzwoKtVWaNjnl-3MrUg.PNG.park092525%2F%25BF%25AC%25BF%25B9%25C0%25CE%25B9%25DF%25B8%25AE%25BF%25A9%25C7%25E0001.png&type=sc960_832",
  },
  {
    uid: 20,
    title:
      "스물 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjRfMjk0%2FMDAxNTY5MzEyNTk4NzQ1.vQWehySDNlXIKlCaqZ9j9BeW6m-ZJpH463eNbQweaUcg.DCdEbNaVkm_ktkIJfiBCI1UDuAJJca_rBxZQ_ks25Jgg.JPEG.tak2chef%2FKakaoTalk_20190922_182039384_27.jpg&type=sc960_832",
  },
  {
    uid: 21,
    title:
      "스물한 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMzBfMzYg%2FMDAxNjc1MDM4ODgxOTU1.9OXlfjlnJr8kdI5dGgecxLlFp-D6D6XA6d_3RhzrZNwg.3yEheaEhouo7v8xeCEUCTKaFJzqPPxtWTuYFuix8kjcg.JPEG.minjae320%2FIMG_1395.JPG&type=sc960_832",
  },
  {
    uid: 22,
    title:
      "스물둘 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA3MTNfMTY1%2FMDAxNDk5OTMxMTExNzQ2.KbfUEjTUPblhCRMGtholEC57LjhkI_O4N6L16dpOp1og.c7-IzxeQYkV0He8i7EyDSgmaO3ufY4G_MPfQatd1zD4g.JPEG.lovelyse80%2F%25BF%25A9%25B8%25A7%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25BD%25C9%25C7%25C3%25B9%25D9%25B4%25D9%25B0%25A8%25BC%25BA%25BB%25E7%25C1%25F8%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD-1.jpg&type=sc960_832",
  },
  {
    uid: 23,
    title:
      "스물세 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MDJfMiAg%2FMDAxNTIyNjc3NzEwMTc3.Xt6CT4GWRBlmsyqME8sUiGkWzhR_yu3AfMK23smu3Owg.GeWWx6pJiSQhchbXTeC0IOt1jlzwoKtVWaNjnl-3MrUg.PNG.park092525%2F%25BF%25AC%25BF%25B9%25C0%25CE%25B9%25DF%25B8%25AE%25BF%25A9%25C7%25E0001.png&type=sc960_832",
  },
  {
    uid: 24,
    title:
      "스물네 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjRfMjk0%2FMDAxNTY5MzEyNTk4NzQ1.vQWehySDNlXIKlCaqZ9j9BeW6m-ZJpH463eNbQweaUcg.DCdEbNaVkm_ktkIJfiBCI1UDuAJJca_rBxZQ_ks25Jgg.JPEG.tak2chef%2FKakaoTalk_20190922_182039384_27.jpg&type=sc960_832",
  },
  {
    uid: 25,
    title:
      "스물다섯 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDRfMjQg%2FMDAxNjI1MzgzMTA1ODgx.uo-hwxDtcApRiwTZT9fHQCv6gAb_hzbF9isbMcghfZ4g.9a4-5DfimtLRZq-rlFQeDFIHs-aNkzOaQJvdJSPeIb8g.JPEG.yhm4082%2FDSC07131.jpg&type=sc960_832",
  },
  {
    uid: 26,
    title:
      "스물여섯 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MDJfMiAg%2FMDAxNTIyNjc3NzEwMTc3.Xt6CT4GWRBlmsyqME8sUiGkWzhR_yu3AfMK23smu3Owg.GeWWx6pJiSQhchbXTeC0IOt1jlzwoKtVWaNjnl-3MrUg.PNG.park092525%2F%25BF%25AC%25BF%25B9%25C0%25CE%25B9%25DF%25B8%25AE%25BF%25A9%25C7%25E0001.png&type=sc960_832",
  },
  {
    uid: 27,
    title:
      "스물일곱 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA3MTNfMTY1%2FMDAxNDk5OTMxMTExNzQ2.KbfUEjTUPblhCRMGtholEC57LjhkI_O4N6L16dpOp1og.c7-IzxeQYkV0He8i7EyDSgmaO3ufY4G_MPfQatd1zD4g.JPEG.lovelyse80%2F%25BF%25A9%25B8%25A7%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25BD%25C9%25C7%25C3%25B9%25D9%25B4%25D9%25B0%25A8%25BC%25BA%25BB%25E7%25C1%25F8%25C1%25A6%25B8%25F1_%25BE%25F8%25C0%25BD-1.jpg&type=sc960_832",
  },
  {
    uid: 28,
    title:
      "스물여덟 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMzBfMzYg%2FMDAxNjc1MDM4ODgxOTU1.9OXlfjlnJr8kdI5dGgecxLlFp-D6D6XA6d_3RhzrZNwg.3yEheaEhouo7v8xeCEUCTKaFJzqPPxtWTuYFuix8kjcg.JPEG.minjae320%2FIMG_1395.JPG&type=sc960_832",
  },
  {
    uid: 29,
    title:
      "스물아홉 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjRfMjk0%2FMDAxNTY5MzEyNTk4NzQ1.vQWehySDNlXIKlCaqZ9j9BeW6m-ZJpH463eNbQweaUcg.DCdEbNaVkm_ktkIJfiBCI1UDuAJJca_rBxZQ_ks25Jgg.JPEG.tak2chef%2FKakaoTalk_20190922_182039384_27.jpg&type=sc960_832",
  },
  {
    uid: 30,
    title:
      "서른 번째 항목 김수한무 두루미와 거북이 척척박사 동방삵 렐라렐라 카브렐라 글자수 맞추기 어렵네 어떻게 맞추지",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDRfMjQg%2FMDAxNjI1MzgzMTA1ODgx.uo-hwxDtcApRiwTZT9fHQCv6gAb_hzbF9isbMcghfZ4g.9a4-5DfimtLRZq-rlFQeDFIHs-aNkzOaQJvdJSPeIb8g.JPEG.yhm4082%2FDSC07131.jpg&type=sc960_832",
  },
];

interface RegData {
  reg: string;
}

const regData: RegData[] = [
  {
    reg: "전체",
  },
  {
    reg: "서울",
  },
  {
    reg: "경기",
  },
  {
    reg: "인천",
  },
  {
    reg: "부산",
  },
  {
    reg: "대구",
  },
  {
    reg: "대전",
  },
  {
    reg: "광주",
  },
  {
    reg: "울산",
  },
  {
    reg: "강원",
  },
  {
    reg: "경북",
  },
  {
    reg: "경남",
  },
  {
    reg: "전북",
  },
  {
    reg: "전남",
  },
  {
    reg: "충북",
  },
  {
    reg: "충남",
  },
  {
    reg: "제주",
  },
];

interface ThemeData {
  theme: string;
}

const themeData: ThemeData[] = [
  { theme: "#힐링" },
  { theme: "#익사이팅" },
  { theme: "#축제" },
  { theme: "#등산" },
  { theme: "#바다" },
  { theme: "#크루즈" },
];

interface UserData {
  uid: number;
  img: string;
}

const userData: UserData[] = [
  {
    uid: 1,
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjhfMjk3%2FMDAxNjAzODg0NzU0MDg3.nm28wChnQlROEEPObqaoba87P_X0HYejEGuHYe8VvQEg.2X5G3yOBcvDf4FkBAgAmr0KZDWlJS6_KRnuzlGoQ8qwg.JPEG.kyolove14%2F%25C8%25FB%25BD%25EB%25BF%25A9%25C0%25DA_%25B5%25B5%25BA%25C0%25BC%25F8_%25BE%25C8%25B9%25CE%25C7%25F5_%2528113%2529.jpg&type=sc960_832",
  },
];

const AllTlogPost = () => {
  const handleregion = () => {
    console.log("안녕");
  };

  const handleTheme = () => {
    console.log("난 테마야");
  };
  const itemPer = 4;

  const dataGroup = [];

  for (let i = 0; i < data.length; i += itemPer) {
    dataGroup.push(data.slice(i, i + itemPer));
  }
  console.log(dataGroup);
  return (
    <AllTlogPostWrap>
      <div className="all-tlog-title">
        <h2>Travel Log</h2>
        {userData.map(item => (
          <img key={item.uid} src={item.img} alt="" />
        ))}
      </div>
      <RegionButtons>
        {regData.map((item, index) => (
          <li key={index}>
            <button onClick={handleregion}>{item.reg}</button>
          </li>
        ))}
      </RegionButtons>
      <ThemeButtons>
        <ul>
          {themeData.map((item, index) => (
            <li key={index}>
              <span onClick={handleTheme}>{item.theme}</span>
            </li>
          ))}
        </ul>
      </ThemeButtons>
      {dataGroup.map((group, index) => (
        <AllTlogPostContents key={index}>
          {group.map(item => (
            <ul key={item.uid}>
              <li>
                {item.img !== "" ? (
                  <img src={item.img} alt="" />
                ) : (
                  <span>&nbsp;</span>
                )}
              </li>
              <li>
                {item.title !== "" ? (
                  <span>{item.title}</span>
                ) : (
                  <span>&nbsp;</span>
                )}
              </li>
            </ul>
          ))}
        </AllTlogPostContents>
      ))}
    </AllTlogPostWrap>
  );
};

export default AllTlogPost;
