

const mainReducer = (
  state = {
    main: {
      authToken: "",
      loading: false,
      error: null,
    },
  },
  action,
) => {
  switch (action.type) {
    case "login_request":
      return {
        ...state,
        main: {
          ...state.main,
          loading: true,
          error: null,
        },
      }
    case "login_success":
      return {
        ...state,
        main: {
          ...state.main,
          authToken: action.payload,
          loading: false,
          error: null,
        },
      }
    case "login_failure":
      return {
        ...state,
        main: {
          ...state.main,
          loading: false,
          error: action.payload,
        },
      }
    default:
      return state
  }
}

export default mainReducer