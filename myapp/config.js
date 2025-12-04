// config.js
// 주의: 이 파일은 GitHub에 올라가므로 실제 운영 시에는 환경변수 등을 고려해야 하지만,
// 현재 구조상 가장 간단한 방법은 이 파일에 키를 넣는 것입니다.

window.__app_id = "order-management-v4"; // 원하는 앱 ID

// Firebase 설정 객체를 문자열(JSON.stringify)로 변환하여 저장해야 기존 코드와 호환됩니다.
window.__firebase_config = JSON.stringify({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
});

// 초기 인증 토큰이 없다면 null로 둡니다.
window.__initial_auth_token = null;