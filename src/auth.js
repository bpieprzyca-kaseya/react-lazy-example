const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    localStorage.setItem('auth-token-test', 12345);
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    localStorage.setItem('auth-token-test', null);
    setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };
