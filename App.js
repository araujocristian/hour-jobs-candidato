import React, {useState} from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components";
import theme from './src/themes/theme'

function AppContainer() {
  return (
    <ThemeProvider theme={theme}>
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
    </ThemeProvider>
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
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
