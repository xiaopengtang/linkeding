// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  return 'admin'; //localStorage.getItem('linkeding-pro-authority') || 'admin';
}

export function setAuthority(authority) {
  return localStorage.setItem('linkeding-pro-authority', authority);
}
