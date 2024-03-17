import { Facebook, FacebookColor, Github, Linkedin, Mails } from '@/components/icons';
import GithubColor from '@/components/icons/github-color';

export const footerSocials = [
  {
    href: 'https://github.com/projectopia',
    Icon: Github,
  },
  {
    href: 'https://github.com/projectopia',
    Icon: Facebook,
  },
  {
    href: 'https://github.com/projectopia',
    Icon: Linkedin,
  },
  {
    href: 'mailto:nhannguyen8338@gmail.com',
    Icon: Mails,
  },
];

export const featureItems = [
  {
    Icon: Github,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content:
      'Public or private, cloud hosted or on-premise, as long as you’re using Git with HTTP/S, Portainer can connect.',
  },
  {
    Icon: Github,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content:
      'Public or private, cloud hosted or on-premise, as long as you’re using Git with HTTP/S, Portainer can connect.',
  },
  {
    Icon: Github,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content:
      'Public or private, cloud hosted or on-premise, as long as you’re using Git with HTTP/S, Portainer can connect.',
  },
  {
    Icon: Github,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content:
      'Public or private, cloud hosted or on-premise, as long as you’re using Git with HTTP/S, Portainer can connect.',
  },
  {
    Icon: Github,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content:
      'Public or private, cloud hosted or on-premise, as long as you’re using Git with HTTP/S, Portainer can connect.',
  },
  {
    Icon: Github,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content:
      'Public or private, cloud hosted or on-premise, as long as you’re using Git with HTTP/S, Portainer can connect.',
  },
];

export const connectItems = [
  {
    title: 'Facebook',
    Icon: FacebookColor,
    href: 'https://github.com/projectopia',
  },
  {
    title: 'Github',
    Icon: GithubColor,
    href: 'https://github.com/projectopia',
  },
  {
    title: 'Discussion',
    Icon: GithubColor,
    href: 'https://github.com/projectopia',
  },
];

export const generatorFormFields = [
  {
    name: 'template',
    type: 'select',
    label: 'Project Template',
    placeholder: 'Choose Template for your project',
    options: [
      {
        value: 'docusaurus',
        title: 'Projectopia Docusaurus Template',
      },
      {
        value: 'mkdocs',
        title: 'Projectopia MKdocs Template',
      },
    ],
  },
  {
    name: 'projectName',
    type: 'input',
    label: 'Project Name',
    placeholder: 'Your Project name',
    options: [],
  },
  {
    name: 'repositoryName',
    type: 'input',
    label: 'Repository Name',
    placeholder: 'Your Github Repository display name',
    options: [],
  },
  {
    name: 'tagline',
    type: 'input',
    label: 'Project Tagline',
    placeholder: "Your Project's tagline",
    options: [],
  },
  {
    name: 'visibility',
    type: 'select',
    label: 'Project Visibility',
    placeholder: '',
    options: [
      {
        value: 'public',
        title: 'Public',
      },
      {
        value: 'private',
        title: 'Private',
      },
    ],
  },
];

export const contactFormFields = [
  {
    name: 'name',
    type: 'input',
    label: 'Your Name',
    placeholder: 'What is your name?',
  },
  {
    name: 'email',
    type: 'input',
    label: 'Your Email',
    placeholder: 'What is your email?',
  },
  {
    name: 'marketingSource',
    type: 'input',
    label: 'How did you hear about us?',
    placeholder: 'This is important to us (optional)',
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'Your Message',
    placeholder: 'Your super duper important note...',
  },
];
