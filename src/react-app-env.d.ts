/// <reference types="react-scripts" />

declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_KAKAO_API_KEY: string;
    REACT_APP_KAKAO_RESTAPI_KEY: string;
  }
}
