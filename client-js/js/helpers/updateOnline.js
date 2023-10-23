const user = document.getElementById('user');
export const updateOnline = (data) => {
  user.innerHTML = '';
  data.map((elem) => {
    let item = document.createElement('li');
    let avatar = document.createElement('img');
    let username = document.createElement('span');
    item.className = 'users__user user';
    avatar.className = 'user__avatar avatar';
    avatar.src = elem.avatar;
    username.className = 'user__name';
    username.textContent = elem.user;
    item.appendChild(avatar);
    item.appendChild(username);
    user.appendChild(item);
  });
};
