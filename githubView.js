class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    
    // Define DOM elements here to avoid repetition later
    this.repoNameEl = document.querySelector("#repo-name");
    this.repoDescriptionEl = document.querySelector("#repo-description");
    this.repoImageEl = document.querySelector("#repo-profile-picture");
    this.submitButtonEl = document.querySelector("#submit-button");
    this.repoInputEl = document.querySelector("#repo-name-input");
    
    // Add event listener to button and action after click
    this.submitButtonEl.addEventListener("click", () => {
      const repoName = this.repoInputEl.value;
    
      // Use client to fetch repo data via API
      this.client.getRepoInfo(repoName, (repoData) => {
        console.log(repoData);
        this.model.setRepoInfo(repoData); // Update model with new data
        this.display(); // Then update the view
      });
    });
  }

  display() {
    const repo = this.model.getRepoInfo();
    // Update the DOM elements on the page
    if (repo) {  /*Conditional here to safeguard against potential errors
    that could stop JS execution, e.g. network issues/fetch request fails */
      this.repoNameEl.textContent = repo.name;
      this.repoDescriptionEl.textContent = repo.description;
      this.repoImageEl.src = repo.organization.avatar_url;
    };
  };
}

module.exports = GithubView;
