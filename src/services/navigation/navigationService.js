import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

const navigate = (screen, params = {}) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen, params);
  }
}


const getCurrentRoute = (navigation) => {
  const { routes, index } = navigation;
  if (routes.length < 1 || typeof routes[index] == 'undefined') {
    return null;
  }
  if (
    routes[index] &&
    (
      typeof routes[index].routes == 'undefined' ||
      routes[index].routes.length < 1
    )
  ) {
    return routes[index];
  }
  return getCurrentRoute(routes[index]);
}

export {
  goBack,
  navigate,
  getCurrentRoute
}