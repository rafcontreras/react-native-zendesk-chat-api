import { NativeModules } from 'react-native';
const RNZendeskChatApi = NativeModules.RNZDCChatAPIModule;

export { default as ZendeskClient } from './ZendeskClient';
export default RNZendeskChatApi;

