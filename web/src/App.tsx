import { use, useEffect, useState, type SetStateAction } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SnippetCard from './components/SnippetCard/SnippetCard'
import type { SnippetCardProps } from './components/SnippetCard/SnippetCard.type'
import { Button } from './components/ui/button'
import { InputField } from './components/ui/input'



function App() {

  const [snippet, setSnippets] = useState<SnippetCardProps[]>([])
  const [username, setUsername] = useState<string>("")

  
  // Example: Fetch snippets from API (should be inside useEffect, not directly in component body)
  
  useEffect(() => {
    const fetchData = async () =>{
      try{
        const response = await fetch('http://localhost:8080/code-snippet');
        const result = await response.json();
        setSnippets(result);
      } catch(error){
        console.error(error);
      }
    }
    fetchData();
  }, []);
  
  

  const card: SnippetCardProps = {
    id: 1,
    title: "React useEffect Hook",
    description: "A simple example of using useEffect for side effects in functional components.",
    code: `import { useEffect, useState } from 'react';
function MyComponent() {
  // ...
}`,
    language: "react"
  }

  const card2: SnippetCardProps = {
    id: 2,
    title: "JavaScript Array Map",
    description: "Using the map function to transform arrays in JavaScript.",
    code: `const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]`,
    language: "javascript"
  }

  const card3: SnippetCardProps = {
    id: 3,
    title: "TypeScript Interface",
    description: "Defining and using interfaces in TypeScript for type safety.",
    code: `interface User {
  name: string;
  age: number;
}
const user: User = { name: 'Alice', age: 30 };`,
    language: "typescript"
  }

  const card4: SnippetCardProps = {
    id: 4,
    title: "Python List Comprehension",
    description: "A concise way to create lists in Python using list comprehensions.",
    code: `squares = [x**2 for x in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`,
    language: "python"
  }

  const card5: SnippetCardProps = {
    id: 5,
    title: "Java Class Example",
    description: "A basic example of defining a class in Java.",
    code: `class Dog {
  String name;
  int age;

  Dog(String name, int age) {
    this.name = name;
    this.age = age;
  }
}
Dog myDog = new Dog("Buddy", 3);`,
    language: "java"
  } 



  return (
    <div className='app'>
      <div className='cards'>
        {snippet[0] && (
          <SnippetCard
            key={snippet[0].id}
            id={snippet[0].id}
            title={snippet[0].title}
            description={snippet[0].description}
            code={snippet[0].code}
            language={snippet[0].language}
            tags={snippet[0].tags}
          />
        )}
      </div>
      <Button variant="primary" size='lg'>Add Snippet</Button>
      <Button variant="secondary">Load More</Button>
      <Button variant="danger" loading>Delete Snippet</Button>
      <InputField
        label="Username"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={username === "" ? "Username is required" : ""}
/>
    </div>
  )
}

export default App
