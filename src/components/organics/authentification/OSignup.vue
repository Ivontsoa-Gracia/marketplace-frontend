<template>
    <div class="signup-container">
      <div class="signup-wrapper">
        <!-- LEFT -->
        <div class="left-panel">
          <div class="image-overlay"></div>
          <img
            class="bg-image"
            src="/images/footer-image.jpg"
            alt="Farm background"
          />
          <div class="welcome-text">
            <h1>Welcome back!</h1>
            <p>Access your SmartSaha tools and keep your farm on track.</p>
            <button class="btn-signin" @click="$router.push('/signin')">
              Sign In
            </button>
          </div>
        </div>
  
        <!-- RIGHT -->
        <div class="right-panel">
          <h2>Create Account</h2>
          <form @submit.prevent="submitSignup" novalidate>
            <label for="email">Email address</label>
            <input
              id="email"
              type="email"
              v-model="form.email"
              placeholder="Email address"
              required
            />
  
            <div class="name-username">
              <div>
                <label for="fullname">Fullname</label>
                <input
                  id="fullname"
                  type="text"
                  v-model="form.fullname"
                  placeholder="Fullname"
                  required
                />
              </div>
              <div>
                <label for="username">Username</label>
                <input
                  id="username"
                  type="text"
                  v-model="form.username"
                  placeholder="Username"
                  required
                />
              </div>
            </div>
  
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              v-model="form.password"
              placeholder="Password"
              required
              minlength="6"
            />
  
            <p class="terms">
              By signing up, you agree to the
              <a href="#" target="_blank">Terms and Conditions</a>.
            </p>
  
            <button type="submit" class="btn-signup">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MSignup",
    data() {
      return {
        form: {
          email: "",
          fullname: "",
          username: "",
          password: "",
        },
      };
    },
    methods: {
      submitSignup() {
        console.log("Form submitted:", this.form);
        alert("Account created!");
        this.form = {
          email: "",
          fullname: "",
          username: "",
          password: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .signup-wrapper {
    display: flex;
    height: 90vh;
    width: 70%;
    font-family: "Poppins", sans-serif;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  /* === LEFT PANEL === */
  .left-panel {
    position: relative;
    flex: 1;
    overflow: hidden;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #2dcc70;
  }
  
  .bg-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
    z-index: 0;
  }
  
  .image-overlay {
    position: absolute;
    inset: 0;
    background: rgba(45, 204, 112, 0.3);
    backdrop-filter: blur(4px);
    z-index: 1;
  }
  
  .welcome-text {
    position: relative;
    z-index: 2;
    max-width: 360px;
  }
  
  .welcome-text h1 {
    font-size: 3rem;
    margin-bottom: 12px;
    font-weight: 700;
  }
  
  .welcome-text p {
    font-size: 1.15rem;
    margin-bottom: 24px;
    line-height: 1.4;
    font-weight: 500;
  }
  
  .btn-signin {
    background-color: transparent;
    border: 2px solid white;
    padding: 12px 28px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-signin:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  /* === RIGHT PANEL === */
  .right-panel {
    flex: 1;
    background: #fff;
    padding: 60px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.05);
  }
  
  .right-panel h2 {
    margin-bottom: 30px;
    font-size: 2rem;
    font-weight: 700;
    color: #222;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 400px;
  }
  
  label {
    font-weight: 600;
    color: #555;
    margin-bottom: 6px;
  }
  
  input[type="email"],
  input[type="text"],
  input[type="password"] {
    padding: 12px 14px;
    font-size: 14px;
    border: 1.8px solid #ccc;
    border-radius: 6px;
    outline-offset: 2px;
    transition: border-color 0.3s;
    font-family: inherit;
  }
  
  input:focus {
    border-color: #2dcc70;
    outline: none;
  }
  
  .name-username {
    display: flex;
    gap: 20px;
  }
  
  .name-username > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .terms {
    font-size: 13px;
    color: #777;
    margin-top: 10px;
  }
  
  .terms a {
    color: #2dcc70;
    text-decoration: underline;
  }
  
  .btn-signup {
    margin-top: 20px;
    background-color: #2dcc70;
    border: none;
    padding: 14px 0;
    color: white;
    font-weight: 700;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-signup:hover {
    background-color: #27b45f;
  }
  
  /* Responsive */
  @media (max-width: 900px) {
    .signup-wrapper {
      flex-direction: column;
      width: 90%;
    }
  
    .left-panel,
    .right-panel {
      width: 100%;
      padding: 40px 20px;
    }
  
    .welcome-text h1 {
      font-size: 2.2rem;
    }
  
    form {
      max-width: 100%;
    }
  }
  </style>
  