document
  .getElementById("fetchBtn")
  .addEventListener("click", GitHubUserProfile);

function GitHubUserProfile() {
  const username = document.getElementById("usernameInput").value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("User not found");
      }
    })
    .then((data) => {
      displayProfile(data);
    })
    .catch((error) => {
      document.getElementById(
        "profile"
      ).innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
}

function displayProfile(user) {
  const githubProfileUrl = `https://github.com/${user.login}`;

  document.getElementById("profile").innerHTML = `
        <div class="profile-card">
            <img src="${user.avatar_url}" alt="Avatar">
            <div class="profile-info">
                <h3>${user.name || "No Name Available"}</h3>
                <p><strong>Repository:</strong> ${user.public_repos}</p>
                <p><strong>Followers:</strong> ${user.followers}</p>
                <p><strong>Following:</strong> ${user.following}</p>
                <p><strong>Profile Link:</strong> <a href="${githubProfileUrl}" target="_blank">Visit GitHub Profile</a></p>
            </div>
        </div>
    `;
}
