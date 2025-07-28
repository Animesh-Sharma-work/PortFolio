import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Weather Dashboard',
    description: 'Real-time weather information with beautiful UI and detailed forecasts.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    isWeatherProject: true,
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'Full-featured online shopping platform with cart management and user authentication.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Material-UI', 'WebSockets'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization.',
    technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
  },
];