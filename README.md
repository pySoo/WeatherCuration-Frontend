# Weather Curation

날씨 상태에 따라 네이버 쇼핑의 **상품을 추천해주는 큐레이션 서비스**입니다.

[Node.js를 이용하여 구축한 GraphQL API 서버](https://github.com/pySoo/WeatherCuration-Server)를 통해 네이버 검색 쇼핑 API와 Accuweather API의 데이터를 로드합니다.

## 🌐 URL

[Weather Curation](https://weather-curation.vercel.app/)

<br />

## 🛠️ Tech Stack

|        Category        |                                                                                                                                                       Technologies                                                                                                                                                        |
| :--------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **프레임워크 및 언어** |                                                  <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black">                                                  |
|     **서버 통신 및 상태 관리**      |                                                 <img src="https://img.shields.io/badge/Apollo_GraphQL-E10098.svg?style=for-the-badge&logo=GraphQL&logoColor=white">                                                  |
|      **스타일링**      |                                                                                                         <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?&style=for-the-badge&logo=TailwindCSS&logoColor=white">                                                                                                         |
|     **빌드 도구**      |                                                                                                          <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">                                                                                                           |
|     **코드 관리**      | <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/HUSKY-000000?&style=for-the-badge&logo=Husky&logoColor=white"> |
|    **배포 플랫폼**     |                                                                                                        <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white">                                                                                                         |

<br />

## 🏠 프로젝트 소개

- 최저, 최고 기온을 바탕으로 **기온에 맞는 옷차림과 상품을 추천**합니다.
- 5일간의 **날씨 예보 데이터를 분석**하여 날씨 특성에 맞는 **키워드를 선정하여 상품을 추천**합니다.
- 현재 **시간과 기상 상태**(눈, 비, 구름)에 따라 **배경이 변화**합니다. 

<br />

## ✅ 설계 방식 및 성능 개선 사항

#### Overfetching 문제 해결을 통한 트래픽 개선

- REST API를 GraphQL로 감싼 구조로 **클라이언트가 필요로 하는 데이터만 로드**할 수 있도록 설계하여 트래픽을 줄였습니다.

#### Next.js 선택 이유

- 많은 이미지가 보여야 하는 상품 페이지 특성상 이미지를 최적화하여 빠르게 보여주는 것이 중요하다고 생각하였습니다.
- 따라서 React 환경에서 이미지 최적화에 강점이 있는 **Next.js로 환경을 변경**하여 개발하였습니다.

#### LCP 2.5초 단축 및 Layout Shift 현상 방지

- 압축률이 높은 **avif, webp 포맷**을 사용하고, **priority 속성**을 이용하여 **`LCP를 2.5초 단축`** 하였습니다.
- placeholder: blur 속성을 이용하여 **`이미지 스켈레톤`** 처리를 하였고 사이즈 지정을 통해 **`layout shift 현상을 방지`** 하였습니다.

#### 빌드 시간 단축을 위한 Vite 번들링

- **`빌드 속도가 느린 CRA의 단점을 개선`** 하기 위해 번들링 도구로 Vite를 선택하였습니다.
- Vite의 **esbuild와 브라우저의 ESM을 이용한 번들링**을 활용하여 개발 속도를 개선했습니다.

<br />

## ✨ 화면 구성

### 1. 현재 시간, 자외선 지수, 구름량, 눈 또는 비의 여부에 따라서 배경이 변화합니다.
<img width="1440" alt="스크린샷 2023-10-27 오전 8 35 35" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/af224e6c-5015-4bd2-bc38-c8fe4e963284">
<img width="1440" alt="스크린샷 2023-10-27 오전 9 05 31" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/65c47067-c7a3-4efe-a3d0-1c83f653405c">
<img width="1440" alt="스크린샷 2023-10-27 오전 8 55 53" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/c358bf7e-100b-4658-abcb-6ff8eab0af57">
<img width="1440" alt="스크린샷 2023-10-27 오전 9 00 31" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/0277bd6a-4b1f-4dff-b5c8-6144c265eb6f">

<br />

### 2. 최고, 최저 온도에 맞는 옷이 추천되고 클릭 시 네이버 쇼핑 페이지로 이동합니다


<img width="1313" alt="스크린샷 2023-10-27 오전 8 58 36" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/1c0cd211-c2cb-447a-a5ee-1894f58e229b">

<br />

### 3. 버튼을 클릭하여 키워드에 맞는 상품을 볼 수 있습니다.
<img width="1440" alt="스크린샷 2023-10-27 오전 8 54 49" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/b95bc38a-c1bc-49f1-ac54-65ed9cce9022">

<br />

### 4. 앞으로의 날씨 특성에 맞는 상품을 추천하여 날씨에 대비할 수 있게 합니다. (큰 일교차, 소나기, 환절기 진입 등)

<img width="1440" alt="스크린샷 2023-10-27 오전 8 36 01" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/51eb44f1-cbd4-4836-a9c9-f374c2d36c0a">
