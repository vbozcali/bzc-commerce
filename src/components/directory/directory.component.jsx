import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles';
import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://images.unsplash.com/photo-1511500118080-275313ec90a1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "route": "shop/hats"
  },
  { 
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "route": "shop/jackets"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "route": "shop/sneakers"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "route": "shop/womens"
  },
  {
    "id": 5, 
    "title": "mens",
    "imageUrl": "https://images.unsplash.com/photo-1611937663641-5cef5189d71b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "route": "shop/mens"
  }
];

const Directory = () => (

  <DirectoryContainer>
    {
      categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))
    }
  </DirectoryContainer>
)

export default Directory;