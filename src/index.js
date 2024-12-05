
function displayStory (response) {

    new Typewriter("#story", {
      strings: response.data.answer,
      autoStart: true,
      cursor: null,
      delay: 40
    });
}

function generateStory (event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-story");
  let apiKey = "14ca7f06a675fe31dc8t8abc7b83o533";
  let prompt = `User instructions: Generate a short English story about ${userInput.value} `
  let context = "You are a humorous creative story teller and love to create short stories that are entertaining and funny for kids. Your mission is to generate a 150 word story, format the story using basic HTML.Make sure to follow the user instructions. Do not include a title. Format the story into readable paragraphs. Sign the story with 'SheCodes AI' inside a <strong> element at the end of the story. "
  let apiUrl =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayStory);
  
    console.log ("Generating Story")
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`)

}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit",generateStory);