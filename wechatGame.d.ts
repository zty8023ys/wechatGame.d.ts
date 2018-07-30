declare module AuthSetting {
}
declare module BannerAd {
    export function destroy(...args);
    export function hide(...args);
    export function offError(...args);
    export function offLoad(...args);
    export function offResize(...args);
    export function onError(...args);
    export function onLoad(...args);
    export function onResize(...args);
    export function show(...args);
}
declare module cancelAnimationFrame {
}
declare module clearInterval {
}
declare module clearTimeout {
}
declare module code2accessToken {
}
declare module DownloadTask {
    export function abort(...args);
    export function onProgressUpdate(...args);
}
declare module FeedbackButton {
    export function destroy(...args);
    export function hide(...args);
    export function show(...args);
}
declare module FileSystemManager {
    export function access(...args);
    export function accessSync(...args);
    export function appendFile(...args);
    export function appendFileSync(...args);
    export function copyFile(...args);
    export function copyFileSync(...args);
    export function getFileInfo(...args);
    export function getSavedFileList(...args);
    export function mkdir(...args);
    export function mkdirSync(...args);
    export function readdir(...args);
    export function readdirSync(...args);
    export function readFile(...args);
    export function readFileSync(...args);
    export function removeSavedFile(...args);
    export function rename(...args);
    export function renameSync(...args);
    export function rmdir(...args);
    export function rmdirSync(...args);
    export function saveFile(...args);
    export function saveFileSync(...args);
    export function stat(...args);
    export function statSync(...args);
    export function unlink(...args);
    export function unlinkSync(...args);
    export function unzip(...args);
    export function writeFile(...args);
    export function writeFileSync(...args);
}
declare module GameClubButton {
    export function destroy(...args);
    export function hide(...args);
    export function show(...args);
}
declare module getAccessToken {
}
declare module Image {
}
declare module ImageFile {
}
declare module imgSecCheck {
}
declare module InnerAudioContext {
    export function destroy(...args);
    export function offCanplay(...args);
    export function offEnded(...args);
    export function offError(...args);
    export function offPause(...args);
    export function offPlay(...args);
    export function offSeeked(...args);
    export function offSeeking(...args);
    export function offStop(...args);
    export function offTimeUpdate(...args);
    export function offWaiting(...args);
    export function onCanplay(...args);
    export function onEnded(...args);
    export function onError(...args);
    export function onPause(...args);
    export function onPlay(...args);
    export function onSeeked(...args);
    export function onSeeking(...args);
    export function onStop(...args);
    export function onTimeUpdate(...args);
    export function onWaiting(...args);
    export function pause(...args);
    export function play(...args);
    export function seek(...args);
    export function stop(...args);
}
declare module KVData {
}
declare module LoadSubpackageTask {
    export function onProgressUpdate(...args);
}
declare module midasCancelPay {
}
declare module midasGetBalance {
}
declare module midasPay {
}
declare module midasPresent {
}
declare module msgSecCheck {
}
declare module onMemoryWarning {
}
declare module OpenDataContext {
    export function postMessage(...args);
}
declare module OpenSettingButton {
    export function destroy(...args);
    export function hide(...args);
    export function show(...args);
}
declare module Performance {
    export function now(...args);
}
declare module RecorderManager {
    export function onError(...args);
    export function onFrameRecorded(...args);
    export function onInterruptionBegin(...args);
    export function onInterruptionEnd(...args);
    export function onPause(...args);
    export function onResume(...args);
    export function onStart(...args);
    export function onStop(...args);
    export function pause(...args);
    export function resume(...args);
    export function start(...args);
    export function stop(...args);
}
declare module removeUserStorage {
}
declare module requestAnimationFrame {
}
declare module RequestTask {
    export function abort(...args);
}
declare module RewardedVideoAd {
    export function load(...args);
    export function offClose(...args);
    export function offError(...args);
    export function offLoad(...args);
    export function onClose(...args);
    export function onError(...args);
    export function onLoad(...args);
    export function show(...args);
}
declare module setInterval {
}
declare module setTimeout {
}
declare module setUserStorage {
}
declare module SocketTask {
    export function close(...args);
    export function onClose(...args);
    export function onError(...args);
    export function onMessage(...args);
    export function onOpen(...args);
    export function send(...args);
}
declare module Stats {
    export function isDirectory(...args);
    export function isFile(...args);
}
declare module Touch {
}
declare module UpdateManager {
    export function applyUpdate(...args);
    export function onCheckForUpdate(...args);
    export function onUpdateFailed(...args);
    export function onUpdateReady(...args);
}
declare module UploadTask {
    export function abort(...args);
    export function onProgressUpdate(...args);
}
declare module UserGameData {
}
declare module UserInfo {
}
declare module UserInfoButton {
    export function destroy(...args);
    export function hide(...args);
    export function onTap(...args);
    export function show(...args);
}
declare module Video {
    export function exitFullScreen(...args);
    export function offEnded(...args);
    export function offError(...args);
    export function offPause(...args);
    export function offPlay(...args);
    export function offTimeUpdate(...args);
    export function offWaiting(...args);
    export function onEnded(...args);
    export function onError(...args);
    export function onPause(...args);
    export function onPlay(...args);
    export function onTimeUpdate(...args);
    export function onWaiting(...args);
    export function pause(...args);
    export function play(...args);
    export function requestFullScreen(...args);
    export function seek(...args);
    export function stop(...args);
}
declare module Worker {
    export function onMessage(...args);
    export function postMessage(...args);
    export function terminate(...args);
}
declare module wx {
    export function authorize(...args);
    export function checkIsUserAdvisedToRest(...args);
    export function checkSession(...args);
    export function chooseImage(...args);
    export function clearStorage(...args);
    export function clearStorageSync(...args);
    export function closeSocket(...args);
    export function connectSocket(...args);
    export function createBannerAd(...args);
    export function createFeedbackButton(...args);
    export function createGameClubButton(...args);
    export function createImage(...args);
    export function createInnerAudioContext(...args);
    export function createOpenSettingButton(...args);
    export function createRewardedVideoAd(...args);
    export function createUserInfoButton(...args);
    export function createVideo(...args);
    export function createWorker(...args);
    export function downloadFile(...args);
    export function exitMiniProgram(...args);
    export function getAvailableAudioSources(...args);
    export function getBatteryInfo(...args);
    export function getBatteryInfoSync(...args);
    export function getClipboardData(...args);
    export function getFileSystemManager(...args);
    export function getFriendCloudStorage(...args);
    export function getGroupCloudStorage(...args);
    export function getLaunchOptionsSync(...args);
    export function getLocation(...args);
    export function getMenuButtonBoundingClientRect(...args);
    export function getNetworkType(...args);
    export function getOpenDataContext(...args);
    export function getPerformance(...args);
    export function getRecorderManager(...args);
    export function getScreenBrightness(...args);
    export function getSetting(...args);
    export function getSharedCanvas(...args);
    export function getShareInfo(...args);
    export function getStorage(...args);
    export function getStorageInfo(...args);
    export function getStorageInfoSync(...args);
    export function getStorageSync(...args);
    export function getSystemInfo(...args);
    export function getSystemInfoSync(...args);
    export function getTextLineHeight(...args);
    export function getUpdateManager(...args);
    export function getUserCloudStorage(...args);
    export function getUserInfo(...args);
    export function getWeRunData(...args);
    export function hideKeyboard(...args);
    export function hideLoading(...args);
    export function hideShareMenu(...args);
    export function hideToast(...args);
    export function loadFont(...args);
    export function loadSubpackage(...args);
    export function login(...args);
    export function navigateToMiniProgram(...args);
    export function offAudioInterruptionBegin(...args);
    export function offAudioInterruptionEnd(...args);
    export function offDeviceOrientationChange(...args);
    export function offError(...args);
    export function offHide(...args);
    export function offKeyboardComplete(...args);
    export function offKeyboardConfirm(...args);
    export function offKeyboardInput(...args);
    export function offShareAppMessage(...args);
    export function offShow(...args);
    export function offTouchCancel(...args);
    export function offTouchEnd(...args);
    export function offTouchMove(...args);
    export function offTouchStart(...args);
    export function offWindowResize(...args);
    export function onAccelerometerChange(...args);
    export function onAudioInterruptionBegin(...args);
    export function onAudioInterruptionEnd(...args);
    export function onCompassChange(...args);
    export function onDeviceOrientationChange(...args);
    export function onError(...args);
    export function onHide(...args);
    export function onKeyboardComplete(...args);
    export function onKeyboardConfirm(...args);
    export function onKeyboardInput(...args);
    export function onMessage(...args);
    export function onNetworkStatusChange(...args);
    export function onShareAppMessage(...args);
    export function onShow(...args);
    export function onSocketClose(...args);
    export function onSocketError(...args);
    export function onSocketMessage(...args);
    export function onSocketOpen(...args);
    export function onTouchCancel(...args);
    export function onTouchEnd(...args);
    export function onTouchMove(...args);
    export function onTouchStart(...args);
    export function onWindowResize(...args);
    export function openCustomerServiceConversation(...args);
    export function openSetting(...args);
    export function previewImage(...args);
    export function removeStorage(...args);
    export function removeStorageSync(...args);
    export function removeUserCloudStorage(...args);
    export function request(...args);
    export function requestMidasPayment(...args);
    export function saveImageToPhotosAlbum(...args);
    export function sendSocketMessage(...args);
    export function setClipboardData(...args);
    export function setEnableDebug(...args);
    export function setKeepScreenOn(...args);
    export function setMenuStyle(...args);
    export function setPreferredFramesPerSecond(...args);
    export function setScreenBrightness(...args);
    export function setStatusBarStyle(...args);
    export function setStorage(...args);
    export function setStorageSync(...args);
    export function setUserCloudStorage(...args);
    export function shareAppMessage(...args);
    export function showActionSheet(...args);
    export function showKeyboard(...args);
    export function showLoading(...args);
    export function showModal(...args);
    export function showShareMenu(...args);
    export function showToast(...args);
    export function startAccelerometer(...args);
    export function startCompass(...args);
    export function stopAccelerometer(...args);
    export function stopCompass(...args);
    export function triggerGC(...args);
    export function updateKeyboard(...args);
    export function updateShareMenu(...args);
    export function uploadFile(...args);
    export function vibrateLong(...args);
    export function vibrateShort(...args);
}
