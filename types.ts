
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tools: string[];
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
