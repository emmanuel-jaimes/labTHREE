<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAH9I4sTWl6eTf_DcHQwJG98E6N1VVTAt8",
    authDomain: "seniordesign-5c156.firebaseapp.com",
    databaseURL: "https://seniordesign-5c156-default-rtdb.firebaseio.com",
    projectId: "seniordesign-5c156",
    storageBucket: "seniordesign-5c156.appspot.com",
    messagingSenderId: "47607103394",
    appId: "1:47607103394:web:573778608fb2aaf4b03cfb",
    measurementId: "G-1XQNS365JS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>