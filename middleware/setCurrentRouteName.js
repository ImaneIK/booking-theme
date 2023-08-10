export default function ({ store, route }) {
    const routeName = route.name || 'Home'; // Fallback to 'Home' if route name is not available
    store.commit('setCurrentRouteName', routeName);
  }
  