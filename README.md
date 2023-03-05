# frontend-study
프론트엔드 공부 내용
#### 1. html-basicForm : html 기본 구조 학습

#### 2. css-basic : css 기초 및 속성

#### 3. javascript-basic : 자바 스크립트 선행 학습 (기초)

### 5. react-basic : 리액트
- ex01 : html 및 js 사용 & 리액트 CDN 연동
- ex02 : JSX 사용해보기
- ex03 : 시계만들기 (element)
- ex04 : 댓글 컴포넌트 만들어보기
- ex05 : state 활용하기
- ex06 : 기존 react hook 활용 및 custom Hook
- ex07 : 로그인여부 확인 Toolbar (클릭이벤트 및 조건부 렌더링)
- ex08 : 사용자 정보 입력받기 (Form, label, input, select)
- ex09 : Card 컴포넌트 만들기 ( Composition & Inheritance 방법 사용 )
- ex10 : 테마변경하기 (Context) ⭐Context 공부 더 필요
- ex11 : CSS변경하기 (style-components 이용)

### 6. typescript-basic : 타입스크립트
  - 타입 스크립트는 자바스크립트를 기반으로 한 언어
  - 자바스크립트에서 유효한 코드는 타입스크립트에서도 유효함 !
  - 우리가 사용하는 브라우저는 typeScript 이해 x 따라서 js로 컴파일 해서 보내야 함
      - tsc 파일이름.ts ( 자바스크립트 코드로 변환됨: js 로 컴파일 (파일이름.js))
      - node 파일이름.js
      - terminal 출력
  - <script src="파일이름.js" defer></script>
  - 컴파일 된 자바스크립트 파일을 index.html에 연결
  - tsc --init
  - tsconfig.json 생성
  - tsc -w 파일이름.ts
    - 자동으로 계속 컴파일 되도록 함 : 감시모드 ! ( Starting compilation in watch mode... )
    
### 7. responsive-web-practice : 반응형 웹
- ex01. em과 rem
  - em : 부모요소의 글꼴 크기
  - rem : html요소의 글자크기 (기본 16px)
    - 패딩 & 마진 에도 사용 가능
    - 패딩과 마진에서의 em은 자기 자신의 글자크기에 기반 !
- ex02. 다른 상대 단위
  - vw는 뷰포트(화면크기)에서 너비의 100분의 1
  - vh는 뷰포트(화면크기)에서 높이의 100분의 1
  - vmin 은 뷰포트에서 너비/높이 중 작은 것에 100분의 1 (vmax 는 큰 것)
- ex03. 가변레이아웃
  - width, height 등 부모 기준으로 가변 : 100%, 90% ...
  - 여백(padding, margin)은 부모요소의 width에 비례
  - font-size는 부모요소의 글자 크기에 비례해 계산
- ex04. calc 함수
  - width: calc(100% - 100px); 처럼 사용
- ex05. 미디어쿼리 (Media Query)
  - @media screen and (max-width: 800px) {
        img {
          width: 100px;
          height: 50px;
        }
      }
- ex06. 가변 이미지
  - width만 지정해주면 원본 이미지의 비율에 맞게 height 지정
  - div로 img 감싸서 사용하기도 함(해당 부모 div의 크기에 따라 맞춰지니까)
  - max-width 사용하여 더이상 커지지 않게 막기
  - 조건에 따라 추가로 이미지 보여주기
    - < source srcset="이미지주소"  media="조건"/>
- ex07. 가변 동영상
