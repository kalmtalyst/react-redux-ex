// addCart 에서 넘어온 액션이 여기를 탄다
// 스위치 케이스 문들을 거치면서 state를 변경한다.

const cartReducer = (state = [], action) => {
  //  if 문을 사용하면 switch case 문보다 느리다. 메모리 사용량 증가
  console.log(action.type);
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    //  위의 문처럼 페이로드가 추가되면 스토어가 업데이트된다.
    // 그 스토어를 구독하고 있는 애들의 값이 업데이트됨

    case "DELETE_ITEM":
      return [...action.payload];
    default:
      return state;
  }
};

export default cartReducer;
