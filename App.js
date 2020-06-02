import React, {useState} from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from "./src/routes";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./src/contexts/auth";


function AppContainer() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./assets/fonts/roboto-regular.ttf"),
      "roboto-700": require("./assets/fonts/roboto-700.ttf"),    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
