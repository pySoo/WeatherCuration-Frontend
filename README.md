# Weather Curation

날씨 상태에 따라 네이버 쇼핑의 상품을 추천해주는 큐레이션 서비스입니다.

[Node.js를 이용하여 구축한 GraphQL API 서버](https://github.com/pySoo/WeatherCuration-Server)와의 통신을 통해 네이버 검색 쇼핑 API와 accuweather API의 데이터를 로드합니다.

## 🌐 URL

[Weather Curation](https://weather-curation.vercel.app/)

## Tech Stack

<div align=center>

|     Area     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Tech Stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend** | <img src="https://img.shields.io/badge/GraphQL-E10098.svg?style=for-the-badge&logo=GraphQL&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?&style=for-the-badge&logo=TailwindCSS&logoColor=white"> <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/HUSKY-000000?&style=for-the-badge&logo=Husky&logoColor=white"> <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white"> |

</div>

## Feature

- 최저, 최고 기온을 바탕으로 **기온에 맞는 옷차림과 상품을 추천**합니다.
- 5일간의 날씨 예보 데이터를 분석하여 **날씨 특성에 맞는 키워드를 선정하여 상품을 추천**합니다.
- REST API를 GraphQL로 감싼 구조로 클라이언트가 필요로 하는 데이터만 로드할 수 있도록 설계하여 트래픽을 줄였습니다.

## 이미지 최적화

- 많은 이미지가 보여야 하는 상품 페이지 특성상 이미지를 최적화하여 빠르게 보여주는 것이 중요하다고 생각하였습니다.
- 따라서 React 환경에서 이미지 최적화에 강점이 있는 **Next.js로 환경을 변경**하여 개발하였습니다.
- 압축률이 높은 **avif, webp 포맷**을 사용하고, **priority 속성**을 이용하여 `LCP를 2.5초 단축`하였습니다.
- placeholder: blur 속성을 이용하여 `이미지 스켈레톤` 처리를 하였고 사이즈 지정을 통해 `layout shift 현상을 방지`하였습니다.

## 화면 구성

### 1. 현재 시간, 자외선 지수, 구름량, 눈 또는 비의 여부에 따라서 배경이 변화합니다.

<img width="1440" alt="curation1" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/201f41b7-1cba-45d6-ab43-ec5d85ce7458">
<img width="1440" alt="curation2" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/66ef31eb-edc6-4d09-b069-1a199798e40d">
<img width="1440" alt="curation3" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/2cd4d34e-f2a5-4605-8f5e-ad4d5abb4646">
<img width="1440" alt="curation4" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/8a2bf289-bcce-46fa-a145-dd707c028a3e">

<br />

### 2. 최고, 최저 온도에 맞는 옷이 추천되고 클릭 시 네이버 쇼핑 페이지로 이동합니다

<img width="1313" alt="curation5" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/9e61e583-f293-4fb6-a676-0c37b155d3b8">

<br />

### 3. 버튼을 클릭하여 키워드에 맞는 상품을 볼 수 있습니다.

<img width="1440" alt="curation6" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/9d515b81-00ea-43cc-b9f5-eaf470ba9d68">

<br />

### 4. 앞으로의 날씨 특성에 맞는 상품을 추천하여 날씨에 대비할 수 있게 합니다. (큰 일교차, 소나기, 환절기 진입 등)

<img width="1440" alt="curation7" src="https://github.com/pySoo/WeatherCuration-Frontend/assets/55135881/daed8330-4937-4229-8bfb-3f6e4fd8ac43">
