export const addCart = (item) => {
  return {
    // addCart가 실행되며 타입을 확인 후에 페이로드 item라고하는 액션으로 만을어서 액션 = 객체를 넘긴다. cartReducer로!

    type: "ADD_ITEM",
    payload: item,
  };
};
// 생성된 객체를 리턴함! 이 객체는 cartReducer에 state에 들어감

export const deleteCart = (items) => {
  return {
    type: "DELETE_ITEM",
    payload: items,
  };
};
