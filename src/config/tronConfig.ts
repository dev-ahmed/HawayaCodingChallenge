import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
  .configure({
    name: 'Hawaya Coding Challenge',
  })
  .useReactNative({
    asyncStorage: true,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false,
    errors: {veto: stackFrame => false}, // or turn it off with false
    overlay: false,
  })
  .use(reactotronRedux())
  .connect();

export default reactotron;
