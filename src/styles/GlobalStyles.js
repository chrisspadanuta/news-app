const defaultScreen = {
  main: {
    backgroundColor: "#000000",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  headline: {
    color: "#999",
    fontSize: 18
  },
  buttonList: {
    flex: 1,
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: "rgba(92, 128, 99, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
};

const nav = {
  headerStyle: {
    backgroundColor: "#333333"
  },
  headerTintColor: "#FFFFFF"
}

const buildNavigationOptions = (title) => {
  return {
    title: title,
    headerStyle: {
      backgroundColor: "#333333"
    },
    headerTintColor: "#FFFFFF"
  };
}

export {
  defaultScreen,
  nav,
  buildNavigationOptions
}