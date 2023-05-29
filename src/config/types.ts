export interface INavigationListItem {
  id: number;
  name: string;
  path: string;
}

export interface IToolingListItem {
  id: number;
  icon: string;
  name: string;
}

export interface IProject {
  id: number;
  img: string;
  title: string;
  paragraph: string;
  webUrl: string;
  gitUrl: string;
}

export interface ISocialListItem {
  id: number;
  img: string;
  alt: string;
  url: string;
}
