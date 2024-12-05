function generateStory (event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: "Once upon a time...",
    autoStart: true,
    cursor: null,
    delay:80,
  });

}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit",generateStory);