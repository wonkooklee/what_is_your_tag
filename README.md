![](https://media.vlpt.us/images/oneook/post/a0ca1b7f-462e-4b32-b114-faadefe15158/ezgif-7-e866f55ccdcc.gif)

---
# *What is Your Tag?* 🏷
---

![](https://images.velog.io/images/oneook/post/0973d0fa-2d4d-4c90-9c91-2c9674d963ae/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.24.11.png)

## 개요 📋

>**프로젝트명** : What is Your Tag? (가제)
**기획 및 제작** : **`WONKOOK LEE`**
**분류** : 토이 프로젝트 (개인)
**제작 기간 | 배포일** : 2021.08.12 (1-day)
**주요 기능** : 특정 키워드로 ***unsplash*** 랜덤 이미지 출력
**목적** : DOM, fetch API, Closer 활용 모듈 패턴 연습 예제
**사용 툴** : `HTML`, `CSS`, `JavaScript`
**링크** : [What is Your Tag? - 당신의 태그는 무엇인가요?](https://wonkooklee.github.io/what_is_your_tag/)

<br>

---
<br>

## 1. 의도와 목적 🤔

>**'What is Your Tag?'는 앞서 포스팅한 프로젝트 [썸네일 메이커](https://velog.io/@oneook/%EC%8D%B8%EB%84%A4%EC%9D%BC-%EB%A9%94%EC%9D%B4%EC%BB%A4Thumbnail-Maker-Toy-Project)를 개선하고 리팩토링하는 과정에서 새롭게 배운 것들을 연습하고 활용하는 것이 목적이다.**

버튼 누르면 랜덤 이미지 바탕에 깔아주는 기능, 태그 버튼 눌러서 관련 이미지 출력, 마이크로 인터랙션, 변수 및 함수 Encapsulation(캡슐화) 등 능력은 모자란데 구현하고 개선해야 할 것이 많아 연습 삼아 만들었다.

이 예제를 만들면서 아래의 개념들을 조금 이해할 수 있게 되었다.

- **클로저**, **IIFE(즉시실행함수)** 개념을 활용한 **Module Design Pattern**
- 특정 키워드로 **Unsplash**에 랜덤 이미지를 요청하여 받아오는 방법 (**fetch API, Promise**)
- `insertAdjacentHTML`을 사용하여 키워드 태그를 계속해서 추가하는 방법

<br>

---
<br>

## 2. 기능 설명 🎞

![](https://images.velog.io/images/oneook/post/24d5cf76-f8b4-4c3d-903c-cba7b9b7e75e/ezgif-2-39bc9be1daf0.gif)

>**초기 화면에서 키워드를 입력하고 Enter를 누르면 태그가 추가되면서 배경이 전환된다.
생성된 태그를 누르면 해당 키워드의 다른 랜덤 이미지를 출력한다.**

입력 필드에 원하는 키워드를 입력하고 Enter를 입력하면 FetchAPI가 Unsplash 사이트에서 키워드에 해당되는 무작위의 이미지를 가져오게 된다. 이미지를 성공적으로 받아온다면(`then`) `body`의 `background-image`가 업데이트된다.

![](https://images.velog.io/images/oneook/post/122aa319-f41b-4e43-bb8c-4820d8fb9090/screenshot-wonkooklee.github.io-2021.08.13-02_19_39.png)

입력했던 키워드의 태그가 랜덤 컬러의 바탕색과 함께 추가되고 이 태그를 누르면 다시 해당 키워드의 이미지를 다시 검색해서 가져올 수 있다. 이번 예제엔 초기화(Init) 함수는 없다.

![](https://images.velog.io/images/oneook/post/ea47a7c2-8bc4-4849-91b4-87d9a77cb8e5/screenshot-127.0.0.1_5500-2021.08.13-00_44_27.png)

<br>

---
<br>

## 3. Unsplash에서 키워드로 랜덤 이미지 가져오기 📷

![](https://images.velog.io/images/oneook/post/6d06fe33-4b36-4ceb-9505-8a8d982a6822/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.10.05.png)

No License 이미지 소스로 유명한 unsplash.com은 정말 고맙게도 특정 조건에 맞는 이미지를 url로 받아올 수 있다. 심지어 자체 API도 가지고 있으니 잘 살펴보고 활용하도록 하자.

**[출처: Unsplash Source](https://source.unsplash.com/)**


### 🏙 특정 유저의 사진 랜덤으로 가져오기

**Parameters**
`https://source.unsplash.com/user/{USERNAME}`
가져오는 방법은 매우 쉽다. URL 마지막 자리에 유저 네임만 넣어주면 된다.
심지어 아래와 같이 특정 사이즈로 가져오는 것도 가능하다.

**Example**
`https://source.unsplash.com/user/erondu/1600x900`

**HTML Example**
`<img src="https://source.unsplash.com/user/erondu/1600x900">`

<br>

### 🌉 특정 유저가 좋아요 누른 사진 랜덤으로 가져오기

**Parameters**
`https://source.unsplash.com/user/{USERNAME}/likes`
특정 유저가 좋아요 버튼을 누른 사진만 모아 그 안에서 랜덤으로 사진을 가져온다.

**Example**
`https://source.unsplash.com/user/jackie/likes/1600x900`

**HTML Example**
`<img src="https://source.unsplash.com/user/jackie/likes/1600x900">`

<br>

### 🌄 특정 유저의 콜렉션 속 사진들 랜덤으로 가져오기

**Parameters**
`https://source.unsplash.com/collection/{COLLECTION ID}`
특정 유저가 사진을 담아놓은 콜렉션 속 사진을 가져올 수 있다.
하지만 콜렉션 ID는 API를 연결하여 키 토큰을 인증 받은 유저만 받을 수 있는 것 같다.
내 경우엔 문자열과 혼합되어있어서 가져오지 못한다.

**Example**
`https://source.unsplash.com/collection/190727/1600x900`

**HTML Example**
`<img src="https://source.unsplash.com/collection/190727/1600x900">`

<br>

### 🌟 (내가 쓸 것) 특정 키워드의 랜덤 사진 가져오기

**Parameters**
`https://source.unsplash.com/featured/?{KEYWORD},{KEYWORD}`
위 KEYWORD에 찾을 사진의 검색어를 입력하면 관련된 사진을 랜덤으로 가져올 수 있다.
이번 예제에서 사용한 URL은 이것이다. 쉼표를 사용하여 키워드를 추가할 수도 있다.

**Search with size**
`https://source.unsplash.com/1600x900/?nature,water`

<br>

### 🪄 적용
`fetch()`를 사용하여 unsplash 서버에 자료를 요청한다. 만약 재요청 없이 url 그대로 스타일에 넣는다면 최초 페이지 파싱때 받아온 이미지가 더 이상 갱신되지 않는다.

```js
// Controller Module (Public Method)
searchByTag(_, keyword) {
  
      // 전달된 키워드를 소문자로 바꾸어 주소 문자열에 넣은 뒤 fetch API로 새로운 이미지 요청
      fetch(`https://source.unsplash.com/featured/?${keyword.toLowerCase()}`)
      .then((response) => {
        // 만약 잘 들어온다면(resolve) url로 배경이미지를 바꿔준다
        document.body.style.backgroundImage = `url(${response.url})`;
        
      });
    }

// UI Controller Module (Private Method)
DOM.tagContainer.addEventListener('click', event => {
  
    if (!event.target.classList.contains('tag')) return;
    const keyword = event.target.dataset.keyword;
    // input의 입력값을 인자로 전달
    controller.searchByTag(null, keyword)
  
  });
```


<br>

---
<br>

## 4. 모듈 패턴 (Module Pattern) 🛠

### 4-1. 구조 도식화로 보는 모듈 패턴 🔍

![](https://images.velog.io/images/oneook/post/e9471ad6-535e-4397-8299-f7ef0402ac97/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.38.12.png)

>
#### 모듈(Module)이란?
기능상 성격이 비슷한 또는 연관성 있는 부분들의 집합을 말한다. 우리 생활과 밀접한 스마트폰을 예로 들어보자면, 디스플레이의 기능을 담당하는 부품들의 집합(그룹)을 디스플레이 모듈이라고 하고, 배터리 본체와 배터리를 관리하고, 안정적으로 전압이 공급되기 위해 사용되는 일련의 부품들을 통칭하여 배터리 모듈이라고 칭한다.

>
#### 모듈 패턴(Module Pattern)이란?
모듈 패턴이란 쉽게 말해 비슷한 성격의 데이터를 `IIFE`(즉시실행함수) 코드 블럭에 넣으면 해당 블럭은 다시 호출할 수도 없고 접근할 수도 없다. 컨텍스트가 사라져 참조가 불가능(**Private Fields 생성**)하지만 **클로저** 현상으로 인해 각 모듈에서 반환되는 메소드에선 계속해서 내부 프로퍼티를 참조할 수 있다.
>
변수에 할당된 `IIFE`가 비슷한 값과 함수를 모아놓은 하나의 모듈이며, 외부 접근이 불가한 내부 프로퍼티와 이를 참조할 수 있는 전역 메소드가 유기적으로 상호 작용하며 프로그램을 운용하는 패턴이 바로 모듈 패턴이다.
>
```js
const module = (function() {
      const number = 23;
      return {
    	getNumber() { return number };
      }
})();
>
module.getNumber(); // Expected output: 23
```
>
지역 변수 `number`에는 절대 접근할 수 없다. 하지만 클로저에 의해 메소드 `getNumber()`는 해당 값을 참조할 수 있다. 외부 API 등 다양한 문서들과 결합되었을때 불필요한 데이터 변조와 충돌을 방지하기 위해 사용되는 디자인 패턴 중 하나다.

**클로저?** 클로저는 마치 물질에 질량을 부여하고 사라져버리는 힉스 입자 같은 것

외부에선 모듈이 반환하는 메소드의 호출만 가능하며, 메소드는 모듈 내부의 변수와 함수들을 참조하여(Read Only) 반환하는 기능을 수행한다. 나는 이번 예제에서 아래 세가지의 기능을 분류하여 모듈로 만들었다.
모듈 내부는 외부에서 접근이 가능한 [`Public`]프로퍼티와 접근이 불가능한 [`Private`]프로퍼티로 나뉜다.
<br>

---
<br>

### 4-2. 각 모듈의 구조와 기능 🎛


> - <span style="font-size:24px;color:#B080E7">**[M1] DOM 요소 데이터를 관리하는 데이터 모듈 🗃**</span>
>
    - DOM 요소를 담은 객체
    - DOM 요소를 담은 객체를 반환하는 메소드, 다른 모듈에서 접근이 가능
>    
```js
const dataModule = (function() {
  // Private Fields
  const DOM = {
    addTag: document.querySelector('.addTag'),
    container: document.querySelector('.container'),
    tagContainer: document.querySelector('.container__tag'),
    tags: document.querySelectorAll('.tag'),
  };
>
  return {
    // Public Methods
    getDOM() {
      return DOM; // DOM 객체를 반환하지만 객체의 접근 및 변조는 불가하다
    },
  }
})();
    ```
    
>- <span style="font-size:24px;color:#1133F5">**[M2] 웹앱의 각종 기능을 수행하는 컨트롤러 모듈 🕹**</span>
>
    - 키워드 태그를 만들때 사용되는 HTML 태그를 키워드에 맞게 합성하여 반환하는 함수
    - min, max 값을 인자로 받아 해당 범위의 난수를 생성하는 함수
    - 랜덤 RGB 값을 배열 안에 담아 반환하는 함수
    - 특정 키워드로 `unsplash` 서버에 이미지를 요청(`fetch`)하여 받아와 백그라운드를 바꾸는 기능을 수행하는 함수 **searchByTag( )**
    - 키워드 태그를 `document`에 추가하는 함수 **addNewTag( )**
>
```js
const controller = (function() {
>   // Private Fields
  const tagHTML = function (keyword, [R, G, B]) {
    return `<article style="background-color: rgba(${R}, ${G}, ${B}, 0.7);" class="tag" data-keyword="${keyword}">#${keyword}</article>`
  };
>
  const randomRGB = function(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }
>
  const getRandomRGB = function(min, max) {
    let arrRGB = [];
    arrRGB.push(randomRGB(min, max));
    arrRGB.push(randomRGB(min, max));
    arrRGB.push(randomRGB(min, max));
    return arrRGB;
  }
>
  return {
>     // Public Methods
    searchByTag(_, keyword) {
      fetch(`https://source.unsplash.com/featured/?${keyword.toLowerCase()}`)
      .then((response) => {
        document.body.style.backgroundImage = `url(${response.url})`;
      });
    },
>
    addNewTag(target, parentNode) {
      const newColor = getRandomRGB(180, 230);
      const newHTML = tagHTML(target.value, newColor);
      parentNode.insertAdjacentHTML('beforeend', newHTML);
      this.searchByTag(null, target.value);
      target.value = '';
      target.focus();
    },
  }
})();
```
    
    
    
>- <span style="font-size:24px;color:#FFBC03">**[M3] 이벤트 핸들러를 관리하는 UI 매니징 모듈 🖥**</span>
>
    - 키워드 태그에 클릭 이벤트 발생시 **컨트롤러 모듈의 searchByTag 호출**
    - `input`에서 Enter 키 입력 발생시 **컨트롤러 모듈의 addNewTag 호출**
```js
const UIController = (function() {
>
>   // ONLY Private Fields
  const DOM = dataModule.getDOM();
  DOM.tagContainer.addEventListener('click', event => {
    if (!event.target.classList.contains('tag')) return;
    const keyword = event.target.dataset.keyword;
    controller.searchByTag(null, keyword)
  });
>
  DOM.addTag.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      controller.addNewTag(e.target, DOM.tagContainer);
    }
  })
>
  DOM.addTag.focus();
>
})();
```

<br>

---

<br>

### 4-3. 기능별 코드 분석 ⚙️
주요 기능을 하는 메소드의 코드 내부를 살펴본다.



#### 4-3-1. <span style="font-size:24px;color:#1133F5">searchByTag( ) 📡</span>
```js
// 컨트롤러 모듈 (PUBLIC)
searchByTag(event, keyword) {
      fetch(`https://source.unsplash.com/featured/?${keyword.toLowerCase()}`)
      .then((response) => {
        document.body.style.backgroundImage = `url(${response.url})`;
      });
}
```
>**UI 매니징 모듈**로부터 이벤트와 키워드를 전달받아 작동하게 된다. 서버에 요청하는 기능을 수행하는 `fetch`를 사용하여 해당 키워드의 랜덤 이미지를 요청한 뒤, `Reponse` 인스턴스가 잘 받아지면, 인스턴스의 url 프로퍼티를 참조하여 배경 이미지를 업데이트한다.

---

#### 4-3-2. <span style="font-size:24px;color:#1133F5">addNewTag( ) 🏷</span>
```js
// 컨트롤러 모듈 (PRIVATE)
const tagHTML = function (keyword, [R, G, B]) {
    return `<article style="background-color: rgba(${R}, ${G}, ${B}, 0.7);" class="tag" data-keyword="${keyword}">#${keyword}</article>`
};

// 컨트롤러 모듈 (PUBLIC)
addNewTag(target, parentNode) {
      const newColor = getRandomRGB(180, 230);
      const newHTML = tagHTML(target.value, newColor);
      parentNode.insertAdjacentHTML('beforeend', newHTML);
      this.searchByTag(null, target.value);
      target.value = '';
      target.focus();
}
```
>**addNewTag**는 키워드 입력값을 참조할 target과 HTML이 삽입될 자리의 부모 요소를 전달받는다.
**tagHTML**로부터 별도의 키워드와 배경색이 입력된 HTML 코드 뭉치를 전달받아 `document`에 삽입한다.
키워드를 입력할때도 **searchByTab**를 호출하게 되며 입력창을 초기화시키고 함수는 종료된다.

---

#### 4-3-3. <span style="font-size:24px;color:#1133F5">랜덤 컬러와 관련된 내부 함수 🌈</span>
```js
// 컨트롤러 모듈 (PRIVATE)
  const randomRGB = function(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }

  const getRandomRGB = function(min, max) {
    let arrRGB = [];
    arrRGB.push(randomRGB(min, max));
    arrRGB.push(randomRGB(min, max));
    arrRGB.push(randomRGB(min, max));
    return arrRGB;
  }
```
>두 함수 모두 0부터 255 사이의 최소값과 최대값을 전달받는다. 어떤 범위의 색상을 원하는지에 따라 편하게 사용하기 위해 매개변수로 지정해놓았다. 16진수 코드가 아닌 RGB값이기 때문에 그대로 배열에 넣어 전달하고, 위에 언급되었던 **tagHTML**은 전달된 RGB 배열을 **Destructuring**해서 코드에 배정한다.

<br>

---
<br>

## 5. 사용 예시 📽
<br>

!youtube[KRUpg9-OkqM]

!youtube[QuERmB4sRGI]

<br>

---
<br>

## 6. 썸네일 메이커 개선 현황 🙇🏻🙇🏻🙇🏻

>- 랜덤 색 출력하는 것처럼 랜덤 이미지도 나오는 버튼이 있으면 어떨까 고민중
- 이미지 URL 입력값 Validation 방법 고민중
- 자료 구조에 Class, Instance 패턴을 적용할지, 모듈 패턴을 적용할지 고민중
- 버튼 클릭시 active, inactive 스타일 변경해주는 기능 하나의 메소드로 통합 완료
- 디자인 구성, 레이아웃 다시 검토 예정


많은 분들께서 과분할 정도의 관심을 보내주셨고, 꾸준히 개선하지 않으면 큰일 날 것 같네요...
좋은 개선 의견을 보내주시는 분들도 계시고, 제가 할 수 있는 범위 내에서 최선을 다하겠습니다.

감사합니다. 🥰

@oneook

<br>

---
<br>

## 👉🏻 [What is Your Tag? 구경하기](https://wonkooklee.github.io/what_is_your_tag/)

글과 이미지
Wonkook Lee ⓒ All Rights Reserved

>*What-is-Your-Tag?* is a sample case for studying of JavaScript.
credit: `Wonkook Lee (@oneook)`
contact: `const.wonkook@gmail.com`

Thank you.

🙏🏻 잘못된 정보가 있다면 지적해주세요
![](https://images.velog.io/images/oneook/post/b77a8951-215a-49d0-a61b-0a78723d22b8/shckinghand.png)
