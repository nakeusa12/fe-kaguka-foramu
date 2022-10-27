import store from './store';

let currentAuth;

function listener() {
  let previousAuth = currentAuth;

  //  getState().auth tujuannya mengambil semua data yg ada di auth
  //  .auth karena di combine atas nama auth
  currentAuth = store.getState().auth;

  //  Misalnya diawal currentAuth = null, lalu di inisialisakan ke previousAuth. jadinya previousAuth = null juga. lalu currentAuth dapat value terbaru dari data yg diambil. kemudian di cek
  //  jika currentAuth dan previousAuth valuenya tidak sama, maka apapun valuenya yg tersedia akan masuk ke localStorage
  if (currentAuth !== previousAuth) {
    localStorage.setItem('auth', JSON.stringify(currentAuth));
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };