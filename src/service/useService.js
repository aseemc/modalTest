import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import isEqual from 'lodash.isequal';
import {AppState} from 'react-native';

const ConfigServiceContext = createContext();
ConfigServiceContext.displayName = 'useConfigServiceContext';

export const useConfigService = () => {
  const context = useContext(ConfigServiceContext);

  if (!context) {
    throw new Error('Children should be wrapped inside ConfigProvider');
  }

  return context;
};

export const ConfigProvider = ({appId, apiKey, children}) => {
  const [appConfig, setAppConfig] = useState();
  const [showVisibilityView, toggleVisibilityView] = useState(false);
  const appState = useRef(AppState.currentState);

  const getAppConfig = useCallback(async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      const json = await response.json();
      // console.log('=>>>XXXXX: ', json);
      if (!isEqual(json, appConfig)) {
        setAppConfig(json);
      }
    } catch (error) {
      console.error('Failed to fetch config: ', error);
    }
  }, [appConfig]);

  useEffect(() => {
    getAppConfig();
  }, [getAppConfig]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        getAppConfig();
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [getAppConfig]);

  const values = useMemo(
    () => ({
      appConfig,
      showVisibilityView,
      toggleVisibilityView,
    }),
    [appConfig, showVisibilityView, toggleVisibilityView],
  );

  return (
    <ConfigServiceContext.Provider value={values}>
      {children}
    </ConfigServiceContext.Provider>
  );
};
