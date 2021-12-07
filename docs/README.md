# Calculator

## 정리

- [코드](#1)


- [배운점](#2)



## 코드 정리
<div id="1"></div>

**Wrapper**

모든 자식 구성 요소를 담아 두는 컴포넌트


**Screen**

Wrapper의 top section 자식으로 계산 값을 보여준다. 모든 요소가 해당 컨테이너의 너비 및 높이에 맞추기 위해 텍스트 크기 조정 요소인 react-textfit을 사용하였다.


**ButtonBox**

ButtonBox 구성 요소는 Button의 프레임이다. 


**Button**

Button의 각 구성 요소에는 value와 onClick props가 있다.


**React useState hook**

입력 값(num), 기호(sign), 계산된 값(res) 세가지 상태로 나누었다.


**App.js**




**toLocaleString**



**removeSpaces**



**numClickHandler**

숫자 0 ~ 9 중 하나를 누른 경우 값을 Button에 가져와 현재 num값에 추가한다.

숫자는 최대 16개로 입력할 수 있고 0으로 시작하는 지를 확인한다.

**commaClickHandler**



**signClickHandler**



**equalsClickHandler**



**invertClickHandler**



**percentClickHandler**



**resetClickHandler**



## 배운 내용
<div id="2"></div>

**기능 구현**

- 덧셈, 뺄셈, 곱하기, 나누기
- 소수점 값
- 백분율 계산
- 값 반대로
- 초기화 기능
- 더 큰 숫자 서식 지정
- 길이에 따른 출력 크기 조정


**[calc()](https://developer.mozilla.org/ko/docs/Web/CSS/calc())**

괄호 안의 식을 계산한 결과를 속성값으로 사용하게 해주는 함수


**props**

props는 컴포넌트에서 사용할 데이터 중 변동되지 않는 데이터를 다룰 때 사용되는데 parent(부모) 컴포넌트에서 child(자식) 컴포넌트로 데이터를 전할 때 props를 사용한다.

**eval**

eval 절대 사용하지 말 것!
eval()은 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수다.


[참고](https://www.sitepoint.com/react-tutorial-build-calculator-app/)