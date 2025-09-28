import { useState } from "react";

type Story = {
  title: string;
  text: string;
};

const stories: Story[] = [
  {
    title: "What Is Diabetes: Causes, Symptoms & Types",
    text:
      "Diabetes happens when the sugar level in your blood is too high. This can be because your body doesn’t make enough insulin or cannot use it properly. Symptoms can include thirst, peeing a lot, tiredness, and blurry vision. It can be managed with healthy habits, medicine, and sometimes insulin. (got it from the internet)",
  },
  {
    title: "Cancer Overview: How It Develops & Spreads",
    text:
      "Cancer is when some cells grow without control and can spread to other parts of the body. These cells do not stop when they should, can damage nearby parts, and may trick the immune system. Finding cancer early makes treatment more successful. (got it from the internet)",
  }
];

function highlightWords(sentence: string, word: string) {
  if (!word) return sentence;

  let result = "";
  let currentPosition = 0;

  while (true) {
    const foundAt = sentence.toLowerCase().indexOf(word.toLowerCase(), currentPosition);

    if (foundAt === -1) {
      result += sentence.substring(currentPosition);
      break;
    }

    result += sentence.substring(currentPosition, foundAt);
    result += "<mark>" + sentence.substring(foundAt, foundAt + word.length) + "</mark>";
    currentPosition = foundAt + word.length;
  }

  return result;
}

export default function SearchStories() {
  const [searchWord, setSearchWord] = useState("");

  const matchingStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      story.text.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "700px", fontFamily: "Arial", marginTop: "40px", marginLeft: "250px" }}>
      <h2>Search</h2>

      <input
        type="text"
        placeholder=" search for a word"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
      />


      {matchingStories.map((story, index) => (
        <div
          key={index}
          style={{ marginBottom: "24px" }}
          dangerouslySetInnerHTML={{
            __html:
              "<h3>" +
              highlightWords(story.title, searchWord) +
              "</h3><p>" +
              highlightWords(story.text, searchWord) +
              "</p>",
          }}
        />
      ))}
    </div>
  );
}

