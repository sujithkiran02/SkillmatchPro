/* ============================================================
   auth-backend.js — CONNECTED TO NODE SERVER & LOCAL MONGODB
   Dynamically targets port 3000 with offline fallback support
============================================================ */
(function () {

  // Auto-detect API Base:
  // - If served on port 3000 or on Vercel/cloud domain, use relative '/api'
  // - If served on VS Code Live Server (e.g. 5500, 5501), target http://localhost:3000/api
  function getApiBase() {
    const loc = window.location;
    if (loc.port === '3000' || (!loc.port && loc.protocol.startsWith('http'))) {
      return '/api';
    }
    return 'http://localhost:3000/api';
  }

  const API_BASE = getApiBase();
  const SESSION_KEY = 'smp_session';
  const USERS_KEY   = 'smp_users';

  function setCurrentUser(user) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  const SIGNIN_BTN = 'Sign In <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  const SIGNUP_BTN = 'Create Account <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

  function setFieldError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) {
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
    }
    if (error) {
      error.textContent = message;
      error.classList.add('show');
    }
  }

  function clearFieldError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) {
      input.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
    }
    if (error) {
      error.textContent = '';
      error.classList.remove('show');
    }
  }

  function clearAuthFieldErrors() {
    ['login-email','login-password','signup-name','signup-email','signup-password'].forEach(id => {
      clearFieldError(id, `${id}-error`);
    });
  }

  /* ── Login ─────────────────────────────────────────────── */
  Auth.login = async function () {
    const email    = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const errorEl  = document.getElementById('login-error');
    const btn      = document.getElementById('login-btn');
    const msgEl    = document.getElementById('login-error-msg');

    errorEl.classList.remove('show');
    clearAuthFieldErrors();

    if (!email || !password) {
      if (!email) setFieldError('login-email', 'login-email-error', 'Email is required.');
      if (!password) setFieldError('login-password', 'login-password-error', 'Password is required.');
      msgEl.textContent = 'Please fill in all fields.';
      errorEl.classList.add('show');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError('login-email', 'login-email-error', 'Enter a valid email address.');
      msgEl.textContent = 'Please enter a valid email address.';
      errorEl.classList.add('show');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Signing in…';

    try {
      const res = await fetch(API_BASE + '/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      let data;
      try {
        data = await res.json();
      } catch (parseErr) {
        throw new Error('Server returned an invalid response.');
      }

      if (!res.ok) {
        msgEl.textContent = data.error || 'Invalid email or password.';
        errorEl.classList.add('show');
        btn.disabled = false;
        btn.innerHTML = SIGNIN_BTN;
        return;
      }

      setCurrentUser({ email: data.user.email, name: data.user.name });

      // Sync user to offline cache
      try {
        const localUsers = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
        localUsers[data.user.email.toLowerCase()] = { email: data.user.email.toLowerCase(), name: data.user.name, password };
        localStorage.setItem(USERS_KEY, JSON.stringify(localUsers));
      } catch(e) {}

      Auth.updateNav();
      UI.toast('Welcome back, ' + data.user.name.split(' ')[0] + '! 👋', 'success');
      App.goHome();

    } catch (err) {
      // Offline fallback: check local storage cache
      try {
        const localUsers = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
        const localUser = localUsers[email.toLowerCase()];
        if (localUser && localUser.password === password) {
          setCurrentUser({ email: localUser.email, name: localUser.name });
          Auth.updateNav();
          UI.toast('Welcome back, ' + localUser.name.split(' ')[0] + '! 👋 (Offline mode)', 'success');
          App.goHome();
          btn.disabled = false;
          btn.innerHTML = SIGNIN_BTN;
          return;
        }
      } catch (e) {}

      msgEl.textContent = 'Cannot reach backend server. Please ensure the Node server is running on http://localhost:3000.';
      errorEl.classList.add('show');
      btn.disabled = false;
      btn.innerHTML = SIGNIN_BTN;
    }
  };

  /* ── Signup ────────────────────────────────────────────── */
  Auth.signup = async function () {
    const name     = document.getElementById('signup-name').value.trim();
    const email    = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const errorEl  = document.getElementById('signup-error');
    const btn      = document.getElementById('signup-btn');
    const msgEl    = document.getElementById('signup-error-msg');

    errorEl.classList.remove('show');
    clearAuthFieldErrors();

    if (!name || !email || !password) {
      if (!name) setFieldError('signup-name', 'signup-name-error', 'Name is required.');
      if (!email) setFieldError('signup-email', 'signup-email-error', 'Email is required.');
      if (!password) setFieldError('signup-password', 'signup-password-error', 'Password is required.');
      msgEl.textContent = 'Please fill in all fields.';
      errorEl.classList.add('show');
      return;
    }

    if (password.length < 6) {
      setFieldError('signup-password', 'signup-password-error', 'Use at least 6 characters.');
      msgEl.textContent = 'Password must be at least 6 characters.';
      errorEl.classList.add('show');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError('signup-email', 'signup-email-error', 'Enter a valid email address.');
      msgEl.textContent = 'Please enter a valid email address.';
      errorEl.classList.add('show');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Creating account…';

    try {
      const res = await fetch(API_BASE + '/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      let data;
      try {
        data = await res.json();
      } catch (parseErr) {
        throw new Error('Server returned an invalid response.');
      }

      if (!res.ok) {
        msgEl.textContent = data.error || 'An error occurred.';
        errorEl.classList.add('show');
        btn.disabled = false;
        btn.innerHTML = SIGNUP_BTN;
        return;
      }

      setCurrentUser({ email: data.user.email, name: data.user.name });

      // Sync to offline cache
      try {
        const localUsers = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
        localUsers[data.user.email.toLowerCase()] = { email: data.user.email.toLowerCase(), name: data.user.name, password };
        localStorage.setItem(USERS_KEY, JSON.stringify(localUsers));
      } catch(e) {}

      Auth.updateNav();
      UI.toast('Account created! Welcome, ' + data.user.name.split(' ')[0] + '! 🎉', 'success');
      App.startAnalyze();

    } catch (err) {
      // Offline fallback: save locally
      try {
        const localUsers = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
        if (localUsers[email.toLowerCase()]) {
          msgEl.textContent = 'An account with this email already exists.';
          errorEl.classList.add('show');
          btn.disabled = false;
          btn.innerHTML = SIGNUP_BTN;
          return;
        }
        localUsers[email.toLowerCase()] = { email: email.toLowerCase(), name: name.trim(), password };
        localStorage.setItem(USERS_KEY, JSON.stringify(localUsers));
        setCurrentUser({ email: email.toLowerCase(), name: name.trim() });
        Auth.updateNav();
        UI.toast('Account created! Welcome, ' + name.trim().split(' ')[0] + '! 🎉 (Offline mode)', 'success');
        App.startAnalyze();
        btn.disabled = false;
        btn.innerHTML = SIGNUP_BTN;
        return;
      } catch (e) {}

      msgEl.textContent = 'Cannot reach backend server. Please ensure the Node server is running on http://localhost:3000.';
      errorEl.classList.add('show');
      btn.disabled = false;
      btn.innerHTML = SIGNUP_BTN;
    }
  };

  console.log(`✅ Auth connected to API Base: ${API_BASE}`);

  ['login-email','login-password','signup-name','signup-email','signup-password'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => clearFieldError(id, `${id}-error`));
  });
})();
