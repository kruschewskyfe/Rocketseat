import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post 
        author="Felipe Kruschewsky"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet sed architecto repudiandae quam deserunt nemo rem quaerat hic voluptas at porro sunt, voluptate beatae! Molestiae totam pariatur illum asperiores?"
      />
      <Post 
        author="Havila Garcez"
        content="Um novo post muito legal"
      />
    </div>
  )
}

