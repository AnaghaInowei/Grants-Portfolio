
import { Project, NavLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Odyssey',
    category: 'Environment Design',
    description: 'A cyberpunk-inspired cityscape exploring light refraction and volumetric fog in Blender.',
    imageUrl: 'https://picsum.photos/id/48/1200/800',
    tools: ['Blender', 'Octane Render', 'Photoshop']
  },
  {
    id: '2',
    title: 'Biomechanical Core',
    category: 'Character Sculpting',
    description: 'Organic textures meeting rigid machinery. An exploration of hardsurface modeling in ZBrush.',
    imageUrl: 'https://picsum.photos/id/122/1200/800',
    tools: ['ZBrush', 'Substance Painter', 'Maya']
  },
  {
    id: '3',
    title: 'Floating Isles',
    category: 'Concept Art',
    description: 'Stylized 3D environment for an unannounced RPG project using low-poly techniques.',
    imageUrl: 'https://picsum.photos/id/200/1200/800',
    tools: ['Cinema 4D', 'Redshift', 'After Effects']
  },
  {
    id: '4',
    title: 'Prismatic Flux',
    category: 'Abstract Motion',
    description: 'Kinetic typography and fluid simulations representing digital consciousness.',
    imageUrl: 'https://picsum.photos/id/158/1200/800',
    tools: ['Houdini', 'Blender', 'Unreal Engine 5']
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'AI Assistant', path: '/ai' },
  { label: 'Contact', path: '/contact' }
];

export const SKILLS = [
  '3D Modeling', 'Texturing', 'Lighting', 'Animation', 'Rigging', 'VFX', 'Game Engines'
];

export const SOFTWARE = [
  'Blender', 'Cinema 4D', 'ZBrush', 'Maya', 'Houdini', 'Substance Painter', 'Unreal Engine 5'
];
