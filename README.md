## 링크주소
  - [netlify](https://spontaneous-sherbet-c8c45e.netlify.app/)
## 현재까지 구현된 기능
  - 시작, 잠시멈춤, 리셋, 테스트 (X1000 속도로 시작)
## 프론트 추가할 내용
  - MobX 적용
    - [참조 : React - eject 없이 Mobx 데코레이터 사용하기](https://velog.io/@wlsdud2194/Mobx-%EB%8D%B0%EC%BD%94%EB%A0%88%EC%9D%B4%ED%84%B0-yarn-eject-%EC%97%86%EC%9D%B4-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
    - [참조 : Mobx를 적용하여 상태 관리하기 (2)](https://dlsgh120.tistory.com/50)
  - 기능 : 시간 조절 기능
    - 눈금을 드래그앤 드롭하면서 자유롭게 시간 조절
      - [참조 : Creating an app using Drag and Drop with React without libraries 👆!](https://dev.to/franklin030601/creating-an-app-using-drag-and-drop-with-react-without-libraries--5cg9)
  - 기능 : Noti 기능
    - 설정된 알람 시간 종료 후, Noti 와 함께 알림음 재생
      - Notification API 적용
        - [참조 : Building a React Notification System: What You Need to Know](https://www.magicbell.com/blog/building-a-react-notification-system)
  - 기능 : 인증 페이지 추가
    - 라우팅, 로그인, 로그아웃, 계정생성 페이지
    - 로컬스토리지를 이용해 엑세스 토큰 저장관리
  - 기능 : 히스토리 기능
    - 로그인한 사용자의 일자별 타이머 사용 시간대 및 행동 패턴 분석
      - 잠시 멈춤 이후, 사용 재개하기 까지의 시간 등
      - 웹소켓과 차트라이브러리로 구현예정
## 백엔드 추가할 내용
  - 요구사항 정리 및 ERD 설계
  - Rest API 설계 및 구현
    - API 명세서로 정리
  - 인증 기능 구현
    - JWT 기반 인증 (스프링 시큐리티)
## 프로덕션 배포
  - AWS 의 일라스틱 빈스톡을 이용한 프론트/백엔드 배포
    
